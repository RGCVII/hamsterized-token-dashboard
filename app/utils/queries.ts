import { gql, request } from "graphql-request";
import {
  Token,
  TokenBalance,
  TokenBalanceResponse,
  TokenResponse,
} from "./types";
const GRAPH_UNISWAP_API_URL = `https://gateway.thegraph.com/api/${process.env.NEXT_PUBLIC_GRAPH_API_KEY_MAINNET}/subgraphs/id/GqzP4Xaehti8KSfQmv3ZctFSjnSUYZ4En5NRsiTbvZpz`;
const GRAPH_DAOHAUS_API_URL = `https://gateway.thegraph.com/api/${process.env.NEXT_PUBLIC_GRAPH_API_KEY_MAINNET}/subgraphs/id/7yh4eHJ4qpHEiLPAk9BXhL5YgYrTrRE6gWy8x4oHyAqW`;

export const getTokenInfo = async (tokenAddress: string): Promise<Token> => {
  const query = gql`
    query getToken($tokenAddress: String!) {
      token(id: $tokenAddress) {
        id
        symbol
        name
        decimals
        totalSupply
        volume
      }
    }
  `;

  const response = await request<TokenResponse>(GRAPH_UNISWAP_API_URL, query, {
    tokenAddress: tokenAddress.toLowerCase(),
  });

  if (!response.token) {
    throw new Error("Token not found");
  }

  return response.token;
};

export const getTokenBalances = async (
  daoAddress: string
): Promise<TokenBalance[]> => {
  const query = gql`
    query getBalances($daoAddress: String!) {
      members(where: { dao: $daoAddress }) {
        memberAddress
        shares
      }
    }
  `;

  const response = await request<TokenBalanceResponse>(
    GRAPH_DAOHAUS_API_URL,
    query,
    {
      daoAddress: daoAddress.toLowerCase(),
    }
  );
  console.log(response);
  return response?.members || [];
};
