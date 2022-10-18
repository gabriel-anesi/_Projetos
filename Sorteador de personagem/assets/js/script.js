const paladinsChampions = ["Androxus", "Ash", "Atlas", "Azaan", "Barik", "Betty La Bomba", "Bomb King", "Buck", "Caspian", "Cassie", "Corvus", "Dredge", "Drogoz", "Evie", "Fernando", "Furia", "Grohk", "Grover", "Imani", "Inara", "Io", "Jenos", "Kasumi", "Khan", "Kinessa", "Koga", "Lex", "Lian", "Lillith", "Maeve", "Makoa", "Mal'Damba", "Moji", "Octavia", "Pip", "Raum", "Rei", "Ruckus", "Saati", "Seris", "Sha Lin", "Skye", "Strix", "Talus", "Terminus", "Tiberius", "Torvald", "Tyra", "Vatu", "VII", "Viktor", "Vivian", "Vora", "Willo", "Yagorath", "Ying", "Zhin"];

function sortear(paladinsChampions) {
    for (let i = 0; i <= 57; i++){
    const randomChampion = paladinsChampions[Math.floor(Math.random() * paladinsChampions.length)]; 
    document.getElementById("campeao").innerText = randomChampion
    return randomChampion;
    }
}