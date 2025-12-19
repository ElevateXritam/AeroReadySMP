async function loadStatus(){
  const res=await fetch("https://api.mcsrvstat.us/2/AeroReadySMP.aternos.me");
  const d=await res.json();

  document.getElementById("status").textContent=
    d.online?"SERVER ONLINE":"SERVER OFFLINE";
  document.getElementById("status").className=
    "status "+(d.online?"open":"closed");

  document.getElementById("players").textContent=
    d.online?`Players: ${d.players.online}/${d.players.max}`:"Players: 0";

  document.getElementById("motd").innerHTML=
    d.motd?.html?.join("<br>") || "Welcome to AeroReady SMP";
}
loadStatus();setInterval(loadStatus,60000);
