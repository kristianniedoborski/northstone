import LegalPageLayout, { LegalEntityBlock, LegalSection } from "@/components/LegalPageLayout";
import { LEGAL_ENTITY } from "@/data/legal";

export default function Privacy() {
  return (
    <LegalPageLayout
      title="Privacy Policy - Northstone"
      description="Privacy Policy for Northstone website and accounting services operated by Thogersen Group ApS."
      path="/legal/privacy"
      badge="Privacy Policy"
    >
      <LegalSection title="1. General information">
        <p>
          {LEGAL_ENTITY.brand} ("we", "us", or "our"), operated by {LEGAL_ENTITY.name}, is
          committed to protecting your privacy and ensuring the confidentiality of your
          personal data. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website or use our services.
        </p>
        <p>
          This Privacy Policy is designed to comply with the General Data Protection
          Regulation (GDPR) (Regulation (EU) 2016/679) and other applicable data protection
          laws.
        </p>
      </LegalSection>

      <LegalSection title="2. Data controller">
        <p>The data controller responsible for the processing of your personal data is:</p>
        <LegalEntityBlock />
        <p>
          If you have any questions about this Privacy Policy or our data processing
          practices, please contact us at {LEGAL_ENTITY.email}.
        </p>
      </LegalSection>

      <LegalSection title="3. Types of personal data we collect">
        <p>We may collect and process the following types of personal data:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Contact information:</strong> Name, email address, phone number, company
            name, and job title
          </li>
          <li>
            <strong>Communication data:</strong> Information you provide when contacting us,
            including messages, inquiries, and feedback
          </li>
          <li>
            <strong>Accounting and business data:</strong> Financial records, payroll data, VAT
            information, and related business records accessed through e-conomic or submitted
            to us for service delivery
          </li>
          <li>
            <strong>Usage data:</strong> Information about how you use our website and platform,
            including IP address, browser type, pages visited, and time spent on pages
          </li>
          <li>
            <strong>Technical data:</strong> Device information, operating system, browser
            version, and other technical identifiers
          </li>
          <li>
            <strong>Marketing data:</strong> Your preferences for receiving marketing
            communications from us
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Legal basis for processing">
        <p>We process your personal data based on the following legal grounds under Article 6 of the GDPR:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Consent (Art. 6(1)(a) GDPR):</strong> When you have given explicit consent
            for specific processing activities, such as marketing communications
          </li>
          <li>
            <strong>Contract performance (Art. 6(1)(b) GDPR):</strong> To perform our contractual
            obligations or take steps at your request before entering into a contract
          </li>
          <li>
            <strong>Legal obligation (Art. 6(1)(c) GDPR):</strong> To comply with legal
            obligations, such as tax, accounting, and payroll requirements
          </li>
          <li>
            <strong>Legitimate interests (Art. 6(1)(f) GDPR):</strong> For our legitimate
            business interests, such as improving our services, platform security, and fraud
            prevention
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. How we use your personal data">
        <p>We use your personal data for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and maintain our bookkeeping, payroll, VAT, and reporting services</li>
          <li>To operate the {LEGAL_ENTITY.brand} platform and its integration with e-conomic</li>
          <li>To respond to your inquiries and provide customer support</li>
          <li>To send you marketing communications (with your consent)</li>
          <li>To improve our website, platform, and services</li>
          <li>To comply with legal and regulatory obligations</li>
          <li>To protect our rights and prevent fraud</li>
          <li>To analyze website and platform usage and trends</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Data retention">
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes
          outlined in this Privacy Policy, unless a longer retention period is required or
          permitted by law. When we no longer need your personal data, we will securely delete
          or anonymize it.
        </p>
        <p>
          Generally, we retain personal data for the duration of our business relationship plus
          any additional period required by applicable laws (for example tax, accounting, and
          audit requirements under Danish law).
        </p>
      </LegalSection>

      <LegalSection title="7. Your rights under GDPR">
        <p>As a data subject, you have the following rights:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Right of access (Art. 15 GDPR):</strong> Obtain confirmation as to whether
            we process your personal data and access that data
          </li>
          <li>
            <strong>Right to rectification (Art. 16 GDPR):</strong> Have inaccurate personal
            data corrected
          </li>
          <li>
            <strong>Right to erasure (Art. 17 GDPR):</strong> Request deletion of your personal
            data under certain circumstances
          </li>
          <li>
            <strong>Right to restrict processing (Art. 18 GDPR):</strong> Restrict the processing
            of your personal data
          </li>
          <li>
            <strong>Right to data portability (Art. 20 GDPR):</strong> Receive your personal data
            in a structured, commonly used format
          </li>
          <li>
            <strong>Right to object (Art. 21 GDPR):</strong> Object to processing based on
            legitimate interests
          </li>
          <li>
            <strong>Right to withdraw consent:</strong> Withdraw consent at any time where
            processing is based on consent
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at {LEGAL_ENTITY.email}. We will respond
          within one month.
        </p>
      </LegalSection>

      <LegalSection title="8. Data transfers outside the EU">
        <p>
          Your personal data is primarily processed within the European Economic Area (EEA).
          Where we transfer personal data outside the EEA, we ensure appropriate safeguards
          are in place, such as Standard Contractual Clauses approved by the European
          Commission, adequacy decisions, or other mechanisms required by GDPR.
        </p>
      </LegalSection>

      <LegalSection title="9. Cookies and tracking technologies">
        <p>
          We use cookies and similar tracking technologies to track activity on our website and
          store certain information. Cookies are small data files stored on your device.
        </p>
        <p>We use cookies for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Essential cookies: Required for the website and platform to function properly</li>
          <li>Analytics cookies: To understand how visitors use our website</li>
          <li>Marketing cookies: To deliver relevant communications (with your consent)</li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling certain cookies may
          affect website functionality.
        </p>
      </LegalSection>

      <LegalSection title="10. Data security">
        <p>
          We implement appropriate technical and organizational measures to protect personal
          data against unauthorized access, alteration, disclosure, or destruction, including
          encryption in transit and at rest where appropriate, access controls, authentication
          mechanisms, and staff training on data protection.
        </p>
      </LegalSection>

      <LegalSection title="11. Third-party services and sub-processors">
        <p>
          We use third-party service providers to operate our website, platform, and services.
          These providers process personal data only to perform specific tasks on our behalf and
          are obligated to protect it. Examples include e-conomic, cloud hosting providers,
          communication tools, payment processors, and offshore production partners engaged
          under our supervision.
        </p>
        <p>
          Where we act as a processor on your behalf, our Data Processing Agreement describes
          sub-processor arrangements in more detail.
        </p>
      </LegalSection>

      <LegalSection title="12. Children's privacy">
        <p>
          Our services are not directed to individuals under the age of 18. We do not knowingly
          collect personal data from children. If you believe we have collected personal data
          from a child, contact us immediately.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to this Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material
          changes by posting the updated policy on this page and updating the "Last updated"
          date.
        </p>
      </LegalSection>

      <LegalSection title="14. Supervisory authority">
        <p>
          If you believe our processing of your personal data violates GDPR, you have the right
          to lodge a complaint with a supervisory authority, in particular in the Member State
          of your habitual residence, place of work, or place of the alleged infringement.
        </p>
        <p>
          In Denmark, the supervisory authority is the Danish Data Protection Agency
          (Datatilsynet).
        </p>
      </LegalSection>

      <LegalSection title="15. Contact us">
        <p>If you have questions about this Privacy Policy or wish to exercise your rights:</p>
        <LegalEntityBlock />
      </LegalSection>
    </LegalPageLayout>
  );
}
