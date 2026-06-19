import LegalPageLayout, { LegalEntityBlock, LegalSection } from "@/components/LegalPageLayout";
import { LEGAL_ENTITY } from "@/data/legal";

export default function Eula() {
  return (
    <LegalPageLayout
      title="End-User License Agreement - Northstone"
      description="End-User License Agreement for the Northstone platform and e-conomic integration layer."
      path="/legal/eula"
      badge="End-User License Agreement"
    >
      <LegalSection title="1. Agreement">
        <p>
          This End-User License Agreement ("Agreement") is entered into between{" "}
          {LEGAL_ENTITY.name} ("{LEGAL_ENTITY.brand}", "we", "us", or "our") and the
          individual or entity that accepts this Agreement ("you" or "Client").
        </p>
        <p>
          By accessing or using the {LEGAL_ENTITY.brand} platform, including any applications
          built in or integrated with e-conomic that connect your accounting data to our
          services, you agree to be bound by this Agreement. If you do not agree, do not use
          the platform.
        </p>
      </LegalSection>

      <LegalSection title="2. The platform">
        <p>
          {LEGAL_ENTITY.brand} provides a technology platform that serves as the integration
          layer between our service delivery and your accounting data in e-conomic. The
          platform supports bookkeeping, payroll, VAT filings, reporting, quality assurance,
          and related financial operations for Danish SMEs.
        </p>
        <p>
          Your statutory books and ledger entries remain in your e-conomic subscription. The
          platform reads, processes, and augments that data to deliver our services. The
          platform also generates and maintains client context files, working papers, analyses,
          and other work product produced in connection with our services.
        </p>
      </LegalSection>

      <LegalSection title="3. License grant">
        <p>
          Subject to your compliance with this Agreement and payment of applicable fees, we
          grant you a limited, non-exclusive, non-transferable, revocable license to access
          and use the platform solely for your internal business purposes in connection with
          {LEGAL_ENTITY.brand} services.
        </p>
        <p>You may not:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Copy, modify, distribute, sell, or sublicense the platform or any part of it</li>
          <li>Reverse engineer, decompile, or attempt to extract source code from the platform</li>
          <li>Use the platform to build a competing product or service</li>
          <li>Access the platform through automated means except as expressly permitted</li>
          <li>Share login credentials or allow unauthorized third parties to access the platform</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Subscription and payment">
        <p>
          Services are provided on an annual subscription basis with automatic renewal unless
          terminated in accordance with this Agreement. Subscriptions are paid by card on file.
        </p>
        <p>
          Annual price increases of up to 10% may apply automatically upon renewal. Current
          subscription tiers are based on company revenue and service scope (Micro, Standard,
          and Plus plans).
        </p>
        <p>
          If a card payment is declined, service may be paused automatically within 48 hours.
          Pausing service does not relieve you of payment obligations for amounts already due.
          Reminder fees may apply for overdue payments as permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="5. Data ownership">
        <p>
          You retain ownership of your e-conomic subscription and always receive your raw
          books. You are responsible for maintaining your e-conomic account and ensuring we
          have the access required to deliver services.
        </p>
        <p>
          {LEGAL_ENTITY.brand} owns its work product, including working papers, analyses,
          client context files, QA reports, reporting packs, and other materials created in
          connection with delivering services through the platform. This does not affect your
          ownership of underlying business records and source accounting data in e-conomic.
        </p>
      </LegalSection>

      <LegalSection title="6. Your responsibilities">
        <p>You agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate information and timely responses to requests for documents and approvals</li>
          <li>Maintain valid e-conomic credentials and necessary third-party integrations</li>
          <li>Use the platform only in compliance with applicable law and this Agreement</li>
          <li>Notify us promptly of any unauthorized access or security incident</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Service levels">
        <p>
          We target delivery of monthly close and reporting by the 20th business day of the
          following month, tightening to the 15th business day depending on client size and
          plan. VAT filings are submitted when due under Danish rules. Specific delivery
          commitments may be defined in your service agreement.
        </p>
      </LegalSection>

      <LegalSection title="8. Confidentiality">
        <p>
          Each party will protect the other party's confidential information using reasonable
          care and use it only to perform under this Agreement. Confidential information does
          not include information that is publicly available, independently developed, or
          rightfully received from a third party without restriction.
        </p>
      </LegalSection>

      <LegalSection title="9. Privacy and data processing">
        <p>
          Our processing of personal data is described in our Privacy Policy and, where
          applicable, our Data Processing Agreement. By using the platform, you acknowledge
          those documents.
        </p>
      </LegalSection>

      <LegalSection title="10. Disclaimers">
        <p>
          The platform is provided "as is" except as expressly stated in this Agreement or a
          separate written service agreement. We do not warrant uninterrupted or error-free
          operation. Information delivered through the platform does not constitute legal,
          tax, or financial advice unless expressly agreed in a separate engagement.
        </p>
      </LegalSection>

      <LegalSection title="11. Limitation of liability">
        <p>
          To the maximum extent permitted by Danish law, our aggregate liability arising out of
          or related to this Agreement is limited to the fees paid by you to us in the twelve
          months preceding the event giving rise to liability. We are not liable for indirect,
          incidental, special, consequential, or punitive damages, or for loss of profits,
          revenue, data, or business opportunity.
        </p>
      </LegalSection>

      <LegalSection title="12. Term and termination">
        <p>
          This Agreement begins when you first access the platform and continues until
          terminated. Either party may terminate in accordance with the notice provisions in
          your service agreement or, if none apply, with 30 days' written notice before the
          end of the current subscription term.
        </p>
        <p>
          Upon termination, your license to use the platform ends. We will provide your raw
          books from e-conomic as applicable, and handle personal data as described in our
          Privacy Policy and DPA.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes">
        <p>
          We may update this Agreement from time to time. Material changes will be communicated
          by posting the updated Agreement on our website and updating the "Last updated" date.
          Continued use after changes become effective constitutes acceptance.
        </p>
      </LegalSection>

      <LegalSection title="14. Governing law">
        <p>
          This Agreement is governed by the laws of Denmark. Disputes shall be subject to the
          exclusive jurisdiction of the courts of Denmark, with venue in Aarhus where
          permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="15. Contact">
        <p>Questions about this Agreement may be directed to:</p>
        <LegalEntityBlock />
      </LegalSection>
    </LegalPageLayout>
  );
}
