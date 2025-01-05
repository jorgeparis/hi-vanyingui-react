export function Button(){


    //PARA TRATAR EVENTOS APENAS CRIAMOS A FUNCAO/HANDLER DE EVENTOS E FAZEMOS SUA REFERENCIA NO ELEMENTO  A ESCUTAR O EVENTO

    function handler(){

        return alert('I was clicked')
    }
    return (
        <>
        <button type="button" className="btn btn-primary" onClick={handler}>Click Me</button>
        </>
    )
}
