function bestPlayer(elemnetId){
    const getPlayerById = document.getElementById(elemnetId);
    const playerId = getPlayerById.innerText;
    const getSelectionById = document.getElementById('final-selection');
    const li = document.createElement('li');
    li.innerText = playerId;
    li.classList.add = ('item');
    getSelectionById.append(li);
}

document.getElementById('select-first-player').addEventListener('click',function(){
     document.getElementById('first-player-id');
    
})

/* document.getAnimations('select-second-player').addEventListener('click', function(){
    document.getElementById('second-player-id');
})
document.getAnimations('select-third-player').addEventListener('click', function(){
    document.getElementById('third-player-id');
})
document.getAnimations('select-fourth-player').addEventListener('click', function(){
     document.getElementById('fourth-player-id');
})
document.getAnimations('select-fifth-player').addEventListener('click', function(){
     document.getElementById('fifth-player-id');
})
document.getAnimations('select-sixth-player').addEventListener('click', function(){
     document.getElementById('sixth-player-id');
}) */