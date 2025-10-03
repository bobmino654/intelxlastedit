export function LevelBlueLogo({ className }: { className?: string }) {
    return (
        <svg 
            className={className}
            viewBox="0 0 200 40" 
            xmlns="http://www.w3.org/2000/svg"
            aria-label="LevelBlue Logo"
        >
            <style>{`
                .levelblue-text {
                    font-family: Arial, sans-serif;
                    font-weight: bold;
                    font-size: 30px;
                }
            `}</style>
            <text x="0" y="30" className="levelblue-text">
                <tspan fill="#FFFFFF">Level</tspan>
                <tspan fill="#4285F4">B</tspan>
                <tspan fill="#FFFFFF">lue</tspan>
            </text>
        </svg>
    );
}
