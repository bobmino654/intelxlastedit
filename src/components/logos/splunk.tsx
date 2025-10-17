
export const SplunkLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 300 100" 
        {...props}
    >
        <style>
            {`
                .splunk-main-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 48px;
                    font-weight: 700;
                    fill: #333;
                }
                .splunk-gt {
                    fill: #f26622;
                }
                .splunk-sub-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 32px;
                    font-weight: 500;
                    fill: #6a6d71;
                }
            `}
        </style>
        <text x="0" y="50" className="splunk-main-text">
            splunk<tspan className="splunk-gt">{'>'}</tspan>
        </text>
        <text x="0" y="90" className="splunk-sub-text">Partner</text>
    </svg>
);
