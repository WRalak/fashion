"use client";
import { createContext, useState, useContext } from "react";
import { signIn, signOut } from "next-auth/react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
