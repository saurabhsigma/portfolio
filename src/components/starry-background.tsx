"use client";

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export const StarryBackground = () => {
    const { theme } = useTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Only run in dark mode or if system dark
        // Check local storage or system preference if theme is system
        // Simplification: We'll render it but CSS can toggle visibility or we check theme state

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: { x: number; y: number; radius: number; alpha: number; speed: number }[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const numStars = Math.floor((canvas.width * canvas.height) / 3000); // Density
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    alpha: Math.random(),
                    speed: Math.random() * 0.05 + 0.01,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Check if visible (using CSS class logic mainly, but here we can save perf)
            // We will handle visibility via parent className "dark:block hidden"

            ctx.fillStyle = '#ffffff';
            stars.forEach((star) => {
                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                // Twinkle effect
                star.alpha += star.speed * (Math.random() > 0.5 ? 1 : -1);
                if (star.alpha <= 0) star.alpha = 0;
                if (star.alpha >= 1) star.alpha = 1;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 hidden dark:block"
            style={{ background: 'transparent' }}
        />
    );
};
