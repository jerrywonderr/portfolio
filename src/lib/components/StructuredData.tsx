import Script from "next/script";

const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jeremiah Joseph",
    jobTitle: "Software Engineer",
    description:
      "Software engineer building mobile and backend systems with React Native, Expo, NestJS, PostgreSQL and Supabase.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jerrywonder.dev",
    sameAs: [
      "https://github.com/jerrywonderr",
      "https://linkedin.com/in/jerrywonderr",
    ],
    knowsAbout: [
      "React Native",
      "TypeScript",
      "Full-Stack Development",
      "Stripe Connect",
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
      "Software engineer offering mobile app development, backend development, and cloud infrastructure work.",
    provider: {
      "@type": "Person",
      name: "Jeremiah Joseph",
      jobTitle: "Software Engineer",
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
      "Stripe Connect",
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
