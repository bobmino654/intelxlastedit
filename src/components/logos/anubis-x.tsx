
export const AnubisXLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 240 100" 
        {...props}
        aria-label="AnubisX Digital Identity & Behavioral Intelligence Logo"
    >
        <style>
            {`
                .anubis-x-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 48px;
                    font-weight: 600;
                    fill: #E5E7EB;
                }
                .x-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 48px;
                    font-weight: 700;
                    fill: #D3AA3A;
                }
            `}
        </style>
        <text x="0" y="60" className="anubis-x-text">Anubis</text>
        <text x="180" y="60" className="x-text">X</text>
    </svg>
);
