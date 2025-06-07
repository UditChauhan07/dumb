export const ProjectMockups = {
  ECommerce: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="ecomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
      {/* Browser window */}
      <rect x="20" y="40" width="360" height="240" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="20" y="40" width="360" height="30" rx="8" fill="#f8fafc" />
      <circle cx="40" cy="55" r="5" fill="#ff6b6b" />
      <circle cx="55" cy="55" r="5" fill="#feca57" />
      <circle cx="70" cy="55" r="5" fill="#48dbfb" />

      {/* Header */}
      <rect x="30" y="80" width="100" height="20" rx="4" fill="url(#ecomGradient)" opacity="0.8" />
      <rect x="300" y="80" width="70" height="20" rx="10" fill="#48dbfb" />

      {/* Product grid */}
      <rect x="40" y="120" width="80" height="60" rx="4" fill="#f1f5f9" />
      <rect x="40" y="185" width="60" height="8" rx="4" fill="url(#ecomGradient)" opacity="0.6" />
      <rect x="40" y="200" width="40" height="6" rx="3" fill="#94a3b8" />

      <rect x="140" y="120" width="80" height="60" rx="4" fill="#f1f5f9" />
      <rect x="140" y="185" width="60" height="8" rx="4" fill="url(#ecomGradient)" opacity="0.6" />
      <rect x="140" y="200" width="40" height="6" rx="3" fill="#94a3b8" />

      <rect x="240" y="120" width="80" height="60" rx="4" fill="#f1f5f9" />
      <rect x="240" y="185" width="60" height="8" rx="4" fill="url(#ecomGradient)" opacity="0.6" />
      <rect x="240" y="200" width="40" height="6" rx="3" fill="#94a3b8" />
    </svg>
  ),

  HealthcareApp: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#00f2fe" />
        </linearGradient>
      </defs>
      {/* Phone outline */}
      <rect x="150" y="30" width="100" height="180" rx="15" fill="white" stroke="#e2e8f0" strokeWidth="3" />
      <rect x="160" y="50" width="80" height="140" rx="8" fill="#f8fafc" />

      {/* Header */}
      <rect x="165" y="55" width="70" height="15" rx="7" fill="url(#healthGradient)" />

      {/* Health icons */}
      <circle cx="180" cy="90" r="8" fill="#ff6b6b" opacity="0.8" />
      <text x="180" y="95" textAnchor="middle" className="text-xs" fill="white">
        ♥
      </text>

      <circle cx="220" cy="90" r="8" fill="#48dbfb" opacity="0.8" />
      <text x="220" y="95" textAnchor="middle" className="text-xs" fill="white">
        +
      </text>

      {/* Chart */}
      <polyline
        points="170,120 180,110 190,115 200,105 210,110 220,100 230,105"
        fill="none"
        stroke="url(#healthGradient)"
        strokeWidth="2"
      />

      {/* Buttons */}
      <rect x="170" y="140" width="60" height="12" rx="6" fill="url(#healthGradient)" opacity="0.7" />
      <rect x="170" y="160" width="60" height="12" rx="6" fill="#94a3b8" opacity="0.5" />
    </svg>
  ),

  Dashboard: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="dashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fa709a" />
          <stop offset="100%" stopColor="#fee140" />
        </linearGradient>
      </defs>
      {/* Monitor */}
      <rect x="50" y="50" width="300" height="180" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="60" y="70" width="280" height="20" rx="4" fill="#f8fafc" />

      {/* Sidebar */}
      <rect x="60" y="95" width="60" height="125" rx="4" fill="#f1f5f9" />
      <rect x="70" y="105" width="40" height="8" rx="4" fill="url(#dashGradient)" opacity="0.6" />
      <rect x="70" y="120" width="35" height="6" rx="3" fill="#94a3b8" />
      <rect x="70" y="130" width="30" height="6" rx="3" fill="#94a3b8" />

      {/* Main content */}
      <rect x="130" y="95" width="210" height="60" rx="4" fill="#f8fafc" />
      <rect x="140" y="105" width="80" height="8" rx="4" fill="url(#dashGradient)" />
      <rect x="140" y="120" width="60" height="6" rx="3" fill="#94a3b8" />

      {/* Charts */}
      <rect x="130" y="165" width="100" height="55" rx="4" fill="#f1f5f9" />
      <rect x="240" y="165" width="100" height="55" rx="4" fill="#f1f5f9" />

      {/* Chart elements */}
      <circle cx="180" cy="190" r="15" fill="url(#dashGradient)" opacity="0.7" />
      <rect x="250" y="180" width="8" height="30" fill="url(#dashGradient)" opacity="0.7" />
      <rect x="265" y="185" width="8" height="25" fill="url(#dashGradient)" opacity="0.5" />
      <rect x="280" y="175" width="8" height="35" fill="url(#dashGradient)" opacity="0.8" />
    </svg>
  ),
}
