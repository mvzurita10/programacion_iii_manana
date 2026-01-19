import { createContext, useContext, useMemo, useState, type JSX } from "react";

export type AuthUser = {
    id?: string;
    email?: string;
    username?: string;
    role?: string;
};

type AuthContextValue = {
    user: AuthUser | null;
    token: string | null;
    setSession: (payload: { user: AuthUser; token: string }) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
    const [user, setUser] = useState<AuthUser | null>(() => {
        const raw = localStorage.getItem("auth_user");
        return raw ? JSON.parse(raw) : null;
    });

    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem("auth_token");
    });

    const setSession = (payload: { user: AuthUser; token: string }) => {
        setUser(payload.user);
        setToken(payload.token);
        localStorage.setItem("auth_user", JSON.stringify(payload.user));
        localStorage.setItem("auth_token", payload.token);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("auth_user");
        localStorage.removeItem("auth_token");
    };

    const value = useMemo(() => ({ user, token, setSession, logout }), [user, token]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return ctx;
}