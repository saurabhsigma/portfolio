export function Footer() {
    return (
        <footer className="py-12 border-t border-white/5">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                <p>&copy; 2025 Saurabh Singh.</p>
                <div className="flex gap-8 mt-4 md:mt-0 font-medium">
                    <span>Next.js</span>
                    <span>Tailwind</span>
                    <span>Motion</span>
                </div>
            </div>
        </footer>
    );
}
