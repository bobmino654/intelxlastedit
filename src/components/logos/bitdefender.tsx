export function BitdefenderLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bitdefender Business Solutions Logo"
    >
      <style>
        {`
          .bitdefender-text {
            font-family: Arial, sans-serif;
            font-weight: bold;
            fill: #007bff;
          }
          .solutions-text {
            font-family: Arial, sans-serif;
            font-weight: bold;
            fill: #007bff;
          }
        `}
      </style>
      <text x="0" y="28" fontSize="24" className="bitdefender-text">
        Bitdefender
        <tspan fontSize="12" dy="-10">®</tspan>
      </text>
      <text x="170" y="18" fontSize="12" className="solutions-text">BUSINESS</text>
      <text x="170" y="34" fontSize="12" className="solutions-text">SOLUTIONS</text>
    </svg>
  );
}
