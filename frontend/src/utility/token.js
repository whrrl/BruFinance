import { ethers } from "ethers";
import { TokenABI } from "./contracts/tokenContract";
import { environment } from "../environments/environment";

export const getTokenBalance = async (userAddress, token, signer, chainId) => {
    const Web3Provider = new ethers.providers.JsonRpcProvider(environment.contracts[chainId].InfuraUrl);

    const contract = new ethers.Contract(
        environment.contracts[chainId].tokens[token].address,
        TokenABI,
        Web3Provider,
    );
    const balance = await contract.balanceOf(userAddress);
    const formattedBalance = ethers.utils.formatUnits(
        balance,
        environment.contracts[chainId].tokens[token].decimal,
    );
    return formattedBalance;
};

export const getTokenTotalSupply = async (token, signer, chainId) => {
    const Web3Provider = new ethers.providers.JsonRpcProvider(environment.contracts[chainId].InfuraUrl);

    const contract = new ethers.Contract(
        environment.contracts[chainId].tokens[token].address,
        TokenABI,
        Web3Provider,
    );
    const balance = await contract.totalSupply();
    const formattedBalance = ethers.utils.formatUnits(
        balance,
        environment.contracts[chainId].tokens[token].decimal,
    );
    return formattedBalance;
};

export const getTokenAllowance = async (
    userAddress,
    token,
    contractAddress,
    signer,
    chainId,
) => {
    const Web3Provider = new ethers.providers.JsonRpcProvider(environment.contracts[chainId].InfuraUrl);

    const contract = new ethers.Contract(
        environment.contracts[chainId].tokens[token].address,
        TokenABI,
        Web3Provider,
    );

    const balance = await contract.allowance(userAddress, contractAddress);
    const formattedBalance = ethers.utils.formatUnits(
        balance,
        environment.contracts[chainId].tokens[token].decimal,
    );
    return formattedBalance;
};

export const approveToken = async (token, contractAddress, signer, chainId) => {
    return new Promise(async (resolve) => {
        try {
            console.log("%c Line:156 🥟", "color:#3f7cff");
            console.log(
                "%c Line:159 🍅 environment.contracts[chainId].tokens[token]",
                "color:#f5ce50",
                environment.contracts[chainId].tokens[token],
            );
            const contract = new ethers.Contract(
                environment.contracts[chainId].tokens[token].address,
                TokenABI,
                signer,
            );
            // console.log("%c Line:159 🌮 signer", "color:#93c0a4", signer.address);
            let result;
            await contract
                .approve(contractAddress, `100000000000000000000000000000`)
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
