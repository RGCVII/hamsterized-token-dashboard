export interface Token {
    id: string;
    symbol: string;
    name: string;
    decimals: number;
    derivedETH: number;
    volume: number;
}

export interface TokenInfo extends Token {
    price: number;
    totalSupply: string;
    description: string;
    staked: number;
    unstaked: number;
    apr: number;
    availableHoldings: number;
}

export interface Bundle {
    ethPriceUSD: number;
}

export interface DaoMember {
    memberAddress: string;
    shares: number;
    votes: { approved: boolean }[];
}
export interface Dao {
    totalShares: number;
    proposalCount: string;
    members: DaoMember[];
}
export interface DaoResponse {
    dao: Dao;
}
export interface TokenResponse {
    bundle: Bundle;
    token: Token;
}

export interface FormattedMember extends DaoMember {
    formattedAmount: number;
    votingParticipation: string;
}

export interface FormattedDao extends Dao {
    members: FormattedMember[];
    formattedTotalShares: string;
    holdersCount: number;
}
