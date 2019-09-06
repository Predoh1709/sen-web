window.onload = function(){
    console.warn("OLAAA MUNDOO")

    let meuform = $("form#formAluno")

    console.log(meuform)

    meuform.on("submit", function(event){
        event.preventDefault()
        console.log("Pronto")
        let botao = $("form button")
        console.log(botao)

        let botaoQGira = Ladda.create(botao[0])
        botaoQGira.start()
        fetch("http://localhost:8080/sen-api/test.php").then(function(resposta){
            return resposta.json()
        }).then(function(dados){
            alert(dados.mensagem)
        })
    })
}