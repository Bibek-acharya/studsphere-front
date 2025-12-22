import Navbar from "@/components/college/institutions/navbar"
import HeroSection from "@/components/college/institutions/hero-section"
import PartnersSection from "@/components/college/institutions/partners-sections"
import WhyTrustSection from "@/components/college/institutions/why-trust-section"
import VideoTestimonialSection from "@/components/college/institutions/video-testimonial"
import TestimonialsSection from "@/components/college/institutions/testimonials-sections"
import AdvertisingPricingSection from "@/components/college/institutions/advertising-pricing-section"
import AdvertisingSection from "@/components/college/institutions/advertising-section"
import PricingSection from "@/components/college/institutions/pricing-sections"
import ContactSection from "@/components/college/institutions/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <WhyTrustSection />
      <VideoTestimonialSection />
       <AdvertisingPricingSection />
      <TestimonialsSection />
     
      <AdvertisingSection />
      <PricingSection />
      <ContactSection />
    </div>
  )
}
