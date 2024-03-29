const starters = [
    "Mesdames, messieurs",
    "Je reste fondamentalement persuadé que",
    "Dès lors, sachez que je me battrai pour faire admettre que",
    "Par ailleurs, c’est en toute connaissance de cause que je peux affirmer aujourd’hui que",
    "Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que",
    "J’ai depuis longtemps (ai-je besoin de vous le rappeler ?), défendu l’idée que",
    "Et c’est en toute conscience que je déclare avec conviction que",
    "Et ce n’est certainement pas vous, mes chers compatriotes, qui me contredirez si je vous dis que"
]
const seconders = [
    "la conjoncture actuelle",
    "la situation d’exclusion que certains d’entre vous connaissent",
    "l’acuité des problèmes de la vie quotidienne",
    "la volonté farouche de sortir notre pays de la crise",
    "l’effort prioritaire en faveur du statut précaire des exclus",
    "le particularisme dû à notre histoire unique",
    "l’aspiration plus que légitime de chacun au progrès social",
    "la nécessité de répondre à votre inquiétude journalière, que vous soyez jeunes ou âgés,"
]
const thirds = [
    "doit s’intégrer à la finalisation globale",
    "oblige à la prise en compte encore plus effective",
    "interpelle le citoyen que je suis et nous oblige tous à aller de l’avant dans la voie",
    "a pour conséquence obligatoire l’urgente nécessité",
    "conforte mon désir incontestable d’aller dans le sens",
    "doit nous amener au choix réellement impératif",
    "doit prendre en compte les préoccupations de la population de base dans l’élaboration",
    "entraîne une mission somme toute des plus exaltantes pour moi : l’élaboration"
]
const finals = [
    "d’un processus allant vers plus d’égalité.",
    "d’un avenir s’orientant vers plus de progrès et plus de justice.",
    "d’une restructuration dans laquelle chacun pourra enfin retrouver sa dignité.",
    "d’une valorisation sans concession de nos caractères spécifiques.",
    "d’un plan correspondant véritablement aux exigences légitimes de chacun.",
    "de solutions rapides correspondant aux grands axes sociaux prioritaires.",
    "d’un programme plus humain, plus fraternel et plus juste.",
    "d’un projet porteur de véritables espoirs, notamment pour les plus démunis."
]


const generate = () => {
    let chosenStarter = starters[Math.floor(Math.random() * starters.length)];
    let seconder = seconders[Math.floor(Math.random() * seconders.length)];
    let thirder = thirds[Math.floor(Math.random() * thirds.length)];
    let final = finals[Math.floor(Math.random() * finals.length)];
    let first = document.getElementById("first")
    first.innerHTML = chosenStarter
    let second = document.getElementById("second")
    second.innerHTML = seconder
    let third = document.getElementById("third")
    third.innerHTML = thirder
    let fourth = document.getElementById("fourth")
    fourth.innerHTML = final
}