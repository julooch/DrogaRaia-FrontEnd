import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-[#C9294B] text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    Droga Raia

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroTema' className='hover:underline'>Cadastrar Categoria</Link>
                        Minha sacola
                        Perfil
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar