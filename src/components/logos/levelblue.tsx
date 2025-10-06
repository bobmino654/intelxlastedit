
export const LevelBlueLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 220 50"
        {...props}
    >
        <style>
            {`
                .levelblue-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 38px;
                    font-weight: 600;
                    fill: currentColor;
                }
                .b-char {
                    fill: hsl(var(--primary));
                }
            `}
        </style>
        <text x="0" y="38" className="levelblue-text">
            Level<tspan className="b-char">B</tspan>lue
        </text>
    </svg>
);
