import { createContext, useContext, useState } from 'react';

type AuthContextType = {
    user: string | null;
    isLoggedIn: boolean;
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<string | null>(null);

    const login = (username: string) => {
        setUser(username);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}