import React from "react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      'Welcome to tuitionity.in ("we", "our", "us", or the "Application"). These Terms of Service ("Terms") govern your access to and use of our website, software, and email-sending services.',
      "Our application allows users to connect their own Gmail accounts using Google's OAuth 2.0 authorization system and send emails through their authorized Gmail accounts.",
      "By accessing or using the application, you agree to these Terms. If you do not agree, do not use the application.",
    ],
  },
  {
    title: "2. Description of the Service",
    paragraphs: ["The application provides email-sending functionality through the Google Gmail API. Depending on the features made available to you, the service may allow you to:"],
    items: [
      "Connect a Gmail account that you own or are authorized to use.",
      "Authorize Gmail access through Google's OAuth 2.0 consent process.",
      "Compose, prepare, and submit email messages through your connected Gmail account.",
      "Send emails to recipients you specify.",
      "View or manage email-sending activity and related application records.",
      "Maintain an authorized Gmail connection where permitted by Google.",
    ],
    closing: "The application acts as a tool for submitting messages through the Gmail account you connect. We do not own your Gmail account or the email content you provide.",
  },
  {
    title: "3. Eligibility and Account Responsibilities",
    paragraphs: [
      "You may use the application only if you can legally enter into a binding agreement and are permitted to use the service under applicable law.",
      "You agree to provide accurate information, keep your account credentials secure, use an email account you own or are authorized to access, and promptly notify us if you suspect unauthorized access to your application account.",
      "You are responsible for activity carried out through your application account and for ensuring that anyone using it on your behalf complies with these Terms.",
    ],
  },
  {
    title: "4. Google Account Authorization",
    paragraphs: [
      "To send emails, you may connect a Gmail account through Google's OAuth 2.0 authorization process. Google will display the permissions requested by the application, and you choose whether to grant them.",
      "You authorize the application to perform only the actions covered by the permissions you approve. You may decline authorization or revoke access at any time through your Google Account settings.",
      "If you revoke access, your connected Gmail functionality may stop working. Continued use may require you to authorize the connection again.",
      "Your use of Google services is also subject to Google's applicable terms, policies, and technical restrictions.",
    ],
    links: [
      { label: "Google Terms of Service", href: "https://policies.google.com/terms" },
      { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
    ],
  },
  {
    title: "5. Acceptable Use",
    paragraphs: ["You must use the application lawfully and responsibly. You must not use it to:"],
    items: [
      "Send spam, unsolicited bulk messages, or messages in violation of applicable anti-spam laws.",
      "Send phishing messages, fraudulent communications, impersonation attempts, or deceptive content.",
      "Distribute malware, malicious links, or harmful or unlawful attachments.",
      "Harass, threaten, defame, discriminate against, or otherwise harm another person.",
      "Violate another person's privacy, intellectual property, or other legal rights.",
      "Send unlawful, misleading, or deceptive communications.",
      "Circumvent or attempt to circumvent Google's sending limits, spam controls, security measures, or API restrictions.",
      "Interfere with the operation, security, or availability of the application or its infrastructure.",
      "Use the application in a way that violates Google's policies or applicable laws and regulations.",
    ],
    closing: "We may investigate suspected misuse and may suspend or restrict access where we reasonably believe these Terms, applicable law, or Google's policies have been violated.",
  },
  {
    title: "6. Your Responsibility for Email Content",
    paragraphs: [
      "You are responsible for all email content submitted or sent through your connected Gmail account, including recipient addresses, subject lines, message bodies, links, and attachments.",
      "Before sending a message, you should review its recipients and content. You must ensure that you have all permissions, consents, and other lawful bases required to contact recipients and process their information.",
      "We do not independently endorse or verify user-created email content and are not responsible for the content, accuracy, legality, or consequences of messages sent by users.",
    ],
  },
  {
    title: "7. Google Services and Third-Party Dependencies",
    paragraphs: [
      "The application relies on services operated by third parties, including Google Gmail API and Google OAuth 2.0. Those services are controlled by their respective providers and may be changed, limited, interrupted, or discontinued.",
      "To the extent permitted by law, we are not responsible for interruptions, API changes, authorization failures, Google-imposed sending limits, account restrictions, recipient mail-server decisions, or other failures caused by third-party services.",
      "Your use of third-party services remains subject to the terms and policies of those providers.",
    ],
  },
  {
    title: "8. Privacy and Data Handling",
    paragraphs: [
      "To operate the service, we may process and securely store information such as Google OAuth access tokens and refresh tokens, where applicable, recipient email addresses, email subjects and message bodies submitted through the application, and technical or application activity records.",
      "We handle personal information and Google user data as described in our Privacy Policy. Please read it before using the application.",
    ],
    links: [{ label: "Privacy Policy", href: "https://tuitionity.in/privacy-policy" }],
    closing: "You must not submit personal information or confidential content through the application unless you are authorized to do so and the use is lawful.",
  },
  {
    title: "9. Account Disconnection and Termination",
    paragraphs: [
      "You may stop using the application and revoke its Google account access at any time. You may also contact us to request closure of your application account or deletion of information, subject to applicable legal obligations and the terms of our Privacy Policy.",
      "We may suspend, restrict, or terminate access if we reasonably believe that you have violated these Terms, misused the service, created a security risk, violated applicable law, or exposed us or others to potential harm.",
      "When a Gmail account is disconnected or access is terminated, we will stop using the associated authorization and handle stored authorization credentials and other information in accordance with our Privacy Policy and applicable requirements.",
    ],
  },
  {
    title: "10. Service Availability and Changes",
    paragraphs: [
      "We aim to keep the application available and functioning, but we do not guarantee uninterrupted, secure, or error-free operation.",
      "The service may be unavailable or limited because of maintenance, updates, infrastructure or network failures, security incidents, or third-party outages.",
      "We may modify, add, suspend, or discontinue features where reasonably necessary. Where required by law, we will provide any applicable notice.",
    ],
  },
  {
    title: "11. Intellectual Property",
    paragraphs: [
      "The application, including its software, design, branding, logos, and original materials, is owned by or licensed to the application operator and is protected by applicable intellectual property laws.",
      "Except as permitted by law or with our prior written permission, you may not copy, modify, distribute, sell, reverse engineer, or commercially exploit the application or its materials.",
      "You retain any rights you have in the email content and materials you submit. You grant us only the limited rights necessary to process that content and provide the service you request.",
    ],
  },
  {
    title: "12. Disclaimers",
    paragraphs: [
      'To the maximum extent permitted by applicable law, the application is provided on an "as is" and "as available" basis, without warranties of any kind, whether express, implied, or statutory.',
      "We do not guarantee that every email will be sent, delivered, received, displayed in an inbox, or read by its intended recipient. Delivery may be affected by Google, recipient mail providers, spam filters, network conditions, sending limits, and other factors outside our control.",
      "We do not warrant that the application will meet every user's requirements or operate without interruption, delay, errors, or security vulnerabilities.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, the application operator will not be liable for indirect, incidental, special, exemplary, punitive, or consequential losses, or for loss of profits, revenue, business opportunities, goodwill, data, or anticipated savings arising out of or related to your use of the application.",
      "To the maximum extent permitted by law, we are not responsible for email delivery failures, user-generated content, unauthorized activity resulting from compromised credentials, or acts and omissions of Google or other third-party providers.",
      "Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited under applicable law.",
    ],
  },
  {
    title: "14. Indemnification",
    paragraphs: [
      "To the extent permitted by applicable law, you agree to indemnify and hold harmless the application operator and its personnel from claims, liabilities, losses, damages, and reasonable expenses arising from your misuse of the application, violation of these Terms or applicable law, infringement of another person's rights, or content and communications sent through your account.",
    ],
  },
  {
    title: "15. Changes to These Terms",
    paragraphs: [
      "We may update these Terms to reflect changes to the application, our practices, or legal requirements. We will publish the updated Terms on this page and revise the effective date.",
      "Where required by law, we will provide additional notice or obtain consent. Your use of the application after updated Terms take effect constitutes acceptance of those Terms, to the extent permitted by law.",
    ],
  },
  {
    title: "16. Governing Law and Disputes",
    paragraphs: [
      "These Terms are governed by the laws of India, without regard to conflict-of-law principles.",
      "Subject to applicable law, the competent courts at [Insert City, State, India] will have jurisdiction over disputes arising out of or relating to these Terms or the application.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white px-5 py-12 text-slate-800 sm:px-8">
      <article className="mx-auto max-w-4xl">
        <header className="mb-10 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">tuitionity.in</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Terms of Service</h1>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>Effective Date: 4 November 2026</span>
            <span>Application: Email Sending Application</span>
          </div>
          <p className="mt-6 max-w-3xl leading-7 text-slate-600">
            These Terms govern your access to and use of tuitionity.in and its service for sending emails through a Gmail account that you authorize.
          </p>
        </header>

        <div className="space-y-9">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={section.title}>
              <h2 id={section.title} className="mb-4 text-xl font-semibold tracking-tight text-slate-950">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-3 leading-7 text-slate-700">{paragraph}</p>
              ))}
              {section.items && (
                <ul className="my-3 list-disc space-y-2 pl-6 leading-7 text-slate-700">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.links && (
                <ul className="list-disc space-y-2 pl-6 leading-7">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("https://policies.google.com/") ? "_blank" : undefined}
                        rel={link.href.startsWith("https://policies.google.com/") ? "noopener noreferrer" : undefined}
                        className="text-blue-700 underline underline-offset-4 hover:text-blue-900"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {section.closing && <p className="mt-3 leading-7 text-slate-700">{section.closing}</p>}
            </section>
          ))}

          <section aria-labelledby="contact-information">
            <h2 id="contact-information" className="mb-4 text-xl font-semibold tracking-tight text-slate-950">
              17. Contact Information
            </h2>
            <p className="mb-3 leading-7 text-slate-700">
              If you have questions, concerns, or complaints about these Terms or the application, contact us:
            </p>
            <address className="not-italic leading-8 text-slate-700">
              <p><strong>Website:</strong> <a href="https://tuitionity.in" className="text-blue-700 underline underline-offset-4">https://tuitionity.in</a></p>

              <p><strong>Company/Operator:</strong> dheerajbanik25@gmail.com </p>

            </address>
          </section>
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 19/11/2026 tuitionity.in. All rights reserved.
        </footer>
      </article>
    </main>
  );
}
