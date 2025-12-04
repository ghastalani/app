'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check localStorage or system preference
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 relative">
                <div className="w-5 h-5 rounded-full bg-white absolute top-1 left-1" />
            </div>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            style={{
                backgroundColor: theme === 'dark' ? 'rgb(55, 65, 81)' : 'rgb(209, 213, 219)',
            }}
            aria-label="Toggle theme"
        >
            <div
                className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center"
                style={{
                    transform: theme === 'dark' ? 'translateX(28px)' : 'translateX(4px)',
                }}
            >
                {theme === 'dark' ? (
                    <Moon className="w-3 h-3 text-gray-700" />
                ) : (
                    <Sun className="w-3 h-3 text-yellow-500" />
                )}
            </div>
        </button>
    );
}
