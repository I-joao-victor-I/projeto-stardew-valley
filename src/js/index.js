var antigo = 'lewis';

function selecionar(id) {
    let selecionarPersonagem = document.getElementById(id);
    let selecionarAntigo = document.getElementById(antigo);

    if (id == undefined || id == antigo) {
        console.log("nada")
    } else {
        console.log(id)
        selecionarPersonagem.style.display = "block";
        selecionarAntigo.style.display = "none";

        let icon = document.getElementById(id + "Icon")
        let iconA = document.getElementById(antigo + "Icon")

        icon.classList.toggle("selecionado");
        iconA.classList.remove("selecionado");
        antigo = id;
    }
}