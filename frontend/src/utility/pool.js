import { ethers } from "ethers";
import { PoolABI } from "./contracts/poolContract";
import { environment } from "../environments/environment";

export const getUserBondIds = async (web3Provider, userAddress, chainId) => {
    try {
        // const poolDetails = await getPoolDetails(web3Provider);

        const contract = new ethers.Contract(
            environment.contracts[chainId].PoolAddress,
            PoolABI,
            web3Provider,
        );

        const bondId = await contract.userBondIds(userAddress);

        let amount = 0,
            tokenAmount = [],
            totalWithdrawableAmount = 0;
        let currentTime = new Date().getTime() / 1000;

        let bId = bondId * 1;

        for (let i = parseInt(bId) - 1; i > 0; i--) {
            let bond = await contract.userBonds(userAddress, i);

            let bondClaimed = await contract.bondInterestClaimed(
                userAddress,
                i,
            );

            let bondAmount = ethers.utils.formatUnits(bond[3], 18);
            let interest = ethers.utils.formatUnits(bond[2], 18);
            let depositTime = bond[1] * 1;

            if (!bond[6]) {
                if (
                    currentTime - parseInt(depositTime) >=
                    parseInt(bond["lockTimePeriod"])
                ) {
                    totalWithdrawableAmount += Number(bondAmount);
                }
            }
            amount += parseFloat(bondAmount);
            let tokenAddress = bond[0];

            tokenAmount.push({
                tokenAddress: tokenAddress,
                depositTime: new Date(depositTime * 1000).toDateString(),
                time: depositTime,
                bondAmount: Number(bondAmount).toFixed(2),
                interest: (interest * 100).toFixed(2),
                withdrawn: bond[6],
                bondClaimed: bondClaimed,
                bondId: i,
            });
        }

        return {
            tokenAmount,
            interest: 8,
            bondAmount: amount,
            totalWithdrawableAmount: totalWithdrawableAmount,
        };
    } catch (error) {
        console.log("%c Line:246 🥐 error", "color:#e41a6a", error);
        return {};
    }
};

export const ClaimBond = async (signer, bondId, chainId) => {
    return new Promise(async (resolve) => {
        try {
            const contract = new ethers.Contract(
                environment.contracts[chainId].PoolAddress,
                PoolABI,
                signer,
            );
            let result;
            await contract
                .claimInterestOnBond(bondId)
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

export const getREpayAmount = async (web3Provider, nftId, chainId) => {
    try {
        // const poolDetails = await getPoolDetails(web3Provider);

        const contract = new ethers.Contract(
            environment.contracts[chainId].PoolAddress,
            PoolABI,
            web3Provider,
        );

        const bondId = await contract.getRepaymentAmount(nftId);

        return bondId;
    } catch (error) {
        console.log("%c Line:246 🥐 error", "color:#e41a6a", error);
        return {};
    }
};
