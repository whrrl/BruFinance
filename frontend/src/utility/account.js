import { createLightAccount } from "@alchemy/aa-accounts";
// import { LocalAccountSigner } from "@alchemy/aa-core";
import { base } from 'viem/chains';
// import { transport } from "./utils.js";
// import config from '../../../config.js';

import { http } from "viem";


const transport = http("https://api.developer.coinbase.com/rpc/v1/base/AU8DJogjBop7iozpeiqiWHr01KdSq4Tg")

// Create the signer
// To customize the signer, see https://accountkit.alchemy.com/signers/choosing-a-signer.html
// const signer = LocalAccountSigner.privateKeyToAccountSigner(config.private_key)

// We use an EOA signer (private key) and a Simple Account for this example.
// To use a different account, see https://accountkit.alchemy.com/smart-accounts/


export const accountData = async (signer) => {
    return await createLightAccount({
        transport: transport,
        chain: base,
        signer,
    })

} 