export const SophosLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 200 60"
        {...props}
    >
        <style>
            {`
                .sophos-main-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 30px;
                    font-weight: 700;
                    fill: currentColor;
                }
                .sophos-sub-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    fill: currentColor;
                    letter-spacing: 0.5px;
                }
            `}
        </style>
        <text x="0" y="30" className="sophos-main-text">SOPHOS</text>
        <text x="0" y="50" className="sophos-sub-text">Silver Partner</text>
    </svg>
);
