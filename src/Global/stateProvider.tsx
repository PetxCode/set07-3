import React, { createContext, PropsWithChildren, useState } from 'react'


interface iState {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextState = createContext<iState>({} as iState)

export const StateProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const [toggle, setToggle] = useState(false)

    return (
        <ContextState.Provider value={{ toggle, setToggle }}>{children}</ContextState.Provider>
    )
}

