import { ethers } from "ethers";
import { RouterABI } from "./contracts/routerContract";
import { environment } from "../environments/environment";

// import { createSmartAccountClient } from "@alchemy/aa-core";
// import { baseSepolia } from 'viem/chains';
// import { encodeFunctionData } from "viem";
// import { accountData } from "./account.js"
// import { http } from "viem";
// import { sponsorUserOperation, updateUserOpGasFields } from "./paymaster.js";


// const transport = http("https://api.developer.coinbase.com/rpc/v1/base/AU8DJogjBop7iozpeiqiWHr01KdSq4Tg")

// const extractHashFromError = (errorString) => {
//     const regex = /Transaction with hash "([^"]+)"/;
//     const match = errorString.match(regex);

//     if (match && match.length > 1) {
//         return match[1];
//     } else {
//         return null;
//     }
// }

export const buyBonds = async (token, amount, signer, chainId) => {
    return new Promise(async (resolve) => {
        try {
            const contract = new ethers.Contract(
                environment.contracts[chainId].RouterAddress,
                RouterABI,
                signer,
            );
            let result;
            const value = ethers.utils.parseUnits(
                amount,
                environment.contracts[chainId].tokens[token].decimal,
            );
            await contract
                .deposit(
                    0,
                    environment.contracts[chainId].tokens[token].address,
                    value,
                )
                .then((r) => {
                    result = r;
                    console.log("%c Line:62 🍔 r", "color:#4fff4B", result);
                })
                .catch((err) => {
                    console.log("%c Line:67 🌶 err", "color:#e41a6a", err);
                });

            await result.wait();
            resolve(result);
        } catch (error) {
            console.log("%c Line:276 🥕 error", "color:#ed9ec7", error);
            resolve(false);
        }
    });
};

// export const buyBonds = async (token, amount, signer, chainId) => {
//     return new Promise(async (resolve) => {
//         try {
//             const account = await accountData(signer)
//             const smartAccountClient = createSmartAccountClient({
//                 transport: transport,
//                 chain: baseSepolia,
//                 account: account,
//                 gasEstimator: async (struct) => ({
//                     ...struct,
//                     callGasLimit: 0n,
//                     preVerificationGas: 0n,
//                     verificationGasLimit: 0n,
//                 }),
//                 paymasterAndData: {
//                     paymasterAndData: async (userop, opts) => {
//                         // request sponsorship
//                         const paymasterResp = await sponsorUserOperation(userop, opts)
//                         // replace the gas fields
//                         const updatedUserOp = await updateUserOpGasFields(userop, paymasterResp)
//                         return {
//                             ...updatedUserOp,
//                             paymasterAndData: paymasterResp.paymasterAndData
//                         }
//                     },
//                     dummyPaymasterAndData: () => "0x",
//                 },
//             });

//             console.log("\x1b[33m%s\x1b[0m", `Minting to ${smartAccountClient.account.address}`);

//             const value = ethers.utils.parseUnits(
//                 amount,
//                 environment.contracts[chainId].tokens[token].decimal,
//             );
//             // Encode the calldata
//             const callData = encodeFunctionData({
//                 abi: RouterABI,
//                 functionName: "deposit",
//                 args: [0, environment.contracts[chainId].tokens[token].address, value],
//             });

//             const contractAddress = environment.contracts[chainId].RouterAddress;
//             console.log("Waiting for transaction...")

//             const uo = await smartAccountClient.sendUserOperation({
//                 uo: { target: contractAddress, data: callData, value: "0" },
//                 //uo: { target: '0x0000000000000000000000000000000000000000', data: '0x', value: BigInt(0) },
//             });
//             try {
//                 const tx = await smartAccountClient.waitForUserOperationTransaction(uo);
//                 console.log(tx)
//             } catch (error) {
//                 // There's currently an issue with viem not being able to find the transaction hash, but it does exist
//                 const txHash = extractHashFromError(error.toString())
//                 console.log("\x1b[32m", `⛽ Successfully sponsored gas for  transaction with Coinbase Developer Platform!`);
//                 console.log("\x1b[36m", `🔍 View on Etherscan: https://sepolia.basescan.org/tx/${txHash}`);
//             }
//             resolve(true)


