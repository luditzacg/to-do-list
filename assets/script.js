// esconder footer
    // Footer
    const footer = document.getElementById("btnContainer");
    footer.style.display = "none";

    window.addEventListener("keypress", function(event) {
        if (event.key == "Enter") {
            btnAdd();
        }
    });

function btnAdd() {
    const add = document.getElementById("btn");

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
    const error = document.getElementById("inputAlert");

   
    //validação do input do usuário
        if(userInput.value.length == 0 || userInput.value.replace(/\s+/g, "").length == 0){
            error.innerHTML = 'Erro! Digite um texto válido.';
            error.style.display = "block";
            
        return;
    } else if (userInput.value.length != 0 || userInput.value.replace(/\s+/g, "").length != 0) {
        error.style.display = "none";
        footer.style.display = "flex";

        // Tirar o arredondado do botão 
        add.style.borderRadius = '0px';
    };

      // Anexar texto ao elemento
      item.appendChild(texto)
    
      // Anexar o elemento filho (novo item) à mãe (ul)
      lista.appendChild(item)

   

    //Cria botão para apagar individualmente
    const removeItem = document.createElement("a")

    removeItem.innerHTML = "\u00D7"
    removeItem.setAttribute("href", "#")
    item.appendChild(removeItem) 
    
    removeItem.addEventListener("click", function() {
        item.remove();
    });

    // Riscar itens feitos
    item.addEventListener('click', function () {
        item.className = "checked"
    });
 

    //Marcar todas como concluídas
        const selectAll = document.getElementById("checkAll");

        selectAll.addEventListener("click", function() {
        item.className = "checked"
        
        }); 


    //Apagar tudo
        const eraseAll = document.getElementById("eraseAll");

        eraseAll.addEventListener("click", function() {
            item.remove()
            footer.style.display = "none";
            add.style.borderRadius = "0 0 15px 15px"
        });

        // Limpar o input
        userInput.value = "";


        item.setAttribute("draggable", true);

        //Seleciona o evento de click, define que o elemento pode ser arrastado (guarda a classe numa variável)
        item.addEventListener("dragstart", dragStart);

        //Seleciona a localização do evento de click e direciona para inserção depois do proximo elemento
        item.addEventListener("dragover", dragOver);

        // Finaliza o momvimento
        item.addEventListener("dragend", dragEnd);


        function dragStart(event) {
            dragging = event.target.closest("li");
        }

        function dragOver(event) {
            const location = event.target.closest("li"); // pegar pela classe!!
            this.parentNode.insertBefore(dragging, location);// this.parentNode equivale a class timeline
        }
        function dragEnd() {
            dragging = null;
            //usamos o dragging = null para dizer que deve parar o movimento

        }
}