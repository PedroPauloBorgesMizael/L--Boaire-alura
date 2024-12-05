import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
            Início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/Icones/CurtidasAtivo.png"
            iconeInativo="/Icones/CurtidaInativo.png"
          >
            Populares
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/Icones/CurtidasAtivo.png"
            iconeInativo="/Icones/CurtidaInativo.png"
          >
            Integrantes
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/Icones/CurtidasAtivo.png"
            iconeInativo="/Icones/CurtidaInativo.png"
          >
            Sobre Nós
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;