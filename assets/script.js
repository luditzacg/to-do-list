function btnAdd() {

    // Definindo a mãe
    let lista = document.getElementById("userList");

    // Criar o elemento (filho)
    let item = document.createElement("li");
    
    // Definir o valor do input como texto
    let valorInput = document.getElementById("userInput").value;
    
    // Criar texto 
    let texto = document.createTextNode(valorInput);
    
    // previne que o submit apague o input
    event.preventDefault();

    //validação do input do usuário
    if(userInput.value.length == 0 || userInput.value.replace(/\s+/g, '').length == 0){
        alert("Você precisa digitar uma tarefa!");
        return;
    };

      // Anexar texto ao elemento
      item.appendChild(texto)
    
      // Anexar o elemento filho (novo item) à mãe (ul)
      lista.appendChild(item)
}›