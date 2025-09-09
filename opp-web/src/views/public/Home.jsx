import { useAuth } from "@contexts/AuthContext";

export const Home = () => {
  const { user, logout } = useAuth();

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center bg-gray-50"
      role="main"
    >
      <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-bold text-primary mb-4">
        Bienvenido, <span className="underline">{user.email}</span>
      </h1>

      <p className="text-dark text-base lg:text-lg max-w-xl mb-6">
        Este universo todavía está en construcción. Explora y prepárate para
        descubrir todo lo que tenemos para ti.
      </p>

      {user && (
        <button
          onClick={logout}
          className="bg-primary/80 text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
          aria-label="Cerrar sesión"
        >
          Cerrar sesión
        </button>
      )}
    </main>
  );
};

