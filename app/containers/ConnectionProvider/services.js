import Onboard from 'bnc-onboard';
import Notify from 'bnc-notify';

const networkId = 1;
const rpcUrl = 'https://mainnet.infura.io/v3/bd80ce1ca1f94da48e151bb6868bb150';
const dappId = '9081ee55-aa99-4da1-88c6-0de7a2e2308a';
// const apiUrl = 'wss://api.blocknative.com/v0';

export function initOnboard(subscriptions, darkMode) {
  return Onboard({
    dappId,
    hideBranding: true,
    networkId,
    darkMode,
    subscriptions,
    walletSelect: {
      wallets: [
        { walletName: 'metamask' },
        {
          walletName: 'trezor',
          appUrl: 'https://reactdemo.blocknative.com',
          email: 'aaron@blocknative.com',
          rpcUrl,
        },
        {
          walletName: 'ledger',
          rpcUrl,
        },
        { walletName: 'coinbase' },
        { walletName: 'status' },
        { walletName: 'walletLink', rpcUrl },
        {
          walletName: 'portis',
          apiKey: '***REMOVED***',
        },
        { walletName: 'fortmatic', apiKey: '***REMOVED***' },
        { walletName: 'torus' },
        { walletName: 'authereum', disableNotifications: true },
        { walletName: 'trust', rpcUrl },
        {
          walletName: 'walletConnect',
          infuraKey: '***REMOVED***',
        },
        { walletName: 'opera' },
        { walletName: 'operaTouch' },
        { walletName: 'imToken', rpcUrl },
        { walletName: 'meetone' },
      ],
    },
    walletCheck: [
      { checkName: 'derivationPath' },
      { checkName: 'connect' },
      { checkName: 'accounts' },
      { checkName: 'network' },
    ],
  });
}

export function initNotify(darkMode) {
  return Notify({
    dappId,
    networkId,
    darkMode,
    desktopPosition: 'topRight',
  });
}
