import { ethers } from "ethers";
import { RouterABI } from "./contracts/routerContract";
import { environment } from "../environments/environment";

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
            console.log(
                "%c Line:104 🍣 amount",
                "color:#ed9ec7",
                amount,
                token,
                environment.contracts[chainId].tokens[token].address,
                value,
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
