import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { createMemoryHistory, createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        });

    if (onNavigate) {
        // this check is essential to work marketing app in isolation
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode>
                <App history={history} />
            </React.StrictMode>
        </Provider>,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        },
    };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
    const devRoot = document.getElementById("_auth-dev-root");
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// We are running through container
// and we should export the mount function
export { mount };
