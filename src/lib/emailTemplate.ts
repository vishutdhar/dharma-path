/**
 * Email Template for Daily Lessons
 * Responsive HTML email template with branding and deep links
 */

import { EmailContent, getProgressPercentage, getMilestoneMessage, getNextDayPreview, TOTAL_DAYS } from './emailContent';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://mydharmapath.com';

interface EmailTemplateOptions {
  content: EmailContent;
  userEmail: string;
  unsubscribeToken: string;
}

/**
 * Generate the full HTML email for a daily lesson
 */
export function generateDailyEmail(options: EmailTemplateOptions): string {
  const { content, userEmail, unsubscribeToken } = options;
  const progress = getProgressPercentage(content.day);
  const milestone = getMilestoneMessage(content.day);
  const nextPreview = getNextDayPreview(content.day);

  const webUrl = `${BASE_URL}${content.webUrl}`;
  const unsubscribeUrl = `${BASE_URL}/api/unsubscribe?token=${unsubscribeToken}&email=${encodeURIComponent(userEmail)}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Day ${content.day}: ${content.title}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    /* Reset styles */
    body, table, td, p, a, li { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .email-body { background-color: #1F2937 !important; }
      .email-container { background-color: #111827 !important; }
      .email-text { color: #F3F4F6 !important; }
      .email-text-muted { color: #9CA3AF !important; }
      .content-box { background-color: #1F2937 !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #F5F0E8;" class="email-body">
  <!-- Preview text -->
  <div style="display: none; max-height: 0; overflow: hidden;">
    Day ${content.day} of 77: ${content.title} - ${content.subtitle}
  </div>

  <!-- Main wrapper -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F5F0E8;" class="email-body">
    <tr>
      <td align="center" style="padding: 20px 10px;">
        <!-- Email container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" class="email-container">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: normal; letter-spacing: 1px;">
                Dharma Path
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px;">
                Day ${content.day} of ${TOTAL_DAYS}
              </p>
            </td>
          </tr>

          <!-- Progress Bar -->
          <tr>
            <td style="padding: 20px 40px 0 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="background-color: #E5E7EB; height: 8px; border-radius: 4px;">
                    <div style="background: linear-gradient(90deg, #F97316, #EA580C); height: 8px; width: ${progress}%; border-radius: 4px;"></div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 8px; text-align: center;">
                    <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #6B7280;" class="email-text-muted">
                      ${progress}% complete
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${milestone ? `
          <!-- Milestone Banner -->
          <tr>
            <td style="padding: 20px 40px 0 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px 20px; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #92400E;">
                      ${milestone}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ''}

          <!-- Read on Web Button -->
          <tr>
            <td style="padding: 25px 40px; text-align: center;">
              <a href="${webUrl}" style="display: inline-block; background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; font-weight: 600; text-decoration: none; padding: 14px 28px; border-radius: 8px; box-shadow: 0 2px 4px rgba(249, 115, 22, 0.3);">
                Read on Web &rarr;
              </a>
            </td>
          </tr>

          <!-- Subtitle / Level Info -->
          <tr>
            <td style="padding: 0 40px;">
              <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; color: #F97316; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                ${content.subtitle}
              </p>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding: 10px 40px 0 40px;">
              <h2 style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 24px; color: #1F2937; line-height: 1.3;" class="email-text">
                ${content.title}
              </h2>
            </td>
          </tr>

          <!-- Lesson Content -->
          <tr>
            <td style="padding: 20px 40px;">
              <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.7; color: #374151;" class="email-text">
                ${formatContentForEmail(content.htmlContent)}
              </div>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding: 10px 40px 30px 40px; text-align: center;">
              <a href="${webUrl}" style="display: inline-block; background-color: #1F2937; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 8px;">
                Continue Reading on App
              </a>
            </td>
          </tr>

          ${nextPreview ? `
          <!-- Next Day Preview -->
          <tr>
            <td style="padding: 0 40px 25px 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="background-color: #F9FAFB; padding: 15px 20px; border-radius: 8px; text-align: center;" class="content-box">
                    <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #6B7280;" class="email-text-muted">
                      ${nextPreview}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ''}

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="border-top: 1px solid #E5E7EB; height: 1px;"></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 25px 40px; text-align: center;">
              <p style="margin: 0 0 10px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #9CA3AF;" class="email-text-muted">
                You're receiving this because you signed up for daily lessons at Dharma Path.
              </p>
              <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px;">
                <a href="${webUrl}" style="color: #F97316; text-decoration: none;">Open in App</a>
                <span style="color: #D1D5DB; margin: 0 8px;">·</span>
                <a href="${unsubscribeUrl}" style="color: #9CA3AF; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
        <!-- End email container -->
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Format lesson HTML content for email
 * - Adds inline styles for email compatibility
 * - Ensures proper spacing and formatting
 */
function formatContentForEmail(html: string): string {
  return html
    // Style h2 headers
    .replace(/<h2>/g, '<h2 style="font-family: Georgia, \'Times New Roman\', serif; font-size: 20px; color: #1F2937; margin: 25px 0 15px 0; padding-top: 15px; border-top: 1px solid #E5E7EB;">')
    // Style paragraphs
    .replace(/<p>/g, '<p style="margin: 0 0 15px 0;">')
    // Style bold text
    .replace(/<strong>/g, '<strong style="color: #1F2937;">')
    // Style italic text
    .replace(/<em>/g, '<em style="color: #6B7280;">')
    // Style unordered lists
    .replace(/<ul>/g, '<ul style="margin: 15px 0; padding-left: 25px;">')
    // Style list items
    .replace(/<li>/g, '<li style="margin-bottom: 8px;">')
    // Style ordered lists
    .replace(/<ol>/g, '<ol style="margin: 15px 0; padding-left: 25px;">');
}

/**
 * Generate email subject line
 */
export function generateEmailSubject(content: EmailContent): string {
  return `Day ${content.day}: ${content.title}`;
}

/**
 * Generate plain text version of the email (for fallback)
 */
export function generatePlainTextEmail(options: EmailTemplateOptions): string {
  const { content, userEmail, unsubscribeToken } = options;
  const progress = getProgressPercentage(content.day);
  const milestone = getMilestoneMessage(content.day);
  const webUrl = `${BASE_URL}${content.webUrl}`;
  const unsubscribeUrl = `${BASE_URL}/api/unsubscribe?token=${unsubscribeToken}&email=${encodeURIComponent(userEmail)}`;

  // Strip HTML tags for plain text
  const plainContent = content.htmlContent
    .replace(/<h2>/g, '\n\n## ')
    .replace(/<\/h2>/g, '\n')
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '\n')
    .replace(/<strong>/g, '*')
    .replace(/<\/strong>/g, '*')
    .replace(/<em>/g, '_')
    .replace(/<\/em>/g, '_')
    .replace(/<ul>/g, '')
    .replace(/<\/ul>/g, '')
    .replace(/<ol>/g, '')
    .replace(/<\/ol>/g, '')
    .replace(/<li>/g, '• ')
    .replace(/<\/li>/g, '\n')
    .replace(/<[^>]*>/g, '') // Remove any remaining HTML tags
    .replace(/\n{3,}/g, '\n\n') // Normalize multiple newlines
    .trim();

  return `
DHARMA PATH
Day ${content.day} of ${TOTAL_DAYS} (${progress}% complete)

${milestone ? `${milestone}\n\n---\n` : ''}
${content.subtitle}

${content.title}
${'='.repeat(content.title.length)}

${plainContent}

---

Read this lesson on the web: ${webUrl}

---

You're receiving this because you signed up for daily lessons at Dharma Path.
Unsubscribe: ${unsubscribeUrl}
  `.trim();
}

/**
 * Generate welcome email for new subscribers
 */
export function generateWelcomeEmail(userEmail: string, unsubscribeToken: string): string {
  const unsubscribeUrl = `${BASE_URL}/api/unsubscribe?token=${unsubscribeToken}&email=${encodeURIComponent(userEmail)}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Dharma Path</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F5F0E8;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F5F0E8;">
    <tr>
      <td align="center" style="padding: 40px 10px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-family: Georgia, 'Times New Roman', serif; font-size: 32px; font-weight: normal;">
                Welcome to Dharma Path
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 24px; color: #1F2937;">
                Your 77-Day Journey Begins Tomorrow
              </h2>

              <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.7; color: #374151; margin: 0 0 20px 0;">
                You've taken the first step on an incredible journey through Hindu philosophy and the Bhagavad Gita. Over the next 77 days, you'll receive one lesson each morning at 6 AM UTC.
              </p>

              <h3 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; color: #F97316; margin: 30px 0 15px 0;">
                What to Expect:
              </h3>

              <ul style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.7; color: #374151; padding-left: 25px;">
                <li style="margin-bottom: 10px;"><strong>Days 1-14:</strong> The Foundation — Core concepts of Hindu philosophy</li>
                <li style="margin-bottom: 10px;"><strong>Days 15-26:</strong> The Stories — The Ramayana and Mahabharata</li>
                <li style="margin-bottom: 10px;"><strong>Days 27-43:</strong> The Gita — Journey through all 18 chapters</li>
                <li style="margin-bottom: 10px;"><strong>Days 44-59:</strong> Going Deeper — Upanishads, traditions, and practices</li>
                <li style="margin-bottom: 10px;"><strong>Days 60-77:</strong> Gita Deep Dive — Full chapter summaries with key verses</li>
              </ul>

              <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.7; color: #374151; margin: 25px 0;">
                Each email contains the full lesson text so you can read it right from your inbox. You can also click "Read on Web" to explore the lesson with additional features.
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="${BASE_URL}" style="display: inline-block; background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; font-weight: 600; text-decoration: none; padding: 14px 28px; border-radius: 8px;">
                  Explore Dharma Path &rarr;
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 25px 40px; background-color: #F9FAFB; text-align: center;">
              <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #9CA3AF;">
                You're receiving this because you signed up for Dharma Path.
                <br>
                <a href="${unsubscribeUrl}" style="color: #9CA3AF; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate completion email for users who finish the 77-day journey
 */
export function generateCompletionEmail(userEmail: string, unsubscribeToken: string): string {
  const unsubscribeUrl = `${BASE_URL}/api/unsubscribe?token=${unsubscribeToken}&email=${encodeURIComponent(userEmail)}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Journey Complete - Dharma Path</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F5F0E8;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F5F0E8;">
    <tr>
      <td align="center" style="padding: 40px 10px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-family: Georgia, 'Times New Roman', serif; font-size: 32px; font-weight: normal;">
                Journey Complete
              </h1>
              <p style="margin: 15px 0 0 0; color: rgba(255, 255, 255, 0.9); font-family: Georgia, 'Times New Roman', serif; font-size: 18px;">
                77 Days of Wisdom
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 24px; color: #1F2937; text-align: center;">
                Congratulations, Seeker
              </h2>

              <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.7; color: #374151; margin: 0 0 20px 0;">
                You have completed the entire Dharma Path journey. Over 77 days, you've explored the foundations of Hindu philosophy, traveled through the great epics, and immersed yourself in the timeless wisdom of the Bhagavad Gita.
              </p>

              <div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
                <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; font-style: italic; color: #92400E; margin: 0;">
                  "You have the right to work, but never to the fruit of work."
                  <br><br>
                  — Bhagavad Gita 2.47
                </p>
              </div>

              <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.7; color: #374151; margin: 0 0 20px 0;">
                This is not an ending, but a beginning. The knowledge you've gained is a foundation for a lifetime of practice and deeper understanding. May your path be blessed with wisdom, peace, and purpose.
              </p>

              <h3 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; color: #F97316; margin: 30px 0 15px 0;">
                What's Next?
              </h3>

              <ul style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.7; color: #374151; padding-left: 25px;">
                <li style="margin-bottom: 10px;">Revisit any lesson anytime on the Dharma Path website</li>
                <li style="margin-bottom: 10px;">Start the journey again from Day 1 (you can restart from your profile)</li>
                <li style="margin-bottom: 10px;">Dive deeper into specific chapters of the Gita</li>
              </ul>

              <div style="text-align: center; margin: 30px 0;">
                <a href="${BASE_URL}" style="display: inline-block; background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; font-weight: 600; text-decoration: none; padding: 14px 28px; border-radius: 8px;">
                  Continue Exploring &rarr;
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 25px 40px; background-color: #F9FAFB; text-align: center;">
              <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #9CA3AF;">
                Thank you for being part of Dharma Path.
                <br>
                <a href="${unsubscribeUrl}" style="color: #9CA3AF; text-decoration: none;">Unsubscribe from future emails</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
