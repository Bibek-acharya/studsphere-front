import { AdvertiserForm } from '@/components/advertise/advertiser-from';
import { AdvertisingBenefits } from '@/components/advertise/advertising-benifits';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AdvertiserForm />
      <AdvertisingBenefits />
    </main>
  );
}
 