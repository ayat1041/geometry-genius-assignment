// converts string input values into float
function stringToFloat(id){
    let b = document.getElementById(id);
    let bstring = b.value;
    let bfloat = parseFloat(bstring);
    return bfloat;
}
//converts float to string



document.getElementById('triangle-btn').addEventListener('click',function(){

    b = stringToFloat('triangle-b');
    h = stringToFloat('triangle-h');
    area = (0.5*b*h).toFixed(2);
    if(isNaN(area) != true){
        console.log(area);
        newList = document.createElement('li');
        newList.innerHTML = `<div class="flex flex-row justify-between w-full mt-6">
        <h1 id="result-type" class="text-base mr-1">Triangle</h1>
        <h1 class="mx-1"><span>${area}</span>cm<sup>2</sup></h1>
        <button class="ml-1 bg-blue-500 text-xs text-white py-1 px-2 rounded">Convert to m<sup>2</sup></button>
        </div>
        `
        console.log(newList);
        document.getElementById('result-window').appendChild(newList);
    }
    else{
        alert("Please enter valid number in both fields.")
    }
})