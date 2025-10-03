"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const socialLinks = [
    { name: "👉 Connect on LinkedIn", url: "#" },
  ];

  return (
    <section id="contact" className="relative z-10 bg-black bg-[url('/images/home/grid-shape.webp')] bg-center bg-no-repeat bg-cover bg-fixed max-md:min-h-[calc(100dvh-180px)] max-md:flex max-md:items-center">
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-blue-500 font-medium text-base md:text-lg mb-2 tracking-wide">
            🌟 Let’s Collaborate
          </span>
          <h2 className="text-white text-3xl md:text-6xl xl:text-8xl font-bold uppercase mb-6 leading-[1.1] tracking-tight">
            READY TO CREATE <br /> SOMETHING AMAZING?
          </h2>
          <p className="text-base lg:text-2xl font-normal mb-12 max-xl:max-w-[600px] max-xl:mx-auto">
Turning Figma visions into pixel-perfect React.js, Next.js, and WordPress websites that delight users.
</p>


          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <div key={index} className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
                <Link
                href={social.url}
                  className="hero-button-gradient inline-flex items-center gap-2 md:gap-3 rounded-full px-5 py-2.5 md:px-7 md:py-3.5 text-sm md:text-base font-medium text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label={social.name}
                >
                  <span>{social.name}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
