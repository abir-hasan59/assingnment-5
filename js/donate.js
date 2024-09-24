
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

        // date
        const date = new Date();
        const setTime = date.toLocaleString();

        const div = document.createElement('div');
        div.innerHTML = ` 
            <div id="history-container" class="border rounded-2xl p-8 mx-auto md:w-2/4 my-5">
            <h1 class="text-lg font-bold">${newNeededAmount} Taka is Donate for Flood at Noakhali, Bangladesh</h1>
            <p>Date: ${setTime} </p>
        </div>`;
      
        document.getElementById('history-section').appendChild(div);
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

        // date
        const date = new Date();
        const setTime = date.toLocaleString();
        
        const div = document.createElement('div');
        div.innerHTML = ` 
            <div id="history-container" class="border rounded-2xl p-8 mx-auto md:w-2/4 my-5">
                <h1 class="text-lg font-bold">${newNeededAmount} Taka is Donate for Flood Relief in Feni,Bangladesh</h1>
                <p>Date: ${setTime} </p>
            </div>`;
            document.getElementById('history-section').appendChild(div);

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

        // date
        const date = new Date();
        const setTime = date.toLocaleString();
        
        const div = document.createElement('div');
        div.innerHTML = ` 
            <div id="history-container" class="border rounded-2xl p-8 mx-auto md:w-2/4 my-5">
            <h1 class="text-lg font-bold">${newNeededAmount} Taka is Aid for Injured in the Quota Movement</h1>
            <p>Date: ${setTime} </p>
            </div>`;            
        document.getElementById('history-section').appendChild(div);

    }
    else{
        alert('Invalid donation amount');
        const model =document.getElementById('my_modal_1').close();
        return model;
    }
})
