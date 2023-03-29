"use client";

import {
    createContext,
    useContext,
    useState,
    ReactElement,
    ReactNode,
} from 'react';

type Props = {
    children: ReactNode;
};

const MdxComponentsContext = createContext("");

export function MdxComponentsProvider({ children }: Props): ReactElement {
    const [post, setPost] = useState<string>("");

    return (
        <MdxComponentsContext.Provider
            value={post}
        >
            {children}
        </MdxComponentsContext.Provider>
    );
}

export function useMdxComponentsContext(): string {
    return useContext(MdxComponentsContext);
}