// as properties of null element error was occuring I created seperate js file to avoid that
document.getElementById('return-btn').addEventListener('click',function(){
    console.log("button clicked");
    window.location.href = '../home.html';
})