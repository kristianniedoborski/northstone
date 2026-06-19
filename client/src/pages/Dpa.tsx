import LegalPageLayout, { LegalEntityBlock, LegalSection } from "@/components/LegalPageLayout";
import { LEGAL_ENTITY } from "@/data/legal";

export default function Dpa() {
  return (
    <LegalPageLayout
      title="Data Processing Agreement - Northstone"
      description="Data Processing Agreement between Thogersen Group ApS and clients for Northstone accounting services."
      path="/legal/dpa"
      badge="Data Processing Agreement"
    >
      <LegalSection title="1. Introduction">
        <p>
          This Data Processing Agreement ("DPA") forms part of the agreement between{" "}
          {LEGAL_ENTITY.name} ("Processor", "{LEGAL_ENTITY.brand}") and the client entity
          that engages our services ("Controller", "you"). It governs Processor's handling of
          personal data on behalf of Controller when delivering bookkeeping, payroll, VAT,
          reporting, and related services through the {LEGAL_ENTITY.brand} platform and its
          integration with e-conomic.
        </p>
        <p>
          This DPA is designed to meet the requirements of the General Data Protection
          Regulation (GDPR) (Regulation (EU) 2016/679) and applicable Danish data protection
          law.
        </p>
      </LegalSection>

      <LegalSection title="2. Roles and contact details">
        <p>
          Controller determines the purposes and means of processing personal data relating to
          its business, employees, customers, and suppliers. Processor processes such data
          solely on documented instructions from Controller to deliver agreed services.
        </p>
        <p className="font-semibold text-brand-900">Processor</p>
        <LegalEntityBlock />
        <p className="font-semibold text-brand-900 mt-4">Controller</p>
        <p>
          The client entity identified in the service agreement or onboarding documentation.
          Controller's contact details are those provided during onboarding.
        </p>
      </LegalSection>

      <LegalSection title="3. Subject matter and duration">
        <p>
          Processor provides accounting, payroll, VAT, reporting, and related financial
          operations for Controller using the {LEGAL_ENTITY.brand} platform integrated with
          Controller's e-conomic environment.
        </p>
        <p>
          This DPA applies for the duration of the service relationship and until all personal
          data has been deleted or returned in accordance with Section 12.
        </p>
      </LegalSection>

      <LegalSection title="4. Categories of data and data subjects">
        <p>Processor may process the following categories of personal data:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Employee and contractor data: names, contact details, salary, tax, and payroll information</li>
          <li>Customer and supplier data: names, contact details, transaction records, and payment information</li>
          <li>Financial and accounting data contained in e-conomic and related systems</li>
          <li>Communications and documents submitted by Controller or its representatives</li>
          <li>Technical and usage data related to platform access and service delivery</li>
        </ul>
        <p>Data subjects may include Controller's employees, contractors, customers, suppliers, and other business contacts.</p>
      </LegalSection>

      <LegalSection title="5. Processor obligations">
        <p>Processor shall:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Process personal data only on documented instructions from Controller, unless required by law</li>
          <li>Ensure persons authorized to process personal data are bound by confidentiality</li>
          <li>Implement appropriate technical and organizational security measures</li>
          <li>Not engage sub-processors without Controller's authorization as set out in Section 7</li>
          <li>Assist Controller with data subject requests and GDPR compliance obligations</li>
          <li>Notify Controller without undue delay upon becoming aware of a personal data breach</li>
          <li>Delete or return personal data upon termination of services, unless retention is required by law</li>
          <li>Make available information necessary to demonstrate compliance and allow audits as described in Section 11</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Controller obligations">
        <p>Controller shall:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensure it has lawful grounds to process and instruct Processor to process personal data</li>
          <li>Provide accurate and complete instructions and information necessary for service delivery</li>
          <li>Inform Processor promptly of restrictions or changes affecting data processing</li>
          <li>Respond to data subject requests where Controller is responsible for handling them</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Sub-processors">
        <p>
          Controller authorizes Processor to engage sub-processors necessary to deliver services.
          Current categories of sub-processors include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>e-conomic:</strong> ERP and accounting system hosting Controller's ledger and
            transactional data
          </li>
          <li>
            <strong>Cloud infrastructure providers:</strong> hosting, storage, and security services
            for the {LEGAL_ENTITY.brand} platform
          </li>
          <li>
            <strong>Offshore production partners:</strong> bookkeepers and support staff engaged to
            prepare entries, reconciliations, and related production tasks under Processor's
            supervision
          </li>
          <li>
            <strong>Communication and payment providers:</strong> email, document handling, and card
            payment services used in service delivery
          </li>
        </ul>
        <p>
          Processor will impose data protection obligations on sub-processors that are
          substantially similar to those in this DPA. Processor remains fully liable to
          Controller for sub-processor performance.
        </p>
        <p>
          Processor will notify Controller of intended changes to sub-processors and give
          Controller the opportunity to object on reasonable grounds relating to data protection.
        </p>
      </LegalSection>

      <LegalSection title="8. International transfers">
        <p>
          Personal data is primarily processed within the European Economic Area. Where
          processing involves transfers outside the EEA, Processor will ensure appropriate
          safeguards are in place, including Standard Contractual Clauses approved by the
          European Commission or other mechanisms permitted under GDPR.
        </p>
      </LegalSection>

      <LegalSection title="9. Security measures">
        <p>
          Processor implements technical and organizational measures appropriate to the risk,
          including access controls, encryption in transit and at rest where appropriate,
          logging and monitoring, staff training, and regular review of security practices.
          Details of specific measures may be provided upon request.
        </p>
      </LegalSection>

      <LegalSection title="10. Personal data breaches">
        <p>
          Processor will notify Controller without undue delay after becoming aware of a
          personal data breach affecting Controller's data. The notification will include, to
          the extent available, the nature of the breach, likely consequences, and measures
          taken or proposed to address the breach.
        </p>
      </LegalSection>

      <LegalSection title="11. Audits and information">
        <p>
          Processor will make available to Controller information reasonably necessary to
          demonstrate compliance with this DPA. Controller may conduct audits, including
          inspections, upon reasonable notice and subject to confidentiality and security
          requirements. Audits shall not unreasonably disrupt Processor's operations.
        </p>
      </LegalSection>

      <LegalSection title="12. Return and deletion of data">
        <p>
          Upon termination of services, Processor will, at Controller's choice, delete or
          return personal data processed on behalf of Controller, except where retention is
          required by applicable law (for example tax, accounting, or audit obligations).
          Controller's raw books in e-conomic remain in Controller's e-conomic subscription.
        </p>
      </LegalSection>

      <LegalSection title="13. Liability">
        <p>
          Liability under this DPA is subject to the limitations and exclusions set out in the
          applicable service agreement or End-User License Agreement between the parties, except
          where prohibited by mandatory law.
        </p>
      </LegalSection>

      <LegalSection title="14. Order of precedence">
        <p>
          If there is a conflict between this DPA and other agreements between the parties
          regarding data protection, this DPA prevails with respect to personal data processing
          obligations.
        </p>
      </LegalSection>

      <LegalSection title="15. Contact">
        <p>
          For questions about this DPA or to exercise rights relating to data processing,
          contact:
        </p>
        <LegalEntityBlock />
      </LegalSection>
    </LegalPageLayout>
  );
}
