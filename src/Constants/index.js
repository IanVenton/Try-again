import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Teaching Assistant - CSC 212",
        company_name: "SUNY Oswego",
        icon: '',
        iconBg: "#d1e7dd",
        date: "Spring 2024 - Present",
        points: [
            "Supported students in mastering foundational programming concepts in Java and data structures.",
            "Designed a bonus programming assignment 'Game of War' to help students practice object-oriented principles.",
            "Led lab sessions, graded assignments, and held weekly office hours to provide personalized guidance.",
            "Collaborated with the professor to continuously improve course delivery and content."
        ]
    },
    {
        title: "Research Assistant - TCAS for X-Plane 10",
        company_name: "SUNY Oswego",
        icon: "",
        iconBg: "#f0ead6",
        date: "Summer 2024 - Winter 2024",
        points: [
            "Collaborated with faculty and peers to develop a Traffic Collision Avoidance System (TCAS) in X-Plane 10.",
            "Simulated air traffic scenarios and tested TCAS responsiveness using real-time flight data.",
            "Implemented logic to detect and respond to potential airspace conflicts for virtual aircraft.",
            "Gained experience in flight dynamics, real-time systems, and aviation software tools."
        ]
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/IanVenton',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ian-venton-1b8877338/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'The Ultimate Dad App (HopHacks 2024)',
        description:
            'Built with Svelte and Google Maps API, this web app lets users draw a polygon over real-world spaces (e.g., yards, driveways) and calculates the optimal path across the area. Integrated map zoom, polygon drawing, and traversal pathfinding based on user-defined inputs.',
        link: 'https://devpost.com/software/ultimate-dad-app?ref_content=my-projects-tab&ref_feature=my_projects',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Dad Connections (WolfJam 2024)',
        description:
            'A quirky dating simulator built in under 24 hours using C and the Raylib graphics library. Focused on narrative branching, sprite control, and real-time character interaction loops.',
        link: 'https://prestosilver.itch.io/daddy',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Poke Profile (Ongoing)',
        description:
            'An online platform for Pokémon fans to share collections, deck builds, and track TCG/VGC stats. Backend in Java (Spring Boot), PostgreSQL for data, and a modern frontend in TypeScript.',
        link: '',
    },
];
