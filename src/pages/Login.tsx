import { useEffect } from "react";
import { useNavigate } from "react-router";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { signInGoogle, authState } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInGoogle();
    } catch (err) {
      console.error("Erro ao fazer login com o Google:", err);
    }
  };

  useEffect(() => {
    if (authState.user && authState.loading) {
      navigate("/dashboard");
    }
  }, [authState.user, authState.loading, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <header>
          <h1 className="text-center text-3xl font-extrabold text-gray-900">Login</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Gerencie suas finaças de forma simples
          </p>
        </header>

        <main className="mt-8 space-y-6 bg-white py-8 px-4 rounded-lg shadow-md sm:px-10">
          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-900">Faça login para continuar</h2>
            <p className="mt-1 text-sm text-gray-600">
              Acesse sua conta para começar a genciar suas finanças
            </p>
          </section>

          <GoogleLoginButton onClick={handleGoogleLogin} isLoading={false} />

          {authState.error && <p className="text-red-700 text-center mt-4">{authState.error}</p>}

          <footer className="mt-6">
            <p className="mt-1 text-sm text-gray-600 text-center">
              Ao fazer o login você concorda com nossos termos de uso e política de privacidade.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};
export default Login;
