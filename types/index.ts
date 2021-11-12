import { Signer } from "@ethersproject/abstract-signer";

export interface Accounts {
  admin: string;
  alice: string;
  bob: string;
  eric: string;
  lester: string;
}

export interface Signers {
  admin: Signer;
  alice: Signer;
  bob: Signer;
  eric: Signer;
  lester: Signer;
}
