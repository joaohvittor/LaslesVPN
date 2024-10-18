$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

verificarsenha(); {
    var senha = document.getElementById('exampleInputPassword1');
    var contrasenha = document.getElementById('exampleInputPassword2');
    if (senha.value === contrasenha.value) {

    }
    else {
        document.getElementById('exampleInputPassword1').style.border = "1px #f5425d";
        document.getElementById('aviso').style.display = "block";
    }
}
verificarlogin(); {
    var senha = document.getElementById('InputPassword1');
    var email = document.getElementById('InputEmail1');
    if (senha.value === "euvoulargarminhacasa" && email.value === "cleitinhomatadordeporco@gmail") {
        document.getElementById('avisosucessoemail').style.display = "block";
        document.getElementById('avisosucessosenha').style.display = "block";
    }
    else {
        document.getElementById('avisofalhaemail').style.display = "block";
        document.getElementById('avisofalhasenha').style.display = "block";
    }
}

esconderosmall(); {
    document.getElementById('emailHelp').style.display = "none";
}
// Dentro do seu arquivo JavaScript no front-end
fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Aqui você pode processar os dados recebidos
    })
    .catch(error => console.error('Erro:', error));
