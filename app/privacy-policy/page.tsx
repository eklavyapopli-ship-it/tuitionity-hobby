import React from "react";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      'Welcome to tuitionity.in ("we", "our", "us", or the "Application").',
      "This Privacy Policy explains how we collect, access, use, store, process, and protect personal information and Google user data when you use our application.",
      "Our application enables users to connect their own Gmail accounts through Google OAuth 2.0 and send emails directly from their authorized Gmail accounts.",
      "We are committed to protecting your personal information in accordance with applicable data protection laws and Google's API Services User Data Policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    subsections: [
      {
        title: "A. Account Information",
        items: [
          "Name and email address.",
          "Account identification information.",
          "Login and authentication details.",
          "Information necessary to maintain your application account.",
        ],
      },
      {
        title: "B. Google Account Information",
        paragraphs: [
          "When you choose to connect your Gmail account, you authorize access through Google's OAuth 2.0 authorization system. Depending on the permissions you grant and the features you use, we may process:",
        ],
        items: [
          "Your Gmail email address.",
          "OAuth access tokens.",
          "OAuth refresh tokens, where applicable.",
          "Email content that you create or submit through our application for sending.",
          "Recipient email addresses, subject lines, message bodies and attachments, where supported by the application.",
        ],
      },
      {
        title: "C. Technical Information",
        items: [
          "IP address.",
          "Browser and device information.",
          "Application usage information.",
          "Error logs and diagnostic information.",
          "Date and time of application activity.",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Google User Data",
    paragraphs: [
      "Our application uses Google Gmail API and OAuth 2.0 to allow users to send emails using their own Gmail accounts.",
      "Google user data is used to provide and maintain the email-sending functionality requested by the user. We may use it to:",
    ],
    items: [
      "Authenticate your Gmail account.",
      "Establish and maintain an authorized connection with Gmail.",
      "Obtain authorization tokens required to send emails.",
      "Submit email messages created or authorized by you through Gmail.",
      "Maintain the connection when continued authorization is permitted.",
      "Diagnose technical problems and maintain application security.",
    ],
    closing:
      "We do not use Gmail data for advertising, marketing profiling, selling personal information, or unrelated purposes. We do not use Google user data to train generalized artificial intelligence or machine learning models.",
  },
  {
    title: "4. Gmail API Permissions",
    paragraphs: [
      "Our application uses Google's OAuth 2.0 authorization system. Where the application's functionality only requires sending emails, we intend to request the minimum necessary Gmail permission, such as:",
    ],
    code: "https://www.googleapis.com/auth/gmail.send",
    closing:
      "Users must explicitly authorize the requested permission through Google's consent screen. We do not obtain Gmail access without the user's authorization. Users may decline authorization or revoke access at any time through their Google Account settings.",
  },
  {
    title: "5. Storage and Protection of Google Data",
    paragraphs: [
      "To provide the email-sending service, certain information may be stored securely on our servers. This may include:",
    ],
    items: [
      "OAuth access tokens.",
      "OAuth refresh tokens, where applicable.",
      "Email messages submitted through the application.",
      "Recipient email addresses.",
      "Email subjects and message bodies.",
      "Email delivery and application activity records.",
    ],
    closing:
      "We implement appropriate technical and organizational security measures intended to protect stored information against unauthorized access, disclosure, alteration, loss, or destruction. These measures may include HTTPS connections, restricted database access, access controls, secure handling of OAuth credentials, monitoring for suspicious activity, and appropriate server and database security practices. Access to Google user data is limited to personnel and service providers who need it to operate, maintain, or secure the application.",
  },
  {
    title: "6. Data Sharing and Disclosure",
    paragraphs: [
      "We do not sell, rent, or trade Google user data or personal information. We do not share Google user data with third parties for advertising or unrelated commercial purposes.",
      "Information may be disclosed only in limited circumstances:",
    ],
    items: [
      "Service providers: Trusted infrastructure, hosting, database, and technical service providers that support application operations, subject to appropriate confidentiality and security obligations.",
      "User-directed actions: When necessary to perform an email-sending action explicitly requested by the user.",
      "Legal requirements: Where disclosure is required by applicable law, regulation, court order, or lawful government request.",
      "Security: Where reasonably necessary to investigate fraud, security incidents, abuse, or protect the rights and safety of users.",
    ],
    closing:
      "Any third-party processing of Google user data must remain consistent with Google's applicable API policies.",
  },
  {
    title: "7. Google API Services User Data Policy – Limited Use",
    paragraphs: [
      "Our use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
      "In particular:",
    ],
    items: [
      "We use Google user data only to provide or improve user-facing features that are prominent in our application and visible to the user.",
      "We do not transfer Google user data to third parties except as necessary to provide or improve the application's functionality, comply with applicable law, or as part of a merger, acquisition, or sale of assets with appropriate user protections.",
      "We do not use Google user data for advertising, including personalized or interest-based advertising.",
      "We do not allow humans to read Google user data except where the user has given affirmative consent, where necessary for security purposes, to comply with applicable law, or for internal operations permitted by Google's policy.",
      "We do not use Google user data to develop, improve, or train generalized artificial intelligence or machine learning models.",
    ],
    closing:
      "Our handling of Google user data is limited to the purposes disclosed in this Privacy Policy and authorized by the user.",
  },
  {
    title: "8. Data Retention and Deletion",
    paragraphs: [
      "We retain personal information and Google user data only for as long as reasonably necessary to provide the application's services, fulfill legitimate operational requirements, or comply with legal obligations.",
      "OAuth tokens are retained only while required to maintain the user's authorized Gmail connection. Email content and related records are retained according to the application's operational requirements and applicable retention settings.",
      "Users may request deletion of their stored personal information and Google-related data by contacting us. Upon a valid deletion request, we will delete the relevant information within a reasonable period, subject to applicable legal obligations and legitimate security requirements.",
      "When a user disconnects their Gmail account, we will stop using the associated authorization and revoke or delete stored authorization credentials as applicable.",
    ],
  },
  {
    title: "9. Revoking Google Account Access",
    paragraphs: [
      "Users can revoke our application's access to their Google Account at any time.",
      "To revoke access:",
    ],
    items: [
      "Visit https://myaccount.google.com/permissions.",
      "Find our application in the list of connected applications.",
      "Select the application.",
      "Choose the option to remove its access.",
    ],
    closing:
      "After revocation, our application will no longer be able to use the revoked Gmail authorization to send emails. Revoking Google access does not automatically guarantee deletion of previously stored email content. Users may separately request deletion under the Data Retention and Deletion section.",
  },
  {
    title: "10. Cookies and Tracking Technologies",
    paragraphs: [
      "Our application may use cookies or similar technologies to maintain login sessions, support authentication, improve application performance, maintain application security, and remember user preferences.",
      "Users can manage cookie preferences through their browser settings. Disabling certain cookies may affect application functionality.",
    ],
  },
  {
    title: "11. Data Security",
    paragraphs: [
      "We take reasonable steps to protect user information. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
      "Users are responsible for maintaining the security of their own accounts and devices and must not share their application credentials with unauthorized individuals.",
    ],
  },
  {
    title: "12. Children's Privacy",
    paragraphs: [
      "Our application is not intended for children under the age of 13. We do not knowingly collect personal information from children in violation of applicable laws.",
    ],
  },
  {
    title: "13. Third-Party Services",
    paragraphs: [
      "Our application integrates with Google Gmail API and Google OAuth 2.0. Google's services are governed by Google's own privacy policies and terms.",
    ],
    links: [
      {
        label: "Google Privacy Policy",
        href: "https://policies.google.com/privacy",
      },
      {
        label: "Google API Services User Data Policy",
        href: "https://developers.google.com/terms/api-services-user-data-policy",
      },
    ],
  },
  {
    title: "14. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, technical practices, legal requirements, or Google's API policies.",
      "Any updated version will be published on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-12 text-slate-800 sm:px-8">
      <article className="mx-auto max-w-4xl">
        <header className="mb-10 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            tuitionity.in
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>Effective Date: 4 November 2026</span>
            <span>Application: Email Sending Application</span>
          </div>
          <p className="mt-6 max-w-3xl leading-7 text-slate-600">
            This policy explains how tuitionity.in collects, uses, stores, and
            protects personal information and Google user data when you connect
            your Gmail account and use our email-sending service.
          </p>
        </header>

        <div className="space-y-9">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={section.title}>
              <h2
                id={section.title}
                className="mb-4 text-xl font-semibold tracking-tight text-slate-950"
              >
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-3 leading-7 text-slate-700">
                  {paragraph}
                </p>
              ))}

              {section.code && (
                <code className="my-3 block overflow-x-auto rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-800">
                  {section.code}
                </code>
              )}

              {section.items && (
                <ul className="my-3 list-disc space-y-2 pl-6 leading-7 text-slate-700">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.subsections?.map((subsection) => (
                <div key={subsection.title} className="mt-5">
                  <h3 className="mb-2 text-base font-semibold text-slate-900">
                    {subsection.title}
                  </h3>
                  {subsection.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mb-3 leading-7 text-slate-700"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {subsection.items && (
                    <ul className="list-disc space-y-2 pl-6 leading-7 text-slate-700">
                      {subsection.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {section.links && (
                <ul className="list-disc space-y-2 pl-6 leading-7">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline underline-offset-4 hover:text-blue-900"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {section.closing && (
                <p className="mt-3 leading-7 text-slate-700">
                  {section.closing}
                </p>
              )}
            </section>
          ))}

          <section aria-labelledby="contact-information">
            <h2
              id="contact-information"
              className="mb-4 text-xl font-semibold tracking-tight text-slate-950"
            >
              15. Contact Information
            </h2>
            <p className="mb-3 leading-7 text-slate-700">
              For questions, concerns, data deletion requests, or
              privacy-related inquiries, please contact us:
            </p>
            <address className="not-italic leading-8 text-slate-700">
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://tuitionity.in"
                  className="text-blue-700 underline underline-offset-4"
                >
                  https://tuitionity.in
                </a>
              </p>
            
              <p>
                <strong>Company/Operator:</strong> dheerajbanik25@gmail.com
              </p>
          
            </address>
            <p className="mt-4 leading-7 text-slate-700">
              By using our application, you acknowledge that you have read and
              understood this Privacy Policy.
            </p>
          </section>
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 19/11/2026 tuitionity.in. All rights reserved.
        </footer>
      </article>
    </main>
  );
}
