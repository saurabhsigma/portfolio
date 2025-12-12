"use client";

import { motion } from "framer-motion";
import {
    Code2, Database, Globe, Layout, Smartphone, Terminal,
    Cpu, Layers, Box, Hexagon, Component, Share2,
    Zap, GitBranch, Command
} from "lucide-react";

// More abstract tech icons
const icons = [
    { icon: Code2, delay: 0 },
    { icon: Database, delay: 0.1 },
    { icon: Globe, delay: 0.2 },
    { icon: Layout, delay: 0.3 },
    { icon: Smartphone, delay: 0.15 },
    { icon: Terminal, delay: 0.25 },
    { icon: Cpu, delay: 0.4 },
    { icon: Layers, delay: 0.35 },
    { icon: Box, delay: 0.05 },
    { icon: Hexagon, delay: 0.45 },
    { icon: Component, delay: 0.5 },
    { icon: Share2, delay: 0.55 },
    { icon: Zap, delay: 0.6 },
    { icon: GitBranch, delay: 0.65 },
    { icon: Command, delay: 0.7 },
];

export function Skills() {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-4xl md:text-5xl font-bold mb-16 tracking-tight"
                >
                    Tech Stack
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {icons.map(({ icon: Icon, delay }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                scale: 1.2,
                                rotate: 5,
                                backgroundColor: "var(--primary)",
                                color: "var(--primary-foreground)"
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: delay,
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className="w-20 h-20 md:w-24 md:h-24 bg-card/50 backdrop-blur-sm border border-white/5 rounded-[2rem] flex items-center justify-center text-muted-foreground transition-colors hover:shadow-[0_0_30px_-5px_var(--primary)]"
                        >
                            <Icon className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
                        </motion.div>
                    ))}
                </div>

                <p className="mt-12 text-sm text-muted-foreground uppercase tracking-widest">
                    And many more modern tools
                </p>
            </div>
        </section>
    );
}
