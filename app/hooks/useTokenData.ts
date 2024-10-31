import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
    TokenResponse,
    FormattedMember,
    FormattedDao,
    Dao,
} from "../utils/types";
import { formatTokenAmount } from "../utils/formatters";

export const useTokenData = (
    tokenAddress: string
): UseQueryResult<TokenResponse, Error> => {
    return useQuery({
        queryKey: ["tokenInfo", tokenAddress],
        queryFn: async () => {
            const response = await fetch(
                `/api/getTokenInfo?tokenAddress=${tokenAddress}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch token info");
            }
            const data: TokenResponse = await response.json();
            return data;
        },
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

            const response = await fetch(
                `/api/getDao?daoAddress=${daoAddress}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch DAO info");
            }
            const dao: Dao = await response.json();
            const formattedMembers: FormattedMember[] = dao.members.map(
                (member) => ({
                    ...member,
                    votingParticipation: `${member.votes.length}/${dao.proposalCount}`,
                    formattedAmount: formatTokenAmount(
                        member.shares,
                        tokenData.token.decimals
                    ),
                })
            );
            return {
                ...dao,
                formattedTotalShares: formatTokenAmount(
                    dao.totalShares,
                    tokenData.token.decimals
                ),
                holdersCount: dao.members.length,
                members: formattedMembers
                    .sort((a, b) => b.formattedAmount - a.formattedAmount)
                    .slice(0, limit),
            };
        },
        enabled: !!daoAddress && !!tokenData,
        refetchOnWindowFocus: false,
    });
};
