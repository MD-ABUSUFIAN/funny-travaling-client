import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    
    const allContext=useFirebase();
    return (
                <div>
                    <AuthContext.Provider value={allContext}>
                        {children}
                    </AuthContext.Provider>
                </div>
          
    );
};

export default ContextProvider;