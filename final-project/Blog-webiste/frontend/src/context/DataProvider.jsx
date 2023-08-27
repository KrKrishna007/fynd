import { createContext, useEffect, useState } from "react";


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const data = JSON.parse(localStorage.getItem("user")) ?? { name: '', username: '' }
    const [account, setAccount] = useState(data);

    return (
        <DataContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;