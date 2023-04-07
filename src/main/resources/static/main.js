
function visBillett() {
    $.get("/billetter", function(billettTabell){
        let ut = "<table class='table table-striped'><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (let b of billettTabell) {
            ut += "<tr>";
            ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.telefonnr + "</td><td>" + b.epost + "</td>";
            ut += "</tr>";
        }
        $("#alleBilletter").html(ut);
    });
}
function kjopBillett(){
    $("#feilFilm").html("");
    $("#feilAntall").html("");
    $("#feilFornavn").html("");
    $("#feilEtternavn").html("");
    $("#feilTelefonnr").html("");
    $("#feilEpost").html("");

    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnr = $("#telefonnr").val();
    const epost= $("#epost").val();

    const billett = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost
    };
    if (billett.film==null||billett.antall==""||billett.fornavn==""||billett.etternavn==""||billett.telefonnr==""||billett.epost==""){
        if (billett.film==null){
            $("#feilFilm").html("Må velge film");
        }
        if (billett.antall==""){
            $("#feilAntall").html("Må skive noe inn i antall");
        }
        if (billett.fornavn==""){
            $("#feilFornavn").html("Må skive noe inn i fornavn");
        }
        if (billett.etternavn==""){
            $("#feilEtternavn").html("Må skive noe inn i etternavn");
        }
        if (billett.telefonnr==""){
            $("#feilTelefonnr").html("Må skive noe inn i telefonnr");
        }
        if (billett.epost==""){
            $("#feilEpost").html("Må skive noe inn i epost");
        }
    }
    else {
        $.post("/billetter", billett, function(){
            visBillett()
            const film = $("#film").val("");
            const antall = $("#antall").val("");
            const fornavn = $("#fornavn").val("");
            const etternavn = $("#etternavn").val("");
            const telefonnr = $("#telefonnr").val("");
            const epost = $("#epost").val("");
        })
    }
}

function slettBillett(){
    $.ajax({
        url:"/billetter",
        type:"DELETE",
        success: function(){
            visBillett();
        }
    });

}

