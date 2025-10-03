import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "hasmat1610@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:hasmat1610@gmail.com"
    },
    {
      type: "phone",
      label: "9265804775",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+9265804775"
    }
  ],
};


const educationData = {
  education: [
    {
      title: "Diploma in Computer Engineering (2014 - 2017)",
description: "Completed Diploma in Computer Engineering from R.C. Technical Institute, Ahmedabad, gaining strong foundation in programming, web development, and software fundamentals."

    },
    {
      title: "Web Designing (2017)",
description: "Completed Web Designing course at Xplora Design Skool, Ahmedabad, gaining skills in UI/UX, layout design, and responsive web development."
    }
  ],
  skills: [
    {
      name: "HTML",
      icon: "/images/home/education-skill/html-icon.svg",
      rating: 5
    },
    {
      name: "CSS",
      icon: "/images/home/education-skill/css-icon.svg",
      rating: 5
    },
    {
      name: "Sass",
      icon: "/images/home/education-skill/sass-icon.svg",
      rating: 5
    },
    {
      name: "Tailwind CSS",
      icon: "/images/home/education-skill/tailwind-icon.svg",
      rating: 5
    },
    {
      name: "Bootstrap",
      icon: "/images/home/education-skill/bootstrap-icon.svg",
      rating: 4
    },
    {
      name: "jQuery",
      icon: "/images/home/education-skill/jquery-icon.svg",
      rating: 4
    },
    {
      name: "Figma",
      icon: "/images/home/education-skill/figma-icon.svg",
      rating: 5
    },
    {
      name: "Lovable.dev",
      icon: "/images/home/education-skill/lovable-icon.svg",
      rating: 5
    },
    {
      name: "Sketch",
      icon: "/images/home/education-skill/sketch-icon.svg",
      rating: 4
    },
    {
      name: "React.js",
      icon: "/images/home/education-skill/react-icon.svg",
      rating: 3
    },
    {
      name: "Next.js",
      icon: "/images/home/education-skill/next-icon.svg",
      rating: 3
    },
    {
      name: "WordPress",
      icon: "/images/home/education-skill/wordpress-icon.svg",
      rating: 3
    },
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "Dribble",
      href: "/"
    },
    {
      title: "Facebook",
      href: "/"
    },
    {
      title: "LinkedIn",
      href: "/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "hasmat1610@gmail.com",
      link: "mailto:hasmat1610@gmail.com"
    },
    {
      type: "phone",
      label: "+9265804775",
      link: "tel:+9265804775"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
