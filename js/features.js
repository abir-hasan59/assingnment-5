document.getElementById('donate-btn').addEventListener('click',function(event){
    event.preventDefault();

    document.getElementById('donate-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donate-section').classList.remove('hidden');
})

document.getElementById('history-btn').addEventListener('click',function(event){
    event.preventDefault();

    document.getElementById('donate-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');

    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})
//  page change function

document.getElementById('btn-blog').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href ="https://abir-hasan59.github.io/assingnment-5/blog.html";
});

document.getElementById('btn-blog').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href ="index.html";
});

