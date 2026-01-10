import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';

// Mock Supabase before importing the route
vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(),
}));

// Mock environment variables
const originalEnv = process.env;

describe('unsubscribe API', () => {
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
    const url = new URL('http://localhost:3000/api/unsubscribe');
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    return new NextRequest(url);
  }

  describe('parameter validation', () => {
    it('should redirect to error page when email is missing', async () => {
      const { GET } = await import('../unsubscribe/route');
      const request = createRequest({});

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/unsubscribe-error');
    });

    it('should redirect to error page when email is empty', async () => {
      const { GET } = await import('../unsubscribe/route');
      const request = createRequest({ email: '' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/unsubscribe-error');
    });
  });

  describe('Supabase configuration', () => {
    it('should redirect to error when Supabase URL is missing', async () => {
      delete process.env.NEXT_PUBLIC_SUPABASE_URL;
      vi.resetModules();

      const { GET } = await import('../unsubscribe/route');
      const request = createRequest({ email: validEmail });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/unsubscribe-error');
    });

    it('should redirect to error when Supabase service key is missing', async () => {
      delete process.env.SUPABASE_SERVICE_ROLE_KEY;
      vi.resetModules();

      const { GET } = await import('../unsubscribe/route');
      const request = createRequest({ email: validEmail });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/unsubscribe-error');
    });
  });

  describe('successful unsubscribe', () => {
    it('should redirect to success page on valid unsubscribe', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      const mockEq = vi.fn().mockResolvedValue({ error: null });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      const mockFrom = vi.fn().mockReturnValue({ update: mockUpdate });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../unsubscribe/route');
      const request = createRequest({ email: validEmail });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/unsubscribed');
    });

    it('should update subscription with correct data', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      const mockEq = vi.fn().mockResolvedValue({ error: null });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      const mockFrom = vi.fn().mockReturnValue({ update: mockUpdate });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../unsubscribe/route');
      const request = createRequest({ email: validEmail });

      await GET(request);

      // Verify the update was called with correct parameters
      expect(mockFrom).toHaveBeenCalledWith('email_subscriptions');
      expect(mockUpdate).toHaveBeenCalledWith(
        expect.objectContaining({
          subscribed: false,
          unsubscribed_at: expect.any(String),
        })
      );
      expect(mockEq).toHaveBeenCalledWith('email', validEmail);
    });

    it('should handle URL-encoded email addresses', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      const mockEq = vi.fn().mockResolvedValue({ error: null });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      const mockFrom = vi.fn().mockReturnValue({ update: mockUpdate });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../unsubscribe/route');
      // Email with special characters that would be URL encoded
      const request = createRequest({ email: 'test+tag@example.com' });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/unsubscribed');
      expect(mockEq).toHaveBeenCalledWith('email', 'test+tag@example.com');
    });
  });

  describe('error handling', () => {
    it('should redirect to error page on database error', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      const dbError = { code: '500', message: 'Database connection failed' };
      const mockEq = vi.fn().mockResolvedValue({ error: dbError });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      const mockFrom = vi.fn().mockReturnValue({ update: mockUpdate });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../unsubscribe/route');
      const request = createRequest({ email: validEmail });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/unsubscribe-error');
    });

    it('should redirect to error page on exception', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      // Simulate an exception being thrown
      const mockFrom = vi.fn().mockImplementation(() => {
        throw new Error('Unexpected error');
      });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../unsubscribe/route');
      const request = createRequest({ email: validEmail });

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/unsubscribe-error');
    });
  });

  describe('email format edge cases', () => {
    it('should accept valid email formats', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      const mockEq = vi.fn().mockResolvedValue({ error: null });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      const mockFrom = vi.fn().mockReturnValue({ update: mockUpdate });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      const validEmails = [
        'simple@example.com',
        'user.name@example.com',
        'user+tag@example.com',
        'user@subdomain.example.com',
      ];

      for (const email of validEmails) {
        vi.resetModules();
        const { GET: getHandler } = await import('../unsubscribe/route');
        const request = createRequest({ email });
        const response = await getHandler(request);

        expect(response.headers.get('location')).toContain('/unsubscribed');
      }
    });
  });

  describe('idempotency', () => {
    it('should succeed even if user is already unsubscribed', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      // Supabase update returns success even if no rows matched
      // (the row already has subscribed: false)
      const mockEq = vi.fn().mockResolvedValue({ error: null });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      const mockFrom = vi.fn().mockReturnValue({ update: mockUpdate });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../unsubscribe/route');
      const request = createRequest({ email: validEmail });

      // First unsubscribe
      const response1 = await GET(request);
      expect(response1.headers.get('location')).toContain('/unsubscribed');

      // Second unsubscribe (idempotent)
      vi.resetModules();
      const { GET: GET2 } = await import('../unsubscribe/route');
      const response2 = await GET2(createRequest({ email: validEmail }));
      expect(response2.headers.get('location')).toContain('/unsubscribed');
    });

    it('should succeed even if email does not exist in database', async () => {
      const { createClient } = await import('@supabase/supabase-js');

      // Supabase update returns success even if no rows matched
      const mockEq = vi.fn().mockResolvedValue({ error: null });
      const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
      const mockFrom = vi.fn().mockReturnValue({ update: mockUpdate });

      (createClient as ReturnType<typeof vi.fn>).mockReturnValue({
        from: mockFrom,
      });

      vi.resetModules();
      const { GET } = await import('../unsubscribe/route');
      const request = createRequest({ email: 'nonexistent@example.com' });

      const response = await GET(request);

      // Should still redirect to success (graceful handling)
      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/unsubscribed');
    });
  });
});
