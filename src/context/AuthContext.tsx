import { signOut as firebaseSignOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { type ReactNode, createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth, googleAuthProvider } from "../configs/firebase";
import type { AuthState } from "../types/auth";

interface AuthcontextProps {
  authState: AuthState;
  signInGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthcontextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    error: null,
    loading: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      (user) => {
        if (user) {
          setAuthState({
            user: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            },
            error: null,
            loading: false,
          });
        } else {
          setAuthState({
            user: null,
            error: null,
            loading: false,
          });
        }
      },
      (error) => {
        console.error("Erro ao verificar o estado de autenticação:");
        setAuthState({
          user: null,
          error: error.message,
          loading: false,
        });
      },
    );

    return () => unsubscribe();
  }, []);

  const signInGoogle = async (): Promise<void> => {
    setAuthState((prev) => ({ ...prev, loading: true }));
    try {
      await signInWithPopup(firebaseAuth, googleAuthProvider);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro ao fazer login com o Google:";
      setAuthState((prev) => ({ ...prev, loading: false, error: message }));
    }
  };

  const signOut = async (): Promise<void> => {
    setAuthState((prev) => ({ ...prev, loading: true }));
    try {
      await firebaseSignOut(firebaseAuth);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro ao fazer logout:";
      setAuthState((prev) => ({ ...prev, error: message }));
    }
  };

  return (
    <AuthContext.Provider value={{ authState, signInGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
