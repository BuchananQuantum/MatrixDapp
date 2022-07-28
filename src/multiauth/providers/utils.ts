import type { RequestArguments, Web3Provider } from './types';

export const truncateAddress = (address: string) => {
  if (!address) return 'No Account';
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num: any) => {
  const val = Number(num);
  return '0x' + val.toString(16);
};

export async function web3ProviderRequest<Result = unknown>(
  provider: Web3Provider,
  request: RequestArguments
): Promise<Result> {
  return new Promise((resolve, reject) => {
    provider.sendAsync(request, (err, response) => {
      if (err == null) {
        if (response == null) {
          reject(new Error('Missing response'));
        } else if (response.error == null) {
          resolve(response.result as Result);
        } else {
          reject(response.error);
        }
      } else {
        reject(err);
      }
    });
  });
}
