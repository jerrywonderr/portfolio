import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jeremiah Joseph - Portfolio",
    short_name: "JJ Portfolio",
    description:
      "Portfolio of Jeremiah Joseph, Senior Software Engineer specializing in full-stack development, infrastructure architecture, and production-scale applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon3.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon4.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
