import { useState } from "react";
import { X } from "lucide-react";

export function AdBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-secondary border-b border-border h-[300px]">
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-center h-full relative">
          {/* Ad Placement Area */}
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="w-full max-w-[728px] h-[250px] rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 flex items-center justify-center">
              <div className="text-center">
                <p className="text-primary font-display text-xl font-semibold mb-2">
                  Advertisement Space
                </p>
                <p className="text-muted-foreground text-sm">
                  728 x 250 Leaderboard
                </p>
                <a 
                  href="#" 
                  className="text-primary hover:text-accent transition-colors text-sm font-medium mt-2 inline-block underline"
                >
                  Contact us for placement
                </a>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-0 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
            aria-label="Close ad banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
