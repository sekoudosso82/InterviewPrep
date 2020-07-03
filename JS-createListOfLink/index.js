// var target = document.getElementById('mainDiv')
var target = document.querySelector('#mainDiv')

var arr = [
    {name: 'linkedin', link:'http://limkedin.com/in/planetoftheweb'},
    {name: 'blog', link:'http://raybo.org'},    
    {name: 'Twitter', link:'http://twitter.com/in/planetoftheweb'}
] 
for (i=0; i<arr.length; i++) {
    newLink = document.createElement('a') 
    
    newLink.href = arr[i].link
    newLink.innerHTML = arr[i].name
    // newLink.innerText = arr[i].name  

    target.appendChild(newLink)
}