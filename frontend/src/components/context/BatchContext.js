import { createContext, useState } from "react";


export const BatchContext = createContext(null)

function Batch ({children}) {
    const [batch, setBatch] = useState([])

    return (
        <BatchContext.Provider value={{batch,setBatch}}>
            {children}
        </BatchContext.Provider>
    )
}

export default Batch