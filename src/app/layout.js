import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Samudra Goswami | Backend & ML Developer",
  description:
    "Final-year Electronics and Communication student with strong backend and machine learning skills. Building scalable apps using Go, FastAPI, Redis, Docker, and AWS.",
  keywords:
    "Samudra Goswami, Backend Developer, Machine Learning, Go, FastAPI, Portfolio, Redis, Docker, AWS",
  metadataBase: new URL("https://samudra-portfolio.vercel.app"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://samudra-portfolio.vercel.app",
  },
  authors: [{ name: "Samudra Goswami", url: "https://samudra-portfolio.vercel.app" }],
  creator: "Samudra Goswami",
  openGraph: {
    title: "Samudra Goswami | Portfolio",
    description:
      "Explore projects by Samudra Goswami, a backend-focused developer with a passion for scalable systems and ML.",
    url: "https://samudra-portfolio.vercel.app",
    siteName: "Samudra Goswami | Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samudra's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samudra Goswami | Portfolio",
    description:
      "Explore projects and skills of Samudra Goswami, backend developer and ML enthusiast.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#E97451",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
