"use client";

import Image from "next/image";
import { UserWallet } from "@/components/dashboard/UserWallet";
import Dashboard from "@/components/dashboard/Dashboard";
import { CohortProjects } from "@/components/dashboard/CohortProjects";


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <main className="flex-1 bg-gradient-to-r from-[#1A202C] to-[#40557b]">
                <div className="container mx-auto flex flex-col gap-4 h-full">
                    <h1 className="text-6xl text-rg-red font-serif mt-24 mb-8">
                        RGC Token Dashboard
                    </h1>
                    {/* <UserWallet tokens={tokens} /> */}
                    <Dashboard />
                    <CohortProjects />
                </div>
            </main>

            <footer className="pb-12 pt-32 flex justify-center items-center gap-32 bg-[#1A202C]">
                <div className="flex flex-row gap-2">
                    <p>Made with</p>
                    <Image
                        aria-hidden
                        src="/RG-logo.png"
                        alt="Raid Guild icon"
                        width={28}
                        height={28}
                    />
                    <p>by RaidGuild CohortVII</p>
                </div>
                <a
                    href="https://github.com/RGCVII/hamsterized-token-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/GitHub_Invertocat_Light.png"
                        alt="Github icon"
                        width={32}
                        height={32}
                    />
                </a>
            </footer>
        </div>
    );
}
