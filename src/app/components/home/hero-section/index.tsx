import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-30 pb-24 min-h-[calc(100vh-60px)] flex items-center cv">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 w-full xl:max-w-5xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>
                  Hi! I’m{" "}
                  <strong className="font-semibold">Hasmat Patel.</strong>
                </h1>
                <div className="wave">
                  {/* <Image src={"/images/home/banner/wave-icon.svg"} alt="wave-icon" width={62} height={62} className=""/> */}
                </div>
              </div>
              <h1>Sr. Front End Developer</h1>
            </div>
            <p className="text-base lg:text-2xl font-normal mb-2">
              Turning ideas into powerful, <br className="md:hidden" /> pixel-perfect experiences.
            </p>
            <div>
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
                <Link
                  href="/hasmat-resume.pdf"
                  download
                  className="hero-button-gradient inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-medium text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
