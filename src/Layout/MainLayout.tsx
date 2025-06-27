import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

interface NavLink {
    label: string;
    href: string;
}

const links: NavLink[] = [
    { label: 'Inicio', href: '/' },
    { label: 'Platillos', href: '/dishes' },
];

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold">
                            MiLogo
                        </a>
                    </div>

                    {/* Links */}
                    <nav className="hidden md:flex space-x-6">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-gray-900"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Menu Hamburguesa */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="px-2 pt-2 pb-4 space-y-1">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

// Example Layout component to use the Navbar
export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="pt-16">
                <Outlet />
            </main>
        </>
    )
};
