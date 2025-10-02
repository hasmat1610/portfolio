import React from 'react';
const ExperienceSec = () => {
    const experiences = [
        {
            year: "February’06 2018 - August'15 2021",
            title: "Web Designer",
            companyName: "Citrusbug Technolabs",
            company: "www.citrusbug.com",
            type: "Fulltime",
            description: "Started as a fresher in HTML and UI/UX design, built responsive layouts with Bootstrap, converted static sites to WordPress using Elementor, and optimized front-end performance through collaboration and best practices.",
            // small inline SVG as image data (data URI)
            imageData: "https://citrusbug.tech.blog/wp-content/uploads/2019/11/citrusfulllogo.png?w=768"
        },
        {
            year: " August'23 2021 - August'25 2023",
            title: "Senior Web Designer",
            companyName: "Nyusoft Solutions LLP",
            company: "www.nyusoft.com",
            type: "Fulltime",
            description: "As Senior UI & HTML Developer, crafted responsive, high-performance solutions, optimized speed with clean, scalable code, developed advanced layouts and animations, collaborated with cross-functional teams, and mentored juniors to strengthen skills and overall team efficiency.",
            // small inline SVG as image data (data URI)
            imageData: "https://nyusoft.com/wp-content/uploads/2023/05/logo-final.svg"
        },
        {
            year: "September'05 2023 - Present",
            title: "Senior Frontend Developer",
            companyName: "Techuz InfoWeb Private Limited",
            company: "www.techuz.com",
            type: "Fulltime",
            description: "Streamlined HTML within React.js & Next.js, cutting development time by 40%. Designed interactive AOS/GSAP animations, ensured high-quality, scalable, responsive solutions, collaborated cross-functionally, optimized performance, built reusable components, and mentored teams in front-end innovation.",
            // small inline SVG as image data (data URI)
            imageData: "https://www.techuz.com/static/830878b73756b7105e5b8109a9a30b78/8d332/techuz-logo-white.webp"
        },
    ];

    return (
        <section>
            <div className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black/25 pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-blue-500">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="text-4xl font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className="relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-50' : 'h-45'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-2 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1  flex items-center justify-center ${index === 2 ? 'border-primary bg-primary' : 'border-black/25 bg-white'
                                            }`}>
                                            {index === 2 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;