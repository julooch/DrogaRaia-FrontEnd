import CardCategorias from "../cardCategorias/CardCategorias";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';

import Categoria from '../../../models/Categoria';
import { AuthContext } from "../../../contexts/AuthContext";

function ListaCategorias() {

    const [nomeCategoria, setnomeCategoria] = useState<Categoria[]>([]);

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setnomeCategoria, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [nomeCategoria.length])

    return (
        <>
        {nomeCategoria.length === 0 && (
            <Dna
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto"
            />
        )}

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