

/**
 * This is a demonstration of the usage of bayesian classifier
 * With the help of the module bayes
 * https://github.com/ttezel/bayes
 *
 * Objective of our classifier :
 * Class texts that comes from fiction book and from scientific ones
 */
var bayes = require('bayes')
var classifier = bayes()



// Make the algorithm learn the training data
// The Great Gatsby
classifier.learn('Il me sourit avec une sorte de complicité - qui allait au-delà de la complicité.', 'fiction')
// 1984 (Orwell)
classifier.learn('Celui qui a le contrôle du passé, disait le slogan du Parti, a le contrôle du futur. Celui qui a le contrôle du présent a le contrôle du passé.', 'fiction')
// Le dernier Jour d'un Condamné (Hugo)
classifier.learn('Maintenant je suis captif. Mon corps est aux fers dans un cachot, mon esprit est en prison dans une idée.','fiction')
// Guerre et Paix (Tolstoï)
classifier.learn('Oui, ils m ont accablé de reproches là-bas, et pour la guerre et pour la paix...','fiction')
// Les Caractères (La Bruyères)
classifier.learn('on n aime qu une seule fois : c est la première ; les amours qui suivent sont moins involontaires.','fiction')
// O.Wilde
classifier.learn("S'aimer soi-même, c'est l'assurance d'une longue histoire d'amour.","fiction")

/**
 * MAKE IT LEARN SCIENCE...
 */

//La sensibilité de l'activité mathématique aux ostensifs, BOSCH M.  ; CHEVALLARD Y. ;
classifier.learn('Les écritures, symboles, mots, discours, graphismes et gestes mobilisés dans l activité mathématique - soit ce que nous appelons, pour leur caractère matériel et perceptible, les objets ostensifs','science')
// http://www.pourlascience.fr/ewb_pages/a/actu-des-panaches-de-vapeur-d-eau-observes-sur-europe-37639.php
classifier.learn("De nouvelles observations suggèrent que des geysers de vapeur d’eau jaillissent du pôle Sud de la lune glacée de Jupiter.","science")
// pourlascience
classifier.learn("La pédagogie haptique rend l'élève acteur de son enseignement. Il est alors plus réceptif aux connaissances qu'on veut lui transmettre.","science")
// http://cat.inist.fr/?aModele=afficheN&cpsidt=207222
classifier.learn("La méthode est fondée sur une approche distributionnelle de la sémantique. Les classes sémantiques qu'il est possible d'apprendre à partir d'un corpus analysé","science")
// https://hal.archives-ouvertes.fr/tel-00145147/
classifier.learn("Le panorama du Traitement Automatique des Langues est dominé par deux familles d'approches~: dans la première, la connaissance linguistique s'exprime sous forme de règles (grammaticales pour le traitement syntaxique, d'inférence pour le traitement sémantique, etc.)","science")
// https://pdfs.semanticscholar.org/57d0/2d681a479094bbd570b7992952281c39e146.pdf
classifier.learn(" Les outils disponibles de recherche d’information sur le Web ont une approche généraliste, ne prenant pas en compte les caractéristiques de l’utilisateur, ce qui limite la qualité des résultats","science")

// test the classifier
var f = classifier.categorize("Je la contemplai avec une haine intense, celle qu'un cheveu seul sépare de l'amour ardent.")
var s = classifier.categorize(" Par ailleurs la réalisation d’un système de ce type exige un assemblage de plusieurs techniques utilisées en apprentissage ou en recherche d’information ")
console.log("fiction",f);
console.log("science",s);
