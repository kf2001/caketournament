

import 'underscore'

let _ = require('underscore')
export default function faiSquadre(giocatori_, opzioni_) {

    opzioni_ = new Opzioni()

    algo5()
    function Pausa(ora_, durata_) {
        this.ora = ora_;
        this.durata = durata_;
    };


    function Giocatore() {
        this.nome = "xyz"
        this.livello = 5
        this.sesso = "M"

        this.partite = 3
        this.squadra = 0
        this.disponibilita = ""
    }

    function Opzioni() {
        this.nomeTorneo = "newTorneo"
        // eslint-disable-next-line no-unused-expressions
        this.campi = 2
        this.ore = 10
        this.partite = 20
        this.ora_inizio = 9
        this.frazione = "00"
        // eslint-disable-next-line no-unused-expressions
        this.durata = "45"
        this.pause = [];
        this.squadre = 2;
        this.nomeSquadraA = "guelfi"
        this.nomeSquadraB = "ghibellini"
    }

    /*  function formOpzioni () {
         this.nomeTorneo = "newTorneo"
         // eslint-disable-next-line no-unused-expressions
         this.campi = 2,
             this.ore = 10,
             this.ora_inizio = 9,
             this.frazione = "00",
             this.squadre = 2;
         this.durata = "45"
         this.nomeSquadraA = "guelfi"
         this.nomeSquadraB = "ghibellini"
     } */

    function Fisso(campo_, ora_, posto_, giocatore_) {

        this.campo = campo_
        this.ora = ora_
        this.posto = posto_
        this.giocatore = giocatore_


    }

    function Like(gioc1, gioc2, like) {

        this.gioc1 = gioc1
        this.gioc2 = gioc2
        this.like = like

    }




    function Soluzione() {
        this.vettore = []
        this.valutazioni = []

    }


    function algo5() {
     
        var sol1
        var vnew


        //  console.log(_.filter(giocatori_, function (n) { return (n.livello > 8) }));

        var dummies = []

        var limite = opzioni_.partite * 4


        var partec = giocatori_.slice(0);


        partec.forEach(function (gi, idx) {
            gi.partite = 3
            gi.squadra = Math.floor(Math.floor(Math.random(2)));
            // eslint-disable-next-line no-undef
          /*   var dummy = new Giocatore();
            dummy.nome = "dummy" + idx
            // eslint-disable-next-line no-unused-expressions
            dummy.livello = 0
            dummy.sesso = "T"
            dummy.junior = false
            dummy.partite = 2
            dummy.squadra = Math.floor(Math.floor(Math.random(2)));
            dummy.disponibilita = "00000000000000000000000";
            partec.push(dummy)
 */
        })


        var vmigl = 10000000000

        var tenta = 0;
        let pl = partec.length

        while (tenta < 100) {

            tenta++
            console.log(tenta, "tenta")
            // console.log(vnew, 122)

            let s = Math.floor(Math.random() * (pl / 2))
            let t = Math.floor(Math.random() * (pl / 2)) + pl / 2


            var appo = partec[s]
            partec[s] = partec[t]
            partec[t] = appo

            partec[s].squadra = 0
            partec[t].squadra = 1


            vnew = valutaSquadre_alt(partec.slice(0))

            console.log(vnew, "vnew", vmigl)
            if (vnew < vmigl) {
                tenta = 0;
                console.log("quaaaaa")
                vmigl = vnew

            } else {
                console.log("quiiiiii")
                var appo = partec[s]
                partec[s] = partec[t]
                partec[t] = appo

                partec[s].squadra = 0
                partec[t].squadra = 1

                tenta++

            }

            console.log("tentaaa",tenta)

            var pA = _.filter(partec, function (n) { return (n.partite > 0 && n.squadra == 0) })
            // eslint-disable-next-line eqeqeq
            var pB = _.filter(partec, function (n) { return (n.partite > 0 && n.squadra == 1) })




        }
        // eslint-disable-next-line eqeqeq


        console.log("risultato",_.union(pA, pB))
        console.log("migliore",vmigl)

        return (_.union(pA, pB))
    }
}




