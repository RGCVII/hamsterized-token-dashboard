import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const TokenLore = () => {
    return (
        <Card className="bg-gradient-to-t from-[#262f41] to-[#475778] backdrop-blur-sm border-white pb-4">
            <CardHeader className="flex flex-row items-center justify-between border-b border-white p-5">
                <CardTitle className="w-full text-2xl font-serif text-rg-red">
                    <p>Enter the</p>
                    <p>Hamsterverse</p>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-8 p-5 pt-4">
                <div className="border-b border-white pb-8">
                    <p className="text-sm text-white pb-3">Links</p>
                    <div className="flex flex-row justify-around items-center text-center text-white">
                        <a
                            href="https://admin.daohaus.club/#/molochv3/0x2105/0x4d5a5b4a679b10038e1677c84cb675d10d29fffd"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex justify-center bg-white rounded-md py-2 px-7">
                                <Image
                                    aria-hidden
                                    src="https://hackmd.io/_uploads/BJzlnx_xkl.png"
                                    alt="hamster icon"
                                    width={41}
                                    height={41}
                                />
                            </div>
                            <p className="text-xs font-serif text-rg-red pt-2">
                                DAOHaus
                            </p>
                        </a>

                        <a
                            href="https://app.charmverse.io/raidguild-cohort-season-7/home-19377272787222233"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex justify-center font-serif text-4xl text-black bg-white rounded-md py-1 px-8">
                                C
                            </div>
                            <p className="text-xs font-serif text-rg-red pt-2">
                                Charmverse
                            </p>
                        </a>

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
                            <p className="text-xs font-serif text-rg-red pt-2">
                                Uniswap
                            </p>
                        </a>
                    </div>
                </div>
                <div>
                    <p className="text-base text-rg-red font-serif pb-1">
                        The Hamsters&apos; Journey
                    </p>
                    <div className="flex flex-col gap-2 text-xs text-white h-[115px] overflow-y-scroll">
                        <p>
                            Scruff, a hamster in the Burrow—a gilded cage of
                            artificial warmth and mind-numbing comfort—begins to
                            see through Moloch&apos;s illusions. Haunted by
                            visions of decay, he escapes to the toxic world
                            above, where he joins a cohort of twenty surviving
                            hamsters from an original hundred, each faction
                            working to dismantle Moloch&apos;s grip in their own
                            way.
                        </p>
                        <p>
                            The cohort has split into specialized teams. Some
                            confront Moloch directly, while others build a
                            “dashboard of truth” to unite their insights. An
                            “expensive message” system restricts frivolous
                            communication, while a “cohort viewer” tracks each
                            group’s progress. A “hats tree” assigns roles,
                            symbolizing each hamster&apos;s unique role in the
                            fight.
                        </p>
                        <p>
                            Throughout their journey, they’re guided by Web3 and
                            DAO speakers who share insights on resilience and
                            unity. Cinder, an old mentor, teaches Scruff the
                            “Path of Rust”—a discipline to shed illusions and
                            embrace the harsh truth.
                        </p>
                        <p>
                            After Cinder’s sacrifice, Scruff confronts Moloch
                            and, armed with the Sunstone Herb, exposes Moloch’s
                            decaying form, breaking the illusion over his kin.
                            Yet time is running out. With Demo Day approaching,
                            the cohort must push through their final goals, for
                            the future of their world hangs on their resolve.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export { TokenLore };
