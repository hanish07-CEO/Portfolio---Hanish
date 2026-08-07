// SVG Data URIs for UniSell E-Commerce UI and Hanish Musini Tech Avatar

// Custom UniSell SME E-Commerce Marketplace Dashboard Banner
export const UNISELL_SHOWCASE_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090d16; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <linearGradient id="bgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#6366f1" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="450" fill="url(#bgGlow)"/>
  
  <!-- Subtle Grid Lines -->
  <g stroke="#334155" stroke-width="0.5" opacity="0.3">
    <path d="M0 50 H800 M0 100 H800 M0 150 H800 M0 200 H800 M0 250 H800 M0 300 H800 M0 350 H800 M0 400 H800" />
    <path d="M100 0 V450 M200 0 V450 M300 0 V450 M400 0 V450 M500 0 V450 M600 0 V450 M700 0 V450" />
  </g>

  <!-- Top App Navigation Header -->
  <rect x="20" y="20" width="760" height="54" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  
  <!-- UniSell Brand Logo -->
  <rect x="36" y="31" width="32" height="32" rx="8" fill="url(#primaryGrad)"/>
  <text x="52" y="53" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle">U</text>
  <text x="78" y="52" font-size="18" font-weight="800" fill="#ffffff">UniSell</text>
  <rect x="145" y="38" width="80" height="18" rx="4" fill="#6366f1" opacity="0.2"/>
  <text x="185" y="51" font-size="10" font-weight="700" fill="#818cf8" text-anchor="middle">SME MARKET</text>

  <!-- Search Bar -->
  <rect x="245" y="32" width="280" height="30" rx="8" fill="#0f172a" stroke="#475569" stroke-width="1"/>
  <text x="260" y="51" font-size="11" fill="#94a3b8">Search local SME stores, products...</text>

  <!-- Deployment & Cart Pills -->
  <rect x="540" y="32" width="125" height="30" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1"/>
  <circle cx="552" cy="47" r="4" fill="#34d399"/>
  <text x="562" y="51" font-size="11" font-weight="700" fill="#6ee7b7">Render: Live</text>

  <rect x="675" y="32" width="90" height="30" rx="8" fill="url(#primaryGrad)"/>
  <text x="720" y="51" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">Cart (3)</text>

  <!-- Main Storefront Grid -->
  <!-- Product 1 Card -->
  <rect x="20" y="90" width="235" height="230" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1" filter="url(#shadow)"/>
  <rect x="32" y="102" width="211" height="105" rx="10" fill="#0f172a"/>
  <!-- Product Graphic 1 -->
  <circle cx="137" cy="154" r="32" fill="#6366f1" opacity="0.2"/>
  <path d="M122 142 L152 142 L147 168 L127 168 Z" fill="none" stroke="#818cf8" stroke-width="3" stroke-linejoin="round"/>
  <text x="34" y="224" font-size="13" font-weight="700" fill="#f8fafc">Handcrafted Leather Goods</text>
  <text x="34" y="240" font-size="10" fill="#94a3b8">Local SME Artisan • Hyderabad</text>
  <text x="34" y="265" font-size="16" font-weight="800" fill="#34d399">₹1,499</text>
  <rect x="155" y="248" width="88" height="26" rx="6" fill="url(#primaryGrad)"/>
  <text x="199" y="265" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">+ Add to Cart</text>
  <rect x="34" y="280" width="85" height="16" rx="4" fill="#1e293b"/>
  <text x="76" y="292" font-size="9" fill="#94a3b8" text-anchor="middle">In Stock: 24 units</text>

  <!-- Product 2 Card -->
  <rect x="270" y="90" width="235" height="230" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1"/>
  <rect x="282" y="102" width="211" height="105" rx="10" fill="#0f172a"/>
  <!-- Product Graphic 2 -->
  <circle cx="387" cy="154" r="32" fill="#a855f7" opacity="0.2"/>
  <rect x="372" y="139" width="30" height="30" rx="6" fill="none" stroke="#c084fc" stroke-width="3"/>
  <text x="284" y="224" font-size="13" font-weight="700" fill="#f8fafc">Organic Herbal Tea Blend</text>
  <text x="284" y="240" font-size="10" fill="#94a3b8">Natural Foods SME • Surat</text>
  <text x="284" y="265" font-size="16" font-weight="800" fill="#34d399">₹499</text>
  <rect x="405" y="248" width="88" height="26" rx="6" fill="url(#primaryGrad)"/>
  <text x="449" y="265" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">+ Add to Cart</text>
  <rect x="284" y="280" width="85" height="16" rx="4" fill="#1e293b"/>
  <text x="326" y="292" font-size="9" fill="#94a3b8" text-anchor="middle">In Stock: 50 units</text>

  <!-- Right Dashboard Metrics Panel -->
  <rect x="520" y="90" width="260" height="230" rx="14" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="536" y="115" font-size="12" font-weight="800" fill="#a855f7">SELLER ANALYTICS &amp; DBMS</text>
  
  <rect x="536" y="130" width="228" height="50" rx="8" fill="#1e293b"/>
  <text x="548" y="150" font-size="10" fill="#94a3b8">Total SME Sales Revenue</text>
  <text x="548" y="170" font-size="18" font-weight="800" fill="#34d399">₹1,48,500 <tspan font-size="11" fill="#10b981">(+28.4%)</tspan></text>

  <rect x="536" y="190" width="228" height="50" rx="8" fill="#1e293b"/>
  <text x="548" y="210" font-size="10" fill="#94a3b8">Active SME Storefronts</text>
  <text x="548" y="230" font-size="18" font-weight="800" fill="#818cf8">42 Sellers <tspan font-size="11" fill="#6366f1">MySQL Online</tspan></text>

  <rect x="536" y="250" width="228" height="55" rx="8" fill="#1e293b" stroke="#6366f1" stroke-dasharray="3,3"/>
  <text x="548" y="270" font-size="10" font-weight="700" fill="#f8fafc">Architecture Stack</text>
  <text x="548" y="290" font-size="10" fill="#818cf8">React + Express + MySQL + Render</text>

  <!-- Bottom Architecture Highlights Banner -->
  <rect x="20" y="335" width="760" height="95" rx="14" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="40" y="360" font-size="13" font-weight="800" fill="#ffffff">UniSell E-Commerce Architecture — Built &amp; Founded by Hanish Musini</text>
  <text x="40" y="380" font-size="11" fill="#94a3b8">Empowering Small &amp; Medium Enterprises with inventory management, fast catalog search &amp; secure checkout.</text>
  
  <rect x="40" y="392" width="90" height="24" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1"/>
  <text x="85" y="408" font-size="10" font-weight="700" fill="#818cf8" text-anchor="middle">MySQL DBMS</text>

  <rect x="140" y="392" width="105" height="24" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1"/>
  <text x="192" y="408" font-size="10" font-weight="700" fill="#c084fc" text-anchor="middle">Render Deployed</text>

  <rect x="255" y="392" width="115" height="24" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1"/>
  <text x="312" y="408" font-size="10" font-weight="700" fill="#34d399" text-anchor="middle">Seller Stock Engine</text>

  <rect x="380" y="392" width="110" height="24" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1"/>
  <text x="435" y="408" font-size="10" font-weight="700" fill="#f43f5e" text-anchor="middle">Order Checkout</text>

  <rect x="620" y="392" width="140" height="24" rx="6" fill="url(#primaryGrad)"/>
  <text x="690" y="408" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">unisell.onrender.com ↗</text>
</svg>
`)}`;

// Custom Tech Portrait Avatar vector SVG of Hanish Musini (20-year-old CS student, dark wavy hair, tech founder aesthetic)
export const HANISH_AVATAR_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" style="background:#090d16; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <radialGradient id="avatarGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#7c3aed" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5d0a9"/>
      <stop offset="100%" stop-color="#e5b085"/>
    </linearGradient>
    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e1e24"/>
      <stop offset="100%" stop-color="#0b0b0e"/>
    </linearGradient>
    <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="50%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
  </defs>

  <!-- Background Studio Glow -->
  <rect width="500" height="500" fill="url(#avatarGlow)"/>

  <!-- Tech Hexagon Outer Ring -->
  <polygon points="250,15 450,120 450,380 250,485 50,380 50,120" fill="none" stroke="url(#ringGrad)" stroke-width="3" opacity="0.6"/>

  <!-- Developer Avatar Body -->
  <!-- Shoulders & Dark Grey T-shirt -->
  <path d="M120 450 Q250 370 380 450 L420 500 L80 500 Z" fill="url(#shirtGrad)"/>
  <path d="M160 430 Q250 385 340 430" stroke="#334155" stroke-width="2" fill="none"/>

  <!-- T-shirt Tech Icon Badge -->
  <rect x="225" y="420" width="50" height="24" rx="6" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="250" y="436" font-size="11" font-weight="900" fill="#818cf8" text-anchor="middle">&lt;HM/&gt;</text>

  <!-- Neck -->
  <rect x="215" y="280" width="70" height="75" rx="10" fill="#e5b085"/>
  <path d="M215 320 Q250 340 285 320" fill="#d49b6a" opacity="0.5"/>

  <!-- Face Shape -->
  <path d="M180 180 Q180 300 250 315 Q320 300 320 180 Q320 120 250 115 Q180 120 180 180 Z" fill="url(#skinGrad)"/>

  <!-- Ears -->
  <circle cx="175" cy="205" r="16" fill="#e5b085"/>
  <circle cx="325" cy="205" r="16" fill="#e5b085"/>

  <!-- Dark Wavy Hair -->
  <path d="M165 170 Q160 100 220 80 Q260 70 310 90 Q340 120 335 170 Q325 110 270 95 Q220 95 180 130 Z" fill="url(#hairGrad)"/>
  <!-- Top Volume Wavy Curls -->
  <path d="M170 140 C180 80, 230 65, 260 70 C310 70, 335 100, 330 140 C315 110, 280 85, 250 90 C210 85, 185 110, 170 140 Z" fill="#2a2a35"/>
  <path d="M190 120 C210 90, 260 85, 280 100 C300 90, 320 110, 325 130 C305 105, 275 95, 245 100 C215 95, 195 110, 190 120 Z" fill="#111116"/>

  <!-- Eyebrows -->
  <path d="M195 170 Q215 162 235 170" stroke="#111116" stroke-width="4.5" stroke-linecap="round" fill="none"/>
  <path d="M265 170 Q285 162 305 170" stroke="#111116" stroke-width="4.5" stroke-linecap="round" fill="none"/>

  <!-- Expressive Eyes -->
  <ellipse cx="215" cy="188" rx="10" ry="11" fill="#ffffff"/>
  <ellipse cx="285" cy="188" rx="10" ry="11" fill="#ffffff"/>
  <circle cx="215" cy="188" r="6" fill="#1e1b4b"/>
  <circle cx="285" cy="188" r="6" fill="#1e1b4b"/>
  <circle cx="217" cy="186" r="2" fill="#ffffff"/>
  <circle cx="287" cy="186" r="2" fill="#ffffff"/>

  <!-- Nose -->
  <path d="M250 188 L246 220 L254 220" stroke="#d49b6a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Friendly Confident Smile -->
  <path d="M225 250 Q250 270 275 250" stroke="#b86b4b" stroke-width="3.5" stroke-linecap="round" fill="none"/>

  <!-- Floating Tech Badges -->
  <g filter="drop-shadow(0px 4px 10px rgba(99,102,241,0.5))">
    <!-- Badge 1: IIIT Surat -->
    <rect x="30" y="70" width="115" height="30" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
    <text x="87" y="89" font-size="11" font-weight="800" fill="#a5b4fc" text-anchor="middle">IIIT SURAT '29</text>

    <!-- Badge 2: AI Engineer -->
    <rect x="350" y="70" width="120" height="30" rx="8" fill="#311042" stroke="#a855f7" stroke-width="1.5"/>
    <text x="410" y="89" font-size="11" font-weight="800" fill="#e9d5ff" text-anchor="middle">AI ENGINEER</text>

    <!-- Badge 3: UniSell Founder -->
    <rect x="330" y="340" width="140" height="32" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
    <text x="400" y="360" font-size="11" font-weight="800" fill="#6ee7b7" text-anchor="middle">UNISELL FOUNDER</text>
  </g>
</svg>
`)}`;

// Preset 2: Cyberpunk Matrix Developer Avatar
export const HANISH_AVATAR_CYBER_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" style="background:#022c22; font-family: monospace;">
  <defs>
    <radialGradient id="cyberGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#022c22" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="cyberFace" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#042f2e"/>
    </linearGradient>
  </defs>
  <rect width="500" height="500" fill="url(#cyberGlow)"/>
  <circle cx="250" cy="250" r="210" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="8 6"/>
  <circle cx="250" cy="250" r="180" fill="none" stroke="#059669" stroke-width="1.5"/>
  <path d="M130 450 Q250 350 370 450 Z" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
  <path d="M180 180 Q180 300 250 315 Q320 300 320 180 Q320 120 250 115 Z" fill="url(#cyberFace)" stroke="#34d399" stroke-width="2"/>
  <!-- Cyber Visor -->
  <rect x="180" y="170" width="140" height="35" rx="8" fill="#022c22" stroke="#10b981" stroke-width="2"/>
  <text x="250" y="193" font-size="14" font-weight="bold" fill="#34d399" text-anchor="middle">&lt;AI_SYSTEM_ONLINE&gt;</text>
  <path d="M220 250 Q250 265 280 250" stroke="#34d399" stroke-width="3" fill="none"/>
  <text x="250" y="420" font-size="16" font-weight="bold" fill="#6ee7b7" text-anchor="middle">HANISH MUSINI // CYBER_DEV</text>
</svg>
`)}`;

// Preset 3: Executive Luxury Dark Avatar
export const HANISH_AVATAR_EXECUTIVE_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" style="background:#18181b; font-family: system-ui, sans-serif;">
  <defs>
    <radialGradient id="goldGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#18181b" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#27272a"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
  </defs>
  <rect width="500" height="500" fill="url(#goldGlow)"/>
  <circle cx="250" cy="250" r="220" fill="none" stroke="url(#goldGrad)" stroke-width="3"/>
  <!-- Suit Blazer -->
  <path d="M110 460 L190 350 L250 400 L310 350 L390 460 Z" fill="url(#suitGrad)" stroke="#f59e0b" stroke-width="1.5"/>
  <path d="M250 400 L250 500" stroke="#f59e0b" stroke-width="2"/>
  <!-- Executive Face -->
  <path d="M185 180 Q185 295 250 310 Q315 295 315 180 Q315 125 250 120 Z" fill="#f8fafc" stroke="#d97706" stroke-width="1.5"/>
  <path d="M170 165 Q165 105 225 85 Q265 75 315 95 Q335 125 330 165 Z" fill="#27272a"/>
  <circle cx="215" cy="188" r="5" fill="#27272a"/>
  <circle cx="285" cy="188" r="5" fill="#27272a"/>
  <path d="M230 250 Q250 265 270 250" stroke="#d97706" stroke-width="3" fill="none" stroke-linecap="round"/>
  <rect x="175" y="420" width="150" height="28" rx="8" fill="#27272a" stroke="url(#goldGrad)" stroke-width="1.5"/>
  <text x="250" y="439" font-size="12" font-weight="800" fill="#fbbf24" text-anchor="middle">FOUNDER @ UNISELL</text>
</svg>
`)}`;

