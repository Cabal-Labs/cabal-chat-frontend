import { useRouter } from "next/navigation";
import React,{useEffect, useState} from "react";
import { Web3AuthModalPack, Web3AuthConfig } from '@safe-global/auth-kit';
import { ADAPTER_EVENTS, CHAIN_NAMESPACES, SafeEventEmitterProvider, UserInfo, WALLET_ADAPTERS } from '@web3auth/base';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { Web3AuthOptions } from '@web3auth/modal';



export default function SafeConnect() {
    const router = useRouter();
    const [web3AuthModalPack, setWeb3AuthModalPack] = useState<any>();
    const [safeAuthSignInResponse, setSafeAuthSignInResponse] = useState<any>(null);
    const [safeAddress, setSafeAddress] = useState<any>(null);
    const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

    useEffect(() => {
        const initializeWeb3Auth = async () => {
            const options: Web3AuthOptions = {
                clientId: 'BFvnlMuato_-hAxXg_DFH4VVOeibwB9MWWgh4kGypPOvYQE3uZN7cAqMUBw_DVq-XWLqlGKh7O4ikZ2azPj_FAE',
                web3AuthNetwork: 'testnet',
                chainConfig: {
                    chainNamespace: CHAIN_NAMESPACES.EIP155,
                    chainId: '0x5',
                    rpcTarget: `https://eth-goerli.g.alchemy.com/v2/1o7cVYTpLi-AKhI7Hyiu-mZCz-suyj7U`
                },
                uiConfig: {
                    // @ts-expect-error
                    theme: 'dark',
                    loginMethodsOrder: ['google', 'facebook']
                }
            };

            const modalConfig = {
                [WALLET_ADAPTERS.TORUS_EVM]: {
                    label: 'torus',
                    showOnModal: false
                },
                [WALLET_ADAPTERS.METAMASK]: {
                    label: 'metamask',
                    showOnDesktop: true,
                    showOnMobile: false
                }
            };

            const openloginAdapter = new OpenloginAdapter({
                loginSettings: {
                    mfaLevel: 'mandatory'
                },
                adapterSettings: {
                    uxMode: 'popup',
                    whiteLabel: {
                    // @ts-expect-error

                        name: 'Safe'
                    }
                }
            });

            const web3AuthModalPack = new Web3AuthModalPack({
                txServiceUrl: 'https://safe-transaction-goerli.safe.global'
            });
                    // @ts-expect-error

            await web3AuthModalPack.init({ options, adapters: [openloginAdapter], modalConfig });
            setWeb3AuthModalPack(web3AuthModalPack);
        };

        initializeWeb3Auth();
    }, []);

    useEffect(() => {
        if (web3AuthModalPack && web3AuthModalPack.getProvider()) {
            login();
        }
    }, [web3AuthModalPack]);

    const login = async () => {
        if (!web3AuthModalPack) {
            console.log("Web3AuthModalPack not initialized");
            return;
        }

        const signInInfo = await web3AuthModalPack.signIn();
        console.log('SIGN IN RESPONSE: ', signInInfo);
        

        const userInfo = await web3AuthModalPack.getUserInfo();
        console.log('USER INFO: ', userInfo);
        setSafeAuthSignInResponse(signInInfo);
    };

    const logout = async () => {
        if (!web3AuthModalPack) {
            console.log("Web3AuthModalPack not available for logout");
            return;
        }

        await web3AuthModalPack.signOut();
        setProvider(null);
        setSafeAuthSignInResponse(null);
        console.log("Logged out");
    };

    return(
        <button
            onClick={login}
            className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-1'
        >
            Log In
		</button>
    )
}