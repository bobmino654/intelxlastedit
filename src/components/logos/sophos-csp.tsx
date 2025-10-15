
export const SophosCspLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 250 80"
        {...props}
    >
        <style>
            {`
                .sophos-csp-main-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 30px;
                    font-weight: 700;
                    fill: currentColor;
                }
                .sophos-csp-sub-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 12px;
                    font-weight: 500;
                    fill: currentColor;
                    letter-spacing: 0.5px;
                }
            `}
        </style>
        <text x="0" y="30" className="sophos-csp-main-text">SOPHOS</text>
        <text x="0" y="50" className="sophos-csp-sub-text">Cloud Security</text>
        <text x="0" y="65" className="sophos-csp-sub-text">Provider</text>
    </svg>
);
