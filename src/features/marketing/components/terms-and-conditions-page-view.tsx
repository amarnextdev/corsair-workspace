import Link from "next/link";

import { LegalDocument } from "@/features/marketing/components/legal-document";
import {
  MARKETING_APP_NAME,
  MARKETING_ROUTES,
  MARKETING_SUPPORT_EMAIL,
} from "@/features/marketing/constants/marketing-routes";

export function TermsAndConditionsPageView() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      eyebrow="Legal"
      lastUpdated="June 16, 2026"
    >
      <section className="space-y-4">
        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to
          and use of {MARKETING_APP_NAME}. By creating an account or using the
          service, you agree to these Terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Service description</h2>
        <p>
          {MARKETING_APP_NAME} provides a workspace for managing email, calendar,
          integrations, and AI-assisted workflows. Some features require you to
          connect third-party accounts such as Gmail and Google Calendar.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Account responsibilities</h2>
        <ul>
          <li>You must provide accurate account information.</li>
          <li>You are responsible for maintaining the security of your login credentials.</li>
          <li>You must not use the service for unlawful, abusive, or fraudulent activity.</li>
          <li>You must comply with applicable laws and third-party terms, including Google&apos;s policies.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Third-party integrations</h2>
        <p>
          When you connect Google services, you authorize us to access the Google
          data and scopes shown during OAuth consent. Your use of Google services
          remains subject to Google&apos;s terms and privacy policies. You may
          disconnect integrations at any time.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Attempt to access another user&apos;s data without authorization.</li>
          <li>Interfere with or disrupt the service or its infrastructure.</li>
          <li>Reverse engineer or misuse the platform except as permitted by law.</li>
          <li>Use the service to send spam, malware, or harmful content.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Availability and changes</h2>
        <p>
          We may modify, suspend, or discontinue features at any time. We may
          update these Terms by posting a revised version on this page. Continued
          use after changes become effective constitutes acceptance of the updated
          Terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Disclaimer</h2>
        <p>
          The service is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without warranties of any kind, to the fullest
          extent permitted by law.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {MARKETING_APP_NAME} and its
          operators will not be liable for indirect, incidental, special,
          consequential, or punitive damages arising from your use of the service.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Contact</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${MARKETING_SUPPORT_EMAIL}`}>
            {MARKETING_SUPPORT_EMAIL}
          </a>
          .
        </p>
        <p>
          See also our{" "}
          <Link href={MARKETING_ROUTES.privacyPolicy}>Privacy Policy</Link>.
        </p>
      </section>
    </LegalDocument>
  );
}
