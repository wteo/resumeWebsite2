import { useState, useEffect } from "react";

const STICKY_COLORS = {
  yellow: { bg: "#FEF3C7", border: "#F59E0B", shadow: "rgba(245, 158, 11, 0.2)", tape: "#fde68a" },
  pink: { bg: "#FCE7F3", border: "#EC4899", shadow: "rgba(236, 72, 153, 0.2)", tape: "#fbcfe8" },
  green: { bg: "#D1FAE5", border: "#059669", shadow: "rgba(5, 150, 105, 0.2)", tape: "#a7f3d0" },
  blue: { bg: "#DBEAFE", border: "#2563EB", shadow: "rgba(37, 99, 235, 0.2)", tape: "#bfdbfe" },
  purple: { bg: "#EDE9FE", border: "#7C3AED", shadow: "rgba(124, 58, 237, 0.2)", tape: "#ddd6fe" },
  orange: { bg: "#FFEDD5", border: "#EA580C", shadow: "rgba(234, 88, 12, 0.2)", tape: "#fed7aa" },
  mint: { bg: "#CCFBF1", border: "#0D9488", shadow: "rgba(13, 148, 136, 0.2)", tape: "#99f6e4" },
  rose: { bg: "#FFE4E6", border: "#E11D48", shadow: "rgba(225, 29, 72, 0.2)", tape: "#fecdd3" },
};

const PAPER = {
  bg: "#FFFEF7",
  lines: "#e8e4d9",
  dots: "#d4d0c5",
  text: "#2D2926",
  textLight: "#6B6560",
  pencil: "#4A4543",
  marker: "#1a1a1a",
  red: "#DC2626",
};

const HandFont = "'Averia Serif Libre', Georgia, 'Times New Roman', serif";
const BodyFont = "'Averia Serif Libre', Georgia, 'Times New Roman', serif";

const randomRotation = (seed, range = 2) => {
  const hash = Math.sin(seed * 9301 + 49297) % 233280;
  return ((hash / 233280) * range * 2 - range).toFixed(1);
};

