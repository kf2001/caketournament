

exports = module.exports = {};
    
  exports.Pausa = function(ora_,durata_) {
   this.ora = ora_;
   this.durata = durata_;
  };


  exports.Giocatore = function() {
    this.nome = "xyz"
        this.forza = 5
        this.sesso = "M"

        this.partite = 3
        this.squadra = "A"
    this.disponibilita = ""
}

exports.Opzioni=function() {
    this.nomeTorneo = "newTorneo"
    this.campi = 2,
        this.ore = 10,
        this.partite = 20,
        this.ora_inizio = 9,
        this.frazione="00"
        this.durata = "45",
        this.pause=[];
        this.squadre=2;
        this.nomeSquadraA="guelfi"
        this.nomeSquadraB="ghibellini"
}

exports.formOpzioni=function() {
        this.nomeTorneo = "newTorneo"
        this.campi = 2,
        this.ore = 10,
        this.ora_inizio = 9,
        this.frazione="00",
        this.squadre=2;
        this.durata = "45"
        this.nomeSquadraA="guelfi"
        this.nomeSquadraB="ghibellini"
}

exports.Fisso=function(campo_, ora_, posto_, giocatore_) {

    this.campo = campo_
    this.ora = ora_
    this.posto = posto_
    this.giocatore = giocatore_


}

exports.Like=function(gioc1,gioc2,like) {

    this.gioc1 = gioc1
    this.gioc2 = gioc2
    this.like = like
  
}




exports.Soluzione=function() {
    this.vettore = []
    this.valutazioni = []

}

exports.calcolaOra=function(n,opz,pause) {

var minpause=0;

pause.forEach(element => {
    if(element.ora<=n)   minpause+=element.durata
});

  var vminuti=  opz.ora_inizio*60+opz.frazione*1
  vminuti+=n*opz.durata+minpause;

    
  var oras = (Math.floor(vminuti / 60) % 24)

  var restos = (vminuti % 60).toString()
  if (restos.length == 0) restos = "00"
  if (restos.length == 1) restos = "0" + restos
  restos = restos.substr(0, 2)

  return (oras + "." + restos)

}