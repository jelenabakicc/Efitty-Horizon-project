function proveri(){
    var korime = document.mojaforma.korime.value;
    var lozinka1 = document.mojaforma.lozinka1.value;
    var lozinka2 = document.mojaforma.lozinka2.value;
    var ime = document.mojaforma.ime.value;
    var prezime = document.mojaforma.prezime.value;
    var email = document.mojaforma.email.value;
    var tip = document.mojaforma.tip.value;
    var datum = document.mojaforma.datum.value;
    var tel = document.mojaforma.tel.value;
    if(korime=="" || lozinka1=="" || lozinka2==""|| ime==""|| prezime=="" || email=="" || tip=="" || datum=="" || tel==""){
        alertify.warning('Unesite sva polja');
    }else{

        /////////////////// lozinke ///////////////////////
        var status1 = false;
        if (lozinka1 != lozinka2){
            alertify.error('Lozinke se ne poklapaju!');
        }
        else {
            status1 = true;
        }

        ///////////////////// datum ////////////////////////
        var dateRegex = /^(\d{2}\/\d{2}\/\d{4})$/
        var status2 = false;
        if(!dateRegex.test(datum)){
            alertify.error('Greska prilikom unosa datuma rodjenja');
            status2 = false;
        }
        else {
            status2 = true;
        }

        //////////////////// telefon ///////////////////////
        var telRegex = /^((063|064|065)\/\d{4}-\d{3})$/
        var status3 = false;
        if(!telRegex.test(tel)){
            alertify.error('Telefon nije unet u ispravnom formatu!');
            status3 = false;
        }
        else {
            status3 = true;
        }

        ///////////////////  mail  /////////////////////
        var mailRegex = /^[A-Za-z]+@[a-z]{2,}\.[a-z]{2,3}$/
        var status4 = false;
        if(!mailRegex.test(email)){
            alertify.error('Mail nije unet u ispravnom formatu!')
            status4 = false;
        }
        else{
            status4 = true;
        }
        
        if(status1 && status2 && status3 && status4){
            alertify.success('Korisnik ' + ime + ' - ' + prezime + ', uspesno je registrovan! ')
        }     

    }
    
}

function prijava(){
    var kor = document.formaprijava.kor.value;
    var lozinka = document.formaprijava.lozinka.value;
    var status = false;
    if(kor == "" || lozinka == ""){
        alertify.warning("Niste popunili sva polja!");
        status = false;
    }
    else{
        alertify.success('Korisnik ' + kor + ' uspesno je prijavljen na sistem');
        status = true;
    } 
    if (status){
        var link = document.getElementById("link");
        link.href('korisnik.html');
    }
}