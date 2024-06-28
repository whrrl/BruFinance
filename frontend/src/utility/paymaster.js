
import { deepHexlify, resolveProperties } from "@alchemy/aa-core";
import axios from "axios";
// import config from '../../../config.js';

const paymasterRequest = (userOp, opts) => {
    return {
        jsonrpc: "2.0",
        method: "pm_sponsorUserOperation",
        id: "1",
        params: [userOp, "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"],
    }
}

export const sponsorUserOperation = async (userOp, opts) => {
    // resolve the promise fields on userOp
    // https://github.com/alchemyplatform/aa-sdk/blob/main/packages/core/src/middleware/defaults/gasEstimator.ts#L11C5-L11C66
    const resolvedUserOp = deepHexlify(await resolveProperties(userOp))

    const req = paymasterRequest(resolvedUserOp, opts)
    const res = await axios.post("https://api.developer.coinbase.com/rpc/v1/base/AU8DJogjBop7iozpeiqiWHr01KdSq4Tg", req)
    return res.data.result
}

export const updateUserOpGasFields = async (userop, paymasterResp) => {
    var updatedUserOp = {
        ...userop,
    }
    updatedUserOp.callGasLimit = paymasterResp.callGasLimit
    updatedUserOp.preVerificationGas = paymasterResp.preVerificationGas
    updatedUserOp.verificationGasLimit = paymasterResp.verificationGasLimit
    return deepHexlify(await resolveProperties(updatedUserOp))
}