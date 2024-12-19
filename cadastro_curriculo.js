// Função para adicionar experiência à lista
document.getElementById("adicionar-experiencia").addEventListener("click", function () {
    const empresa = document.getElementById("empresa").value.trim();
    const funcao = document.getElementById("funcao").value.trim();
    const tempo = document.getElementById("tempo").value.trim();

    if (empresa && funcao && tempo) {
        const listaExperiencias = document.getElementById("lista-experiencias");
        const item = document.createElement("li");
        item.textContent = `${empresa} - ${funcao} (${tempo})`;

        listaExperiencias.appendChild(item);

        // Limpa os campos
        document.getElementById("empresa").value = "";
        document.getElementById("funcao").value = "";
        document.getElementById("tempo").value = "";
    }
});

// Função para adicionar curso à lista
document.getElementById("adicionar-curso").addEventListener("click", function () {
    const curso = document.getElementById("curso").value.trim();
    const instituicao = document.getElementById("instituicao").value.trim();

    if (curso && instituicao) {
        const listaCursos = document.getElementById("lista-cursos");
        const item = document.createElement("li");
        item.textContent = `${curso} - ${instituicao}`;

        listaCursos.appendChild(item);

        // Limpa os campos
        document.getElementById("curso").value = "";
        document.getElementById("instituicao").value = "";
    }
});

// Evento de envio do formulário
document.getElementById("form-cadastro").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Currículo enviado com sucesso!");
});
