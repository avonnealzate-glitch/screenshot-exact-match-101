import { useState } from "react";
import { RotateCw } from "lucide-react";

/**
 * Floating "hard refresh" button shown only in development.
 * Forces a full page reload (bypassing HMR) when the dev server gets stuck.
 */
export function HardRefreshButton() {
  const [spinning, setSpinning] = useState(false);

  if (!import.meta.env.DEV) return null;

  const handleClick = () => {
    setSpinning(true);
    try {
      // Bust SW + module cache, then hard reload
      if ("caches" in window) {
        caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
      }
    } catch {
      // ignore
    }
    const url = new URL(window.location.href);
    url.searchParams.set("_hr", Date.now().toString());
    window.location.replace(url.toString());
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title="Hard refresh (bypass HMR)"
      aria-label="Hard refresh preview"
      className="fixed bottom-3 right-3 z-[2147483647] flex h-9 items-center gap-1.5 rounded-full border border-border bg-background/90 px-3 text-xs font-medium text-foreground shadow-md backdrop-blur transition hover:bg-accent"
    >
      <RotateCw className={`h-3.5 w-3.5 ${spinning ? "animate-spin" : ""}`} />
      Hard refresh
    </button>
  );
}
