"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Type for a project item
interface Technology {
  label: string;
  color: string;
}
interface WorkItem {
  image: string;
  title: string;
  description: string;
  website: string;
  technologies: Technology[];
  slug: string;
}

const LatestWork = () => {
  const [workData, setWorkData] = useState<WorkItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/work-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData || []);
      } catch (error) {
        console.error("Error fetching work data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // simple color mapping → you can extend this
const colorClasses: Record<string, string> = {
    cgblue: "bg-gradient-to-tr from-[#61dafb] to-[#2a88bd]",
    green: "bg-gradient-to-tr from-[#8cc84b] to-[#5a8030]",
    purple: "bg-gradient-to-tr from-[#21759b] to-[#1a5773]",
    lottie: "bg-gradient-to-tr from-[#00ddb3] to-[#009b7d]",
    gsap: "bg-gradient-to-tr from-[#00d1b2] to-[#009982]",
    blue: "bg-gradient-to-tr from-[#7952b3] to-[#553c80]",
    azuredream: "bg-gradient-to-tr from-[#38bdf8] to-[#2563eb]",
    pink: "bg-gradient-to-tr from-[#cd6799] to-[#9e4f74]",
    black: "bg-gradient-to-tr from-[#333333] to-[#000000]",
    orange: "bg-gradient-to-tr from-[#ff9f43] to-[#e67e22]",
    yellow: "bg-gradient-to-tr from-[#f1c40f] to-[#d4ac0d]",
};

  return (
    <section id="works" className="latest-work-section cv" aria-labelledby="latest-works-heading">
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 md:py-20">
            {/* Section Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black/25 pb-7 mb-9 md:mb-16">
              <h2 id="latest-works-heading">Latest Works</h2>
              <p className="text-base md:text-xl text-blue-500">
                {/* ({workData.length.toString().padStart(2, "0")}) */}
                ( 04 )
              </p>
            </div>

            {/* Loading State */}
            {loading && (
              <p className="text-center text-gray-500" role="status" aria-live="polite" aria-busy="true">
                Loading projects...
              </p>
            )}

            {/* Empty State */}
            {!loading && workData.length === 0 && (
              <p className="text-center text-gray-500" role="status" aria-live="polite">
                No projects available at the moment.
              </p>
            )}

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 xl:gap-y-12">
              {workData.map(
                ({ image, title, description, website, slug, technologies }) => (
                  <div
                    key={slug}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    {/* Project Thumbnail */}
                    <div className="relative">
                      <Image
                        src={image}
                        alt={title}
                        width={570}
                        height={360}
                        className="rounded-lg w-full h-[260px] md:h-[300px] lg:h-[420px] object-cover"
                      />
                      <Link
                        // href={`/${slug}`}
                        href={website}
                        className="absolute inset-0 hidden group-hover:flex items-center justify-center rounded-lg bg-primary/15 backdrop-blur-sm"
                        aria-label={`Open ${title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="65"
                          height="64"
                          viewBox="0 0 65 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.333"
                            width="64"
                            height="64"
                            rx="32"
                            fill="#2b7fff"
                          />
                          <path
                            d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center flex-wrap gap-3 group-hover:text-blue-500"
                          aria-label={`Visit ${title} website`}
                        >
                          <h5>{title}</h5>
                          <ArrowRight className="h-6 w-6 transition-all duration-300" />
                        </Link>
                      </div>
                      <p className="text-gray-700">{description}</p>

                      {/* Technologies Badges */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-xs font-medium text-white rounded-full shadow-sm ${
                              colorClasses[tech.color] || "bg-gray-600"
                            }`}
                          >
                            {tech.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;