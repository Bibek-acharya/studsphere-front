import Image from "next/image"

interface Testimonial {
  id: string
  name: string
  image: string
  description: string
  badgeColor: string
  position: "left" | "right" | "center"
}

const testimonials: Testimonial[] = [
  {
    id: "santosh",
    name: "Santosh",
    image: "/santosh-profile-avatar.jpg",
    description:
      "",
    badgeColor: "bg-blue-500",
    position: "left",
  },
  {
    id: "jagdish",
    name: "Jagdish",
    image: "/jagdish-profile-avatar.jpg",
    description:
      "",
    badgeColor: "bg-purple-500",
    position: "right",
  },
  {
    id: "badal",
    name: "Badal",
    image: "/badal-profile-avatar.jpg",
    description: "",
    badgeColor: "bg-orange-400",
    position: "center",
    
  },
]

export function HowItStarted() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">How it started</h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative h-auto md:h-96 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Left testimonial - Santosh */}
          <div className="flex flex-col items-center md:absolute md:left-[15%] lg:left-[20%] md:top-1/2 md:-translate-y-1/2 w-full md:w-auto px-4 md:px-0">
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <Image
                  src="/professional-avatar.png"
                  alt="Santosh"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </div>
              <div
                className={`${testimonials[0].badgeColor} text-white rounded-full px-4 py-1 text-sm font-medium mb-4`}
              >
                {testimonials[0].name}
              </div>
              <p className="text-center text-sm md:text-base text-muted-foreground max-w-xs">
                {testimonials[0].description}
              </p>
            </div>
          </div>

          {/* Center content */}
          <div className="flex flex-col items-center md:max-w-md px-4 md:px-8">
            <p className="text-center text-base md:text-lg text-foreground mb-6">
              <span className="font-semibold text-primary">StudSphere</span> is a youth-driven platform dedicated to
              empowering students across Nepal by providing them with the right guidance, opportunities, and pathways to
              shape their future. We recognize that young people often struggle
            </p>
          </div>

          {/* Right testimonial - Jagdish */}
          <div className="flex flex-col items-center md:absolute md:right-[15%] lg:right-[20%] md:top-1/2 md:-translate-y-1/2 w-full md:w-auto px-4 md:px-0">
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <Image
                  src="/professional-avatar.png"
                  alt="Jagdish"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </div>
              <div
                className={`${testimonials[1].badgeColor} text-white rounded-full px-4 py-1 text-sm font-medium mb-4`}
              >
                {testimonials[1].name}
              </div>
              <p className="text-center text-sm md:text-base text-muted-foreground max-w-xs">
                {testimonials[1].description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom center testimonial - Badal */}
        <div className="flex justify-center mt-2 md:mt-0 px-4">
          <div className="flex flex-col items-center">
            <div className="relative mb-3">
              <Image
                src="/professional-avatar.png"
                alt="Badal"
                width={100}
                height={100}
                className="rounded-full object-cover "
              />
            </div>
            <div className={`${testimonials[2].badgeColor} text-white rounded-full px-4 py-1 text-sm font-medium`}>
              {testimonials[2].name}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
