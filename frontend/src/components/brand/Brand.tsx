import { qrsSite } from "@/src/config/site";

type BrandProps = {
  compact?: boolean;
  light?: boolean;
};

export function Brand({ compact = false, light = false }: BrandProps) {
  const textColor = light ? "var(--qrs-color-ink)" : "#FFFFFF";

  return (
    <span className={`vx-brand${compact ? " vx-brand--compact" : ""}`}>
      <svg
        className="vx-brand-logo"
        viewBox="0 0 300 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`${qrsSite.legalName} — ${qrsSite.tagline}`}
        style={{ height: compact ? 36 : 46, width: "auto" }}
      >
        <defs>
          <linearGradient id="qrsGrad" x1="10" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="52%" stopColor="#6D28D9" />
            <stop offset="100%" stopColor="#4C1D95" />
          </linearGradient>
        </defs>

        <g transform="translate(4, 8)">
          <rect width="64" height="64" rx="18" fill="url(#qrsGrad)" />
          <path d="M18 16h16.8c10.2 0 17.2 6.8 17.2 16.4 0 6.1-2.9 11.1-7.7 13.9L53 56H43l-5.5-6.3c-.9.1-1.8.1-2.7.1H27v-8.3h7.5c5.4 0 8.7-3.4 8.7-8.8 0-5.3-3.3-8.5-8.7-8.5H27v23.5h-9V16Z" fill="#FFFFFF" />
          <circle cx="52" cy="17" r="4" fill="rgba(255,255,255,.48)" />
        </g>

        <text x="82" y="37" fontFamily="'Nunito Sans', system-ui, sans-serif" fontSize="30" fontWeight="900" letterSpacing="2.5" fill={textColor}>QRS</text>
        <text x="83" y="56" fontFamily="'Nunito Sans', system-ui, sans-serif" fontSize="14" fontWeight="800" letterSpacing="3.1" fill="url(#qrsGrad)">TECHNOLOGIES</text>
        <text x="83" y="70" fontFamily="'Roboto', system-ui, sans-serif" fontSize="8" fontWeight="600" letterSpacing=".54" fill={light ? "#665B79" : "#E9D5FF"}>TECHNOLOGY THAT MOVES BUSINESS FORWARD</text>
      </svg>
    </span>
  );
}
