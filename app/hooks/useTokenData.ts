import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getDao, getTokenInfo } from "../utils/queries";
import { TokenResponse, FormattedMember, FormattedDao } from "../utils/types";
import { formatTokenAmount } from "../utils/formatters";

export const useTokenData = (
    tokenAddress: string
): UseQueryResult<TokenResponse, Error> => {
    return useQuery({
        queryKey: ["tokenInfo", tokenAddress],
        queryFn: () => getTokenInfo(tokenAddress),
        enabled: !!tokenAddress,
        refetchOnWindowFocus: false,
    });
};

export const useDaoData = (
    daoAddress: string,
    tokenData: TokenResponse | undefined,
    limit: number = 10
): UseQueryResult<FormattedDao, Error> => {
    return useQuery({
        queryKey: ["tokenBalances", daoAddress, limit],
        queryFn: async () => {
            if (!tokenData) {
                throw new Error("Token info not available");
            }

            const daoData = await getDao(daoAddress);
            const formattedMembers: FormattedMember[] = daoData.members.map(
                (member) => ({
                    ...member,
                    votingParticipation: `${member.votes.length}/${daoData.dao.proposalCount}`,
                    formattedAmount: formatTokenAmount(
                        member.shares,
                        tokenData.token.decimals
                    ),
                })
            );

            return {
                ...daoData.dao,
                formattedTotalShares: formatTokenAmount(
                    daoData.dao.totalShares,
                    tokenData.token.decimals
                ),
                members: formattedMembers
                    .sort((a, b) => b.formattedAmount - a.formattedAmount)
                    .slice(0, limit),
            };
        },
        enabled: !!daoAddress && !!tokenData,
        refetchOnWindowFocus: false,
    });
};
