import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import { useReducer } from "react";
import { reducer } from "../../../reducer";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 16px;
  width: 180px;

  button {
    background-color: transparent;
    border: none;
  }
`;

const BarraLateral = () => {
  const EstadoInicial = {
    inicio: true,
    populares: false,
    integrantes: false,
    sobre: false,
  };

  const [estado, dispatch] = useReducer(reducer, EstadoInicial);

  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <button onClick={() => dispatch({ tipo: "SELECIONADO", payload: "inicio" })}>
            <ItemNavegacao
              iconeAtivo="/Icones/HomeAtivo.png"
              iconeInativo="/Icones/HomeInativo.png"
              ativo={estado.inicio}
            >
              Início
            </ItemNavegacao>
          </button>

          <button onClick={() => dispatch({ tipo: "SELECIONADO", payload: "populares" })}>
            <ItemNavegacao
              iconeAtivo="/Icones/CurtidasAtivo.png"
              iconeInativo="/Icones/CurtidaInativo.png"
              ativo={estado.populares}
            >
              Populares
            </ItemNavegacao>
          </button>

          <button onClick={() => dispatch({ tipo: "SELECIONADO", payload: "integrantes" })}>
            <ItemNavegacao
              iconeAtivo="/Icones/NovasAtivo.png"
              iconeInativo="/Icones/NovasInativo.png"
              ativo={estado.integrantes}
            >
              Integrantes
            </ItemNavegacao>
          </button>

          <button onClick={() => dispatch({ tipo: "SELECIONADO", payload: "sobre" })}>
            <ItemNavegacao
              iconeAtivo="/Icones/SurpreendaAtivo.png"
              iconeInativo="/Icones/SurpreendaInativo.png"
              ativo={estado.sobre}
            >
              Sobre Nós
            </ItemNavegacao>
          </button>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
