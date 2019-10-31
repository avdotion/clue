// @ts-ignore
import CryptoES from 'crypto-es';

const DEFAULT_HASH_LENGTH: number = 20;
export const DEFAULT_HASH_FUNCTION: string = 'SHA3';
export const HASH_FUNCTIONS = {
  'MD5': CryptoES.MD5,
  'SHA3': CryptoES.SHA3,
};

export const prepareHash = (hashFunctionName: string) => (rawMessage: string) =>
  // @ts-ignore
  HASH_FUNCTIONS[hashFunctionName](rawMessage)
      .toString(CryptoES.enc.Base64)
      .replace(/=+$/, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .slice(0, DEFAULT_HASH_LENGTH);
