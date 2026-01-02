const logos = [
  { name: "Deloitte", height: "h-8" },
  { name: "PwC", height: "h-20" },
  { name: "EY", height: "h-10" },
  { name: "KPMG", height: "h-8" },
  { name: "BDO", height: "h-9" },
];

export default function SocialProof() {
  return (
    <section className="py-10 border-y border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          WE ONLY HIRE FROM
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              data-testid={`logo-${logo.name.toLowerCase()}`}
            >
              <img
                src={`/${logo.name.toLowerCase()}-logo.png`}
                alt={logo.name}
                className={`${logo.height} w-auto object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
