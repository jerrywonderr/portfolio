import { ReactNode } from "react";

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
