import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  type: "leaf" | "petal" | "fruit";
  left: number;
  delay: number;
  duration: number;
}

const RiverAnimation = () => {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate random floating elements
    const elements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      type: ["leaf", "petal", "fruit"][Math.floor(Math.random() * 3)] as "leaf" | "petal" | "fruit",
      left: Math.random() * 80 + 10,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <div className="fixed right-0 top-0 h-full w-24 md:w-32 pointer-events-none z-50 overflow-hidden">
      {/* River SVG with flowing water effect */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 1000"
      >
        <defs>
          {/* Gradient for water depth */}
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--river))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--river))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--river))" stopOpacity="0.1" />
          </linearGradient>

          {/* Gradient for shimmer effect */}
          <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--sky))" stopOpacity="0">
              <animate
                attributeName="stop-opacity"
                values="0;0.6;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="hsl(var(--sky))" stopOpacity="0.3">
              <animate
                attributeName="stop-opacity"
                values="0.3;0.8;0.3"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="hsl(var(--sky))" stopOpacity="0">
              <animate
                attributeName="stop-opacity"
                values="0;0.6;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Filter for soft glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main river body */}
        <path
          d="M 0,0 Q 30,100 20,200 T 25,400 T 30,600 T 20,800 T 25,1000 L 100,1000 Q 90,900 95,800 T 90,600 T 85,400 T 90,200 T 95,0 Z"
          fill="url(#waterGradient)"
          className="animate-river-flow"
        />

        {/* Flowing wave patterns */}
        <path
          d="M 20,0 Q 35,50 25,100 T 30,200 T 25,300 T 30,400 T 25,500 T 30,600 T 25,700 T 30,800 T 25,900 T 30,1000"
          stroke="hsl(var(--river))"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
          className="animate-wave-1"
        />

        <path
          d="M 40,0 Q 55,60 45,120 T 50,240 T 45,360 T 50,480 T 45,600 T 50,720 T 45,840 T 50,960 T 45,1000"
          stroke="hsl(var(--sky))"
          strokeWidth="0.3"
          fill="none"
          opacity="0.4"
          className="animate-wave-2"
        />

        <path
          d="M 60,0 Q 75,70 65,140 T 70,280 T 65,420 T 70,560 T 65,700 T 70,840 T 65,980 T 70,1000"
          stroke="hsl(var(--river))"
          strokeWidth="0.4"
          fill="none"
          opacity="0.2"
          className="animate-wave-3"
        />

        {/* Shimmer overlay */}
        <rect
          x="0"
          y="0"
          width="100"
          height="1000"
          fill="url(#shimmerGradient)"
          opacity="0.3"
        />

        {/* Sparkle effects */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={20 + (i % 3) * 25}
            cy={(i * 83) % 1000}
            r="1"
            fill="hsl(var(--sky))"
            opacity="0"
            filter="url(#glow)"
          >
            <animate
              attributeName="opacity"
              values="0;0.8;0"
              dur={`${2 + (i % 3)}s`}
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="0.5;1.5;0.5"
              dur={`${2 + (i % 3)}s`}
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* Floating elements (leaves, petals, fruits) */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float-down"
            style={{
              left: `${element.left}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            {element.type === "leaf" && (
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                className="animate-sway opacity-60"
              >
                <path
                  d="M8,0 Q12,5 12,12 Q12,18 8,20 Q4,18 4,12 Q4,5 8,0 Z"
                  fill="hsl(var(--leaf))"
                  opacity="0.7"
                />
                <path
                  d="M8,2 L8,18"
                  stroke="hsl(var(--leaf))"
                  strokeWidth="0.5"
                  opacity="0.5"
                />
              </svg>
            )}
            {element.type === "petal" && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                className="animate-spin-slow opacity-60"
              >
                <circle cx="7" cy="7" r="6" fill="hsl(var(--guava))" opacity="0.7" />
                <circle cx="7" cy="7" r="3" fill="hsl(var(--guava))" opacity="0.5" />
              </svg>
            )}
            {element.type === "fruit" && (
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                className="animate-bounce-soft opacity-60"
              >
                <ellipse
                  cx="6"
                  cy="8"
                  rx="5"
                  ry="6"
                  fill="hsl(var(--mango))"
                  opacity="0.7"
                />
                <path d="M6,2 Q7,0 6,0 Q5,0 6,2" fill="hsl(var(--leaf))" opacity="0.6" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiverAnimation;
