import { useState, useEffect } from "react";

const STICKY = {
  bg: "#FEF3C7",
  border: "#F59E0B",
  shadow: "rgba(245, 158, 11, 0.2)",
  tape: "#fde68a",
};

const PAPER = {
  bg: "#FFFEF7",
  lines: "#e8e4d9",
  marker: "#1a1a1a",
};

const TEXT = {
  primary: "#3C4A6B",
  alt: "#333333",
};

const INK = "#1B2A4A";

const HandFont = "'Averia Serif Libre', Georgia, 'Times New Roman', serif";
const BodyFont = "'Averia Serif Libre', Georgia, 'Times New Roman', serif";

const randomRotation = (seed, range = 2) => {
  const hash = Math.sin(seed * 9301 + 49297) % 233280;
  return ((hash / 233280) * range * 2 - range).toFixed(1);
};

const WobblyArrow = ({ x1, y1, x2, y2, label = "" }) => {
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
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
        style={{ filter: "url(#pencil-texture)" }}
      />
      <polygon
        points={`${x2},${y2} ${x2 - ux * arrowLen + uy * arrowW},${y2 - uy * arrowLen - ux * arrowW} ${x2 - ux * arrowLen - uy * arrowW},${y2 - uy * arrowLen + ux * arrowW}`}
        fill={INK}
        opacity="0.55"
      />
      {label && (
        <text
          x={wobble1X}
          y={wobble1Y - 6}
          fill={INK}
          fontSize="11"
          fontFamily={BodyFont}
          textAnchor="middle"
          opacity="0.7"
          transform={`rotate(${(() => { let a = Math.atan2(dy, dx) * 180 / Math.PI; return a > 90 || a < -90 ? a + 180 : a; })()}, ${wobble1X}, ${wobble1Y - 6})`}
        >
          {label}
        </text>
      )}
    </g>
  );
};

const TapeStrip = ({ x, y, width = 60, rotation = 0 }) => (
  <rect
    x={x - width / 2}
    y={y - 6}
    width={width}
    height={12}
    rx="1"
    fill={STICKY.tape}
    opacity="0.7"
    transform={`rotate(${rotation}, ${x}, ${y})`}
    style={{ filter: "url(#tape-shadow)" }}
  />
);

