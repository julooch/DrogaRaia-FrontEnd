import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    Blog Pessoal

                    <div className='flex gap-4'>
                        Postagens
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        Cadastrar tema
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar