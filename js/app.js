const allPlayers = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => displayPlayer(data.player))

}
const displayPlayer = (players) => {
    for (const player of players) {
        const playerContainer = document.getElementById('player-container');
        const div = document.createElement('div');
    div.innerHTML = ` <div class="row g-4">
    <div class="col-md-6">
      <div class="card mb-4">
        <img class="images" src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">Name:${player.strPlayer}</h3>
          <h5>Country:${player.strNationality}</h5>
          <div class="all-button">
          <button class='btn btn-danger'>Delete</button>
          <button onclick="detailsInfo('${player.idPlayer}')" class='btn btn-success'>Details</button>
          </div>
        </div>
      </div>
    </div>
  </div> `;
    playerContainer.appendChild(div);
}

}
const detailsInfo = (info) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`;
    fetch(url)
        .then(Response => Response.json())
    .then(data=>displayDetailsInfo(data.players[0]))
}

const displayDetailsInfo = (showDetails) => {
    const detailsContainer = document.getElementById('details-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <p>${showDetails.strDescriptionEN}</p>
    `;
    detailsContainer.appendChild(div);
}