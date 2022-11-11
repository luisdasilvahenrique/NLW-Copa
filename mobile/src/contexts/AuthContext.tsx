import { createContext, ReactNode } from "react";

interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    singIn: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

    async function singIn() {
        alert('Vamos logar!');
    }

    return (
        <AuthContext.Provider value={{
            singIn,
            user: {
                name: 'Luis',
                avatarUrl: 'https://github.com/luisdasilvahenrique.png'
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}