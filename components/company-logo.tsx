interface CompanyLogoProps {
  src: string;
  alt: string;
  size?: "md" | "lg";
}

// Company logos come in mixed shapes and backgrounds, so they sit on a white tile.
export const CompanyLogo = ({ src, alt, size = "md" }: CompanyLogoProps) => (
  <div
    className={`${
      size === "lg" ? "w-16 h-16" : "w-12 h-12"
    } shrink-0 rounded-xl bg-white ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center overflow-hidden p-1`}
  >
    <img alt={alt} className="max-w-full max-h-full object-contain" src={`/${src}`} />
  </div>
);
