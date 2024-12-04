import styled from "styled-components";

const ItemListaEstilizada = styled.li`

`;

const ItemNavegacao = (children, iconeAtivo, iconeInativo, ativo = false) => {
  return (
    <ItemListaEstilizada $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemListaEstilizada>
  );
};

export default ItemNavegacao;
