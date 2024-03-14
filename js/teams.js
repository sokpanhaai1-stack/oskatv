const team = [
  "AeroFox",
  "Best Devil",
  "Blood of Legend",
  "Blood thirsty",
  "Defender ",
  "Galaxy X World",
  "Gamer Esports",
  "Grand Up",
  "MIDNIGHT GAMING",
  "Power Pro Esport",
  "SPIRIT OF FIGHTT",
  "The King Fights",
  "THE WOLF ESPORTS",
  "XML Esport's",
  "YGN HOSHI",
  "ZAST PIXELS",
  "zombie of legend",
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
  "GOD REBORN",
  "GOKAIGERED",
  "Grad dragon",
  "GloryFox",
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
  "The Boys Esport",
  "THE NEWERA",
  "The PhoenixZ (TPX)",
  "The x Legend",
  "TG gaming",
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
document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("teamsTable");
  for (let i = 0; i < team.length; i++) {
    const row = document.createElement("tr");
    const cellNumber = row.insertCell(0);
    const cellName = row.insertCell(1);
    cellNumber.textContent = i + 1;
    cellName.textContent = team[i];
    tableBody.appendChild(row);
  }
});

function searchTeam() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const tableBody = document.getElementById("teamsTable");
  const tr = tableBody.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      const txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const nOF = document.getElementById("numberofteams");
  const targetValue = 128;
  const duration = 2000; // 5 seconds

  let startValue = 0;
  let startTime;

  function updatenOF() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(1, elapsedTime / duration);
    const countValue = Math.floor(progress * targetValue);
    nOF.textContent = countValue;

    if (progress < 1) {
      requestAnimationFrame(updatenOF);
    }
  }

  function startCounting() {
    startTime = Date.now();
    requestAnimationFrame(updatenOF);
  }

  startCounting();
});
