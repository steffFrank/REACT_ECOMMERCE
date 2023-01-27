import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__()) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);