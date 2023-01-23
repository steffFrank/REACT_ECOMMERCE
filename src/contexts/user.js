// import { createContext, useEffect, useReducer} from "react";
// import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase";

// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: null
// });


// const USER_ACTION_TYPES = {
//     SET_CURRENT_USER : "SET_CURRENT_USER"
// }

// const userReducer = (state, action) => {
//     const {type, payload} = action;
//     switch(type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {
//                 ...state,
//                 currentUser:payload,
//             };
//         default:
//             throw new Error(`Unhandled type ${type} in userReducer`);
//     }
// };

// const INITIAL_STATE = {
//     currentUser: null,
// }

// export const UserProvider = ({children}) => {

//     const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);

//     const { currentUser } = state;

//     const setCurrentUser = (user) => {
//         dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChangedListener((user) => {
//             if (user) {
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user);
//         });

//         return unsubscribe;
//     },[]);
//     const value = { currentUser, setCurrentUser };

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }

