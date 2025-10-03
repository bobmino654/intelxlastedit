export function AcronisLogo({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 240 80"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Acronis Authorized Partner Logo"
        >
            <style>{`
                .acronis-text {
                    font-family: Arial, sans-serif;
                    font-weight: bold;
                    fill: #ADC9F2;
                }
                .partner-text {
                    font-family: Arial, sans-serif;
                    fill: #5AA9E6;
                }
            `}</style>
            <text x="0" y="30" fontSize="28" className="acronis-text">Acronis</text>
            <text x="0" y="65" fontSize="28" className="partner-text">Authorized Partner</text>
        </svg>
    );
}
