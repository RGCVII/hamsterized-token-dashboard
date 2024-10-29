import { TokenHolder } from "@/app/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Leaderboard = ({
    selectedToken,
    tokenHolders,
}: {
    selectedToken: string;
    tokenHolders: TokenHolder[];
}) => {
    return (
        <Card className="bg-gradient-to-b from-[#262f41] to-[#475778] backdrop-blur-sm border-white col-span-2 overflow-y-auto">
            <CardHeader className="border-b border-white">
                <CardTitle className="w-full text-2xl font-serif text-rg-red">
                    Leaderboard
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col font-mono text-sm p-0 rounded-lg text-white">
                <div className="min-h-[60px] grid grid-cols-[60px_1fr_1fr_1fr_1fr] gap-4 border-b border-white px-6 items-center">
                    <p>Rank</p>
                    <p>Wallet Address</p>
                    <p>Token Holdings</p>
                    <p>Staked Amount</p>
                    <p>Voting Participation</p>
                </div>

                {tokenHolders
                    .slice()
                    .sort((a, b) => b.holdings - a.holdings)
                    .map((holder, i) => (
                        <div
                            key={holder.address}
                            className="min-h-[60px] grid grid-cols-[60px_1fr_1fr_1fr_1fr] gap-4 border-b border-white items-center px-6"
                        >
                            <p>{getRankFromIndex(i)}</p>
                            <p>{holder.address}</p>
                            <p>
                                {holder.holdings.toLocaleString()}{" "}
                                {selectedToken}
                            </p>
                            <p>
                                {holder.stakedAmount.toLocaleString()}{" "}
                                {selectedToken}
                            </p>
                            <p>{holder.votingParticipation}</p>
                        </div>
                    ))}
            </CardContent>
        </Card>
    );
};

export { Leaderboard };

function getRankFromIndex(i) {
    return new Intl.PluralRules("en", {
        type: "ordinal",
    }).select(i + 1) === "one"
        ? `${i + 1}st`
        : new Intl.PluralRules("en", {
              type: "ordinal",
          }).select(i + 1) === "two"
        ? `${i + 1}nd`
        : new Intl.PluralRules("en", {
              type: "ordinal",
          }).select(i + 1) === "few"
        ? `${i + 1}rd`
        : (i + 1) % 10 === 1 && (i + 1) % 100 !== 11
        ? `${i + 1}st`
        : (i + 1) % 10 === 2 && (i + 1) % 100 !== 12
        ? `${i + 1}nd`
        : (i + 1) % 10 === 3 && (i + 1) % 100 !== 13
        ? `${i + 1}rd`
        : `${i + 1}th`;
}
