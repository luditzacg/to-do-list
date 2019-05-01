// esconder footer
    // Footer
    const footer = document.getElementById("btnContainer");
    footer.style.display = "none";

function btnAdd() {

    // Definindo a mãe
    const lista = document.getElementById("userList");

    // Criar o elemento (filho)
    const item = document.createElement("li");
    
    // Definir o valor do input como texto
    const valorInput = document.getElementById("userInput").value;
    
    // Criar texto 
    const texto = document.createTextNode(valorInput);

    
    
    // previne que o submit apague o input
    event.preventDefault();

    // Mensagem de erro 
    const error = document.getElementById("inputAlert")

    
   
    //validação do input do usuário
        if(userInput.value.length == 0 || userInput.value.replace(/\s+/g, "").length == 0){
            error.innerHTML = 'Erro! Digite um texto válido.';
            
            return;
    } else if (userInput.value.length != 0 || userInput.value.replace(/\s+/g, "").length != 0) {
        error.style.display = "none";
        footer.style.display = "flex";
    };

      // Anexar texto ao elemento
      item.appendChild(texto)
    
      // Anexar o elemento filho (novo item) à mãe (ul)
      lista.appendChild(item)


    // Cria botão para apagar individualmente
    const eraser = document.getElementsByTagName("li");
    let i;
    for (i = 0; i < eraser.length; i++) {
        const span = document.createElement("span");
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        eraser[i].appendChild(span);
    }

    // Riscar itens feitos
    item.addEventListener('click', function () {
        item.className = "checked"
    });

    /* Marcar todas como concluídas
    Fica tudo em branco ao invés de puxar a classe
        const selectAll = document.getElementById("checkAll");
        const listSelect = document.getElementById("listSelect")

        selectAll.addEventListener("click", function() {
        listSelect.className = "checked"
        }); */

    //Limpar lista
    //Depois que limpa, não add mais
    const eraseAll = document.getElementById("eraseAll");
    const listSelect = document.getElementById("listSelect")

    eraseAll.addEventListener("click", function() {
    listSelect.remove();
    
    });
    
}