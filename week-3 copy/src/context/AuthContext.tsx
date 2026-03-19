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
    if (!context) throw new Error('useAuth must be used inside AuthProvider');
    return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<string | null>(localStorage.getItem("username"));

    const login = (username: string) => {
        setUser(username);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("isLoggedIn");
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}