export function Arrow({ diagonal = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
export function Mark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M24 3 42 36H6L24 3Z" />
      <path d="M11 13 24 42 37 13M17 24h14M24 3v15" />
      <circle cx="24" cy="26" r="19" />
    </svg>
  );
}
export function Icon({ name }) {
  const paths = {
    sparkles: (
      <>
        <path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z" />
        <path d="m20 2 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
      </>
    ),
    sofa: (
      <>
        <path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5M5 18v3m14-3v3M5 13h14" />
        <path d="M3 10a2 2 0 0 0-2 2v6h22v-6a2 2 0 0 0-4 0v3H5v-3a2 2 0 0 0-2-2Z" />
      </>
    ),
    home: <path d="m3 11 9-8 9 8M5 9v12h14V9M9 21v-7h6v7" />,
    image: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8" cy="8" r="1.5" />
        <path d="m3 17 5-5 4 4 4-6 5 7" />
      </>
    ),
    video: (
      <>
        <rect x="2" y="5" width="14" height="14" rx="2" />
        <path d="m16 10 6-4v12l-6-4" />
      </>
    ),
    move: <path d="m7 8-4 4 4 4m10-8 4 4-4 4M3 12h18" />,
    chat: <path d="M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5A9 9 0 1 1 21 11.5Z" />,
    menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.sparkles}
    </svg>
  );
}
