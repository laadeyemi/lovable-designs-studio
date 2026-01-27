import { useState } from "react";
import { X } from "lucide-react";

export function AdBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-secondary border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-10 relative">
          {/* Ad Placement Area */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Ad:</span>
            <a 
              href="#" 
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Your Advertisement Here — Contact us for placement opportunities
            </a>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-0 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close ad banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
