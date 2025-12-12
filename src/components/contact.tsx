"use client";

import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="py-32">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent rounded-[3rem] p-12 md:p-20 border border-t-white/10 border-white/5"
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02]" />

                    <h2 className="font-display text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
                        Let's Talk.
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
                        <Link href="mailto:saurabh962003@gmail.com">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
                            >
                                <Mail className="w-5 h-5" /> Email Me
                            </motion.button>
                        </Link>
                        <Link href="https://github.com/saurabhsigma" target="_blank">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-background border border-input text-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-muted transition-colors"
                            >
                                <Github className="w-5 h-5" /> GitHub
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
