import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Timshel Global — Building Commissioning Portfolio",
  description:
    "Explore Timshel Global's portfolio of 400+ building commissioning projects across aviation, healthcare, higher education, data centers, and more throughout Texas.",
  alternates: { canonical: "https://timshelglobal.com/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
