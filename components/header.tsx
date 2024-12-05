"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const linkData = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Posts", href: "/posts" },
]

const accessLink = ["/","/about", "/contact", "/posts"]

export default function Header() {
    const pathname = usePathname();
    if(!accessLink.includes(pathname)){
        return null;
    }
    return (
        <div className='absolute w-full z-10'>
            <div className="flex justify-between container mx-auto text-white p-8 items-center">
                <Link className="text-3xl font-bold" href="/">Home</Link>
                <div className="text-xl space-x-6">
                    {linkData.map((link) => {
                        return (
                            <Link key={link.name} className={pathname === link.href ? "text-purple-500" : ""} href={link.href}>{link.name}</Link>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
