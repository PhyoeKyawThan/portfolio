import smartBeachImg from '../assets/projects/smartBeachImg.png';

export interface CodeRepository {
    label: string;
    url: string;
}

export interface Collaborator {
    name: string;
    role?: string;
    githubUrl?: string;
}

export interface Project {
    id: string;
    title: string;
    image?: string | null;
    status?: 'completed' | 'in-progress';
    description?: string;
    tags: string[];
    liveUrl?: string | null;
    githubUrl?: string | null;
    githubUrls?: CodeRepository[];
    collaborators?: Collaborator[];
}

export const projectsData: Project[] = [
    {
        "id": "fire-backend",
        "title": "Fire Backend Ecosystem",
        "image": "",
        "status": "in-progress",
        "description": "A serverless, high-performance API ecosystem powered by Firebase Cloud Functions and Express.js. Engineered for event-driven backend performance, handling secure routing, real-time trigger pipelines, and modular middleware processing layers.",
        "tags": [
            "Firebase Functions",
            "Express.js",
            "Node.js",
            "Serverless API"
        ],
        "liveUrl": null,
        "githubUrls": [
            {
                "label": "API Backend",
                "url": "https://github.com/PhyoeKyawThan/fire-backend"
            },
            {
                "label": "Client App",
                "url": "https://github.com/myomyatlol198-cmyk/Fire"
            }
        ],
        "collaborators": [
            {
                "name": "Myo Myat",
                "role": "Frontend Developer",
                "githubUrl": "https://github.com/myomyatlol198-cmyk"
            }
        ]
    },
    {
        "id": "smart-entrance",
        "title": "UCSH Smart Entrance System",
        "image": "",
        "status": "completed",
        "description": "An IoT-driven entrance monitoring system deployed for campus management. Integrates ESP32 hardware configurations with real-time QR token validation and automated serial data streaming to peripheral LCD interfaces.",
        "tags": [
            "ESP32",
            "Arduino",
            "Serial Comms",
            "Hardware Integration"
        ],
        "liveUrl": null,
        "githubUrl": "https://github.com/PhyoeKyawThan/Smart-Campus-Management-System.git",
        "collaborators": []
    },
    {
        "id": "smart-beach",
        "title": "Smart Beach",
        "image": smartBeachImg,
        "status": "completed",
        "description": "A comprehensive digital travel and hospitality platform engineered for coastal tourism. Features a cross-platform mobile application, seamless real-time booking channels via Firebase, and a high-performance backend supporting localized venue exploration. Good news is that this project is now live and accessible to the public in Play Store, providing users with an immersive experience in discovering and booking beach destinations.",
        "tags": [
            "ExpressJS",
            "NodeJS",
            "Firebase",
            "React Native",
            "Tailwind CSS"
        ],
        "liveUrl": "https://smartbeachmm.com/",
        "githubUrl": null,
        "collaborators": [
            {
                "name": "TommyX",
                "role": "Founder",
                "githubUrl": "https://github.com/tpmcoffical27-dot/"
            }
        ]
    }
];