const WobblyArrow = ({ x1, y1, x2, y2, color = PAPER.pencil, label = "", bidirectional = false }) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const perpX = -dy / len * 8;
  const perpY = dx / len * 8;
  const wobble1X = midX + perpX + (Math.sin(x1 * 0.1) * 4);
  const wobble1Y = midY + perpY + (Math.cos(y1 * 0.1) * 4);

  const ux = dx / len;
  const uy = dy / len;
  const arrowLen = 10;
  const arrowW = 5;

  return (
    <g>
      <path
        d={`M ${x1} ${y1} Q ${wobble1X} ${wobble1Y} ${x2} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
        style={{ filter: "url(#pencil-texture)" }}
      />
      <polygon
        points={`${x2},${y2} ${x2 - ux * arrowLen + uy * arrowW},${y2 - uy * arrowLen - ux * arrowW} ${x2 - ux * arrowLen - uy * arrowW},${y2 - uy * arrowLen + ux * arrowW}`}
        fill={color}
        opacity="0.6"
      />
      {bidirectional && (
        <polygon
          points={`${x1},${y1} ${x1 + ux * arrowLen + uy * arrowW},${y1 + uy * arrowLen - ux * arrowW} ${x1 + ux * arrowLen - uy * arrowW},${y1 + uy * arrowLen + ux * arrowW}`}
          fill={color}
          opacity="0.6"
        />
      )}
      {label && (
        <text
          x={wobble1X}
          y={wobble1Y - 6}
          fill={PAPER.textLight}
          fontSize="13"
          fontFamily={BodyFont}
          textAnchor="middle"
          transform={`rotate(${(() => { let a = Math.atan2(dy, dx) * 180 / Math.PI; return a > 90 || a < -90 ? a + 180 : a; })()}, ${wobble1X}, ${wobble1Y - 6})`}
        >
          {label}
        </text>
      )}
    </g>
  );
};

const TapeStrip = ({ x, y, width = 60, rotation = 0, color = "#fde68a" }) => (
  <rect
    x={x - width / 2}
    y={y - 6}
    width={width}
    height={12}
    rx="1"
    fill={color}
    opacity="0.7"
    transform={`rotate(${rotation}, ${x}, ${y})`}
    style={{ filter: "url(#tape-shadow)" }}
  />
);

const StickyNote = ({ x, y, width, height, color, title, subtitle, items, rotation = 0, id, tapeAngle = 0 }) => {
  const c = STICKY_COLORS[color] || STICKY_COLORS.yellow;
  const rot = rotation || randomRotation(id, 2.5);
  const displayHeight = height;

  return (
    <g
      style={{ transition: "transform 0.2s" }}
      transform={`rotate(${rot}, ${x + width / 2}, ${y + displayHeight / 2})`}
    >
      <TapeStrip x={x + width / 2} y={y - 2} width={50} rotation={tapeAngle} color={c.tape} />

      <rect
        x={x}
        y={y}
        width={width}
        height={displayHeight}
        rx="2"
        fill={c.bg}
        stroke="none"
        style={{
          filter: "url(#sticky-shadow)",
          transition: "height 0.3s ease",
        }}
      />

      <rect
        x={x}
        y={y + displayHeight - 15}
        width={width}
        height={15}
        fill={c.bg}
        opacity="0.85"
        rx="0"
      />

      <line
        x1={x + 8} y1={y + 6} x2={x + 8} y2={y + displayHeight - 8}
        stroke={c.border} strokeWidth="2" opacity="0.15"
      />

      <text
        x={x + 16}
        y={y + 26}
        fill={c.border}
        fontSize="17"
        fontFamily={HandFont}
        fontWeight="700"
        letterSpacing="0.5"
      >
        {title}
      </text>

      {subtitle && (
        <text
          x={x + 16}
          y={y + 43}
          fill={PAPER.textLight}
          fontSize="12"
          fontFamily={BodyFont}
        >
          {subtitle}
        </text>
      )}

      {items && items.map((item, i) => {
        const itemY = y + (subtitle ? 60 : 48) + i * 18;
        if (itemY > y + displayHeight - 10) return null;
        return (
          <text
            key={i}
            x={x + 18}
            y={itemY}
            fill={PAPER.text}
            fontSize="13"
            fontFamily={BodyFont}
            opacity="0.85"
          >
            {item}
          </text>
        );
      })}
    </g>
  );
};

const SectionDivider = ({ y, label }) => (
  <g>
    <line
      x1={30} y1={y} x2={1160} y2={y}
      stroke={PAPER.pencil}
      strokeWidth="1.5"
      strokeDasharray="8,6"
      opacity="0.2"
    />
    <rect x={40} y={y - 14} width={label.length * 11 + 20} height={28} rx="4" fill={PAPER.bg} />
    <text
      x={50}
      y={y + 5}
      fill={PAPER.pencil}
      fontSize="16"
      fontFamily={HandFont}
      fontWeight="700"
      letterSpacing="2"
      opacity="0.5"
    >
      {label}
    </text>
  </g>
);

const FlowStep = ({ x, y, label, sub, index, isLast }) => {
  const colors = ["#FEF3C7", "#D1FAE5", "#DBEAFE", "#EDE9FE", "#FCE7F3", "#CCFBF1", "#FFEDD5", "#FFE4E6"];
  const borderColors = ["#F59E0B", "#059669", "#2563EB", "#7C3AED", "#EC4899", "#0D9488", "#EA580C", "#E11D48"];
  const rot = randomRotation(index * 17, 3);

  return (
    <g transform={`rotate(${rot}, ${x + 60}, ${y + 35})`}>
      <rect
        x={x} y={y} width={120} height={70}
        rx="3"
        fill={colors[index % colors.length]}
        style={{ filter: "url(#sticky-shadow)" }}
      />
      <text
        x={x + 10} y={y + 16}
        fill={PAPER.textLight}
        fontSize="12"
        fontFamily={BodyFont}
      >
        Step {index + 1}
      </text>
      <text
        x={x + 10} y={y + 36}
        fill={borderColors[index % borderColors.length]}
        fontSize="16"
        fontFamily={HandFont}
        fontWeight="700"
      >
        {label}
      </text>
      <text
        x={x + 10} y={y + 54}
        fill={PAPER.textLight}
        fontSize="12"
        fontFamily={BodyFont}
      >
        {sub}
      </text>
      {!isLast && (
        <g>
          <line
            x1={x + 125} y1={y + 35}
            x2={x + 147} y2={y + 35}
            stroke={PAPER.pencil}
            strokeWidth="2"
            opacity="0.4"
            strokeLinecap="round"
          />
          <polygon
            points={`${x + 150},${y + 35} ${x + 143},${y + 30} ${x + 143},${y + 40}`}
            fill={PAPER.pencil}
            opacity="0.4"
          />
        </g>
      )}
    </g>
  );
};

const PaperHole = ({ x, y }) => (
  <g>
    <circle cx={x} cy={y} r="12" fill="#e8e4d9" stroke="#d4d0c5" strokeWidth="1.5" />
    <circle cx={x} cy={y} r="8" fill="#f5f0e8" />
  </g>
);

export default function SketchpadArchitecture() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      background: "#e8e4d9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "30px 16px",
      fontFamily: BodyFont,
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300;400;700&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sketch-container {
          animation: fadeIn 0.6s ease-out;
        }
        .sticky-hover:hover {
          filter: brightness(0.98);
        }
      `}</style>

      <div className="sketch-container" style={{
        maxWidth: 1200,
        width: "100%",
        background: PAPER.bg,
        borderRadius: 4,
        boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08), inset 0 0 80px rgba(0,0,0,0.02)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Paper texture dots */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${PAPER.dots} 0.5px, transparent 0.5px)`,
          backgroundSize: "24px 24px",
          opacity: 0.3,
          pointerEvents: "none",
        }} />

        {/* Ring holes at top */}
        <div style={{ position: "relative", height: 40, borderBottom: `1px solid ${PAPER.lines}` }}>
          <svg width="100%" height="40" style={{ position: "absolute", top: 0, left: 0 }}>
            {[120, 300, 480, 660, 840, 1020].map((hx, i) => (
              <PaperHole key={i} x={hx} y={20} />
            ))}
          </svg>
        </div>

        {/* Title area */}
        <div style={{ padding: "30px 50px 10px", position: "relative" }}>
          <div style={{
            fontSize: 14,
            fontFamily: BodyFont,
            color: PAPER.textLight,
            marginBottom: 4,
            letterSpacing: 1,
          }}>
            SYSTEM ARCHITECTURE ・ CASE STUDY
          </div>
          <h1 style={{
            fontSize: 42,
            fontFamily: HandFont,
            fontWeight: 700,
            color: PAPER.marker,
            margin: "0 0 4px 0",
            lineHeight: 1.1,
          }}>
            Interactive Quote Platform
          </h1>
          <div style={{
            fontSize: 18,
            fontFamily: BodyFont,
            color: PAPER.textLight,
          }}>
            HubSpot CMS + Express API + CRM Integration
          </div>

          {/* Underline scribble */}
          <svg width="380" height="8" style={{ marginTop: 4, opacity: 0.3 }}>
            <path d="M 0 4 Q 40 0, 80 4 Q 120 8, 160 4 Q 200 0, 240 4 Q 280 8, 320 4 Q 360 0, 380 4" fill="none" stroke={PAPER.pencil} strokeWidth="2" />
          </svg>
        </div>

        {/* Main SVG Canvas */}
        <svg
          viewBox="0 0 1200 1420"
          style={{
            width: "100%",
            padding: "0 10px",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <defs>
            <filter id="sticky-shadow">
              <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.1)" />
            </filter>
            <filter id="tape-shadow">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="rgba(0,0,0,0.06)" />
            </filter>
            <filter id="pencil-texture">
              <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
            </filter>
          </defs>

          {/* ── PRESENTATION LAYER ── */}
          <SectionDivider y={20} label="📋  PRESENTATION LAYER" />

          <StickyNote
            id="cms"
            x={30} y={50} width={250} height={210}
            color="orange"
            title="HubSpot CMS"
            subtitle="Quote Template (HubL)"
            items={[
              "• Hero Banner module",
              "• Letterhead w/ branding",
              "• Line Items Table",
              "• Benefits Checklist",
              "• Agreement Form",
              "• Footer w/ terms",
            ]}
            rotation={-1.5}
            tapeAngle={-5}
          />

          <StickyNote
            id="clientjs"
            x={310} y={60} width={250} height={210}
            color="blue"
            title="Client-Side JS"
            subtitle="Interactive Quote Logic"
            items={[
              "• Checkbox Toggle",
              "  (Services / Add-ons)",
              "• Real-time Subtotal Calc",
              "• GST Calculation (10%)",
              "• Currency Formatting",
              "• Product Selection State",
            ]}
            rotation={1.2}
          />

          <StickyNote
            id="manager"
            x={590} y={45} width={260} height={220}
            color="purple"
            title="QuoteAcceptanceManager"
            subtitle="Orchestrator Class"
            items={[
              "• Status Check on Load",
              "• Product Data Extraction",
              "• Acceptance Submission",
              "• Accepted State Display",
              "• Duplicate Prevention",
              "• Error Handling",
            ]}
            rotation={-0.8}
            tapeAngle={-2}
          />

          <StickyNote
            id="uistates"
            x={880} y={55} width={230} height={200}
            color="yellow"
            title="UI States"
            subtitle="Visual Feedback"
            items={[
              "• Selected / Not Selected",
              "• Faded (unselected upsell)",
              "• Locked (mandatory svc)",
              "• Loading Descriptions",
              "• Success Overlay",
            ]}
            rotation={1.8}
            tapeAngle={5}
          />

          {/* Arrows between presentation notes */}
          <WobblyArrow x1={275} y1={150} x2={310} y2={155} color={STICKY_COLORS.orange.border} label="renders" />
          <WobblyArrow x1={555} y1={160} x2={590} y2={150} color={STICKY_COLORS.blue.border} label="drives" />
          <WobblyArrow x1={845} y1={150} x2={882} y2={148} color={STICKY_COLORS.purple.border} label="updates" />

          {/* ── APPLICATION LAYER ── */}
          <SectionDivider y={310} label="⚙️  APPLICATION LAYER" />

          <StickyNote
            id="api"
            x={30} y={340} width={300} height={310}
            color="green"
            title="Express API Server"
            subtitle="Node.js on Render"
            items={[
              "GET  /api/deals/:id",
              "GET  /api/products/:id",
              "GET  /api/products/:id/desc",
              "POST /api/products/batch",
              "GET  /api/quotes/:no/status",
              "GET  /api/quotes/:no/products",
              "POST /api/quotes/accept",
              "DEL  /api/cache/clear",
              "GET  /health",
              "",
              "↪ 9 endpoints total",
            ]}
            rotation={-0.5}
            tapeAngle={-3}
          />

          <StickyNote
            id="middleware"
            x={370} y={350} width={240} height={200}
            color="mint"
            title="Middleware Pipeline"
            subtitle="Request Processing"
            items={[
              "① CORS (origin whitelist)",
              "② Rate Limiter (1k/15min)",
              "③ JSON Body Parser",
              "④ Request Logger",
              "⑤ Error Handler",
            ]}
            rotation={1.5}
            tapeAngle={4}
          />

          <StickyNote
            id="cache"
            x={390} y={575} width={200} height={90}
            color="blue"
            title="NodeCache"
            subtitle="In-Memory TTL Cache"
            items={[]}
            rotation={-2}
            tapeAngle={-6}
          />

          <StickyNote
            id="invoice"
            x={660} y={340} width={280} height={210}
            color="pink"
            title="Invoice Service"
            subtitle="Automated Generation"
            items={[
              "• 50% Deposit Invoice",
              "  (due immediately)",
              "• 50% Balance Invoice",
              "  (due on completion)",
              "• Line Item Creation",
              "• Association Creation",
              "• Auto-set to 'open' status",
            ]}
            rotation={0.7}
            tapeAngle={2}
          />

          <StickyNote
            id="calc"
            x={690} y={570} width={250} height={110}
            color="green"
            title="Calculations Util"
            subtitle="Price Engine"
            items={[
              "calculateSubtotal() → GST(10%)",
              "calculateTotal() → sub + GST",
            ]}
            rotation={-1.2}
            tapeAngle={-4}
          />

          {/* Arrows between application notes */}
          <WobblyArrow x1={200} y1={340} x2={435} y2={275} color={STICKY_COLORS.green.border} label="fetch()" />
          <WobblyArrow x1={720} y1={265} x2={280} y2={345} color={STICKY_COLORS.purple.border} label="POST /accept" />
          <WobblyArrow x1={328} y1={470} x2={372} y2={440} color={STICKY_COLORS.green.border} />
          <WobblyArrow x1={310} y1={580} x2={390} y2={600} color={STICKY_COLORS.green.border} label="get/set" />
          <WobblyArrow x1={328} y1={540} x2={660} y2={430} color={STICKY_COLORS.green.border} label="on acceptance" />

          {/* ── DATA LAYER ── */}
          <SectionDivider y={720} label="💾  DATA & INTEGRATION LAYER" />

          <StickyNote
            id="crmstandard"
            x={30} y={750} width={250} height={190}
            color="orange"
            title="HubSpot CRM"
            subtitle="Standard Objects"
            items={[
              "▸ Deals (job_address, stage)",
              "▸ Contacts",
              "▸ Companies",
              "▸ Quotes (hs_status)",
              "▸ Line Items",
            ]}
            rotation={1.3}
            tapeAngle={3}
          />

          <StickyNote
            id="crmcustom"
            x={320} y={760} width={280} height={190}
            color="rose"
            title="Custom Objects"
            subtitle="App-Specific Data"
            items={[
              "▸ Accepted Quotes",
              "  (quote_no, is_accepted,",
              "   totals, timestamps)",
              "▸ Selected Products",
              "  (sku, name, qty, price,",
              "   amount, tax, discount)",
            ]}
            rotation={-0.9}
            tapeAngle={-4}
          />

          <StickyNote
            id="invoices"
            x={640} y={750} width={220} height={180}
            color="pink"
            title="Invoices"
            subtitle="HubSpot Invoice Objects"
            items={[
              "▸ Deposit Invoice",
              "▸ Balance Invoice",
              "▸ Associated Line Items",
              "▸ Contact/Company Links",
            ]}
            rotation={1.6}
            tapeAngle={5}
          />

          <StickyNote
            id="assoc"
            x={900} y={760} width={210} height={180}
            color="yellow"
            title="Associations"
            subtitle="CRM Object Links"
            items={[
              "▸ Quote → Deal",
              "▸ Quote → Contact",
              "▸ Quote → Company",
              "▸ Quote → Products",
              "▸ Invoice → Deal",
            ]}
            rotation={-1.4}
            tapeAngle={-3}
          />

          {/* Arrows to data layer */}
          <WobblyArrow x1={155} y1={750} x2={160} y2={650} color={STICKY_COLORS.orange.border} label="CRM API" />
          <WobblyArrow x1={260} y1={640} x2={430} y2={760} color={STICKY_COLORS.green.border} label="create" />
          <WobblyArrow x1={780} y1={548} x2={740} y2={750} color={STICKY_COLORS.pink.border} />
          <WobblyArrow x1={858} y1={840} x2={900} y2={840} color={STICKY_COLORS.orange.border} />
          <WobblyArrow x1={598} y1={850} x2={640} y2={840} color={STICKY_COLORS.orange.border} />

          {/* ── ACCEPTANCE FLOW ── */}
          <SectionDivider y={990} label="🔄  ACCEPTANCE FLOW" />

          {/* Decorative bracket */}
          <rect x={25} y={1010} width={1150} height={105} rx="6" fill="none" stroke={PAPER.pencil} strokeWidth="1.5" strokeDasharray="8,5" opacity="0.15" />

          {(() => {
            const steps = [
              { label: "Page Load", sub: "Check Status" },
              { label: "Render Items", sub: "Svc + Upsells" },
              { label: "User Selects", sub: "Toggle Add-ons" },
              { label: "Live Totals", sub: "Sub+GST+Total" },
              { label: "Accept Quote", sub: "POST /accept" },
              { label: "Create Records", sub: "CRM Objects" },
              { label: "Gen Invoices", sub: "50/50 Split" },
              { label: "Associations", sub: "Link All" },
            ];
            return steps.map((step, i) => (
              <FlowStep
                key={i}
                x={35 + i * 143}
                y={1020}
                label={step.label}
                sub={step.sub}
                index={i}
                isLast={i === steps.length - 1}
              />
            ));
          })()}

          {/* ── TECH STACK ── */}
          <SectionDivider y={1150} label="🛠  TECH STACK" />

          {(() => {
            const techs = [
              { label: "Frontend", value: "HubL + Vanilla JS", color: "orange" },
              { label: "Backend", value: "Express 4 / Node.js", color: "green" },
              { label: "Cache", value: "NodeCache (in-memory)", color: "blue" },
              { label: "CRM", value: "HubSpot CRM v3 API", color: "orange" },
              { label: "Hosting", value: "Render", color: "mint" },
              { label: "Region", value: "AU (AUD / en-AU)", color: "yellow" },
            ];
            return techs.map((tech, i) => {
              const c = STICKY_COLORS[tech.color];
              const x = 35 + i * 190;
              const rot = randomRotation(i * 31, 4);
              return (
                <g key={i} transform={`rotate(${rot}, ${x + 80}, ${1210})`}>
                  <TapeStrip x={x + 80} y={1170} width={45} rotation={randomRotation(i * 7, 8)} color={c.tape} />
                  <rect
                    x={x} y={1175}
                    width={160} height={70}
                    rx="2"
                    fill={c.bg}
                    style={{ filter: "url(#sticky-shadow)" }}
                  />
                  <text
                    x={x + 12} y={1198}
                    fill={PAPER.textLight}
                    fontSize="12"
                    fontFamily={BodyFont}
                    letterSpacing="1"
                  >
                    {tech.label.toUpperCase()}
                  </text>
                  <text
                    x={x + 12} y={1222}
                    fill={c.border}
                    fontSize="17"
                    fontFamily={HandFont}
                    fontWeight="700"
                  >
                    {tech.value}
                  </text>
                </g>
              );
            });
          })()}

          {/* Bottom padding */}
          <rect x={0} y={1280} width={1200} height={40} fill="transparent" />
        </svg>

        {/* Legend bar at bottom */}
        <div style={{
          padding: "16px 50px 24px",
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          borderTop: `1px dashed ${PAPER.lines}`,
          position: "relative",
        }}>
          <span style={{ fontSize: 16, fontFamily: HandFont, color: PAPER.textLight, fontWeight: 700, marginRight: 8 }}>
            Legend:
          </span>
          {[
            { color: STICKY_COLORS.orange, label: "HubSpot CMS/CRM" },
            { color: STICKY_COLORS.blue, label: "Client Logic" },
            { color: STICKY_COLORS.green, label: "Express API" },
            { color: STICKY_COLORS.purple, label: "State Mgmt" },
            { color: STICKY_COLORS.pink, label: "Invoice Automation" },
            { color: STICKY_COLORS.yellow, label: "UI States" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{
                width: 16, height: 16, borderRadius: 2,
                background: item.color.bg,
                border: `1.5px solid ${item.color.border}`,
                boxShadow: `1px 1px 2px ${item.color.shadow}`,
              }} />
              <span style={{ fontSize: 14, fontFamily: BodyFont, color: PAPER.text }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Instruction note */}
      <div style={{
        marginTop: 16,
        fontSize: 14,
        fontFamily: BodyFont,
        color: PAPER.textLight,
        opacity: 0.6,
        textAlign: "center",
      }}>
        Tap any sticky note to expand details
      </div>
    </div>
  );
}