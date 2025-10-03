export function AwsLogo({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 200 180"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AWS Partner Advanced Tier Services Logo"
      >
        <defs>
          <style>
            {`
              .aws-partner-text {
                font-family: Arial, sans-serif;
                font-weight: bold;
                fill: #232F3E;
              }
            `}
          </style>
        </defs>
        <path d="M20,10 L180,10 L180,150 L100,170 L20,150 Z" fill="#FFFFFF"/>
        <path d="M20,10 L180,10 L180,150 L100,170 L20,150 Z" stroke="#232F3E" strokeWidth="3" fill="none"/>
        
        {/* AWS Logo */}
        <path d="M50,45 C50,40 55,35 60,35 L90,35 C95,35 100,40 100,45" fill="none" stroke="#FF9900" strokeWidth="5"/>
        <path d="M55,50 L95,50" fill="none" stroke="#232F3E" strokeWidth="5"/>
        <text x="50" y="30" fontSize="18" fill="#232F3E" fontFamily="Arial, sans-serif" fontWeight="bold">aws</text>
        <path d="M65,55 Q80,70 95,55" fill="none" stroke="#FF9900" strokeWidth="6"/>

        {/* PARTNER Text */}
        <text x="100" y="95" textAnchor="middle" fontSize="28" className="aws-partner-text">PARTNER</text>
        
        {/* Advanced Tier Services Text */}
        <text x="100" y="120" textAnchor="middle" fontSize="16" className="aws-partner-text">Advanced Tier</text>
        <text x="100" y="140" textAnchor="middle" fontSize="16" className="aws-partner-text">Services</text>
      </svg>
    );
  }
  