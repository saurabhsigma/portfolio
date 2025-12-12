"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative rounded-full p-2.5 transition-colors border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <motion.div
                    initial={false}
                    animate={{ scale: theme === "dark" ? 0 : 1, opacity: theme === "dark" ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{ scale: theme === "dark" ? 1 : 0, opacity: theme === "dark" ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                >
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </motion.div>
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
