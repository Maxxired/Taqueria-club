import axios from 'axios';
import { useEffect, useState } from 'react';

interface Platillo {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const Platillos = () => {

    const [platillos, setPlatillos] = useState<Platillo[]>([]);
    const [loading, setLoading] = useState(false);

    const getPlatillos = async () => {
        try {
            setLoading(true);
            const response = await axios.get<Platillo[]>('http://localhost:5000/api/Dishes');
            console.log("Platillos:", response.data);
            setPlatillos(response.data);
        }
        catch (error) {
            console.error("Error al cargar los platillos:", error);
            return [];
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPlatillos();
    }, []);

    if (loading) {
        return (
            <p>Cargando...</p>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1 className="text-4xl font-bold mb-4">Platillos</h1>
            <p className="text-lg text-gray-700">Aquí puedes ver los platillos disponibles.</p>
            <ul className='space-y-2'>
                {platillos.map((platillo) => (
                    <li key={platillo.id} className='border p-4 rounded bg-white shadow-md'>
                        <h2 className='text-2xl font-semibold'>{platillo.name}</h2>
                        <p className='text-gray-200'>{platillo.description}</p>
                        <p className='text-lg font-bold'>${platillo.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Platillos;
