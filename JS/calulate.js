document.getElementById('player-cost-caculation').addEventListener('click',function(){
    const perPlayerCost = document.getElementById('player-cost');
    const playerCostValueString = perPlayerCost.value;
    const playerCostValue = parseFloat(playerCostValueString);
    const listContainer = document.getElementById('list-container');
    const playerNamesList = listContainer.children.length;
    
    const playerTotalCostCalculate = playerCostValue * playerNamesList;
    const playerTotalCostAmount = document.getElementById('player-total-cost');
    playerTotalCostAmount.innerText = playerTotalCostCalculate;
    
    document.getElementById('btn-total-calculate').addEventListener('click',function(){
        const managerCost = document.getElementById('manager-cost');
        const managerCostValueString = managerCost.value;
        const managerCostValue = parseFloat(managerCostValueString);
        
        const coachCost = document.getElementById('coach-cost');
        const coachCostValueString = coachCost.value;
        const coachCostValue = parseFloat(coachCostValueString);
        
        const totalCost = document.getElementById('cost-total');
        // const totalCostValueString = totalCost.value;
        // const totalCostValue = parseFloat(totalCostValueString);
        
        const totalCostAmount = playerTotalCostCalculate + managerCostValue + coachCostValue;
        totalCost.innerText = totalCostAmount;
        })
    
})




