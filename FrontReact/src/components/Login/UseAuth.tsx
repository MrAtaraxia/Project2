import * as React from "react";

const authContext = React.createContext(null);

function useAuth() {
   const [authed, setAuthed] = React.useState(false);

   return {
    authed,
     login() {
       return new Promise((res) => {
         setAuthed(true);
         res(null);
       });
     },
     logout() {
       return new Promise((res) => {
         setAuthed(false);
         res(null);
       });
     }
   };
}

// export function AuthProvider({ children }:any) {
//    const auth = useAuth();

//    return (
//      <authContext.Provider value={auth}>
//        {children}
//      </authContext.Provider>
//    )
// }

export default function AuthConsumer() {
   return React.useContext(authContext);
}