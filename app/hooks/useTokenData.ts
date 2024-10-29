import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getTokenInfo, getTokenBalances } from "../utils/queries";
import { Token, FormattedTokenBalance } from "../utils/types";
import { formatTokenAmount } from "../utils/formatters";

export const useTokenInfo = (
  tokenAddress: string
): UseQueryResult<Token, Error> => {
  return useQuery({
    queryKey: ["tokenInfo", tokenAddress],
    queryFn: () => getTokenInfo(tokenAddress),
    enabled: !!tokenAddress,
    refetchOnWindowFocus: false,
  });
};

export const useTokenBalances = (
  daoAddress: string,
  tokenInfo: Token | undefined,
  limit: number = 10
): UseQueryResult<FormattedTokenBalance[], Error> => {
  return useQuery({
    queryKey: ["tokenBalances", daoAddress, limit],
    queryFn: async () => {
      if (!tokenInfo) {
        throw new Error("Token info not available");
      }

      const balances = await getTokenBalances(daoAddress);

      const formattedBalances: FormattedTokenBalance[] = balances.map(
        (balance) => ({
          ...balance,
          formattedAmount: formatTokenAmount(
            balance.shares,
            tokenInfo.decimals
          ),
        })
      );

      return formattedBalances
        .sort((a, b) => b.formattedAmount - a.formattedAmount)
        .slice(0, limit);
    },
    enabled: !!daoAddress && !!tokenInfo,
    refetchOnWindowFocus: false,
  });
};
