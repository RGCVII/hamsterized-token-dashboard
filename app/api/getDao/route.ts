// app/api/getDao/route.ts
import { NextResponse } from "next/server";
import { gql, request as graphqlRequest } from "graphql-request";
import { DaoResponse } from "../../utils/types";

const GRAPH_DAOHAUS_API_URL = `https://gateway.thegraph.com/api/${process.env.GRAPH_API_KEY_MAINNET}/subgraphs/id/7yh4eHJ4qpHEiLPAk9BXhL5YgYrTrRE6gWy8x4oHyAqW`;

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

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const daoAddress = searchParams.get("daoAddress");

    if (!daoAddress) {
        return NextResponse.json(
            { error: "DAO address is required" },
            { status: 400 }
        );
    }

    console.log(`Fetching DAO info for address: ${daoAddress}`);
    console.log(`GRAPH_DAOHAUS_API_URL: ${GRAPH_DAOHAUS_API_URL}`);

    try {
        const response: DaoResponse = await graphqlRequest(
            GRAPH_DAOHAUS_API_URL,
            query,
            {
                daoAddress: daoAddress.toLowerCase(),
            }
        );

        if (!response.dao) {
            console.error("DAO not found");
            return NextResponse.json(
                { error: "DAO not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(response);
    } catch (error) {
        console.error("Error fetching DAO info:", error);
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
