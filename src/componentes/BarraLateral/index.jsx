import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstiliada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 180px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstiliada>
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
        </ListaEstiliada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
