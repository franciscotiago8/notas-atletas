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
class AparecerAtletas {
  constructor(atletas){
    this.atletas = atletas
  }
  resultado(){
    this.atletas.forEach(atleta => {
      return console.log (atleta.nome)
  });
}
}

let mostrarAtletas = new AparecerAtletas(atletas)
mostrarAtletas.resultado()