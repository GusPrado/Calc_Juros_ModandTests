/*Crie um módulo juros.js, e exporte dele uma função jurosSimples que recebe C (capital), i (juros em decimal. ex: 3,5% = 0.035) e t (tempo). E retorne o juros simples do período (C * i * t ).
*/

const jurosSimples = (C, i, t) => {
    return (C * i * t)
}

/*
Crie uma nova função que dado as mesmas variáveis do exercício anterior, retorne o montante total C + juros simples.
*/

const montanteSimples = ({ jurosSimples }) => (C,i,t) => C + jurosSimples(C, i, t)

/*
Crie uma função montanteJurosCompostos que recebe C (capital), i (juros em decimal) e t (tempo) e retorno o montante para o período, dado pela fórmula: M = C * (1 +  i) ^ t .
*/

const montanteJurosCompostos = (C, i, t) => C * Math.pow((1+i),t)

/*
O exercício anterior já retorna o montante (capital + juros). Crie uma função em juros.js que retorne somente os juros.
*/

const jurosCompostos = ({ montanteJurosCompostos }) => (C, i, t) => montanteJurosCompostos (C, i, t) - C

module.exports = {
    jurosSimples,
    montanteJurosCompostos,
    montanteSimples: montanteSimples({ jurosSimples }),
    jurosCompostos: jurosCompostos ({ montanteJurosCompostos }),
    pure: {
        montanteSimples,
        jurosCompostos
    }
}