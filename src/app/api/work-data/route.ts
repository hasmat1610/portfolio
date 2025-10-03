import { NextResponse } from "next/server";

// Centralized technology mapping with color codes
const TECHNOLOGIES = {
  react: { label: "React", color: "cgblue"},
  node: { label: "Node.js", color: "green" },
  wordpress: { label: "WordPress", color: "purple" },
  lottie: { label: "Lottie", color: "lottie" },
  gsap: { label: "GSAP", color: "gsap" },
  bootstrap: { label: "Bootstrap", color: "blue" },
  tailwind: { label: "Tailwind CSS", color: "azuredream" },
  sass: { label: "Sass", color: "pink" },
  jquery: { label: "jQuery", color: "yellow" },
  nextjs: { label: "Next.js", color: "black" },
  aos: { label: "AOS", color: "orange" },
};

const workData = [
  {
    image: "/images/work/collegeease.jpg",
    title: "CollegeEase",
    description: 
            "A comprehensive platform revolutionizing college admissions counseling. CollegeEase empowers Independent Educational Consultants (IECs) with AI-driven tools, streamlined workflows, and automated progress tracking to enhance student success rates in college applications.",
    website: "https://app.collegeease.com/auth/signup",
    technologies: [TECHNOLOGIES.react, TECHNOLOGIES.node, TECHNOLOGIES.bootstrap, TECHNOLOGIES.sass, TECHNOLOGIES.lottie],
    slug: "collegeease",
  },
  {
    image: "/images/work/mukandsumi.webp",
    title: "MukandSumi",
    description:
            "A legacy industrial powerhouse with over 50 years of manufacturing excellence. MukandSumi combines traditional expertise with cutting-edge technology to deliver premium steel products and innovative industrial solutions worldwide.",
    website: "https://www.mukandsumi.com/",
    technologies: [TECHNOLOGIES.wordpress, TECHNOLOGIES.jquery, TECHNOLOGIES.aos],
    slug: "mukandsumi",
  },
  {
    image: "/images/work/modenx.webp",
    title: "ModenX",
    description:
            "An innovative retail technology platform transforming brick-and-mortar shopping experiences. ModenX integrates AI-powered analytics, smart inventory management, and interactive customer engagement tools to revolutionize modern retail operations.",
    website: "https://modenx.marchingants.org/",
    technologies: [TECHNOLOGIES.wordpress, TECHNOLOGIES.jquery, TECHNOLOGIES.lottie],
    slug: "modenx",
  },
  {
    image: "/images/work/theomkargroup.jpg",
    title: "The Omkar Group",
    description: 
            "A leading construction and real estate development company known for architectural excellence and sustainable building practices. Delivering premium residential and commercial projects with cutting-edge technology and environmental consciousness.",
    website: "https://theomkargroup.com/",
    technologies: [TECHNOLOGIES.wordpress, TECHNOLOGIES.jquery, TECHNOLOGIES.bootstrap, TECHNOLOGIES.gsap, TECHNOLOGIES.aos],
    slug: "theomkargroup",
  },
  {
    image: "/images/work/divorcex.jpg",
    title: "DivorceX",
    description:
            "An innovative AI-powered co-parenting platform designed to minimize conflict and optimize child-centric decisions. DivorceX uses advanced algorithms to facilitate communication, schedule management, and dispute resolution for separated parents.",
    website: "https://app.divorcex.ai/auth/signup",
    technologies: [TECHNOLOGIES.react, TECHNOLOGIES.node, TECHNOLOGIES.tailwind],
    slug: "divorcex",
  },
  {
    image: "/images/work/insyd.jpg",
    title: "Insyd",
    description:
            "A revolutionary mental health-focused social platform providing a safe, anonymous space for authentic self-expression. Featuring AI-driven support systems and community-building tools to promote emotional well-being.",
    website: "https://insyd.app/",
    technologies: [TECHNOLOGIES.nextjs, TECHNOLOGIES.node, TECHNOLOGIES.aos],
    slug: "insyd",
  },
];

export const GET = async () => {
  return NextResponse.json({ workData });
};
