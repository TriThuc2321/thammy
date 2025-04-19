import nodemailer from "nodemailer";

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
    const mailOptions = {
      from: SMTP_USER,
      to: RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; font-family:Arial, sans-serif; background-color:#f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; padding:20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; padding:20px; border-radius:8px;">
            <tr>
              <td style="font-size:20px; font-weight:bold; padding-bottom:20px; color:#333333;">
                New Contact Form Submission
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0; font-size:16px;">
                <strong>Name:</strong> ${name}
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0; font-size:16px;">
                <strong>Email:</strong> ${email}
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0; font-size:16px;">
                <strong>Phone:</strong> ${phone}
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0; font-size:16px;">
                <strong>Message:</strong><br>
                <span style="display:inline-block; margin-top:5px; color:#555555;">${message}</span>
              </td>
            </tr>
            <tr>
              <td style="padding-top:20px; font-size:14px; color:#999999;">
                This message was sent from Chân mày sương mai contact form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
