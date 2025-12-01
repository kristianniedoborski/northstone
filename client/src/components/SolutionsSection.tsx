import { Receipt, FileText } from "lucide-react";

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-brand-light" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">
              The Foundation
            </div>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6"
              data-testid="text-solutions-title"
            >
              An Operational Backbone
              <br /> You Can Trust
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              A strategy is only as good as the data it's based on. We take over
              the entire finance back-office, implementing robust controls and
              best-in-class tech stacks (Xero, QuickBooks, Pleo, etc.).
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center text-brand-900">
                  <Receipt className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">
                    Precision Bookkeeping
                  </h4>
                  <p className="text-sm text-gray-500">
                    Every transaction categorized correctly. No mess at
                    year-end.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center text-brand-900">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">
                    Payables & Receivables
                  </h4>
                  <p className="text-sm text-gray-500">
                    We manage invoices and chase payments so you maintain cash
                    flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-900 transform translate-x-4 translate-y-4 rounded-sm"></div>
            <div className="relative bg-white p-2 rounded-sm shadow-xl">
              <div className="bg-gray-50 rounded aspect-video flex flex-col p-4 sm:p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6 gap-2 flex-wrap">
                  <div className="font-serif font-bold text-lg sm:text-xl text-brand-900">
                    Operational Health
                  </div>
                  <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                    Live Data
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded w-full">
                    <div className="h-2 bg-brand-900 rounded w-3/4"></div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded w-full">
                    <div className="h-2 bg-brand-700 rounded w-1/2"></div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded w-full">
                    <div className="h-2 bg-brand-accent rounded w-5/6"></div>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-brand-900">5</div>
                    <div className="text-xs text-gray-500">Days to Close</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-brand-900">100%</div>
                    <div className="text-xs text-gray-500">Reconciled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-brand-900">0</div>
                    <div className="text-xs text-gray-500">Errors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
