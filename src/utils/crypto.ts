const CryptoES = require('crypto-es').default;

export type HashMethod = string;
export type HashFunction = (rawMessage: string) => {
  toString: (decoder: any) => string,
};

const DEFAULT_HASH_LENGTH = 20;
export const Hashes: {[name: string]: HashFunction} = {
  'MD5': CryptoES.MD5,
  'SHA3': CryptoES.SHA3,
};

export const prepareHash = (hashName: HashMethod) =>
  (rawMessage: string) => Hashes[hashName](rawMessage)
      .toString(CryptoES.enc.Base64)
      .replace(/=+$/, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .slice(0, DEFAULT_HASH_LENGTH);
