export function VfsGlobalLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-label="VFS Global Logo"
    >
      <circle cx="50" cy="50" r="45" fill="currentColor" />
      <text
        x="50"
        y="58"
        fontFamily="serif"
        fontSize="40"
        fill="hsl(var(--background))"
        textAnchor="middle"
        fontWeight="bold"
      >
        vfs.
      </text>
      <text
        x="110"
        y="45"
        fontFamily="sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="currentColor"
      >
        VFS.GLOBAL
      </text>
      <text
        x="110"
        y="75"
        fontFamily="sans-serif"
        fontSize="20"
        fill="currentColor"
      >
        EST. 2001
      </text>
    </svg>
  );
}
