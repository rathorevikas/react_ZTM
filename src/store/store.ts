import { createStore, compose, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
//import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
import { PersistConfig } from "redux-persist";

// WE CAN CREATE OUR OWN REDUX LOGGER USING GIVEN BELOW CODE

// const loggerMiddleware = (store) => (next) => (action) => {
//     if (!action.type) {
//       return next(action);
//     }

//     console.log('type: ', action.type);
//     console.log('payload: ', action.payload);
//     console.log('currentState: ', store.getState());

//     next(action);

//     console.log('next state: ', store.getState());
//   };

//   const middleWares = [loggerMiddleware];

declare global{
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export type RootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));


type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist:(keyof RootState)[]
}

const persistConfig:ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
