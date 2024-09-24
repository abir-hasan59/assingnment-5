document.getElementById('donate-body').addEventListener('click',function(event){
    event.preventDefault();

    document.getElementById('donate-body').classList.add('bg-[#B4F461]');
    document.getElementById('history-body').classList.remove('bg-[#B4F461]');
    
    document.getElementById('history hidden').classList.add('hidden');
    document.getElementById('donate-section').classList.remove('hidden');
})

document.getElementById('history-body').addEventListener('click',function(event){
    event.preventDefault();

    document.getElementById('donate-body').classList.remove('bg-[#B4F461]');
    document.getElementById('history-body').classList.add('bg-[#B4F461]');

    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history hidden').classList.remove('hidden');
})

