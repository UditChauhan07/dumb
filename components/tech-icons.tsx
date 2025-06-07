export const TechIcons = {
  AI: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#aiGradient)" opacity="0.1" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="url(#aiGradient)" strokeWidth="2" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="url(#aiGradient)" strokeWidth="2" />
      <circle cx="100" cy="100" r="20" fill="url(#aiGradient)" />
      <text x="100" y="110" textAnchor="middle" className="text-lg font-bold" fill="url(#aiGradient)">
        AI
      </text>
    </svg>
  ),

  Cloud: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#00f2fe" />
        </linearGradient>
      </defs>
      <path
        d="M60 120 Q60 100 80 100 Q80 80 100 80 Q120 80 120 100 Q140 100 140 120 Q140 140 120 140 L80 140 Q60 140 60 120"
        fill="url(#cloudGradient)"
        opacity="0.8"
      />
      <circle cx="70" cy="110" r="3" fill="white" opacity="0.6" />
      <circle cx="90" cy="105" r="2" fill="white" opacity="0.6" />
      <circle cx="110" cy="115" r="2.5" fill="white" opacity="0.6" />
      <circle cx="130" cy="108" r="2" fill="white" opacity="0.6" />
    </svg>
  ),

  Mobile: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fa709a" />
          <stop offset="100%" stopColor="#fee140" />
        </linearGradient>
      </defs>
      <rect x="70" y="40" width="60" height="120" rx="10" fill="url(#mobileGradient)" opacity="0.8" />
      <rect x="75" y="50" width="50" height="80" rx="5" fill="white" opacity="0.9" />
      <circle cx="100" cy="145" r="5" fill="white" opacity="0.9" />
      <rect x="85" y="60" width="30" height="3" rx="1.5" fill="url(#mobileGradient)" />
      <rect x="85" y="70" width="25" height="2" rx="1" fill="url(#mobileGradient)" opacity="0.6" />
      <rect x="85" y="75" width="20" height="2" rx="1" fill="url(#mobileGradient)" opacity="0.6" />
    </svg>
  ),

  Web: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8edea" />
          <stop offset="100%" stopColor="#fed6e3" />
        </linearGradient>
      </defs>
      <rect x="40" y="60" width="120" height="80" rx="8" fill="url(#webGradient)" opacity="0.8" />
      <rect x="45" y="75" width="110" height="60" rx="4" fill="white" opacity="0.9" />
      <circle cx="55" cy="70" r="3" fill="#ff6b6b" />
      <circle cx="65" cy="70" r="3" fill="#feca57" />
      <circle cx="75" cy="70" r="3" fill="#48dbfb" />
      <rect x="55" y="85" width="40" height="3" rx="1.5" fill="url(#webGradient)" />
      <rect x="55" y="95" width="60" height="2" rx="1" fill="url(#webGradient)" opacity="0.6" />
      <rect x="55" y="100" width="50" height="2" rx="1" fill="url(#webGradient)" opacity="0.6" />
    </svg>
  ),

  Database: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="dbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="80" rx="40" ry="15" fill="url(#dbGradient)" opacity="0.8" />
      <rect x="60" y="80" width="80" height="40" fill="url(#dbGradient)" opacity="0.6" />
      <ellipse cx="100" cy="120" rx="40" ry="15" fill="url(#dbGradient)" opacity="0.8" />
      <ellipse cx="100" cy="90" rx="40" ry="15" fill="none" stroke="url(#dbGradient)" strokeWidth="2" />
      <ellipse cx="100" cy="100" rx="40" ry="15" fill="none" stroke="url(#dbGradient)" strokeWidth="2" />
    </svg>
  ),

  Analytics: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="analyticsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffecd2" />
          <stop offset="100%" stopColor="#fcb69f" />
        </linearGradient>
      </defs>
      <rect x="60" y="120" width="15" height="40" fill="url(#analyticsGradient)" />
      <rect x="80" y="100" width="15" height="60" fill="url(#analyticsGradient)" />
      <rect x="100" y="80" width="15" height="80" fill="url(#analyticsGradient)" />
      <rect x="120" y="90" width="15" height="70" fill="url(#analyticsGradient)" />
      <polyline
        points="67,120 87,100 107,80 127,90"
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="67" cy="120" r="4" fill="#ff6b6b" />
      <circle cx="87" cy="100" r="4" fill="#ff6b6b" />
      <circle cx="107" cy="80" r="4" fill="#ff6b6b" />
      <circle cx="127" cy="90" r="4" fill="#ff6b6b" />
    </svg>
  ),
}
