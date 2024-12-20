export const reducer = (estado, acao) => {
    switch (acao.tipo) {
        case "SELECIONADO" : 
            return {
                ...Object.keys(estado).reduce((acc, key) => {
                    acc[key] = key === acao.payload;
                    return acc;
                
                }, {}),
            };
            default:
                throw new Error("Ação desconhecida");
    }
}