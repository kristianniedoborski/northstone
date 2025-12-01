import { Swords, Handshake } from "lucide-react";

export default function StrategySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <div className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">
              The Strategy
            </div>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6"
              data-testid="text-strategy-title"
            >
              Executive Leadership <br />
              Without The Headcount
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              You don't need a full-time CFO to get full-time value. Our senior
              finance partners join your management meetings, challenge your
              assumptions, and help you navigate fundraising and growth.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 shadow-sm flex items-center justify-center text-brand-900">
                  <Swords className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">Strategic Roadmap</h4>
                  <p className="text-sm text-gray-500">
                    Connecting financial KPIs to your 12-24 month business
                    goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 shadow-sm flex items-center justify-center text-brand-900">
                  <Handshake className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">
                    Fundraising Partners
                  </h4>
                  <p className="text-sm text-gray-500">
                    From financial modeling to investor Q&A, we stand beside
                    you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-accent opacity-20 transform -translate-x-4 translate-y-4 rounded-sm"></div>
            <div className="relative bg-white p-2 rounded-sm shadow-xl">
              <div className="bg-brand-900 rounded aspect-video flex flex-col p-4 sm:p-6 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                <div className="font-serif font-bold text-lg sm:text-xl mb-2 relative z-10">
                  Board Report: Q3
                </div>
                <div className="text-sm text-gray-400 mb-6 sm:mb-8 relative z-10">
                  Prepared for Board Meeting
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
                  <div className="bg-white/10 p-3 sm:p-4 rounded backdrop-blur-sm">
                    <div className="text-xs text-gray-300">Revenue Growth</div>
                    <div className="text-lg sm:text-xl font-bold flex items-center gap-2 flex-wrap">
                      $2.4M{" "}
                      <span className="text-xs bg-green-500 text-white px-1 rounded">
                        +12%
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/10 p-3 sm:p-4 rounded backdrop-blur-sm">
                    <div className="text-xs text-gray-300">Burn Multiple</div>
                    <div className="text-lg sm:text-xl font-bold flex items-center gap-2 flex-wrap">
                      1.2x{" "}
                      <span className="text-xs bg-green-500 text-white px-1 rounded">
                        Optimized
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                  <div className="text-xs text-gray-400 mb-2">
                    Cash Runway Forecast
                  </div>
                  <div className="w-full bg-brand-800 h-1.5 rounded-full">
                    <div
                      className="bg-brand-accent h-1.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
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
