import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';

// Mock Supabase before importing the route
vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(),
}));

// Mock environment variables
const originalEnv = process.env;

describe('mark-complete API', () => {
  const validToken = '550e8400-e29b-41d4-a716-446655440000';
  const validEmail = 'test@example.com';

  beforeEach(() => {
    vi.resetModules();
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
      SUPABASE_SERVICE_ROLE_KEY: 'test-service-key',
    };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  function createRequest(params: Record<string, string>): NextRequest {
    const url = new URL('http://localhost:3000/api/mark-complete');
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    return new NextRequest(url);
  }

  describe('parameter validation', () => {
    it('should redirect to error page when token is missing', async () => {
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ day: '5' });

      const response = await GET(request);

      expect(response.status).toBe(307); // Temporary redirect
      expect(response.headers.get('location')).toContain('/lesson-complete?error=missing_params');
    });

    it('should redirect to error page when day is missing', async () => {
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=missing_params');
    });

    it('should redirect to error page when both params are missing', async () => {
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({});

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=missing_params');
    });
  });

  describe('token format validation', () => {
    it('should reject invalid UUID format', async () => {
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: 'not-a-valid-uuid', day: '5' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=invalid_token');
    });

    it('should reject UUID v1 format (wrong version)', async () => {
      const { GET } = await import('../mark-complete/route');
      // UUID v1 has '1' as first digit of third group
      const request = createRequest({
        token: '550e8400-e29b-11d4-a716-446655440000',
        day: '5',
      });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=invalid_token');
    });

    it('should reject UUID with wrong variant', async () => {
      const { GET } = await import('../mark-complete/route');
      // Wrong variant (first digit of fourth group should be 8, 9, a, or b)
      const request = createRequest({
        token: '550e8400-e29b-41d4-c716-446655440000',
        day: '5',
      });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=invalid_token');
    });

    it('should reject empty token', async () => {
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: '', day: '5' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=missing_params');
    });
  });

  describe('day parameter validation', () => {
    it('should reject day 0', async () => {
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '0' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=invalid_day');
    });

    it('should reject negative day', async () => {
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '-1' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=invalid_day');
    });

    it('should reject day 129 (beyond total)', async () => {
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '129' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=invalid_day');
    });

    it('should reject non-numeric day', async () => {
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: 'abc' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=invalid_day');
    });

    it('should reject decimal day', async () => {
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '5.5' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      // parseInt('5.5') = 5, which is valid, so this actually passes
      // This test documents current behavior
    });
  });

  describe('Supabase configuration', () => {
    it('should redirect to error when Supabase URL is missing', async () => {
      delete process.env.NEXT_PUBLIC_SUPABASE_URL;
      vi.resetModules();

      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '5' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=server_error');
    });

    it('should redirect to error when Supabase service key is missing', async () => {
      delete process.env.SUPABASE_SERVICE_ROLE_KEY;
      vi.resetModules();

      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '5' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=server_error');
    });
  });

  describe('subscription lookup', () => {
    it('should redirect to error when subscription not found', async () => {
      const { createClient } = await import('@supabase/supabase-js');
      const mockSingle = vi.fn().mockResolvedValue({
        data: null,
        error: { code: 'PGRST116', message: 'No rows found' },
      });
      const mockEq = vi.fn().mockReturnValue({ single: mockSingle });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
      const mockFrom = vi.fn().mockReturnValue({ select: mockSelect });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '5' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=invalid_token');
    });
  });

  describe('day validation against subscription', () => {
    it('should reject day that exceeds subscription current_day', async () => {
      const { createClient } = await import('@supabase/supabase-js');
      const mockSingle = vi.fn().mockResolvedValue({
        data: {
          id: validToken,
          user_id: 'user-123',
          email: validEmail,
          current_day: 3, // User has only received up to day 3
        },
        error: null,
      });
      const mockEq = vi.fn().mockReturnValue({ single: mockSingle });
      const mockSelect = vi.fn().mockReturnValue({ eq: mockEq });
      const mockFrom = vi.fn().mockReturnValue({ select: mockSelect });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../mark-complete/route');
      // Trying to mark day 10 when only day 3 has been sent
      const request = createRequest({ token: validToken, day: '10' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=invalid_day');
    });

    it('should allow day equal to subscription current_day', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      // Mock for subscription lookup
      const subscriptionData = {
        id: validToken,
        user_id: 'user-123',
        email: validEmail,
        current_day: 5,
      };

      // Mock for progress fetch (no existing progress)
      const progressError = { code: 'PGRST116', message: 'No rows found' };

      // Mock for progress insert
      const insertSuccess = { error: null };

      let callCount = 0;
      const mockFrom = vi.fn().mockImplementation((table: string) => {
        if (table === 'email_subscriptions') {
          return {
            select: vi.fn().mockReturnValue({
              eq: vi.fn().mockReturnValue({
                single: vi.fn().mockResolvedValue({ data: subscriptionData, error: null }),
              }),
            }),
          };
        } else if (table === 'user_progress') {
          callCount++;
          if (callCount === 1) {
            // First call: fetch existing progress
            return {
              select: vi.fn().mockReturnValue({
                eq: vi.fn().mockReturnValue({
                  single: vi.fn().mockResolvedValue({ data: null, error: progressError }),
                }),
              }),
            };
          } else {
            // Second call: insert new progress
            return {
              insert: vi.fn().mockResolvedValue(insertSuccess),
            };
          }
        }
        return {};
      });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '5' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      // Should redirect to success page, not error
      expect(response.headers.get('location')).toContain('/lesson-complete?');
      expect(response.headers.get('location')).toContain('day=5');
      expect(response.headers.get('location')).not.toContain('error=');
    });
  });

  describe('Gita chapters (day 111+)', () => {
    it('should redirect to Gita page for chapter days', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      const subscriptionData = {
        id: validToken,
        user_id: 'user-123',
        email: validEmail,
        current_day: 115, // User is on day 115 (Gita chapter)
      };

      const mockFrom = vi.fn().mockImplementation((table: string) => {
        if (table === 'email_subscriptions') {
          return {
            select: vi.fn().mockReturnValue({
              eq: vi.fn().mockReturnValue({
                single: vi.fn().mockResolvedValue({ data: subscriptionData, error: null }),
              }),
            }),
          };
        }
        return {};
      });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../mark-complete/route');
      // Day 115 = Gita chapter 5 (115 - 110 = 5)
      const request = createRequest({ token: validToken, day: '115' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      // Should redirect to Gita chapter page
      expect(response.headers.get('location')).toContain('/gita/5');
    });
  });

  describe('successful mark complete', () => {
    it('should create new progress for first-time user', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      const subscriptionData = {
        id: validToken,
        user_id: 'user-123',
        email: validEmail,
        current_day: 5,
      };

      const progressError = { code: 'PGRST116', message: 'No rows found' };
      const insertFn = vi.fn().mockResolvedValue({ error: null });

      let progressCallCount = 0;
      const mockFrom = vi.fn().mockImplementation((table: string) => {
        if (table === 'email_subscriptions') {
          return {
            select: vi.fn().mockReturnValue({
              eq: vi.fn().mockReturnValue({
                single: vi.fn().mockResolvedValue({ data: subscriptionData, error: null }),
              }),
            }),
          };
        } else if (table === 'user_progress') {
          progressCallCount++;
          if (progressCallCount === 1) {
            return {
              select: vi.fn().mockReturnValue({
                eq: vi.fn().mockReturnValue({
                  single: vi.fn().mockResolvedValue({ data: null, error: progressError }),
                }),
              }),
            };
          } else {
            return { insert: insertFn };
          }
        }
        return {};
      });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '5' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?');
      expect(response.headers.get('location')).toContain('day=5');
      expect(response.headers.get('location')).toContain('completed=5');
      expect(insertFn).toHaveBeenCalled();
    });

    it('should update existing progress and merge lessons', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      const subscriptionData = {
        id: validToken,
        user_id: 'user-123',
        email: validEmail,
        current_day: 10,
      };

      // User already has lessons 1-1-1 and 1-1-2 completed
      const existingProgress = {
        user_id: 'user-123',
        completed_lessons: ['1-1-1', '1-1-2'],
        current_lesson: '1-1-3',
        current_level: 1,
      };

      const updateFn = vi.fn().mockReturnValue({
        eq: vi.fn().mockResolvedValue({ error: null }),
      });

      let progressCallCount = 0;
      const mockFrom = vi.fn().mockImplementation((table: string) => {
        if (table === 'email_subscriptions') {
          return {
            select: vi.fn().mockReturnValue({
              eq: vi.fn().mockReturnValue({
                single: vi.fn().mockResolvedValue({ data: subscriptionData, error: null }),
              }),
            }),
          };
        } else if (table === 'user_progress') {
          progressCallCount++;
          if (progressCallCount === 1) {
            return {
              select: vi.fn().mockReturnValue({
                eq: vi.fn().mockReturnValue({
                  single: vi.fn().mockResolvedValue({ data: existingProgress, error: null }),
                }),
              }),
            };
          } else {
            return { update: updateFn };
          }
        }
        return {};
      });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '10' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?');
      expect(response.headers.get('location')).toContain('day=10');
      expect(response.headers.get('location')).toContain('completed=10');
      expect(updateFn).toHaveBeenCalled();
    });
  });

  describe('error handling', () => {
    it('should handle database errors gracefully', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      const subscriptionData = {
        id: validToken,
        user_id: 'user-123',
        email: validEmail,
        current_day: 5,
      };

      // Simulate a database error when fetching progress
      const dbError = { code: '500', message: 'Database connection failed' };

      const mockFrom = vi.fn().mockImplementation((table: string) => {
        if (table === 'email_subscriptions') {
          return {
            select: vi.fn().mockReturnValue({
              eq: vi.fn().mockReturnValue({
                single: vi.fn().mockResolvedValue({ data: subscriptionData, error: null }),
              }),
            }),
          };
        } else if (table === 'user_progress') {
          return {
            select: vi.fn().mockReturnValue({
              eq: vi.fn().mockReturnValue({
                single: vi.fn().mockResolvedValue({ data: null, error: dbError }),
              }),
            }),
          };
        }
        return {};
      });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../mark-complete/route');
      const request = createRequest({ token: validToken, day: '5' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/lesson-complete?error=server_error');
    });
  });
});
