import { Metadata } from "next";

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
}

export function constructMetadata({
  title = "Pangoth Hemanth Nayak | Data Scientist & AI Systems Engineer",
  description = "Professional portfolio of Pangoth Hemanth Nayak, a BTech CSE (Data Science) Engineer specializing in Natural Language Processing (NLP) research, full-stack systems, and product development.",
  keywords = [
    "Pangoth Hemanth Nayak",
    "Hemanth Nayak",
    "Data Science",
    "Natural Language Processing",
    "NLP Researcher",
    "AI Systems",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "BTech CSE Data Science",
    "Software Engineer Placement"
  ],
  url = "https://portfolio.dev"
}: SEOConfig = {}): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: "Pangoth Hemanth Nayak" }],
    creator: "Pangoth Hemanth Nayak",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "Pangoth Hemanth Nayak Portfolio",
      images: [
        {
          url: "/images/og-preview.png",
          width: 1200,
          height: 630,
          alt: "Portfolio Landing Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-preview.png"],
    },
    metadataBase: new URL(url),
  };
}
