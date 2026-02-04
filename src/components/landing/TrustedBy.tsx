const TrustedBy = () => {
  const partners = [
    "TechCorp",
    "FinanceHub", 
    "MediaFlow",
    "RetailMax",
    "HealthPlus",
    "EduSmart"
  ];

  return (
    <section className="py-16 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by innovative brands
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
