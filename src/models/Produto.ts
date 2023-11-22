import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nomeProduto: string;
  preco: number;
  descricaoProduto: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}