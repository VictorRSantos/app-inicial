export default function ImagemAleatoria(){
    let pesquisa: string = ''
    const url = 'https://picsum.photos/300/300?'
    
    function urlImagem(){
        return `${url}${pesquisa}`;
    }

    function renderizarBotao(valor:string){
        return(
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `} onClick={() => {
                    pesquisa = valor
                    console.log(urlImagem())
                }}>
                {valor}
                Teste
            </button>
        )
    }

    return(
        <div className="flex flex-col gap-3 border-zinc-500 p-7 rounded-md">
            <img src={urlImagem()} height={300} width={300} alt="imagem" />          
            
            <div className="flex justify-between gap-5">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>
        </div>
    )
}