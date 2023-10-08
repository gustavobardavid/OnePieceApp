import P from 'prop-types';
export function Cartao({foto, nome, funcao}){
    return (
        <>
        <div className='cartao'>
            <img src={foto} alt="Personagem" />
            <h2 className='cartaoNome'>{nome}</h2>
            <p className='cartaoFuncao'>{funcao}</p>
        </div>
        </>
    );
}

Cartao.propTypes = {
    foto:P.string.isRequired,
    nome:P.string.isRequired,
    funcao:P.string.isRequired,
};