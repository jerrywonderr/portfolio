"use client";

import DottedScreen from "@/lib/components/DottedScreen";
import AchievementsTimeline from "@/lib/screens/career/AchievementsTimeline";

export default function CertificatesPage() {
  return (
    <DottedScreen>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <AchievementsTimeline />
      </div>
    </DottedScreen>
  );
}

