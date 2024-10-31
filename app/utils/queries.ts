import { gql, request } from "graphql-request";
import { DaoResponse, TokenResponse } from "./types";
const GRAPH_UNISWAP_API_URL = `https://gateway.thegraph.com/api/${process.env.NEXT_PUBLIC_GRAPH_API_KEY_MAINNET}/subgraphs/id/GqzP4Xaehti8KSfQmv3ZctFSjnSUYZ4En5NRsiTbvZpz`;
const GRAPH_DAOHAUS_API_URL = `https://gateway.thegraph.com/api/${process.env.NEXT_PUBLIC_GRAPH_API_KEY_MAINNET}/subgraphs/id/7yh4eHJ4qpHEiLPAk9BXhL5YgYrTrRE6gWy8x4oHyAqW`;

export const getTokenInfo = async (
    tokenAddress: string
): Promise<TokenResponse> => {
    const query = gql`
        query getToken($tokenAddress: String!) {
            bundle(id: "1") {
                ethPriceUSD
            }
            token(id: $tokenAddress) {
                id
                symbol
                name
                decimals
                derivedETH
            }
        }
    `;

    const response = await request<TokenResponse>(
        GRAPH_UNISWAP_API_URL,
        query,
        {
            tokenAddress: tokenAddress.toLowerCase(),
        }
    );

    if (!response.token) {
        throw new Error("Token not found");
    }

    return response;
};

export const getDao = async (daoAddress: string): Promise<DaoResponse> => {
    const query = gql`
        query getBalances($daoAddress: String!) {
            dao(id: $daoAddress) {
                totalShares
                proposalCount
            }
            members {
                votes {
                    id
                }
                memberAddress
                shares
            }
        }
    `;

    const response = await request<DaoResponse>(GRAPH_DAOHAUS_API_URL, query, {
        daoAddress: daoAddress.toLowerCase(),
    });
    return response;
};
