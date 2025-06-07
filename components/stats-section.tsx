export default function StatsSection() {
  const stats = [
    {
      number: "150+",
      label: "Projects Completed",
      icon: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <linearGradient id="statsGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>
          <rect x="10" y="35" width="8" height="15" fill="url(#statsGradient1)" />
          <rect x="20" y="25" width="8" height="25" fill="url(#statsGradient1)" />
          <rect x="30" y="15" width="8" height="35" fill="url(#statsGradient1)" />
          <rect x="40" y="20" width="8" height="30" fill="url(#statsGradient1)" />
        </svg>
      ),
    },
    {
      number: "50+",
      label: "Happy Clients",
      icon: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <linearGradient id="statsGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="100%" stopColor="#00f2fe" />
            </linearGradient>
          </defs>
          <circle cx="30" cy="25" r="8" fill="url(#statsGradient2)" />
          <path d="M15 45 Q15 35 30 35 Q45 35 45 45 L45 50 L15 50 Z" fill="url(#statsGradient2)" />
          <circle cx="22" cy="28" r="2" fill="white" />
          <circle cx="38" cy="28" r="2" fill="white" />
          <path d="M25 32 Q30 36 35 32" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <linearGradient id="statsGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fa709a" />
              <stop offset="100%" stopColor="#fee140" />
            </linearGradient>
          </defs>
          <polygon points="30,10 35,20 45,20 37,28 40,38 30,33 20,38 23,28 15,20 25,20" fill="url(#statsGradient3)" />
        </svg>
      ),
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <linearGradient id="statsGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a8edea" />
              <stop offset="100%" stopColor="#fed6e3" />
            </linearGradient>
          </defs>
          <circle cx="30" cy="30" r="18" fill="none" stroke="url(#statsGradient4)" strokeWidth="3" />
          <line x1="30" y1="18" x2="30" y2="30" stroke="url(#statsGradient4)" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="30" x2="38" y2="38" stroke="url(#statsGradient4)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="30" r="2" fill="url(#statsGradient4)" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 opacity-80">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
