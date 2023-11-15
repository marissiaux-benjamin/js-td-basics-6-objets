/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)*/

/*const John = {
    prenom: 'John',
    nom: 'Lambert',
    poids: 67,
    taille: 1.78,
    BMI() {
        return this.poids / (this.taille * this.taille);
    }
}
const Mark = {
    prenom: 'Mark',
    nom: 'Boulanger',
    poids: 74,
    taille: 1.67,
    BMI() {
        return this.poids / (this.taille * this.taille);
    }
}

if (John.BMI() > Mark.BMI()) {
    console.log(`${John.prenom} ${John.nom} a la BMI la plus élevée (${John.BMI()}).`);
} else if (John.BMI() < Mark.BMI()) {
    console.log(`${Mark.prenom} ${Mark.nom} a la BMI la plus élevée (${Mark.BMI()}).`);
}else {
    console.log(`${John.prenom} ${John.nom} et ${Mark.prenom} ${Mark.nom} ont la même BMI (${John.BMI()}).`);
}*/

/*2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

//Correction


function init(nom, prenom, taille, poids) {
    return {
        nom: nom,
        prenom: prenom,
        taille: taille,
        poids: poids,
        calculeIMC() {
            return this.poids / Math.pow(this.taille, 2);
        }
    };
}

const p1 = init('Zola', 'Emile', 1.80, 67);
const p2 = init('Moliere', 'Jean', 1.65, 58);

const people = [];
people.push(p1, p2);

for (const person of people) {
    console.log(person.calculeIMC());
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

let j = 0;
while (j < people.length) {
    console.log(people[j]);
    j++;
}

people.forEach(function (p) {
    console.log(p);
});
/*ca c une expression lambda. Mais attention! une arow function n'est pas une expression lambda!*/
people.forEach(p => console.log(p));





