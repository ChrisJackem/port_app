'use client'
import React, { createContext, ReactNode, useState } from "react";

interface ModalContext {
    modalName: string | null;
    setModalName: (visible: string | null) => void;
}
export const ModalContext = createContext<ModalContext | null>(null)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalName, setModalName] = useState<string | null>(null);
    return (
        <ModalContext.Provider value={{ modalName, setModalName }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = React.useContext(ModalContext);
    if (!context) {
        throw new Error('useContact must be used within ContactProvider')
    }
    return context;
}