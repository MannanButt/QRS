import Image from "next/image";
import { qrsSite } from "@/src/config/site";

type BrandProps = {
  compact?: boolean;
  light?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <span className={`vx-brand${compact ? " vx-brand--compact" : ""}`}>
      <Image
        className="vx-brand-logo"
        src="/assets/logos/qrs-technologies-pvt-ltd-transparent.png"
        alt={qrsSite.legalName}
        width={2160}
        height={729}
        priority
        style={{ height: compact ? 36 : 46, width: "auto" }}
      />
    </span>
  );
}
