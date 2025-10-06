import Image from 'next/image';

export const SophosLogo = ({ className }: { className?: string }) => (
    <Image 
        src="/assets/sophos.png" 
        alt="Sophos Silver Partner" 
        width={200} 
        height={50}
        className={className}
    />
);
