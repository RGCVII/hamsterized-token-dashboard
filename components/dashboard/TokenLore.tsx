import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const TokenLore = () => {
    return (
        <Card className="bg-gradient-to-t from-[#262f41] to-[#475778] backdrop-blur-sm border-white pb-4">
            <CardHeader className="flex flex-row items-center justify-between border-b border-white p-5">
                <CardTitle className="w-full text-2xl font-serif text-rg-red">
                    Hamsterverse Lore
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-8 pt-8">
                <div>
                    <p className="text-base text-rg-red font-serif pb-3">
                        External links
                    </p>
                    <div className="flex flex-row justify-between items-center text-center text-white">
                        <a
                            href="https://app.uniswap.org/explore/pools/base/0x27004f6d0c1bB7979367D32Ba9d6DF6d61A18926"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex justify-center bg-white rounded-md py-1 px-8">
                                <Image
                                    aria-hidden
                                    src="/Uniswap_icon_pink.png"
                                    alt="Uniswap icon"
                                    width={38}
                                    height={38}
                                />
                            </div>
                            <p className="text-xs">Uniswap</p>
                        </a>
                        <a
                            href="https://dune.com/home"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex justify-center bg-white rounded-md px-6">
                                <Image
                                    aria-hidden
                                    src="/Dune-IconSmall.png"
                                    alt="Dune icon"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <p className="text-xs">Dune</p>
                        </a>
                        {/* need DAOHaus icon and link */}
                        <a
                            href="DAOHaus"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex justify-center bg-white rounded-md py-2 px-8">
                                <Image
                                    aria-hidden
                                    src="/RG-logo.png"
                                    alt="RaidGuild icon"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <p className="text-xs">DAOHaus</p>
                        </a>
                    </div>
                </div>
                <div>
                    <p className="text-base text-rg-red font-serif">
                        The Hamsters&apos; Journey
                    </p>
                    <p className="text-xs text-white h-[80px] overflow-y-scroll">
                        In a land ruled by tiny paws, the hamsters empire. With
                        bravery and wit, they sail the Uniswap seas, conquer the
                        Dune Desert, and protect their kingdom through DAOhaus.
                        Join them on their quest to defeat Moloch!
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export { TokenLore };
