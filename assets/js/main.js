async function loadServerStatus() {
  const res = await fetch("https://api.mcsrvstat.us/2/AeroReadySMP.aternos.me");
  const data = await res.json();

  const status = document.getElementById("status");
  const players = document.getElementById("players");

  if (data.online) {
    status.textContent = "SERVER ONLINE";
    status.className = "status open";
    players.textContent = `Players: ${data.players.online}/${data.players.max}`;
  } else {
    status.textContent = "SERVER OFFLINE";
    status.className = "status closed";
    players.textContent = "Players: 0";
  }
}

loadServerStatus();
setInterval(loadServerStatus, 60000);
