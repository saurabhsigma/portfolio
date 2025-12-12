"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Mail, Code, Sparkles, Zap, Command, Globe, MousePointer2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/magnetic-button";

const floatIcons = [
    { Icon: Code, delay: 0, x: 10, y: 20 },
    { Icon: Sparkles, delay: 0.5, x: -20, y: 10 },
    { Icon: Zap, delay: 1, x: 30, y: -30 },
    { Icon: Command, delay: 1.5, x: -40, y: 40 },
    { Icon: Globe, delay: 2, x: 20, y: -20 },
    { Icon: MousePointer2, delay: 1.2, x: -15, y: -15 },
];

export function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth) - 0.5);
        mouseY.set((clientY / innerHeight) - 0.5);
    };

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-background pt-20"
            onMouseMove={handleMouseMove}
        >

            {/* Animated Background Icons with Mouse Parallax */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none">
                {floatIcons.map(({ Icon, delay, x, y }, i) => {
                    const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [x * -2, x * 2]), { stiffness: 50, damping: 20 });
                    const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [y * -2, y * 2]), { stiffness: 50, damping: 20 });

                    return (
                        <motion.div
                            key={i}
                            style={{ x: moveX, y: moveY, top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 5,
                                repeat: Infinity,
                                delay: delay,
                                ease: "easeInOut"
                            }}
                            className="absolute w-24 h-24 text-primary"
                        >
                            <Icon className="w-full h-full" strokeWidth={1} />
                        </motion.div>
                    )
                })}
                {/* CSS Grid Pattern instead of noise image */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 relative max-w-4xl flex flex-col items-center"
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    className="mb-8 relative"
                >
                    <div className="w-56 h-56 md:w-80 md:h-80 overflow-hidden border-4 border-white/20 shadow-2xl relative z-10 bg-muted/50 backdrop-blur-sm group" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}>
                        <Image
                            src="/saurabh.jpeg"
                            alt="Saurabh Singh"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            style={{
                                filter: "contrast(1.15) saturate(1.2) brightness(1.1)",
                                objectPosition: "center 15%"  // Move focus higher up (shows top of image)
                            }}
                            priority
                        />
                    </div>
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-full -z-10 scale-110 animate-pulse" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-6 inline-block"
                >
                    <span className="py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-md">
                        Available for hire
                    </span>
                </motion.div>

                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                    <span className="block bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40 pb-2">
                        Saurabh
                    </span>
                    <span className="block text-foreground/80">Singh</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl mx-auto font-light leading-relaxed">
                    Crafting digital experiences with precision and soul.
                    <br />
                    <span className="italic opacity-70">Programmer • Web Developer</span>
                </p>

                <div className="flex gap-6 justify-center items-center">
                    <Link href="/#projects">
                        <MagneticButton className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden shadow-lg shadow-primary/25">
                            <span className="relative z-10 flex items-center gap-2">
                                See Work <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </MagneticButton>
                    </Link>
                    <div className="flex gap-4">
                        <Link href="https://github.com/saurabhsigma" target="_blank">
                            <MagneticButton className="p-4 rounded-full border border-border hover:bg-muted transition-all">
                                <Github className="w-5 h-5" />
                            </MagneticButton>
                        </Link>
                        <Link href="mailto:saurabh962003@gmail.com">
                            <MagneticButton className="p-4 rounded-full border border-border hover:bg-muted transition-all">
                                <Mail className="w-5 h-5" />
                            </MagneticButton>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
