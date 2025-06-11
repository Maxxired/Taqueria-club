
const Home: React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <section className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Taquería Villegas
                </h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Correo Electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="tucorreo@ejemplo.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#877DD7] hover:bg-[#6655E9] text-white font-semibold rounded-md
                       transition-colors duration-200"
                    >
                        Iniciar Sesión
                    </button>
                    <a>Cambio aplicado
                    </a>
                </form>
            </section>
        </main>
    );
};

export default Home;
