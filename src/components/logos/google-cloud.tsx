
export const GoogleCloudLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 400 100" 
        {...props}
    >
        <style>
            {`
                .gcp-main-text {
                    font-family: 'Poppins', 'Google Sans', sans-serif;
                    font-size: 36px;
                    font-weight: 600;
                }
                .gcp-google { fill: #4285F4; }
                .gcp-cloud { fill: #34A853; }
                .gcp-sub-text {
                    font-family: 'Poppins', 'Google Sans', sans-serif;
                    font-size: 32px;
                    font-weight: 500;
                    fill: #EA4335;
                }
            `}
        </style>
        <text x="0" y="50" className="gcp-main-text">
            <tspan className="gcp-google">Google</tspan>
            <tspan className="gcp-cloud" dx="5">Cloud</tspan>
        </text>
        <text x="0" y="90" className="gcp-sub-text">Partner</text>
    </svg>
);
