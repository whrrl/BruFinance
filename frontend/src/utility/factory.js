import { ethers } from "ethers";
import { FactoryABI } from "./contracts/factoryContract";
import { environment } from "../environments/environment";

export const getPoolDetails = async (web3Provider, chainId) => {
    try {
        const contract = new ethers.Contract(
            environment.contracts[chainId].factoryAddress,
            FactoryABI,
            web3Provider,
        );

        const poolDetails = await contract.getPoolDetails(0);

        return poolDetails;
    } catch (error) {
        console.log("%c Line:246 🥐 error", "color:#e41a6a", error);
        return {};
    }
};
