import CollegeNavbar from "@/components/college/college-navbar";
import { CollegeProvider } from "@/components/college/college-context";

export default function CollegesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CollegeProvider>
      <CollegeNavbar />
      {children}
    </CollegeProvider>
  );
}
