

function addToList(players){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    const playerNames = players.parentNode.children[1].innerText;;
    li.innerText = playerNames;
    li.classList.add;
    const playerNamesList = listContainer.children.length;
    if(playerNamesList === 5){
        alert('Five player has already added');
        return;
    }

    listContainer.appendChild(li);   
    players.disabled = true; 
}
