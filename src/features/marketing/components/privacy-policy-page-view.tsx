import Link from "next/link";

import { LegalDocument } from "@/features/marketing/components/legal-document";
import {
  MARKETING_APP_NAME,
  MARKETING_ROUTES,
  MARKETING_SUPPORT_EMAIL,
} from "@/features/marketing/constants/marketing-routes";

export function PrivacyPolicyPageView() {
  return (
    <LegalDocument
      title="Privacy Policy"
      eyebrow="Legal"
      lastUpdated="June 16, 2026"
    >
      <section className="space-y-4">
        <p>
          This Privacy Policy explains how {MARKETING_APP_NAME} (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, and protects
          information when you use our website and application.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Information we collect</h2>
        <p>When you use {MARKETING_APP_NAME}, we may collect:</p>
        <ul>
          <li>
            Account information such as your name and email address when you sign
            up or log in.
          </li>
          <li>
            Google account data that you explicitly authorize through OAuth when
            connecting Gmail or Google Calendar plugins.
          </li>
          <li>
            Cached copies of Gmail messages, labels, threads, drafts, and Google
            Calendar events needed to provide inbox, calendar, and agent features.
          </li>
          <li>
            Technical information such as session data, logs, and usage events
            required to operate and secure the service.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Google user data</h2>
        <p>
          If you connect Gmail or Google Calendar, we access Google user data only
          after you grant permission through Google OAuth. Depending on the
          plugins you connect, this may include:
        </p>
        <ul>
          <li>Reading, organizing, composing, and sending Gmail messages.</li>
          <li>Managing Gmail labels and mailbox content you authorize.</li>
          <li>
            Reading and managing Google Calendar events and availability
            information.
          </li>
          <li>
            Receiving webhook notifications from Google services to keep synced
            data up to date.
          </li>
        </ul>
        <p>
          We use this data solely to provide the features you request inside{" "}
          {MARKETING_APP_NAME}. We do not sell Google user data.
        </p>
      </section>

      <section className="space-y-4">
        <h2>How we use information</h2>
        <ul>
          <li>To authenticate you and maintain your workspace account.</li>
          <li>To sync and display email and calendar data you authorize.</li>
          <li>To power AI agent features within your workspace.</li>
          <li>To maintain security, prevent abuse, and improve reliability.</li>
          <li>To respond to support requests and legal obligations.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Data storage and retention</h2>
        <p>
          Integration credentials are encrypted and stored per user. Cached Gmail
          and Calendar data is retained while your account and plugin connections
          remain active so the product can function. You may disconnect plugins or
          delete your account to stop future syncing.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Sharing and third parties</h2>
        <p>
          We share data only with service providers necessary to operate the app
          (such as hosting and database infrastructure) and with Google when you
          choose to connect Google integrations. We do not sell personal
          information.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Your choices</h2>
        <ul>
          <li>You can disconnect Gmail or Google Calendar at any time from the Plugins page.</li>
          <li>You can revoke Google access from your Google Account security settings.</li>
          <li>You can contact us to request account or data deletion support.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Contact us</h2>
        <p>
          If you have questions about this Privacy Policy or your data, contact us
          at{" "}
          <a href={`mailto:${MARKETING_SUPPORT_EMAIL}`}>
            {MARKETING_SUPPORT_EMAIL}
          </a>
          .
        </p>
        <p>
          See also our{" "}
          <Link href={MARKETING_ROUTES.termsAndConditions}>
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </section>
    </LegalDocument>
  );
}
