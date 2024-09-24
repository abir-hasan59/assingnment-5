
// card 1   
document.getElementById('btn-first').addEventListener('click',function(event){
    event.preventDefault();
    console.log('first button clicked');
    const donateMoney = getValueById('input-first');
    
    if(donateMoney>0){
        const donatedAmount= document.getElementById('donated-amount').innerText;
        const donateNumber = parseFloat(donatedAmount);
        const newAmount = donateMoney + donateNumber;
        document.getElementById('donated-amount').innerText = newAmount + ' ' +'BDT';
        
        const needed = document.getElementById('donation-needed').innerText;
        const neededNumber = parseFloat(needed);
        const newNeededAmount = neededNumber - donateMoney;
        document.getElementById('donation-needed').innerText = newNeededAmount + ' ' + 'BDT';


        const container = document.createElement('h1');
        container.innerText = `${newNeededAmount} Taka is Donate for Flood at Noakhali, Bangladesh`;
        console.log(container)
        document.getElementById('history-container').appendChild(container);
    }
    else{
        alert('Invalid donation amount');
        const model =document.getElementById('my_modal_1').close();
        return model;
    }
})

//  card 2
document.getElementById('btn-second').addEventListener('click',function(event){
    event.preventDefault();
    const donateMoney = getValueById('input-second');
    
    if(donateMoney > 0){
        const donatedAmount= document.getElementById('donated-amount-2').innerText;
        const donateNumber = parseFloat(donatedAmount);
        const newAmount = donateMoney + donateNumber;
        document.getElementById('donated-amount-2').innerText = newAmount + ' ' +'BDT';
        
        const needed = document.getElementById('donation-needed').innerText;
        const neededNumber = parseFloat(needed);
        const newNeededAmount = neededNumber - donateMoney;
        document.getElementById('donation-needed').innerText = newNeededAmount + ' ' + 'BDT';

    }
    else{
        alert('Invalid donation amount');
        const model =document.getElementById('my_modal_1').close();
        return model;
    }
})

// card 3
document.getElementById('btn-third').addEventListener('click',function(event){
    event.preventDefault();
    const donateMoney = getValueById('input-third');
    
    if(donateMoney > 0){
        const donatedAmount= document.getElementById('donated-amount-3').innerText;
        const donateNumber = parseFloat(donatedAmount);
        const newAmount = donateMoney + donateNumber;
        document.getElementById('donated-amount-3').innerText = newAmount + ' ' +'BDT';
        
        const needed = document.getElementById('donation-needed').innerText;
        const neededNumber = parseFloat(needed);
        const newNeededAmount = neededNumber - donateMoney;
        document.getElementById('donation-needed').innerText = newNeededAmount + ' ' + 'BDT';

    }
    else{
        alert('Invalid donation amount');
        const model =document.getElementById('my_modal_1').close();
        return model;
    }
})
