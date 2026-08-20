interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  const logo = `${import.meta.env.BASE_URL}assets/contrasense-logo.png`;

  return (
    <span className={`brand-logo${compact ? " brand-logo--compact" : ""}`} aria-hidden="true">
      <img src={logo} alt="" width="720" height="720" />
    </span>
  );
}
