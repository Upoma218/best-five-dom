
document.getElementById('list-container').addEventListener('click',function(event){
     event.target.parentNode.removeChild(event.target)
    })           
    document.getElementById('select-first-player').addEventListener('click',function(){
     function bestPlayerList(playersNames){
          const listContainer = document.getElementById('list-container');
          const li = document.createElement('li');
          const playerNames = document.getElementById(playersNames);
          li.innerText = playerNames.innerText;
          li.classList.add('item');
          listContainer.appendChild(li);
         
          return playerNames;
          
          
     }
     bestPlayerList('first-player-id');
/*      bestPlayerList('second-player-id');
     bestPlayerList('third-player-id');
     bestPlayerList('fourth-player-id');
     bestPlayerList('fifth-player-id');
     bestPlayerList('sixth-player-id'); */
     
    })

 /*  document.get('select-first-player').addEventListener('click',function(){
     function bestPlayerList(playersNames){
          const secondPlayerName = document.getElementById(playersNames);
          return secondPlayerName;
     }
     bestPlayerList('second-player-id');
  }) */


    