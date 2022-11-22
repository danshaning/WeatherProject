let recevoirNewVille = function (ville) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=899509798b9331bf4c7d381d084aebaf&units=metric";

    let request = new XMLHttpRequest();

    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let answer = request.response;
                let temperature = answer.main.temp;
                document.querySelector('#ville').textContent = ville;
                document.querySelector('#temperature_label').textContent = temperature;
            }
        }
    }
}

recevoirNewVille('Paris');

let changerDeVille = document.querySelector('#changer');
let villeChoisi;
let changerVille = function () {
    villeChoisi = prompt('Choisissez une ville');
    recevoirNewVille(villeChoisi);
}

changerDeVille.addEventListener('click', changerVille);


// // Les promesses (async et await)
// // Objet qui représente l'état d'une opération asynchrone
// // En cours / Honorée / Rompue
// // Exemple : Discord(), app de discussion en ligne, permet de parler aussi par micro. Utilise l'asynchrone pour ne pas bloquer tant que vous n'acceptez pas l'utilisation du micro.

// // const promesse = new Promise((resolve, reject) => {
// //   // Tâches asynchrones
  
// //   // Promesse honorée : appel de resolve()
  
// //   // Promesse rompue : appel de reject()
// // });

// // Mais généralement, nous ne créerons presque jamais de promesse, car les API modernes qu'on pourrait utiliser les ont déjà créées pour nous. Elles renvoient donc souvent un objet promesse en résultat qu'on utilisera pour savoir si tout s'est bien passé.

// function chargerScript(script) {
//     return new Promise((resolve, reject) => {
//       let element = document.createElement('script');
//       element.src = script;
//       document.head.append(element);
//       element.onload = () => resolve('Fichier ' + script + ' chargé');
//       element.onerror = () => reject(new Error('Operation impossible pour le script ' + script));
//     });
//   }
//   // const promesse = chargerScript('test.js');
  
//   // // Renvoi une erreur car le fichier test.js n'existe pas
//   // promesse.then(
//   //   function(result) {
//   //     console.log(result);
//   //   },
//   //   function(error) {
//   //     console.log(error);
//   //   }
//   // );
  
//   // promesse.then(result => console.log(result), error => console.log(error)); // Même code, avec des fonctions fléchées
  
//   // On peut aussi passer directement par la fonction elle-même
//   chargerScript('test.js')
//   .catch(console.log);

// Async et Await sont ce qu'on appelle des "sucres syntaxiques" : ils n'apportent pas de nouvelles fonctionnalités, mais permettent d'utiliser les promesses de façon plus intuitives.

// On place 'async' devant une fonction pour la forcer à retourner une promesse, et pouvoir utiliser 'await' dans celle-ci.

// Si on place le mot-clé 'await' devant une promesse, JavaScript est obligé d'attendre que celle-ci soit terminée. Si elle est rompue, alors, il génèrera une exception. Nous ne somme ainsi plus obligés d'utiliser then() et catch().

// async function direBonjour() {
  
//   const promesse = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promesse honorée !'), 1500)
//   });
  
//   let resultat = await promesse; // On attend que la promesse soit honorée ou rejetée, un peu comme then(), mais de façon plus intuitive
//   console.log(resultat);
// }

// direBonjour();
// console.log('une autre tâche');

// function chargerScript(script) {
//     return new Promise((resolve, reject) => {
//       let element = document.createElement('script');
//       element.src = script;
//       document.head.append(element);
//       element.onload = () => resolve('Fichier ' + script + ' chargé');
//       element.onerror = () => reject(new Error('Operation impossible pour le script ' + script));
//     });
//   }
  
//   async function resultat(){
//     try {
//       const scriptA = await chargerScript('test.js');
//       console.log(scriptA);
//       const scriptB = await chargerScript('autre.js');
//       console.log(scriptB);
//     }
//     catch(error) {
//       console.log(error);
//       // document.head.lastChild.remove();
//     }
//   }
  
//   resultat();