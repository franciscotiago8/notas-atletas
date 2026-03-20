let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

//Retornar uma lista 
function resultado (competidores){
    competidores.forEach(atleta => {
        function nome(){
            return  atleta.nome
        }
        console.log(`Atleta: ${nome()}`)
        function obterNotas(){
          let notasOrganizadas = atleta.notas.sort((a, b) => b-a)
            return notasOrganizadas
                  }
        console.log(`Notas Obtidas: ${obterNotas()}`)
        function media(){
          let somar = 0
          let notasParaMedia = obterNotas().slice(1,4)
          let numerarNotas = notasParaMedia.length
           notasParaMedia.forEach(nota  => {
             somar = somar + nota
          });
          return somar/numerarNotas
        }
        console.log(`Media Válida: ${media()}`)
    });
}
resultado(atletas)