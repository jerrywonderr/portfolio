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
  return (
    <div className="relative min-h-screen">
      {children}
    </div>
  );
}

export default DottedScreen;
