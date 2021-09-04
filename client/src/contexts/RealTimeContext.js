import React,{useContext, createContext} from 'react'
import { rdb } from '../firebase';

const rdbContext = createContext();

export function useRdb(){
    return useContext(rdbContext);
}

export default function RdbProvider({children}) {
    return (
        <rdbContext.Provider>
            {children}
        </rdbContext.Provider>
    )
}
