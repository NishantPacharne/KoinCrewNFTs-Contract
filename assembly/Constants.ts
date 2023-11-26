import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koin Crew";
  export const SYMBOL: string = "KCR";
  export const MINT_PRICE_KT: u64 = 100000000; // TO BE UPDATED AS 500 KOIN
  export const MINT_PRICE_KCT: u64 = 200000000; // TO BE UPDATED AS 10,000 KCT

  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 60;
  export const URI: string = "ipfs://bafybeifqqtf7o7ges5urj3sd4xhakcht7lvkstws3i2qiebp7mpypvzemm";
  export const OWNER: Uint8Array = Base58.decode("1NPvJuEDhjLuW3VbGqAQe4MdSWSB3YWxK1");

  // token mint
  export const TOKEN_PAY_KT: Uint8Array = Base58.decode("1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju");
  export const TOKEN_PAY_KCT: Uint8Array = Base58.decode("1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju")  // TO BE UPDATED AS KCT 1BTQCpospHJRA7VAtZ4wvitdcqYCvkwBCD
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1NPvJuEDhjLuW3VbGqAQe4MdSWSB3YWxK1");
}