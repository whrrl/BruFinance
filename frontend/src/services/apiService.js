import { ethers } from "ethers";
import { environment } from "../environments/environment";
import request from "./request";
import axios from "axios";
// import {getPoolAddressDetails} from './web3Service';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {indigo100} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const storeData = async (key, value) => {
    console.log("%c Line:8 🍕 key, value", "color:#4fff4B", key, value);
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.log("%c Line:12 🍅 e", "color:#4fff4B", e);
        // saving error
    }
};

export const removeData = async (key) => {
    console.log("%c Line:8 🍕 key, value", "color:#4fff4B", key);
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.log("%c Line:12 🍅 e", "color:#4fff4B", e);
        // saving error
    }
};

export const getData = async (key) => {
    try {
        const value = await localStorage.getItem(key);
        if (value !== null) {
            return value;
            // value previously stored
        }
    } catch (e) {
        console.log("%c Line:24 🍅 e", "color:#465975", e);
        // error reading value
    }
};

// export const getTotalDepositors = (data) => {
//   return new Promise(async (resolve, reject) => {
//     await request
//       .get("/api/v1/nfts/nftDatas", )
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((e) => {
//         resolve(false);
//       });
//   });
// };

// export const getPolAddress = () => {
//     return new Promise(async (resolve, reject) => {
//         let returnData = {};
//         const networks = environment.supportedNetwork;
//         for (const iterator of networks) {
//             // const Web3Provider = new ethers.providers.InfuraProvider(
//             //   environment.contracts[iterator].InfuraName,
//             //   environment.InfuraKey,
//             // );
//             const Web3Provider = new ethers.providers.JsonRpcProvider(
//                 environment.contracts[iterator].InfuraUrl,
//             );
//             const poolAddress = await getPoolAddressDetails(
//                 Web3Provider,
//                 environment.contracts[iterator].factoryAddress,
//             );
//             returnData[iterator] = poolAddress;
//         }
//         resolve(returnData);
//     });
// };

export const getInrToUsdPrice = async (data) => {
    return new Promise(async (resolve, reject) => {
        await request
            .get("/api/v1/convert/getusd", {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                console.log("%c Line:49 🍏 res", "color:#42b983", res);
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const registerUsingOTP = async (data) => {
    return new Promise(async (resolve, reject) => {
        console.log("%c Line:45 🍕 user", "color:#ffdd4d", data, {
            headers: { "Content-Type": "application/json" },
        });
        let postData = { phoneNumber: `91${data}` };
        await request
            .post("/api/v1/nfts/registerUsingOTPMsg91", postData, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                console.log("%c Line:49 🍏 res", "color:#42b983", res);
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const verifyOTPFun = async (data) => {
    return new Promise(async (resolve, reject) => {
        await request
            .post("/api/v1/nfts/authenticateUsingOtpnew", data, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                console.log("%c Line:49 🍏 res", "color:#42b983", res);
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const resendOTPFun = async (data) => {
    return new Promise(async (resolve, reject) => {
        let postData = { phoneNumber: `91${data}` };
        await request
            .post("/api/v1/nfts/resendOTP", postData, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                console.log("%c Line:49 🍏 res", "color:#42b983", res);
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const completeProfileFun = async (data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        console.log("%c Line:98 🥪 token", "color:#3f7cff", token);
        await request
            .post("/api/v1/auth/profile", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: token,
                },
            })
            .then((res) => {
                console.log("%c Line:49 🍏 res", "color:#42b983", res);
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const addTransaction = async (data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        await request
            .post("/api/v1/transaction", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: token,
                },
            })
            .then((res) => {
                console.log("%c Line:49 🍏 res", "color:#42b983", res);
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const sendTransactionWithdrawRequest = async (id) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        console.log("%c Line:153 🍞 token", "color:#ffdd4d", token);
        await request
            .post(
                `/api/v1/transaction/withdraw/request/${id}`,
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                },
            )
            .then((res) => {
                console.log("%c Line:49 🍏 res", "color:#42b983", res);
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const getTransaction = async (data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        await request
            .get("/api/v1/transaction", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                params: data,
            })
            .then((res) => {
                //console.log('%c Line:49 🍏 res', 'color:#42b983', res);
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const getTransactionTotal = async (data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        await request
            .get("/api/v1/transaction/total", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                params: data,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const getProfile = async (data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        // console.log(token,'protoken')
        await request
            .get("/api/v1/auth/profile", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                params: data,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const getAccessToken = async (data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");

        console.log("%c Line:207 🌽 token", "color:#e41a6a", token);
        await request
            .get("/api/v1/eky/genToken", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                params: data,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const getAadharData = async (data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        await request
            .get("/api/v1/eky/aadharDetails", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                params: data,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};
export const getNftData = async (data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        await request
            .get("/api/v1/nfts/nftData", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                params: data,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const updateNFtDataMint = async (nftId, data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        await request
            .patch(`/api/v1/nfts/nftData/${nftId}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const updateNFtDataBowwor = async (nftId, data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        await request
            .patch(`/api/v1/nfts/nftData/${nftId}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

export const updateNFtDataRepay = async (nftId, data) => {
    return new Promise(async (resolve, reject) => {
        let token = await getData("token");
        await request
            .patch(`/api/v1/nfts/nftData/${nftId}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((e) => {
                console.log("%c Line:49 🥕 e", "color:#93c0a4", e);
                resolve(false);
            });
    });
};

// export const getNftData = (data) => {
//     return new Promise(async (resolve, reject) => {
//       await request
//         .get("/api/v1/nfts/nftDatas", { params: data })
//         .then((res) => {
//           resolve(res.data);
//         })
//         .catch((e) => {
//           resolve(false);
//         });
//     });
//   };
// completeProfile(data: any, token: any) {
//   console.log(token);
//   this.authToken = token;

//   let headers: HttpHeaders = new HttpHeaders();
//   // headers = headers.append('Content-Type', 'application/json');
//   headers = headers.append('Authorization', this.authToken);
//   return this.http.put(environment.baseURL + '/api/v1/auth/profile', data, {
//     headers: headers,
//   });
// }

// getTransactionTotalData(token: any) {
//   console.log(token);
//   this.authToken = token;
//   // return this.http.get(environment.baseURL + '/api/v1/nfts/nftData', {
//   //   params,
//   // });
//   let headers: HttpHeaders = new HttpHeaders();
//   headers = headers.append('Content-Type', 'application/json');
//   headers = headers.append('Authorization', this.authToken);
//   return this.http.get(environment.baseURL + '/api/v1/transaction/total', {
//     headers: headers,
//   });
// }

// getUserProfile(token: any) {
//   console.log(token);
//   this.authToken = token;
//   // return this.http.get(environment.baseURL + '/api/v1/nfts/nftData', {
//   //   params,
//   // });
//   let headers: HttpHeaders = new HttpHeaders();
//   headers = headers.append('Content-Type', 'application/json');
//   headers = headers.append('Authorization', this.authToken);
//   return this.http.get(environment.baseURL + '/api/v1/auth/profile', {
//     headers: headers,
//   });
// }

// addTransaction(data: any, token: any) {
//   let headers: HttpHeaders = new HttpHeaders();
//   // headers = headers.append('Content-Type', 'application/json');
//   headers = headers.append('Authorization', token);
//   return this.http.post(environment.baseURL + '/api/v1/transaction', data, {
//     headers: headers,
//   });
// }
