
export const AcronisLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 400 100" 
        {...props}
    >
        <style>
            {`
                .acronis-main-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 38px;
                    font-weight: 600;
                    fill: #2B5178;
                }
                .acronis-sub-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 36px;
                    font-weight: 500;
                    fill: #2D94E9;
                }
            `}
        </style>
        <text x="0" y="40" className="acronis-main-text">Acronis</text>
        <text x="0" y="85" className="acronis-sub-text">Authorized Partner</text>
    </svg>
);
