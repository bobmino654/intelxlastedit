
export const IbmPartnerLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 400 100" 
        {...props}
    >
        <style>
            {`
                .ibm-main-text {
                    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
                    font-size: 48px;
                    font-weight: 700;
                    fill: #0530ad;
                }
                .ibm-sub-text {
                    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
                    font-size: 28px;
                    font-weight: 500;
                    fill: #4c82fe;
                }
            `}
        </style>
        <text x="0" y="50" className="ibm-main-text">IBM</text>
        <text x="0" y="85" className="ibm-sub-text">PartnerPlus</text>
    </svg>
);
