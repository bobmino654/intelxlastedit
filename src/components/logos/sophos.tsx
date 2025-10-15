
export const SophosLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 400 100" 
        {...props}
    >
        <style>
            {`
                .sophos-main-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 48px;
                    font-weight: 700;
                    fill: #002758;
                }
                .sophos-sub-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 32px;
                    font-weight: 500;
                    fill: #8a99a7;
                }
            `}
        </style>
        <text x="0" y="50" className="sophos-main-text">SOPHOS</text>
        <text x="0" y="90" className="sophos-sub-text">Silver Partner</text>
    </svg>
);
