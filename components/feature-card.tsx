import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttons: string[];
  gradient: string;
  link?: string;
}

export function FeatureCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  buttons,
  gradient,
  link,
}: FeatureCardProps) {
  const cardContent = (
    <div
      className={`relative rounded-3xl overflow-hidden ${gradient} p-8 text-white ${
        link ? "cursor-pointer hover:scale-[1.02] transition-transform" : ""
      }`}
    >
      <div className="space-y-4">
        <p className="text-sm font-medium opacity-90">{title}</p>
        <h3 className="text-2xl font-bold leading-tight">
          {subtitle}
          <br />
          {description}
        </h3>
      </div>

      {/* Illustration */}
      <div className="mt-8 flex justify-center items-center h-48">
        <div className="relative w-48 h-48">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-2">
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant="ghost"
            className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs font-medium text-white h-auto"
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );

  if (link) {
    return <Link href={link}>{cardContent}</Link>;
  }

  return cardContent;
}
