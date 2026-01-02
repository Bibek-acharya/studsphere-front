import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #3b4a7d 0%, #2d3561 50%, #1f2647 100%)",
          }}
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to shape your future?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Seats are limited for this seminar. Secure your spot today and
              take the first step towards your global education journey.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
              size="lg"
            >
              Review Your college
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
