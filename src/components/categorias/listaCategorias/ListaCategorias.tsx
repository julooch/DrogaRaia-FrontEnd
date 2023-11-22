import CardCategorias from "../cardCategorias/CardCategorias";
import { useState } from 'react';


import Categoria from '../../../models/Categoria';

function ListaCategorias() {

    const [nomeCategoria, setnomeCategoria] = useState<Categoria[]>([]);

    return (
        <>

        <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {nomeCategoria.map((nomeCategoria) => (
                        <>
                            <CardCategorias key={nomeCategoria.id} nomeCategoria={nomeCategoria} />
                        </>
                    ))}

                </div>
            </div>
        </div>
    </>
)
}

export default ListaCategorias;