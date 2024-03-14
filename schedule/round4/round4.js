const team = [
  "TBD",
  " AeroFox",
  " Best Devil",
  " Blood of Legend",
  " Blood thirsty",
  " Defender ",
  " Galaxy X World",
  " Gamer Esports",
  " Grand Up",
  " MIDNIGHT GAMING",
  " Power Pro Esport",
  " SPIRIT OF FIGHTT",
  " The King Fights",
  " THE WOLF ESPORTS",
  "XML Esport's",
  " YGN HOSHI",
  " ZAST PIXELS",
  " zombie of legend",
  "404 Gaming",
  "ACQ Academy",
  "ACQ Esport",
  "AI ESPORTS",
  "Ameritrade Rise",
  "Ancient_Artifict",
  "ANJIN GUILDS",
  "AQ Hoshi",
  "ARIES Esports",
  "Asgardian…",
  "Astos",
  "ATM Esports",
  "Atomax FIRE",
  "AXIS LEGEND",
  "AXIS LEGEND",
  "Baby Evil Academy",
  "black Cody",
  "BLACK EYE E-SPORT",
  "BlueShark esport ",
  "BRQ ESPORT",
  "CAMPIONS ARMY",
  "ChaoticAnonyMous",
  "Critical Genius",
  "DARKINET",
  "DEATH NOTE INTERNATIONAL",
  "Demon Off Dark",
  "Demonic Embracer",
  "Draconic Academy",
  "DRACONIC ESPORTS",
  "Draconic Female",
  "DxC",
  "Dynamic Aspirant",
  "Emperor of Dark(EOD)",
  "Enemy’s Nightmare",
  "Ewol Academy",
  "Execration",
  "experience ESP",
  "Fennec Esports..",
  "Five army",
  "Five Face Player",
  "Freedom IDN (FRD)",
  "GIEDI PRIME",
  "GloryFox",
  "GOD REBORN",
  "GOKAIGERED",
  "Grad dragon",
  "HELL FIRE Esport",
  "Hello kitty Z4",
  "Holly Homies",
  "Hydrogen Saga",
  "ICE GLORY",
  "IMPERIUM",
  "Inferno Phantom.",
  "Infinity-All Star",
  "Kabjak Esports",
  "King Of Legionn",
  "KKC E-SPORT",
  "Lancer Academy",
  "Leader Girl",
  "Leader Girl .",
  "Legend God Fox",
  "LightCon Esport",
  "LOGICAL ESPORT",
  "LOVE OF LOVE",
  "lower esport",
  "Never Overtime",
  "NEVER SURRENDER ",
  "Next GENERATION",
  "NoName Esport",
  "NOT THIS TIME",
  "OG Esports",
  "ONE CRIMINALX",
  "OVER DARKNESS FC",
  "Phoenix Eraa",
  "Prime Kids (PRME)",
  "PRIME XTREME ( XT)",
  "PRIME XTRME ( XE)",
  "QUANTUM KNIGHTS ",
  "Rage of Devil",
  "Raper Rex ",
  "RRT LITTER BOY",
  "Sayper Legends",
  "School Of Noobs",
  "Sl Ke Mnak Eng",
  "SOCIAL CREATOR",
  "SOON Media",
  "SPANKER DARK",
  "SQ Initial",
  "Strong Boys",
  "super ultra  goat",
  "Supreme Serpent ",
  "TeamMaxPixies",
  "TG Esports ",
  "TG gaming",
  "The Boys Esport",
  "THE NEWERA",
  "The PhoenixZ (TPX)",
  "The x Legend",
  "TheDarkFalcon",
  "TheThunderlight",
  "TITAN ESPORT",
  "Unstuck In Time",
  "Veteran Esport",
  "VICIOUS BETA",
  "VICIOUS Immortal",
  "VICIOUS ROOKIE",
  "Warrior Esport ",
  "WE PLAYERS",
  "Wiseman Esport",
  "WuDang Academy",
  "ZD ESPORT",
];
const round = ["0", "TDB"];
const matches = [
  {
    id: "D1",
    date: round[1],
    team1: team[0],
    team2: team[0],
    winner: team[0],
  },
  {
    id: "D2",
    date: round[1],
    team1: team[0],
    team2: team[0],
    winner: team[0],
  },
  {
    id: "D3",
    date: round[1],
    team1: team[0],
    team2: team[0],
    winner: team[0],
  },
  {
    id: "D4",
    date: round[1],
    team1: team[0],
    team2: team[0],
    winner: team[0],
  },
  {
    id: "D5",
    date: round[1],
    team1: team[0],
    team2: team[0],
    winner: team[0],
  },
  {
    id: "D6",
    date: round[1],
    team1: team[0],
    team2: team[0],
    winner: team[0],
  },
  {
    id: "D7",
    date: round[1],
    team1: team[0],
    team2: team[0],
    winner: team[0],
  },
  {
    id: "D8",
    date: round[1],
    team1: team[0],
    team2: team[0],
    winner: team[0],
  },
];

function populateMatches() {
  const tableBody = document.getElementById("matchesTable");
  tableBody.innerHTML = "";
  matches.forEach((match) => {
    const row = document.createElement("tr");
    row.innerHTML = `
              <td>${match.id}</td>
              <td>${match.date}</td>
              <td>${match.team1}</td>
              <td></td>
              <td>${match.team2}</td>
              <td>${match.winner}<i class="bi bi-check-lg ms-1 text-success"></i></td>`;
    tableBody.appendChild(row);
  });
}
function searchMatches() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const tableBody = document.getElementById("matchesTable");
  const tr = tableBody.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td"); // Get all cells of the row
    let match = false;
    for (let j = 0; j < td.length; j++) {
      if (td[j] && td[j].textContent.toUpperCase().indexOf(filter) > -1) {
        match = true;
        break;
      }
    }
    tr[i].style.display = match ? "" : "none";
  }
}

// Populate matches when the page loads
document.addEventListener("DOMContentLoaded", function () {
  populateMatches();
});
