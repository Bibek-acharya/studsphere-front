import Image from "next/image"
import { Card } from "@/components/ui/card"

export function AdsSection() {
  return (
    <div className="mb-6">
      <Card className="overflow-hidden">
        <div className="relative h-64 w-full">
          <Image src="/college-admission-banner-with-students.jpg" alt="College Admission Banner" fill className="object-cover" />
        </div>
      </Card>
    </div>
  )
}
