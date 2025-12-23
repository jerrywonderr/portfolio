"use client";

import DottedScreen from "@/lib/components/DottedScreen";
import ProjectBox from "@/lib/screens/career/ProjectBox";

export default function ProjectsPage() {
  return (
    <DottedScreen>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ProjectBox />
      </div>
    </DottedScreen>
  );
}

