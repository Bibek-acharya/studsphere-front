"use client";

import CollegeNavbar from "@/components/college/college-navbar";
import { CollegeProvider } from "@/components/college/college-context";
import { usePathname } from "next/navigation";

export default function CollegesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInstitutionPage = pathname?.startsWith("/colleges/institutions");

  return (
    <CollegeProvider>
      {!isInstitutionPage && <CollegeNavbar />}
      {children}
    </CollegeProvider>
  );
}
