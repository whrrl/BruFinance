import { ethers } from "ethers";
import { AssetTreasuryABI } from "./contracts/assetTreasury";
import { environment } from "../environments/environment";

export const mintNFTTreasury = async (contractAddress, web3Provider, data) => {
    return new Promise(async (resolve) => {
        try {
            const contract = new ethers.Contract(
                contractAddress,
                AssetTreasuryABI,
                web3Provider,
            );

            let result;
            await contract
                .mintNft(
                    data._userAddress,
                    data?._nftId,
                    data?._commodityId,
                    data?._quantity,
                    data?._value,
                    data?._dataHash,
                    data?._data,
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
            console.log("%c Line:246 🥐 error", "color:#e41a6a", error);
            return resolve(true);
        }
    });
};
