import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" className="about-me-section">
      <div className="relative bg-softGray py-10 md:py-20">
        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black/25 pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-blue-500">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-12 flex gap-10 items-center justify-between">
              <div className="w-[400px] h-[440px] hidden lg:flex max-w-full">
                <Image
                  src="/images/home/about-me/about-banner-img.svg"
                  alt="about-banner"
                  width={400}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-3xl flex-1">
                <div className="w-full text-justify text-base md:text-lg text-black">
                  <p>
                    <strong> Results-driven Senior Frontend Developer</strong>{" "}
                    with 7.5+ years of experience designing and developing
                    responsive, high-performance web applications. Expert in{" "}
                    <strong>
                      HTML, CSS, Bootstrap, and modern JavaScript frameworks
                    </strong>
                    , with strong UI/UX design skills using{" "}
                    <strong>Figma</strong> and <strong>Sketch</strong>. Skilled
                    in building{" "}
                    <strong>
                      pixel-perfect, scalable, and cross-device compatible
                      designs
                    </strong>
                    , with a focus on <strong>performance optimization</strong>{" "}
                    and maintainable code.
                  </p>
                  <p className="pt-3">
                    Known for{" "}
                    <strong>
                      {" "}
                      attention to detail, problem-solving, and translating
                      complex requirements
                    </strong>{" "}
                    into seamless user experiences. Experienced in collaborating
                    with <strong>
                      developers, QA teams, and stakeholders
                    </strong>{" "}
                    to deliver high-quality projects on time.
                  </p>
                  <p className="pt-3">
                    Currently seeking to leverage{" "}
                    <strong>
                      frontend development expertise, UI/UX design proficiency,
                      and performance optimization skills
                    </strong>{" "}
                    to contribute to innovative projects and drive business
                    growth.{" "}
                  </p>
                </div>

                <div className="grid grid-cols-3 py-6 xl:py-8 gap-5 border-b border-mistGray">
                  {[
                    { count: "7.5+", label: "Years of experience" },
                    { count: "50+", label: "Happy Clients" },
                    { count: "100+", label: "Project Completed" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 xl:pt-8 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src="/images/icon/lang-icon.svg"
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Language</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Hindi", "Gujarati"].map((lang) => (
                      <p
                        key={lang}
                        className="bg-white py-2 md:py-3 px-5 w-fit rounded-full text-base xl:text-xl"
                      >
                        {lang}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
