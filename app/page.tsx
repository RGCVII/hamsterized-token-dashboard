import { Progress } from "@/components/ui/progress";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import the ClientWalletButton with no SSR
const ClientWalletButton = dynamic(
    () => import("./components/ClientWalletButton"),
    { ssr: false }
);

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <ClientWalletButton />
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">Hamsterized Token Dashboard</li>
                </ol>
                <Progress value={10} className="" />
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://app.charmverse.io/raidguild-cohort-season-7/hamsterized-token-dashboard-0771957381100139"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Project Details →
                </a>
            </footer>
        </div>
    );
}
