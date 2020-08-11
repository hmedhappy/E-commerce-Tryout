// Verification Formulauire
var age=document.getElementById("age");
var nom=document.getElementById("nom");
var pr=document.getElementById("pr");
var pass=document.getElementById("pass");
var cin=document.getElementById("cin");
        var erreurs = [] ;

        //gestion d'erreur
         function Verifier(){
            var j = 0 ;
             
            if(!isNaN(nom.value)){
                j++ ;
               // alert("Essayer de nouveau le nom ne doit pas contenir des chiffres");
                erreurs.push("Essayer de nouveau le nom ne doit pas contenir des chiffres")
                
            }
            if(!isNaN(pr.value)){
                j++ ;
               // alert("Essayer de nouveau le prénon ne doit pas contenir des chiffres");
                erreurs.push("Essayer de nouveau le prénon ne doit pas contenir des chiffres")
                
            }
            if(age.value < 18){
                j++ ;
               // alert("Essayer de nouveau l'age doit être > 18");
                erreurs.push("Essayer de nouveau l'age doit être > 18")
                
            } 
            if(isNaN(age.value)){
                j++ ;
               // alert("Essayer de nouveau l'age etre un nombre");
                erreurs.push("Essayer de nouveau l'age etre un nombre")
                
            }
            if(!(pass.value.length>8)){
                j++ ;
               // alert("Essayer de nouveau l'age etre un nombre");
                erreurs.push("Le mot de passe doit etre Superieur a 8 Caractéres")
                
            }
            if(!(cin.value.length>14)){
                j++ ;
               // alert("Essayer de nouveau l'age etre un nombre");
                erreurs.push("Les numero CIN doit etre Superieur a 14 Chiffres")
                
            }

            // Si Formulaire Correcte Redirection a la Page d'ACCEUIIL

            if(j == 0){
                document.getElementById("myForm").action = "acceuil.html";
                
            }else{ //afficher les erreur dans des DIV
                        
                    err();
            
                }
            
        }
        
        //gestion erreur additionelle
         function   err()  {
            var div = document.getElementById("erreur"); 

            div.innerHTML ='';
            var showedErreurs='' ;

            for (let i = 0; i < erreurs.length; i++) {
                if (erreurs[i]) {
                    showedErreurs += `
                    <h5 style="color:red;    margin-bottom: -19px;">[${erreurs[i]}]</h5>
                    `;     

                     }
                     event.preventDefault();
                    }
                    div.innerHTML = showedErreurs ;
                    div.innerHTML +=`<h4 style="background-color: black ; color : white; font-size: 141%;"> ==><a href="/"> Rafraîchir</a> la page pour Ressayer</h4>`
        }