const StickyNote = ({ x, y, width, height, title, subtitle, items, rotation = 0, id, tapeAngle = 0 }) => {
  const rot = rotation || randomRotation(id, 2.5);

  return (
    <g
      style={{ transition: "transform 0.2s" }}
      transform={`rotate(${rot}, ${x + width / 2}, ${y + height / 2})`}
    >
      <TapeStrip x={x + width / 2} y={y - 2} width={50} rotation={tapeAngle} />

      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="2"
        fill={STICKY.bg}
        stroke="none"
        style={{ filter: "url(#sticky-shadow)" }}
      />

      <rect
        x={x}
        y={y + height - 15}
        width={width}
        height={15}
        fill={STICKY.bg}
        opacity="0.85"
      />

      <line
        x1={x + 8} y1={y + 6} x2={x + 8} y2={y + height - 8}
        stroke={STICKY.border} strokeWidth="2" opacity="0.15"
      />

      <text
        x={x + 16}
        y={y + 26}
        fill={TEXT.primary}
        fontSize="15"
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
          fill={TEXT.primary}
          fontSize="11"
          fontFamily={BodyFont}
          opacity="0.6"
        >
          {subtitle}
        </text>
      )}

      {items && items.map((item, i) => {
        const itemY = y + (subtitle ? 60 : 48) + i * 18;
        if (itemY > y + height - 10) return null;
        return (
          <text
            key={i}
            x={x + 18}
            y={itemY}
            fill={TEXT.alt}
            fontSize="11.5"
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
      stroke={INK}
      strokeWidth="1.5"
      strokeDasharray="8,6"
      opacity="0.15"
    />
    <rect x={40} y={y - 14} width={label.length * 10 + 20} height={28} rx="4" fill={PAPER.bg} />
    <text
      x={50}
      y={y + 5}
      fill={TEXT.primary}
      fontSize="14"
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
  const rot = randomRotation(index * 17, 3);

  return (
    <g transform={`rotate(${rot}, ${x + 60}, ${y + 35})`}>
      <rect
        x={x} y={y} width={120} height={70}
        rx="3"
        fill={STICKY.bg}
        style={{ filter: "url(#sticky-shadow)" }}
      />
      <text
        x={x + 10} y={y + 16}
        fill={TEXT.primary}
        fontSize="10"
        fontFamily={BodyFont}
        opacity="0.5"
      >
        Step {index + 1}
      </text>
      <text
        x={x + 10} y={y + 36}
        fill={TEXT.primary}
        fontSize="14"
        fontFamily={HandFont}
        fontWeight="700"
      >
        {label}
      </text>
      <text
        x={x + 10} y={y + 54}
        fill={TEXT.alt}
        fontSize="11"
        fontFamily={BodyFont}
        opacity="0.7"
      >
        {sub}
      </text>
      {!isLast && (
        <g>
          <line
            x1={x + 125} y1={y + 35}
            x2={x + 147} y2={y + 35}
            stroke={INK}
            strokeWidth="2"
            opacity="0.4"
            strokeLinecap="round"
          />
          <polygon
            points={`${x + 150},${y + 35} ${x + 143},${y + 30} ${x + 143},${y + 40}`}
            fill={INK}
            opacity="0.4"
          />
        </g>
      )}
    </g>
  );
};

export default function SketchpadArchitecture() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
      `}</style>

      <div className="sketch-container" style={{
        maxWidth: 1280,
        width: "100%",
        background: PAPER.bg,
        borderRadius: 7.5,
        boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08), inset 0 0 80px rgba(0,0,0,0.02)",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Title area */}
        <div style={{ padding: "30px 50px 10px", position: "relative", textAlign: "center" }}>
          <div style={{
            fontSize: 12,
            fontFamily: BodyFont,
            color: TEXT.primary,
            marginBottom: 4,
            letterSpacing: 1,
            opacity: 0.5,
          }}>
            HARTWELL MECHANICAL SERVICES
          </div>
          <h1 style={{
            fontSize: 28,
            fontFamily: HandFont,
            fontWeight: 700,
            color: TEXT.alt,
            margin: "0 0 4px 0",
            lineHeight: 1.1,
          }}>
            System Architecture
          </h1>
          <div style={{
            fontSize: 16,
            fontFamily: BodyFont,
            color: TEXT.primary,
            opacity: 0.7,
          }}>
            HubSpot CMS + Express API + CRM Integration
          </div>
        </div>

        {/* Main SVG Canvas */}
        <svg
          viewBox="0 0 1200 1320"
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
          <WobblyArrow x1={275} y1={150} x2={310} y2={155} label="renders" />
          <WobblyArrow x1={555} y1={160} x2={590} y2={150} label="drives" />
          <WobblyArrow x1={845} y1={150} x2={882} y2={148} label="updates" />

          {/* ── APPLICATION LAYER ── */}
          <SectionDivider y={310} label="⚙️  APPLICATION LAYER" />

          <StickyNote
            id="api"
            x={30} y={340} width={300} height={310}
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
            title="NodeCache"
            subtitle="In-Memory TTL Cache"
            items={[]}
            rotation={-2}
            tapeAngle={-6}
          />

          <StickyNote
            id="invoice"
            x={660} y={340} width={280} height={210}
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
          <WobblyArrow x1={200} y1={340} x2={435} y2={275} label="fetch()" />
          <WobblyArrow x1={720} y1={265} x2={280} y2={345} label="POST /accept" />
          <WobblyArrow x1={328} y1={470} x2={372} y2={440} />
          <WobblyArrow x1={310} y1={580} x2={390} y2={600} label="get/set" />
          <WobblyArrow x1={328} y1={540} x2={660} y2={430} label="on acceptance" />

          {/* ── DATA LAYER ── */}
          <SectionDivider y={720} label="💾  DATA & INTEGRATION LAYER" />

          <StickyNote
            id="crmstandard"
            x={30} y={750} width={250} height={190}
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
          <WobblyArrow x1={155} y1={750} x2={153} y2={650} label="read" />
          <WobblyArrow x1={260} y1={640} x2={430} y2={760} label="create" />
          <WobblyArrow x1={780} y1={548} x2={740} y2={750} />
          <WobblyArrow x1={858} y1={840} x2={900} y2={840} />
          <WobblyArrow x1={598} y1={850} x2={640} y2={840} />

          {/* ── ACCEPTANCE FLOW ── */}
          <SectionDivider y={990} label="🔄  ACCEPTANCE FLOW" />

          <rect x={25} y={1010} width={1150} height={105} rx="6" fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="8,5" opacity="0.1" />

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
              { label: "Frontend", value: "HubL + Vanilla JS" },
              { label: "Backend", value: "Express 4 / Node.js" },
              { label: "Cache", value: "NodeCache (in-memory)" },
              { label: "CRM", value: "HubSpot CRM v3 API" },
              { label: "Hosting", value: "Render" },
              { label: "Region", value: "AU (AUD / en-AU)" },
            ];
            return techs.map((tech, i) => {
              const x = 35 + i * 190;
              const rot = randomRotation(i * 31, 4);
              return (
                <g key={i} transform={`rotate(${rot}, ${x + 80}, ${1210})`}>
                  <TapeStrip x={x + 80} y={1170} width={45} rotation={randomRotation(i * 7, 8)} />
                  <rect
                    x={x} y={1175}
                    width={160} height={70}
                    rx="2"
                    fill={STICKY.bg}
                    style={{ filter: "url(#sticky-shadow)" }}
                  />
                  <text
                    x={x + 12} y={1198}
                    fill={TEXT.primary}
                    fontSize="10"
                    fontFamily={BodyFont}
                    letterSpacing="1"
                    opacity="0.5"
                  >
                    {tech.label.toUpperCase()}
                  </text>
                  <text
                    x={x + 12} y={1222}
                    fill={TEXT.alt}
                    fontSize="15"
                    fontFamily={HandFont}
                    fontWeight="700"
                  >
                    {tech.value}
                  </text>
                </g>
              );
            });
          })()}

          <rect x={0} y={1280} width={1200} height={40} fill="transparent" />
        </svg>
      </div>
    </div>
  );
}