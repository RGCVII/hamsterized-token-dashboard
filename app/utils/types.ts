export interface Token {
    id: string;
    symbol: string;
    name: string;
    decimals: number;
    totalSupply: string;
    volume: string;
}

export interface DaoMember {
    memberAddress: string;
    shares: number;
}

export interface TokenBalanceResponse {
    members: [DaoMember];
}
export interface TokenResponse {
    token: Token;
}

export interface FormattedMember extends DaoMember {
    formattedAmount: number;
}
