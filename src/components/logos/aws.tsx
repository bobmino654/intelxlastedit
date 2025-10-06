export const AwsLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 60"
      {...props}
    >
      <defs>
        <style>
          {`
            .aws-text { font-family: 'Amazon Ember', 'Helvetica Neue', sans-serif; font-weight: 700; font-size: 36px; fill: #232F3E; }
            .aws-smile { fill: #FF9900; }
            .partner-text { font-family: 'Amazon Ember', 'Helvetica Neue', sans-serif; font-weight: 400; font-size: 18px; fill: #545B64; }
          `}
        </style>
      </defs>
      <text x="0" y="38" className="aws-text">aws</text>
      <path
        className="aws-smile"
        d="M50,42 C55,52 75,52 80,42 L70,42 C67,46 53,46 50,42 Z"
        transform="translate(15, 0) scale(0.8)"
      />
      <text x="140" y="25" className="partner-text">partner</text>
      <text x="140" y="47" className="partner-text">network</text>
    </svg>
);
