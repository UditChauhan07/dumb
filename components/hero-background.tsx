export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated background pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
        {/* Network nodes */}
        <circle cx="100" cy="100" r="3" fill="url(#heroGradient)" className="animate-pulse" />
        <circle cx="300" cy="150" r="3" fill="url(#heroGradient)" className="animate-pulse animation-delay-200" />
        <circle cx="500" cy="200" r="3" fill="url(#heroGradient)" className="animate-pulse animation-delay-400" />
        <circle cx="700" cy="100" r="3" fill="url(#heroGradient)" className="animate-pulse animation-delay-600" />
        <circle cx="900" cy="250" r="3" fill="url(#heroGradient)" className="animate-pulse animation-delay-800" />

        {/* Connecting lines */}
        <line x1="100" y1="100" x2="300" y2="150" stroke="url(#heroGradient)" strokeWidth="1" opacity="0.3" />
        <line x1="300" y1="150" x2="500" y2="200" stroke="url(#heroGradient)" strokeWidth="1" opacity="0.3" />
        <line x1="500" y1="200" x2="700" y2="100" stroke="url(#heroGradient)" strokeWidth="1" opacity="0.3" />
        <line x1="700" y1="100" x2="900" y2="250" stroke="url(#heroGradient)" strokeWidth="1" opacity="0.3" />

        {/* Tech symbols */}
        <g transform="translate(200, 300)" className="animate-float">
          <circle r="20" fill="url(#heroGradient)" opacity="0.1" />
          <text textAnchor="middle" dy="5" className="text-sm" fill="url(#heroGradient)">
            {"</>"}
          </text>
        </g>

        <g transform="translate(600, 400)" className="animate-float animation-delay-500">
          <circle r="20" fill="url(#heroGradient)" opacity="0.1" />
          <text textAnchor="middle" dy="5" className="text-sm" fill="url(#heroGradient)">
            ☁
          </text>
        </g>

        <g transform="translate(800, 150)" className="animate-float animation-delay-1000">
          <circle r="20" fill="url(#heroGradient)" opacity="0.1" />
          <text textAnchor="middle" dy="5" className="text-sm" fill="url(#heroGradient)">
            ⚡
          </text>
        </g>
      </svg>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95"></div>
    </div>
  )
}
