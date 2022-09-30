
function validaTudo(){
  var validacao = $("#formla")[0].checkValidity();  //Valida um formulario com uma Jquerry
    if (validacao){
      alert ('Agendado com Sucesso!');
    }
}