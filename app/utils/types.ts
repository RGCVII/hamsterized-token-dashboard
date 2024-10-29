export interface Token {
  id: string;
  symbol: string;
  name: string;
  decimals: number;
  totalSupply: string;
  volume: string;
}

export interface TokenBalance {
  memberAddress: string;
  shares: number;
}

export interface TokenBalanceResponse {
  members: [TokenBalance];
}
export interface TokenResponse {
  token: Token;
}

export interface FormattedTokenBalance extends TokenBalance {
  formattedAmount: number;
}
