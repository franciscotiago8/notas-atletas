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
            return  `Atleta:${atleta.nome}`
        }
        console.log(nome())
        function obterNotas(){
          let notasOrganizadas = atleta.notas.sort((a, b) => b-a)
            return `Notas obtidas: ${notasOrganizadas}`
                  }
        console.log(obterNotas())
        function media(){
          let calcularMedia = obterNotas()
          return calcularMedia
        }
        console.log(media())
    });
}
resultado(atletas)
