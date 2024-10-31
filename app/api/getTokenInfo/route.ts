import { gql, request as graphqlRequest } from "graphql-request";
import { NextResponse } from "next/server";
import { TokenResponse } from "../../utils/types";

const GRAPH_UNISWAP_API_URL = `https://gateway.thegraph.com/api/${process.env.GRAPH_API_KEY_MAINNET}/subgraphs/id/GqzP4Xaehti8KSfQmv3ZctFSjnSUYZ4En5NRsiTbvZpz`;

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

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const tokenAddress = searchParams.get("tokenAddress");

    if (!tokenAddress) {
        return NextResponse.json(
            { error: "Token address is required" },
            { status: 400 }
        );
    }

    console.log(`Fetching token info for address: ${tokenAddress}`);
    console.log(`GRAPH_UNISWAP_API_URL: ${GRAPH_UNISWAP_API_URL}`);

    try {
        const response: TokenResponse = await graphqlRequest(
            GRAPH_UNISWAP_API_URL,
            query,
            {
                tokenAddress: tokenAddress.toLowerCase(),
            }
        );

        if (!response.token) {
            console.error("Token not found");
            return NextResponse.json(
                { error: "Token not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(response);
    } catch (error) {
        console.error("Error fetching token info:", error);
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json(
                { error: "An unknown error occurred" },
                { status: 500 }
            );
        }
    }
}
