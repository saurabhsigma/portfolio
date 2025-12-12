"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
                        The Intersection of <br />
                        <span className="text-muted-foreground">Logic & Creativity</span>
                    </h2>
                    <p className="text-xl md:text-3xl font-light leading-relaxed text-foreground/80">
                        I build digital products that feel natural and look exceptional.
                        Combining <span className="text-foreground font-medium">clean code</span> with <span className="text-foreground font-medium">premium aesthetics</span> to create memorable web experiences.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
