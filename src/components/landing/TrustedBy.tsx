const TrustedBy = () => {
  const partners = [
    {
      name: "IYES",
      logo: "https://iyes.global/images/iyes-logo.PNG",
      url: "https://iyes.global/",
      mobileWidth: 100,
      tabletWidth: 200,
      desktopWidth: 180
    },
    {
      name: "Noevé",
      logo: "https://thenoeve.com/noeve_logo.png",
      url: "https://thenoeve.com/",
      mobileWidth: 50,
      tabletWidth: 80,
      desktopWidth: 80
    },
    {
      name: "MediaFlow",
      logo: "/images/logos/mediaflow_logo.png",
      url: "#",
      mobileWidth: 100,
      tabletWidth: 150,
      desktopWidth: 180
    },
    {
      name: "RetailMax",
      logo: "/images/logos/retailmax_logo.png",
      url: "#",
      mobileWidth: 100,
      tabletWidth: 150,
      desktopWidth: 180
    },
    // {
    //   name: "HealthPlus",
    //   logo: "/images/logos/healthplus_logo.png",
    //   url: "#",
    //   mobileWidth: 100,
    //   tabletWidth: 150,
    //   desktopWidth: 180
    // },
    {
      name: "EduSmart",
      logo: "/images/logos/edusmart_logo.png",
      url: "#",
      mobileWidth: 100,
      tabletWidth: 150,
      desktopWidth: 180
    }
  ];

  return (
    <section className="py-16 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by innovative brands
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <a
              href={partner.url}
              key={index}
              target={partner.url === "#" ? undefined : "_blank"}
              rel={partner.url === "#" ? undefined : "noopener noreferrer"}
              onClick={(e) => {
                if (partner.url === "#") e.preventDefault();
              }}
              className="transition-opacity hover:opacity-80 flex items-center justify-center"
              aria-label={`Visit ${partner.name} website`}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-auto object-contain w-[var(--w-mobile)] md:w-[var(--w-tablet)] lg:w-[var(--w-desktop)]"
                style={{
                  '--w-mobile': `${partner.mobileWidth}px`,
                  '--w-tablet': `${partner.tabletWidth}px`,
                  '--w-desktop': `${partner.desktopWidth}px`
                } as React.CSSProperties}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
