export type Country = "BE" | "US" | "IT" | "RO" | "GB";

const NAMES: Record<Country, string> = {
  BE: "Belgium",
  US: "United States",
  IT: "Italy",
  RO: "Romania",
  GB: "United Kingdom",
};

function Tricolour({ colors }: { colors: [string, string, string] }) {
  return (
    <>
      <rect width="10" height="21" fill={colors[0]} />
      <rect x="10" width="10" height="21" fill={colors[1]} />
      <rect x="20" width="10" height="21" fill={colors[2]} />
    </>
  );
}

/**
 * Flag emojis render as plain letters on Windows, so reviewer flags are tiny SVGs
 * (same idea as the Albanian flag in Emoji.tsx). Kept simple: stripes, no fine detail.
 */
export function Flag({ country }: { country: Country }) {
  let body;
  switch (country) {
    case "BE":
      body = <Tricolour colors={["#000", "#FAE042", "#ED2939"]} />;
      break;
    case "IT":
      body = <Tricolour colors={["#009246", "#fff", "#CE2B37"]} />;
      break;
    case "RO":
      body = <Tricolour colors={["#002B7F", "#FCD116", "#CE1126"]} />;
      break;
    case "US":
      body = (
        <>
          <rect width="30" height="21" fill="#fff" />
          {[0, 2, 4, 6].map((i) => (
            <rect key={i} y={i * 3.23} width="30" height="1.6" fill="#B22234" />
          ))}
          <rect width="12" height="11.3" fill="#3C3B6E" />
        </>
      );
      break;
    case "GB":
      body = (
        <>
          <rect width="30" height="21" fill="#012169" />
          <path d="M0 0L30 21M30 0L0 21" stroke="#fff" strokeWidth="4" />
          <path d="M0 0L30 21M30 0L0 21" stroke="#C8102E" strokeWidth="1.6" />
          <path d="M15 0V21M0 10.5H30" stroke="#fff" strokeWidth="6" />
          <path d="M15 0V21M0 10.5H30" stroke="#C8102E" strokeWidth="3.2" />
        </>
      );
      break;
  }
  return (
    <svg viewBox="0 0 30 21" className="flag" role="img" aria-label={`Flag of ${NAMES[country]}`}>
      <clipPath id={`flag-${country}`}>
        <rect width="30" height="21" rx="2.5" />
      </clipPath>
      <g clipPath={`url(#flag-${country})`}>{body}</g>
    </svg>
  );
}
