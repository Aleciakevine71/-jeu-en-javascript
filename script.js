const GenererNombreAleatoire = () => {
    // generer un nombre entre 1 et 100 
    const nombreDecimal = (Math.random() * 100) + 1
    const nombre = Math.trunc(nombreDecimal)

    // retourner ce nombre
    return nombre
}

let numeroTentative = 1
let nombreBas = 1
let nombreHaut = 100 

const nombreATrouver = GenererNombreAleatoire()

console.log(nombreATrouver)

const ajouterTextAuContainer = texte => {
    const divTexte = document.createElement("div")
    divTexte.textContent = texte

 const container = document.getElementById("container")
     container.insertBefore(divTexte, container.firstChild)
}

const proposerNombre = () => {
    // recuperer le champs avec le nombre
    const input = document.getElementById("input-nombre")

    // recuperer la valeur du champs
    const valeur = input.value

    // verifier que la valeur n'est pas vide
    if(valeur === "") {
        // si elle est vide, ne rien faire 
        return
    }

    // transformer la valeur texte en nombre
    const nombreProposer = parseInt(valeur, 10)
    
    ajouterTextAuContainer("tentative" + numeroTentative)

    // comparer le nombre avec le nombre a trouver
    // le nombre est egal au nombre a trouver
    if (nombreProposer === nombreATrouver) {
        // la partie est finie
       // afficher bravo
       console.log("bravo")

       ajouterTextAuContainer("bravo👏")
       const elementCentre = document.getElementById("centre")
       elementCentre.textContent = nombreProposer + "👏"
        numeroTentative += 1
    } else{
       // le nombre n'est pas faux
        // si le nombre est plus grand
        if (nombreATrouver > nombreProposer) {
            // afficher plus grand
            console.log("le nombre est plus grand")

            ajouterTextAuContainer("c'est plus 😝") 

            // si le nombre est superieur au plus bas deja trouver
            if (nombreProposer > nombreBas ) {
                const elementBas = document.getElementById("bas")
                elementBas.textContent = nombreProposer + "😕"

                nombreBas = nombreProposer
                  numeroTentative += 1
            }
     } else {
            // si le nombre est plus petit
            // afficher plus petit
            console.log("le nombre est plus petit")

            ajouterTextAuContainer("c'est moins 🙁")
              numeroTentative += 1
            // si le nombre est inferieur au plus haut deja trouver
           if (nombreProposer < nombreHaut ) {
                const elementBas = document.getElementById("haut")
                elementBas.textContent = nombreProposer + "😝"  

                nombreHaut = nombreProposer
                
            }

    
    }
}}

// recuperer le bouton
// lorsqu'il un click, effectuer une proposition de nombre
const bouton = document.getElementById("button-proposer")
bouton.addEventListener("click",proposerNombre)