import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/collegeease.jpg",
        title: "CollegeEase",
        description: "CollegeEase is the IEC companion that slashes busywork, skyrockets acceptances and provides excellent support to students in between sessions.",
        WebSiteLink: "https://app.collegeease.com/auth/signup",
        slug: "collegeease"
    },
    {
        image: "/images/work/mukandsumi.webp",
        title: "MukandSumi",
        description: "We're building the future of industry and commerce through products underpinned by generations of expertise and a relentless pursuit of excellence.",
        WebSiteLink: "https://www.mukandsumi.com/",
        slug: "mukandsumi"
    },
    {
        image: "/images/work/modenx.webp",
        title: "ModenX",
        description: "Step into the future of shopping with modenX – your ultimate partner for creating immersive, customer-centric retail experiences.",
        WebSiteLink: "https://modenx.marchingants.org/",
        slug: "modenx"
    },
    {
        image: "/images/work/theomkargroup.jpg",
        title: "The Omkar Group",
        description: "Building the Future with Precision, Innovation, and Sustainability",
        WebSiteLink: "https://theomkargroup.com/",
        slug: "theomkargroup"
    },
    {
        image: "/images/work/divorcex.jpg",
        title: "DivorceX",
        description: "Break free from never-ending disputes, lower your legal costs, and protect your child’s future. Our AI co-parenting assistant simplifies even the most high-conflict co-parenting scenarios, so you can focus on what really matters: your child’s well-being.",
        WebSiteLink: "https://app.divorcex.ai/auth/signup",
        slug: "divorcex"
    },
    {
        image: "/images/work/insyd.jpg",
        title: "Insyd",
        description: "The non-judgemental social network. Designed to help you take charge",
        WebSiteLink: "https://insyd.app/",
        slug: "insyd"
    }
];

export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
