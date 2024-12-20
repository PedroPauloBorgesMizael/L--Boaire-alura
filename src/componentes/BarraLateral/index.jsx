import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 16px;
  width: 180px;
`;



const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/Icones/HomeAtivo.png"
            iconeInativo="/Icones/HomeInativo.png"
            ativo={true}
          >
            <button onClick={() => aoSelecionado}>
            Início
            </button>
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/Icones/CurtidasAtivo.png"
            iconeInativo="/Icones/CurtidaInativo.png"
          >
            Populares
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/Icones/NovasAtivo.png"
            iconeInativo="/Icones/NovasInativo.png"
            >
            Integrantes
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/Icones/SurpreendaAtivo.png"
            iconeInativo="/Icones/SurpreendaInativo.png"
          >
            Sobre Nós
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;