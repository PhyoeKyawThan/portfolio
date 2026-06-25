import { useEffect, useState, useRef } from "react";
import { techStacksData } from "../data/techStacksData";

interface FloatingItem {
    id: number;
    logo: string;
    name: string;
    left: string;
    size: number;
    delay: string;
    duration: string;
}

export default function FloatingBackground() {
    const [items, setItems] = useState<FloatingItem[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const generatedItems = techStacksData.map((tech, index) => {
            const leftPosition = `${(index * (100 / techStacksData.length)) + Math.random() * 4}%`;
            const randomSize = Math.floor(Math.random() * 16) + 32; 
            const randomDelay = `${Math.random() * -15}s`;
            const randomDuration = `${Math.floor(Math.random() * 10) + 15}s`;

            return {
                id: index,
                logo: tech.logo,
                name: tech.name,
                left: leftPosition,
                size: randomSize,
                delay: randomDelay,
                duration: randomDuration,
            };
        });

        setItems(generatedItems);
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const elements = containerRef.current.querySelectorAll(".floating-node");

            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const elX = rect.left + rect.width / 2;
                const elY = rect.top + rect.height / 2;
                const distance = Math.hypot(e.clientX - elX, e.clientY - elY);
                const maxProximity = 180;

                if (distance < maxProximity) {
                    const proximityPower = (maxProximity - distance) / maxProximity;

                    const targetOpacity = 0.35 + (proximityPower * 0.55);
                    const targetScale = 1 + (proximityPower * 0.4);
                    const glowIntensity = proximityPower * 15;
                    (el as HTMLElement).style.opacity = `${targetOpacity}`;
                    (el as HTMLElement).style.transform = `scale(${targetScale})`;
                    (el as HTMLElement).style.filter = `drop-shadow(0 0 ${glowIntensity}px rgba(16, 185, 129, ${proximityPower * 0.6}))`;
                } else {
                    (el as HTMLElement).style.opacity = "";
                    (el as HTMLElement).style.transform = "";
                    (el as HTMLElement).style.filter = "";
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none w-full h-full"
        >
            {items.map((item) => (
                <div
                    key={item.id}
                    className="absolute bottom-0 opacity-0"
                    style={{
                        left: item.left,
                        width: `${item.size}px`,
                        height: `${item.size}px`,
                        animation: `floatBg ${item.duration} linear infinite`,
                        animationDelay: item.delay,
                    }}
                >
                    <div className="floating-node w-full h-full transition-all duration-200 ease-out opacity-35">
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain"
                            loading="eager"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}