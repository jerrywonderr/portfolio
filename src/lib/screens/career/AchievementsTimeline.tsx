"use client";

import { achievements, AchievementItem } from "./data/achievements";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaTrophy, FaAward, FaGraduationCap, FaUsers, FaCode, FaMedal } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import prepImagePath from "@/lib/utils/prep-image-path";
import { RiArrowRightUpFill } from "react-icons/ri";
import { useState } from "react";

const getIcon = (type: AchievementItem["type"], category: AchievementItem["category"]) => {
  if (type === "award") {
    if (category === "leadership") return FaUsers;
    if (category === "competition") return FaTrophy;
    return FaAward;
  }
  if (category === "learning") return FaGraduationCap;
  return FaCertificate;
};

const getCategoryColors = (category: AchievementItem["category"]) => {
  switch (category) {
    case "learning":
      return {
        gradient: "from-blue-500/20 to-blue-600/20",
        border: "border-blue-500/30",
        text: "text-blue-400",
      };
    case "service":
      return {
        gradient: "from-green-500/20 to-green-600/20",
        border: "border-green-500/30",
        text: "text-green-400",
      };
    case "competition":
      return {
        gradient: "from-yellow-500/20 to-orange-500/20",
        border: "border-yellow-500/30",
        text: "text-yellow-400",
      };
    case "leadership":
      return {
        gradient: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/30",
        text: "text-purple-400",
      };
    default:
      return {
        gradient: "from-primary/20 to-accent/20",
        border: "border-primary/30",
        text: "text-primary",
      };
  }
};

const getTypeLabel = (type: AchievementItem["type"]) => {
  switch (type) {
    case "certificate":
      return "Certification";
    case "award":
      return "Award";
    case "recognition":
      return "Recognition";
    default:
      return type;
  }
};

const getCategoryLabel = (category: AchievementItem["category"]) => {
  switch (category) {
    case "learning":
      return "Learning";
    case "service":
      return "Service";
    case "competition":
      return "Competition";
    case "leadership":
      return "Leadership";
    default:
      return category;
  }
};

const AchievementsTimeline = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sortedAchievements = [...achievements].sort((a, b) => b.year - a.year);
  const years = Array.from(new Set(sortedAchievements.map((a) => a.year))).sort((a, b) => b - a);

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative">
      <div className="mb-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Achievements & Recognition
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          A journey of learning, service, and excellence across the years
        </p>
      </div>

      <div className="relative">
        {years.map((year, yearIdx) => {
          const yearAchievements = sortedAchievements.filter((a) => a.year === year);
          return (
            <div key={year} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-24 z-10 mb-8"
              >
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
                  <span className="text-2xl font-bold text-foreground">{year}</span>
                  <div className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {yearAchievements.map((achievement, idx) => {
                  const Icon = getIcon(achievement.type, achievement.category);
                  const colors = getCategoryColors(achievement.category);

                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="group relative"
                    >
                      <div className="relative h-full bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        
                        <div className="relative z-10">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${colors.gradient} border ${colors.border}`}>
                              <Icon className={colors.text} size={24} />
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${colors.gradient} border ${colors.border} ${colors.text} font-medium`}>
                                {getTypeLabel(achievement.type)}
                              </span>
                              <span className="text-xs px-3 py-1 rounded-full bg-muted border border-border text-foreground/70 font-medium">
                                {getCategoryLabel(achievement.category)}
                              </span>
                            </div>
                          </div>

                          {achievement.image && (
                            <div 
                              className="mb-4 rounded-xl overflow-hidden border border-border/50 cursor-pointer group/image relative"
                              onClick={() => handleImageClick(achievement.image!)}
                            >
                              <Image
                                src={prepImagePath(achievement.image)}
                                width={600}
                                height={300}
                                alt={achievement.title}
                                className="w-full h-48 object-cover group-hover/image:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 rounded-xl flex items-center justify-center opacity-0 group-hover/image:opacity-100 pointer-events-none">
                                <span className="text-white text-sm font-medium bg-black/70 px-4 py-2 rounded-lg backdrop-blur-sm">
                                  Click to view full screen
                                </span>
                              </div>
                            </div>
                          )}

                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {achievement.title}
                          </h3>
                          
                          <p className="text-sm text-foreground/60 mb-3 font-medium">
                            {achievement.issuer}
                          </p>

                          <p className="text-base text-foreground/80 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors text-white"
              aria-label="Close image"
            >
              <FaTimes size={24} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={prepImagePath(selectedImage)}
                alt="Full screen view"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementsTimeline;

