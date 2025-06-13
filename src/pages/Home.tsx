
const Home: React.FC = () => {
    return (
        <main>
            <section className="bg-landing bg-center bg-cover h-[400px] flex items-center justify-start " >
                <div className="ml-10">
                    <h1 className="text-white text-center font-bold text-3xl">La taquería mas grande de bonfil</h1>
                    <button className="bg-red-action text-white py-2 px-4 rounded mt-4 hover:bg-red-600 transition duration-300">
                        Ver Menú
                    </button>
                </div>

            </section>
        </main>
    );
}

export default Home;