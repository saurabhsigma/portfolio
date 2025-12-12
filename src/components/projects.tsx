"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tilt } from 'react-tilt';

const projects = [
    {
        title: "Thinkers Klub",
        description: "A platform for intellectual discourse.",
        link: "https://thinkersklub.vercel.app/",
        className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border-t border-l border-white/10 shadow-[inner_0_0_40px_rgba(0,0,0,0.2)]",
    },
    {
        title: "Portfolio v1",
        description: "Previous iteration of my personal site.",
        link: "#",
        className: "md:col-span-1 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-t border-l border-white/10",
    },
    {
        title: "Gatorr Esports",
        description: "Competitive typing platform.",
        link: "#",
        className: "md:col-span-1 bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-t border-l border-white/10",
    },
    {
        title: "TrustGraph",
        description: "Decentralized job platform.",
        link: "#",
        className: "md:col-span-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-t border-l border-white/10",
    },
];

const defaultTiltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 15,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02,   // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export function Projects() {
    return (
        <section id="projects" className="py-32">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex justify-between items-end mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        Selected Works
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="https://github.com/saurabhsigma" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-lg">
                            View all scripts <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                    {projects.map((project, index) => (
                        <Tilt key={index} options={defaultTiltOptions} className={cn("h-full", project.className.includes("col-span-2") ? "md:col-span-2" : "")}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "relative group h-full rounded-3xl p-10 border border-white/10 overflow-hidden flex flex-col justify-end transition-all hover:border-white/20",
                                    project.className
                                )}
                            >
                                {/* Abstract Gradient Overlay */}
                                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/10 to-transparent" />

                                <div className="mb-auto">
                                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white mb-4 group-hover:scale-110 transition-transform">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </span>
                                </div>

                                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                                    <h3 className="text-3xl font-bold font-display mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-lg">{project.description}</p>
                                </div>

                                <Link href={project.link} className="absolute inset-0 z-20">
                                    <span className="sr-only">View project</span>
                                </Link>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
}
