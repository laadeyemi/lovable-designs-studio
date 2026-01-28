import { X } from "lucide-react";
import { useState } from "react";

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-[180px] left-0 right-0 z-[55] bg-gradient-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
      <span>🎨 Special Offer: Get 20% off on all branding packages this month!</span>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
