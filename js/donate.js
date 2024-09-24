// card 1
document.getElementById('btn-first').addEventListener('click',function(){
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

            document.getElementById('my_modal_4').classList.remove('hidden');
        document.getElementById('close').addEventListener('click',function(){
            document.getElementById('my_modal_4').classList.add('hidden');
        })
    }
    else{
        alert('Invalid donation amount')
    }
})

//  card 2
document.getElementById('btn-second').addEventListener('click',function(){
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
        alert('Invalid donation amount')
    }
})

// card 3
document.getElementById('btn-third').addEventListener('click',function(){
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
        alert('Invalid donation amount')
    }
})