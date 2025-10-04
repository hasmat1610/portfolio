"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="education" className="education-skills-section cv">
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src="/images/home/education-skill/edu-skill-vector.svg"
            alt="Education and Skills Vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2 max-md:hidden w-auto h-auto"
            priority={true}
          />
          <div className="relative z-10 py-16 md:py-24 xl:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black/25 pb-7 mb-9 xl:mb-16">
              <h2>Education & Technical Skills</h2>
              <p className="text-base md:text-xl text-blue-500 min-w-[60px] text-right">
                ( 03 )
              </p>
            </div>
            <div className="flex flex-col items-start gap-10 xl:gap-16">
              <div className="w-full grid md:grid-cols-2 gap-6 xl:gap-16">
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 md:gap-4 lg:gap-6"
                    >
                      <div className="no-print mt-2 md:mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black/25">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h5>{value?.title}</h5>
                        <p className="font-normal">{value?.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 w-full">
                {educationData?.skills?.map((value: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="max-md:px-2 p-4 border border-softGray rounded-lg flex flex-col gap-4 sm:gap-6 items-center justify-between"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <Image
                          src={value?.icon}
                          alt="icon"
                          width={70}
                          height={70}
                          className="object-contain h-8 w-14 md:w-full md:h-16"
                        />
                        <p className="text-black font-normal text-center max-md:text-xs">
                          {value?.name}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="max-md:w-1.5 max-md:h-1.5"
                          >
                            <rect
                              width="9"
                              height="9"
                              rx="4.5"
                              fill={i < value?.rating ? "#2b7fff" : "#C0D8E0"}
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
