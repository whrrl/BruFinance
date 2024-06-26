import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { Polygon, Mumbai, LineaGoerli, Base } from "@thirdweb-dev/chains";
// import { client } from "./client";
import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider as ThirdwebProviderV5 } from "thirdweb/react"

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();


// const wallets = [
//     // inAppWallet(),
//     createWallet("io.metamask"),
//     createWallet("com.coinbase.wallet"),
//     createWallet("me.rainbow"),
// ];





root.render(
    <ThirdwebProvider
        clientId="8b47ef3dc283abe26da04b0549a7d6e8"
        activeChain={Mumbai}
        supportedChains={[Mumbai, Polygon, LineaGoerli, Base]}
    // useSmartWallet={true}
    >
        <ThirdwebProviderV5>
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>,
        </ThirdwebProviderV5>
    </ThirdwebProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
