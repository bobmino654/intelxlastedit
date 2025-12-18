
export const AnubisArgusLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 400 100" 
        {...props}
        aria-label="Anubis ARGUS Strategic Digital Surveillance Logo"
    >
        <style>
            {`
                .anubis-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 48px;
                    font-weight: 600;
                    fill: #E5E7EB;
                }
                .argus-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 48px;
                    font-weight: 700;
                    fill: #D3AA3A;
                }
            `}
        </style>
        <text x="0" y="60" className="anubis-text">Anubis</text>
        <text x="180" y="60" className="argus-text">ARGUS</text>
    </svg>
);