function valutaSquadre_alt(partec, commento) {


    var partiteA = _.reduce(_.where(partec, { "squadra": 1 }), function (somma, g) { return somma + g.partite; }, 0)
    var partiteB = _.reduce(_.where(partec, { "squadra": 0 }), function (somma, g) { return somma + g.partite; }, 0)
    console.log(partiteA, partiteB)

    var maschiA = _.reduce(_.where(partec, { "squadra": 0, "sesso": "M" }), function (somma, g) { return somma + 1; }, 0)
    var maschiB = _.reduce(_.where(partec, { "squadra": 1, "sesso": "M" }), function (somma, g) { return somma + 1; }, 0)
    console.log(maschiA, maschiB, 222)
    var femmA = _.reduce(_.where(partec, { "squadra": 0, "sesso": "F" }), function (somma, g) { return somma + 1; }, 0)
    var femmB = _.reduce(_.where(partec, { "squadra": 1, "sesso": "F" }), function (somma, g) { return somma + 1; }, 0)

    var forzaA = _.reduce(_.where(partec, { "squadra": 0 }), function (somma, g) { return somma + g.livello; }, 0)
    var forzaB = _.reduce(_.where(partec, { "squadra": 1 }), function (somma, g) { return somma + g.livello; }, 0)

    var partiteMaschiA = _.reduce(_.where(partec, { "squadra": 0, "sesso": "M" }), function (somma, g) { return somma + g.partite; }, 0)
    var partiteMaschiB = _.reduce(_.where(partec, { "squadra": 1, "sesso": "M" }), function (somma, g) { return somma + g.partite; }, 0)

    var partiteFemmA = _.reduce(_.where(partec, { "squadra": 0, "sesso": "F" }), function (somma, g) { return somma + g.partite; }, 0)
    var partiteFemmB = _.reduce(_.where(partec, { "squadra": 1, "sesso": "F" }), function (somma, g) { return somma + g.partite; }, 0)

    var forzaCalcAM = new Array(11)
    var forzaCalcAF = new Array(11)
    var forzaCalcBM = new Array(11)
    var forzaCalcBF = new Array(11)

    var forzaDistribAM = new Array(3)
    var forzaDistribAF = new Array(3)
    var forzaDistribBM = new Array(3)
    var forzaDistribBF = new Array(3)


    for (var l = 1; l <= 10; l++) {

        var ffAM = _.reduce(_.where(partec, { "squadra": 0, "sesso": "M" }), function (somma, g) { var cc = 0; if (g.livello == l) cc = 1; return somma + cc * g.partite; }, 0)
        var ffBM = _.reduce(_.where(partec, { "squadra": 1, "sesso": "M" }), function (somma, g) { var cc = 0; if (g.livello == l) cc = 1; return somma + cc * g.partite; }, 0)

        var ffAF = _.reduce(_.where(partec, { "squadra": 0, "sesso": "F" }), function (somma, g) { var cc = 0; if (g.livello == l) cc = 1; return somma + cc * g.partite; }, 0)
        var ffBF = _.reduce(_.where(partec, { "squadra": 1, "sesso": "F" }), function (somma, g) { var cc = 0; if (g.livello == l) cc = 1; return somma + cc * g.partite; }, 0)

        forzaCalcAM[l] = ffAM
        forzaCalcBM[l] = ffBM
        forzaCalcAF[l] = ffAF
        forzaCalcBF[l] = ffBF

    }

    forzaDistribAM[0] = forzaCalcAM[1] + forzaCalcAM[2] + forzaCalcAM[3]
    forzaDistribAF[0] = forzaCalcAF[1] + forzaCalcAF[2] + forzaCalcAF[3]
    forzaDistribBM[0] = forzaCalcBM[1] + forzaCalcBM[2] + forzaCalcBM[3]
    forzaDistribBF[0] = forzaCalcBF[1] + forzaCalcBF[2] + forzaCalcBF[3]

    forzaDistribAM[1] = forzaCalcAM[4] + forzaCalcAM[5] + forzaCalcAM[6] + forzaCalcAM[7]
    forzaDistribAF[1] = forzaCalcAF[4] + forzaCalcAF[5] + forzaCalcAF[6] + forzaCalcAF[7]
    forzaDistribBM[1] = forzaCalcBM[4] + forzaCalcBM[5] + forzaCalcBM[6] + forzaCalcBM[7]
    forzaDistribBF[1] = forzaCalcBF[4] + forzaCalcBF[5] + forzaCalcBF[6] + forzaCalcBF[7]

    forzaDistribAM[2] = forzaCalcAM[8] + forzaCalcAM[9] + forzaCalcAM[10]
    forzaDistribAF[2] = forzaCalcAF[8] + forzaCalcAF[9] + forzaCalcAF[10]
    forzaDistribBM[2] = forzaCalcBM[8] + forzaCalcBM[9] + forzaCalcBM[10]
    forzaDistribBF[2] = forzaCalcBF[8] + forzaCalcBF[9] + forzaCalcBF[10]

    //console.log(  forzaCalcAM)


    var ca = 2
    var cb = 3

    var maschiA_scarsi = ca * forzaCalcAM[1] + cb * forzaCalcAM[2] + cb * forzaCalcAM[3];
    var maschiB_scarsi = ca * forzaCalcBM[1] + cb * forzaCalcBM[2] + cb * forzaCalcBM[3];
    var femmA_scarsi = ca * forzaCalcAF[1] + cb * forzaCalcAF[2] + cb * forzaCalcAF[3];
    var femmB_scarsi = ca * forzaCalcBF[1] + cb * forzaCalcBF[2] + cb * forzaCalcBF[3];;

    var maschiA_medi = ca * forzaCalcAM[4] + cb * forzaCalcAM[5] + cb * forzaCalcAM[6] + cb * forzaCalcAM[7];
    var maschiB_medi = ca * forzaCalcBM[4] + cb * forzaCalcBM[5] + cb * forzaCalcBM[6] + cb * forzaCalcBM[7];
    var femmA_medi = ca * forzaCalcAF[4] + cb * forzaCalcAF[5] + cb * forzaCalcAF[6] + cb * forzaCalcAF[7];
    var femmB_medi = ca * forzaCalcBF[4] + cb * forzaCalcBF[5] + cb * forzaCalcBF[6] + cb * forzaCalcBF[7];

    var maschiA_forti = ca * forzaCalcAM[8] + cb * forzaCalcAM[9] + cb * forzaCalcAM[10];
    var maschiB_forti = ca * forzaCalcBM[8] + cb * forzaCalcBM[9] + cb * forzaCalcBM[10];
    var femmA_forti = ca * forzaCalcAF[8] + cb * forzaCalcAF[9] + cb * forzaCalcAF[10];
    var femmB_forti = ca * forzaCalcBF[8] + cb * forzaCalcBF[9] + cb * forzaCalcBF[10];


    var vpar = 0;

    vpar += 1000 * (partiteA - partiteB) * (partiteA - partiteB)

    vpar += 300 * (partiteMaschiA - partiteMaschiB) * (partiteMaschiA - partiteMaschiB)
    vpar += 300 * (partiteFemmA - partiteFemmB) * (partiteFemmA - partiteFemmB)


    var cf = 2

    vpar += cf * (maschiA_scarsi - maschiB_scarsi) * (maschiA_scarsi - maschiB_scarsi)
    vpar += cf * (maschiA_medi - maschiB_medi) * (maschiA_medi - maschiB_medi)
    vpar += cf * (maschiA_forti - maschiB_forti) * (maschiA_forti - maschiB_forti)
    vpar += cf * (femmA_scarsi - femmB_scarsi) * (femmA_scarsi - femmB_scarsi)
    vpar += cf * (femmA_medi - femmB_medi) * (femmA_medi - femmB_medi)
    vpar += cf * (femmA_forti - femmB_forti) * (femmA_forti - femmB_forti)

    ///console.log(maschiA_scarsi,maschiB_scarsi)
    //  if (commento) return ({ maschiA: forzaCalcAM.slice(0), femmineA: forzaCalcAF.slice(0), maschiB: forzaCalcBM.slice(0), femmineB: forzaCalcBF.slice(0) })
    if (commento) return ({ maschiA: forzaDistribAM.slice(0), femmineA: forzaDistribAF.slice(0), maschiB: forzaDistribBM.slice(0), femmineB: forzaDistribBF.slice(0) })

    //  if (commento) return ({ maschiA: forzaCalcAM.slice(0), femmineA: forzaCalcAF.slice(0), maschiB: forzaCalcBM.slice(0), femmineB: forzaCalcBF.slice(0) })
    else {

        return vpar
    }


}

function mostrasquadre(squadraA,squadraB){






}
