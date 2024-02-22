import { useState, useCallback, createContext } from "react";
import { User } from "../types/user";

interface AuthContextData {
    user?: User;
	signIn: (user: User) => void;
	signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthContextProviderProps = {
	children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState<User | undefined>(() => {
        const stringifiedUser = localStorage.getItem('@logged_user');
        
        if (stringifiedUser)
            return JSON.parse(stringifiedUser);

        return undefined;
    });

	const signIn = useCallback(async (user: User) => {
		localStorage.setItem("@logged_user", JSON.stringify(user));
        setUser(user);
	}, []);

	const signOut = useCallback(() => {
        localStorage.removeItem("@logged_user");
		setUser(undefined);
	}, []);

	return (
		<AuthContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};
