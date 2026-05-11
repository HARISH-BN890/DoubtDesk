"use client"

import {GitBranch, Mail, ArrowRight } from "lucide-react"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerSections = [                       // I will change or remove these constants if any of them is not needed . This is just for design purposes 
        {
            title: "Product",
            links: [
                { label: "Dashboard", href: "/dashboard" },
                { label: "Virtual Campus", href: "/rooms" },

            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Documentation", href: "#" },
                { label: "Tutorials", href: "#" },
                { label: "API Docs", href: "#" },
                { label: "Blog", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "#" },
                { label: "Contact", href: "Placeholdermail.com" },
                { label: "Community", href: "#" },
                { label: "Careers", href: "#" },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                
            ],
        },
    ]

    const socialLinks = [
        {
            icon: faLinkedin,
            href: "https://www.linkedin.com/in/karan-mani-tripathi-b66bb530b/",
            label: "LinkedIn",
            hoverColor: "hover:text-blue-400",
            isFontAwesome: true,
        },
        {
            icon: GitBranch,
            href: "https://github.com/knoxiboy/DoubtDesk",
            label: "GitHub",
            hoverColor: "hover:text-slate-300",
            isFontAwesome: false,
        },
        {
            icon: Mail,
            href: "karankmt.tripathi@gmail.com",
            label: "Email",
            hoverColor: "hover:text-purple-400",
            isFontAwesome: false,
        },
    ]

    return (
        <footer className="relative bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900  border-t border-white/5 bg-slate-950/50 py-5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none" />
            // Main Footer Begins Here 
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 pb-12 border-b border-white/5">
                        <div className="col-span-1 lg:col-span-1">
                            <Link href="/" className="flex items-center gap-3 mb-6 group">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-shadow">
                                    D
                                </div>
                                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight group-hover:from-blue-300 group-hover:to-purple-400 transition-all">
                                    DoubtDesk
                                </span>
                            </Link>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
                                your personal AI career wingman
                            </p>
                            
                        </div>
                        <div className="col-span-1 lg:col-span-2">
                            <h3 className="text-base font-bold text-white mb-4">Stay Updated</h3>
                            <p className="text-sm text-slate-400 mb-4">
                                Subscribe to get the latest updates about features and educational insights.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-sm"
                                />
                                <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap">
                                    Subscribe
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/5">
                        {footerSections.map((section) => ( // I am jus mapping the objects  in the FooterSection
                            <div key={section.title}>
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                                            >
                                                <span className="group-hover:translate-x-1 transition-transform">
                                                    {link.label}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={`p-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-400 ${social.hoverColor} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                                    >
                                        {social.isFontAwesome ? (
                                            <FontAwesomeIcon icon={social.icon as any} className="w-4 h-4" />
                                        ) : social.label === "GitHub" ? (
                                            <GitBranch className="w-4 h-4" />
                                        ) : (
                                            <Mail className="w-4 h-4" />
                                        )}
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-slate-500">
                            <span>© {currentYear} DoubtDesk </span>
                            
                            
                        </div>
                    </div>
                </div>

                {/* Subtle Top Border Gradient */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>
        </footer>
    )
}
