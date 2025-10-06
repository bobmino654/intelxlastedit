
export const SophosLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 60"
      {...props}
      className="h-16 w-auto"
    >
        <style>
            {`
                .sophos-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 32px;
                    font-weight: 600;
                    fill: currentColor;
                }
                .sophos-subtext {
                    font-family: 'PT Sans', sans-serif;
                    font-size: 18px;
                    fill: #9CA3AF;
                }
            `}
        </style>
        <circle cx="15" cy="25" r="12" fill="#0079c1" />
        <path d="M15 17 l-4 8 h8 z" fill="white" />
        <text x="40" y="35" className="sophos-text">SOPHOS</text>
        <text x="40" y="55" className="sophos-subtext">Silver Partner</text>
    </svg>
);
