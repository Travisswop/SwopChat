import { Client, Signer, PublicIdentity } from '@xmtp/xmtp-js'; // or react-native-sdk
import { createPrivySigner } from './privy';

let xmtpClient: Client;

export const initXMTP = async (walletAddress: string, provider: any) => {
  const signer: Signer = createPrivySigner(walletAddress, provider);
  xmtpClient = await Client.create(signer, { env: 'production' });
  return xmtpClient;
};

export const getClient = () => xmtpClient;
// Shared XMTP logic using Privy wallet
