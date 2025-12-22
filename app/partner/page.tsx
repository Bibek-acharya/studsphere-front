import { PartnershipForm } from '@/components/partnerwithus/partnership-form';
import { WhatWeOrganize } from '@/components/partnerwithus/what-we-organize';
import PartnersSection from '@/components/partnerwithus/partners-sections';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PartnershipForm />
       <PartnersSection />
      <WhatWeOrganize />
    </main>
  );
}
