const playerNameAray = [];




function getSelectButton(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    if (playerNameAray.length < 5) {
        playerNameAray.push(playerName)


    }
    else if (playerNameAray.length === 5) {
       
        return playerNameAray;
    }

    const totalSelectedPlayer = document.getElementById('total-selected-player');
    totalSelectedPlayer.innerText = playerNameAray.length;


    const selectedNumberString = totalSelectedPlayer.innerText;
    const selectedPlayer = parseInt(selectedNumberString);
    // console.log(selectedPlayer)






    setPlayerName(playerName);
}

function setPlayerName(name) {


    const tableBody = document.getElementById('name-place');

    tableBody.innerHTML = ''

    for (let i = 0; i < playerNameAray.length; i++) {
        const playersName = playerNameAray[i];
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${playersName}</td>
        `
        tableBody.appendChild(tr)
    }


};


// get input value by a common function
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldAmmount = parseFloat(inputFieldString);
    console.log(inputFieldAmmount)
    if (typeof inputFieldString !== 'number') {
       
        return inputField;
    }
    return inputFieldAmmount;
};

// set Input value by a common function:
function setElementValueById(textid, value) {
    if (isNaN(value)) {

        return value;
    }
    const expenses = document.getElementById(textid)
    expenses.innerText = value;

};

// button disabled by a common function
function disableButton(button) {
    const totalSelectedPlayer = parseFloat((document.getElementById('total-selected-player')).innerText);
    console.log(totalSelectedPlayer)
    if (totalSelectedPlayer < 6) {

        document.getElementById(button).setAttribute('disabled', true);
        document.getElementById(button).style.backgroundColor = 'Lavender'
    }




}


document.getElementById('btn-calculate').addEventListener('click', function () {


const playerField = document.getElementById('player-field');
const playerFieldString = playerField.value;
const newplayerField = parseFloat(playerFieldString);

const totalSelectedPlayer = document.getElementById('total-selected-player');
totalSelectedPlayer.innerText = playerNameAray.length;

const selectedNumberString = totalSelectedPlayer.innerText;
     const selectedPlayer = parseInt(selectedNumberString);

     const Expenses = newplayerField * selectedPlayer;

     const newBalance = document.getElementById('expenses');
  newBalance.innerText = Expenses;

    

});
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const manegerField = document.getElementById('manager-field');
    const manegerFieldString = manegerField.value;
    const newManegerField = parseFloat(manegerFieldString);

    const coachField =document.getElementById('coach-field');
    const coachFieldString = coachField.value;
    const newCoachField = parseFloat(coachFieldString);

    const managerCoachTotal = newManegerField + newCoachField;
     const finaltotal=document.getElementById('final-total');
     const finaltotalString = finaltotal.innerText;
     const newfinaltotalString= parseFloat(finaltotalString);

    const Expenses = document.getElementById('expenses');
    const ExpensesString = Expenses.innerText;
    const summationOfCalculation = parseFloat(ExpensesString);

    const finalTotal = summationOfCalculation + managerCoachTotal;
    setElementValueById('final-total', finalTotal)
    // console.log(finalTotal)
});

document.getElementById('btn-messi').addEventListener('click', function () {
    disableButton('btn-messi')

})
document.getElementById('btn-naymar').addEventListener('click', function () {
    disableButton('btn-naymar')

})
document.getElementById('btn-mbappe').addEventListener('click', function () {
    disableButton('btn-mbappe')

})
document.getElementById('btn-machado').addEventListener('click', function () {
    disableButton('btn-machado')

})
document.getElementById('btn-ramos').addEventListener('click', function () {
    disableButton('btn-ramos')

})
document.getElementById('btn-renaldo').addEventListener('click', function () {
    disableButton('btn-renaldo')

})


