import { Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const index = () => {
    return (
        <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-20 min-h-[calc(100vh-60px)] flex items-center">
            <div className="container">
                <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
                    <div className="flex flex-col gap-4 md:gap-7 max-w-5xl">
                        <div>
                            {/* <div className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium text-white">
                                <div className="relative">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    <div className="absolute inset-0 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                                </div>
                                <span>Available for exciting opportunities</span>
                                </div>
                                 */}
                            <div className="flex items-center gap-8">
                                <h1>Hi! I’m <strong className="font-semibold">Hasmat Patel.</strong></h1>
                                <div className="wave">
                                {/* <Image src={"/images/home/banner/wave-icon.svg"} alt="wave-icon" width={62} height={62} className=""/> */}
                                </div>
                            </div>
                            <h1>Sr. Front End Developer</h1>
                        </div>
                        <p className="text-2xl font-normal mb-2">Turning ideas into powerful, pixel-perfect experiences.</p>
                        <div>
                            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
                            <Link 
                                href="/resume.pdf"
                                download
                                className="hero-button-gradient inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-medium text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:scale-105 active:scale-95"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Resume</span>
                            </Link>
                            
                            {/* <Link 
                                href="#projects"
                                className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-medium text-gray-700 bg-white border-2 border-gray-200 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:scale-105 active:scale-95"
                            >
                                <span>View My Work</span>
                                <ExternalLink className="w-4 h-4" />
                            </Link> */}
                        </div>

                            {/* <button
                                onClick={() => handleAction("Download Resume")}
                                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-full transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                            >
                                
                            </button> */}
                        </div>
                    </div>
                    <Image src={"/images/home/banner/banner-img.png"} alt="banner-img" width={685} height={650} className="block lg:hidden" />
                    
                </div>
            </div>
            {/* <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
                <Image src={"/images/home/banner/banner-img.png"} alt="banner-img" width={685} height={650} className=" absolute right-0 top-0 z-1" />
            </div> */}
        </section>
    )
}

export default index