const blog =document.getElementById('btn-blog');

blog.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = '/blog.html';
});

document.getElementById('btn-home').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = '/index.html';
})


