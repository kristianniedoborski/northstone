import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  FileText, 
  Receipt, 
  Calculator, 
  Check, 
  BarChart3,
  Users,
  Target,
  Zap,
  Shield,
  PieChart,
  Briefcase
} from "lucide-react";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                <span className="w-2 h-2 bg-brand-accent rounded-full mr-2"></span>
                <span className="text-xs font-semibold text-brand-900 uppercase tracking-wide">
                  Complete Finance Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-900 font-serif font-bold leading-tight mb-6">
                Three Solutions.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 to-brand-700 italic">
                  One Subscription.
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Get fractional CFO expertise, comprehensive bookkeeping, and VAT & tax compliance - all bundled into a single, integrated finance function designed for Danish growth-stage companies.
              </p>
              <Button
                onClick={() => window.open("https://calendly.com/kristian-n-thogersen/30min", "_blank")}
                className="bg-brand-900 hover:bg-brand-accent text-white px-6 py-3 h-auto text-base"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Fractional CFO Solution */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">
                  Strategic Leadership
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">
                  Fractional CFO Services
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Don't hire a CFO - subscribe to one. Get senior-level financial strategy and leadership without the full-time headcount. Our experienced CFO partners provide strategic guidance, financial planning, and investor relations support.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 shadow-sm flex items-center justify-center text-brand-900">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">Financial Planning & Analysis</h4>
                      <p className="text-sm text-gray-500">
                        Comprehensive budgeting, re-forecasting, and scenario planning to guide your critical business decisions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 shadow-sm flex items-center justify-center text-brand-900">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">Strategic Business Planning</h4>
                      <p className="text-sm text-gray-500">
                        Connect financial KPIs to your 12-24 month business goals with data-driven strategic guidance.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 shadow-sm flex items-center justify-center text-brand-900">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">Investor & Board Reporting</h4>
                      <p className="text-sm text-gray-500">
                        Professional board decks, investor-grade financial statements, and due diligence support for fundraising.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 shadow-sm flex items-center justify-center text-brand-900">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">Fundraising Support</h4>
                      <p className="text-sm text-gray-500">
                        Financial modeling, investor Q&A preparation, and strategic guidance throughout your funding rounds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-brand-900 transform translate-x-4 translate-y-4 rounded-sm"></div>
                <div className="relative bg-white p-2 rounded-sm shadow-xl">
                  <div className="bg-brand-900 rounded aspect-video flex flex-col p-4 sm:p-6 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                    <div className="font-serif font-bold text-lg sm:text-xl mb-2 relative z-10">
                      Strategic Dashboard
                    </div>
                    <div className="text-sm text-gray-400 mb-6 sm:mb-8 relative z-10">
                      Real-time Financial Intelligence
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
                      <div className="bg-white/10 p-3 sm:p-4 rounded backdrop-blur-sm">
                        <div className="text-xs text-gray-300 mb-1">Cash Runway</div>
                        <div className="text-lg sm:text-xl font-bold">18 Months</div>
                      </div>
                      <div className="bg-white/10 p-3 sm:p-4 rounded backdrop-blur-sm">
                        <div className="text-xs text-gray-300 mb-1">Burn Multiple</div>
                        <div className="text-lg sm:text-xl font-bold">1.2x</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                      <div className="text-xs text-gray-400 mb-2">Revenue Forecast</div>
                      <div className="w-full bg-brand-800 h-1.5 rounded-full">
                        <div className="bg-brand-accent h-1.5 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bookkeeping Solution */}
        <section className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <div className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">
                  Operational Excellence
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">
                  Complete Bookkeeping Services
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  End-to-end bookkeeping done for you. Our team of experts handles transaction categorization, account reconciliation, and financial reporting - giving you real-time insights without the manual work.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center text-brand-900">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">Automated Transaction Processing</h4>
                      <p className="text-sm text-gray-500">
                        Smart categorization powered by automation with human oversight ensures accuracy and saves time.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center text-brand-900">
                      <Receipt className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">Month-End Close</h4>
                      <p className="text-sm text-gray-500">
                        Books closed in 5 days with complete financial statements, budget vs. actuals, and variance analysis.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center text-brand-900">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">Real-Time Financial Reporting</h4>
                      <p className="text-sm text-gray-500">
                        Access updated income statements, balance sheets, and cash flow reports anytime, anywhere.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center text-brand-900">
                      <PieChart className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">Payables & Receivables Management</h4>
                      <p className="text-sm text-gray-500">
                        We manage invoices, process payments, and chase receivables to maintain healthy cash flow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-brand-900 transform -translate-x-4 translate-y-4 rounded-sm"></div>
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
                    <div className="space-y-3 mb-6">
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
                    <div className="grid grid-cols-3 gap-4">
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

        {/* VAT & Tax Solution */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">
                  Compliance & Optimization
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">
                  VAT & Tax Services
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Stay compliant and maximize savings. Our tax experts handle VAT filing, tax preparation, and help you claim R&D credits available to Danish tech companies - all while ensuring full compliance with Danish tax regulations.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 shadow-sm flex items-center justify-center text-brand-900">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">VAT Compliance & Filing</h4>
                      <p className="text-sm text-gray-500">
                        Accurate VAT returns filed on time, with ongoing compliance monitoring and guidance.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 shadow-sm flex items-center justify-center text-brand-900">
                      <Calculator className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">Tax Preparation & Optimization</h4>
                      <p className="text-sm text-gray-500">
                        Year-end tax packages with everything you need, plus strategic tax planning to minimize liabilities.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 shadow-sm flex items-center justify-center text-brand-900">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">R&D Credit Support</h4>
                      <p className="text-sm text-gray-500">
                        Specialized support for tech companies to identify, document, and claim R&D tax credits available in Denmark.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 shadow-sm flex items-center justify-center text-brand-900">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 mb-1">Payroll Tax Management</h4>
                      <p className="text-sm text-gray-500">
                        Complete payroll processing with proper tax withholding and compliance reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-brand-accent opacity-20 transform translate-x-4 translate-y-4 rounded-sm"></div>
                <div className="relative bg-white p-2 rounded-sm shadow-xl">
                  <div className="bg-white rounded aspect-video flex flex-col p-4 sm:p-6 border-2 border-brand-accent">
                    <div className="font-serif font-bold text-lg sm:text-xl text-brand-900 mb-2">
                      Tax Compliance Status
                    </div>
                    <div className="text-sm text-gray-600 mb-6">
                      All filings up to date
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                        <span className="text-sm font-medium text-gray-700">VAT Returns</span>
                        <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">Current</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                        <span className="text-sm font-medium text-gray-700">Annual Tax Filing</span>
                        <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">Ready</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                        <span className="text-sm font-medium text-gray-700">R&D Credits</span>
                        <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded">Eligible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Value Proposition */}
        <section className="py-24 bg-brand-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                One Integrated Finance Function
              </h2>
              <p className="text-xl text-gray-300">
                All three solutions work together seamlessly. Your CFO has real-time access to accurate books. Your bookkeeper understands your tax requirements. Your tax advisor knows your strategic goals. No silos, no handoffs, no confusion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 bg-white/5 border-white/10 text-white">
                <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Unified Data</h3>
                <p className="text-gray-300 text-sm">
                  All financial data lives in one integrated system. No duplicate entries, no version conflicts, no confusion.
                </p>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10 text-white">
                <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Single Point of Contact</h3>
                <p className="text-gray-300 text-sm">
                  One dedicated team handles everything. No juggling multiple vendors or explaining context repeatedly.
                </p>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10 text-white">
                <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Predictable Pricing</h3>
                <p className="text-gray-300 text-sm">
                  One monthly subscription covers CFO, bookkeeping, and tax services. No surprise invoices or hourly billing.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button
                onClick={() => window.open("https://calendly.com/kristian-n-thogersen/30min", "_blank")}
                className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-3 h-auto text-base"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
