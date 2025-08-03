import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface DeleteDataRequest {
  facebookId: string;
  email: string;
  reason?: string;
  additionalInfo?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { facebookId, email, reason, additionalInfo }: DeleteDataRequest = req.body;

    // Validate required fields
    if (!facebookId || !email) {
      return res.status(400).json({ 
        message: 'Facebook ID and email are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Please provide a valid email address' 
      });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Create email content
    const subject = 'Data Deletion Request Received - BlockRabbits';
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const emailText = `
Dear User,

We have received your data deletion request for BlockRabbits services.

Request Details:
- Facebook ID: ${facebookId}
- Email: ${email}
- Request Date: ${currentDate}
- Reason: ${reason || 'Not provided'}
- Additional Information: ${additionalInfo || 'Not provided'}

What happens next:
1. We will verify your identity using your Facebook ID
2. We will search for and identify all your data in our systems
3. We will permanently delete your data from our servers within 7-14 business days
4. We will send you a detailed confirmation email once the deletion is complete

Important Notes:
- This process cannot be reversed once completed
- You can cancel this request within 24 hours by contacting us
- We will also delete your data from any third-party services we use
- You will receive a detailed report of what was deleted

If you have any questions or need to cancel this request, please contact us:
- Email: support@blockrabbits.com
- WhatsApp: +91 9664954421

Thank you for using BlockRabbits services.

Best regards,
The BlockRabbits Team
    `;

    const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Deletion Request Received</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .details { background: white; padding: 15px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #667eea; }
        .timeline { background: #e8f4fd; padding: 15px; margin: 15px 0; border-radius: 5px; }
        .contact { background: #f0f8ff; padding: 15px; margin: 15px 0; border-radius: 5px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🗑️ Data Deletion Request Received</h1>
            <p>BlockRabbits - Privacy & Data Protection</p>
        </div>
        
        <div class="content">
            <p>Dear User,</p>
            
            <p>We have received your data deletion request for BlockRabbits services. We take your privacy seriously and will process this request in compliance with GDPR and Meta policies.</p>
            
            <div class="details">
                <h3>📋 Request Details</h3>
                <p><strong>Facebook ID:</strong> ${facebookId}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Request Date:</strong> ${currentDate}</p>
                <p><strong>Reason:</strong> ${reason || 'Not provided'}</p>
                <p><strong>Additional Information:</strong> ${additionalInfo || 'Not provided'}</p>
            </div>
            
            <div class="timeline">
                <h3>⏱️ What happens next</h3>
                <ol>
                    <li>We will verify your identity using your Facebook ID</li>
                    <li>We will search for and identify all your data in our systems</li>
                    <li>We will permanently delete your data from our servers within 7-14 business days</li>
                    <li>We will send you a detailed confirmation email once the deletion is complete</li>
                </ol>
            </div>
            
            <div class="contact">
                <h3>📞 Need to cancel or have questions?</h3>
                <p>You can cancel this request within 24 hours by contacting us:</p>
                <ul>
                    <li><strong>Email:</strong> support@blockrabbits.com</li>
                    <li><strong>WhatsApp:</strong> +91 9664954421</li>
                </ul>
            </div>
            
            <p><strong>Important Notes:</strong></p>
            <ul>
                <li>This process cannot be reversed once completed</li>
                <li>We will also delete your data from any third-party services we use</li>
                <li>You will receive a detailed report of what was deleted</li>
            </ul>
            
            <p>Thank you for using BlockRabbits services.</p>
            
            <p>Best regards,<br>The BlockRabbits Team</p>
        </div>
        
        <div class="footer">
            <p>This email was sent in response to a data deletion request. If you did not make this request, please contact us immediately.</p>
        </div>
    </div>
</body>
</html>
    `;

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@blockrabbits.com',
      to: email,
      subject,
      text: emailText,
      html: htmlEmail,
    });

    // Send notification email to support team
    const supportSubject = `New Data Deletion Request - Facebook ID: ${facebookId}`;
    const supportText = `
New Data Deletion Request Received

Facebook ID: ${facebookId}
Email: ${email}
Request Date: ${currentDate}
Reason: ${reason || 'Not provided'}
Additional Info: ${additionalInfo || 'Not provided'}

Please process this deletion request within 7-14 business days.
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@blockrabbits.com',
      to: 'support@blockrabbits.com',
      subject: supportSubject,
      text: supportText,
    });

    // Log the request (you might want to store this in a database)
    console.log(`Data deletion request received: ${facebookId} - ${email} - ${currentDate}`);

    res.status(200).json({ 
      message: 'Data deletion request submitted successfully',
      requestId: `DD-${Date.now()}-${facebookId.substring(0, 8)}`
    });

  } catch (error) {
    console.error('Error processing deletion request:', error);
    res.status(500).json({ 
      message: 'Failed to process deletion request. Please try again or contact us directly.' 
    });
  }
} 