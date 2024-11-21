import { ReactNode, useEffect, useRef, useState } from "react";

interface Dot {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

interface IDottedScreenProps {
  children: ReactNode;
}

function DottedScreen({ children }: IDottedScreenProps) {
  const [_dots, setDots] = useState<Dot[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentRef = containerRef.current;

  useEffect(() => {
    const placeDots = async () => {
      const newDots: Dot[] = [];

      for (let i = 0; i < 300; i++) {
        const dot = document.createElement("span");
        dot.textContent = ".";
        dot.style.position = "absolute";
        dot.style.color = "gray";
        dot.style.fontSize = "8px";
        dot.style.fontWeight = "bold";

        currentRef?.appendChild(dot);

        const dotRect = dot.getBoundingClientRect();

        let placed = false;
        let attempts = 0;
        const maxAttempts = 100;

        while (!placed && attempts < maxAttempts) {
          const randomX = Math.random() * (window.innerWidth - dotRect.width);
          const randomY = Math.random() * (window.innerHeight - dotRect.height);

          const dotArea: Dot = {
            left: randomX,
            top: randomY,
            right: randomX + dotRect.width,
            bottom: randomY + dotRect.height,
          };

          if (!doesOverlap(dotArea, newDots)) {
            placed = true;
            dot.style.left = `${randomX}px`;
            dot.style.top = `${randomY}px`;
            newDots.push(dotArea);
          }

          attempts++;
        }

        if (!placed) {
          dot.remove();
        }
      }

      setDots(newDots);
    };

    placeDots();

    return () => {
      const dots = currentRef?.querySelectorAll("span");
      dots?.forEach((dot) => dot.remove());
    };
  }, [currentRef]);

  const doesOverlap = (dotArea: Dot, existingDots: Dot[]): boolean => {
    return existingDots.some((existingDot) => {
      return !(
        dotArea.right < existingDot.left ||
        dotArea.left > existingDot.right ||
        dotArea.bottom < existingDot.top ||
        dotArea.top > existingDot.bottom
      );
    });
  };

  return (
    <div ref={containerRef} className="relative px-4 py-4">
      {/* Dots will be rendered here */}
      {children}
    </div>
  );
}

export default DottedScreen;
