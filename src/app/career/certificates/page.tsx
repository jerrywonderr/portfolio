"use client";

import DottedScreen from "@/lib/components/DottedScreen";
import CertificatesBox from "@/lib/screens/career/CertificatesBox";

export default function CertificatesPage() {
  return (
    <DottedScreen>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <CertificatesBox />
      </div>
    </DottedScreen>
  );
}