//             // const contract = new ethers.Contract(
//             //     environment.contracts[chainId].RouterAddress,
//             //     RouterABI,
//             //     signer,
//             // );
//             // let result;
//             // const value = ethers.utils.parseUnits(
//             //     amount,
//             //     environment.contracts[chainId].tokens[token].decimal,
//             // );
//             // await contract
//             //     .deposit(
//             //         0,
//             //         environment.contracts[chainId].tokens[token].address,
//             //         value,
//             //     )
//             //     .then((r) => {
//             //         result = r;
//             //         console.log("%c Line:62 🍔 r", "color:#4fff4B", result);
//             //     })
//             //     .catch((err) => {
//             //         console.log("%c Line:67 🌶 err", "color:#e41a6a", err);
//             //     });

//             // await result.wait();
//             // resolve(result);
//         } catch (error) {
//             console.log("%c Line:276 🥕 error", "color:#ed9ec7", error);
//             resolve(false);
//         }
//     });
// };

export const WithdrawBond = async (signer, bondId, chainId) => {
    return new Promise(async (resolve) => {
        try {
            const contract = new ethers.Contract(
                environment.contracts[chainId].RouterAddress,
                RouterABI,
                signer,
            );

            let result;

            await contract
                .withdraw("0", bondId)
                .then((r) => {
                    result = r;
                    console.log("%c Line:62 🍔 r", "color:#4fff4B", result);
                })
                .catch((err) => {
                    console.log("%c Line:67 🌶 err", "color:#e41a6a", err);
                });

            await result.wait();
            resolve(result);
        } catch (error) {
            console.log("%c Line:276 🥕 error", "color:#ed9ec7", error);
            resolve(false);
        }
    });
};

export const BorrowBond = async (signer, chainId, amount, nftId, token) => {
    console.log(
        "%c Line:80 🥪 signer, chainId, amount, nftId, token",
        "color:#33a5ff",
        signer,
        chainId,
        amount,
        nftId,
        token,
    );
    return new Promise(async (resolve) => {
        try {
            const contract = new ethers.Contract(
                environment.contracts[chainId].RouterAddress,
                RouterABI,
                signer,
            );

            const value = ethers.utils.parseUnits(
                amount,
                environment.contracts[chainId].tokens[token].decimal,
            );

            let result;

            await contract
                .borrow(
                    "0",
                    nftId,
                    environment.contracts[chainId].tokens[token].address,
                    value,
                )
                .then((r) => {
                    result = r;
                    console.log("%c Line:62 🍔 r", "color:#4fff4B", result);
                })
                .catch((err) => {
                    console.log("%c Line:67 🌶 err", "color:#e41a6a", err);
                });

            await result.wait();
            resolve(result);
        } catch (error) {
            console.log("%c Line:276 🥕 error", "color:#ed9ec7", error);
            resolve(false);
        }
    });
};

export const RepayBond = async (signer, chainId, amount, nftId, token) => {
    console.log(
        "%c Line:80 🥪 signer, chainId, amount, nftId, token",
        "color:#33a5ff",
        signer,
        chainId,
        amount,
        nftId,
        token,
    );
    return new Promise(async (resolve) => {
        try {
            const contract = new ethers.Contract(
                environment.contracts[chainId].RouterAddress,
                RouterABI,
                signer,
            );

            const value = ethers.utils.parseUnits(
                amount,
                environment.contracts[chainId].tokens[token].decimal,
            );

            let result;

            await contract
                .repay(
                    "0",
                    nftId,
                    environment.contracts[chainId].tokens[token].address,
                    value,
                )
                .then((r) => {
                    result = r;
                    console.log("%c Line:62 🍔 r", "color:#4fff4B", result);
                })
                .catch((err) => {
                    console.log("%c Line:67 🌶 err", "color:#e41a6a", err);
                });

            await result.wait();
            resolve(result);
        } catch (error) {
            console.log("%c Line:276 🥕 error", "color:#ed9ec7", error);
            resolve(false);
        }
    });
};
