import Script from "next/script";

const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jeremiah Joseph",
    jobTitle: "Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full-stack development, infrastructure architecture, and production-scale applications.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jerrywonder.dev",
    sameAs: [
      "https://github.com/jerrywonderr",
      "https://linkedin.com/in/jerrywonderr",
    ],
    knowsAbout: [
      "React Native",
      "TypeScript",
      "Full-Stack Development",
      "Cloud Infrastructure",
      "Node.js",
      "Next.js",
      "NestJS",
      "Mobile Development",
      "Backend Development",
      "Distributed Systems",
    ],
    email: "josephjeremiah2001@gmail.com",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Ibadan",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jeremiah Joseph - Software Engineering Services",
    description:
      "Senior Software Engineer offering full-stack development, mobile app development, and cloud infrastructure services.",
    provider: {
      "@type": "Person",
      name: "Jeremiah Joseph",
      jobTitle: "Senior Software Engineer",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZZ",
      addressLocality: "Remote",
    },
    telephone: "+2347057570146",
    areaServed: "Worldwide",
    serviceType: [
      "Software Development",
      "Mobile App Development",
      "Web Development",
      "Backend Development",
      "Cloud Infrastructure",
    ],
    image: process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpeg`
      : "https://jerrywonder.dev/opengraph-image.jpeg",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jerrywonder.dev",
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
};

export default StructuredData;

