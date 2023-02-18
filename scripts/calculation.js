// converts string input values into float
function stringToFloat(id){
    let b = document.getElementById(id);
    let bstring = b.value;
    let bfloat = parseFloat(bstring);
    return bfloat;
}
// result adder function
function addResult(type,area){
    newList = document.createElement('li');
    newList.innerHTML = `<div class="flex flex-row justify-between w-full mt-6">
    <h1 id="result-type" class="text-base mr-1">${type}</h1>
    <h1 class="mx-1"><span>${area}</span>cm<sup>2</sup></h1>
    <button class="ml-1 bg-blue-500 text-xs text-white py-1 px-2 rounded">Convert to m<sup>2</sup></button>
    </div>
    `
    document.getElementById('result-window').appendChild(newList);
}

// for all calculations
function quickResult(field1id,field2id,btnid,typee){
    document.getElementById(btnid).addEventListener('click',function(){
        let w = stringToFloat(field1id);
        let l = stringToFloat(field2id);
        if(w <=0 || l <=0){
            alert("Please enter both values - Number & Positive");
            return;
        }
        if(typee == 'Triangle' || typee == 'Rhombus'){
            let area = (0.5*w*l).toFixed(2);
            if(isNaN(area) != true){
                addResult(typee,area);
            }
            else{
                alert("Please enter both values - Number & Positive");
                return;
            }
        }
        else if (typee == 'Rectangle' || typee == 'Parallelogram' || typee == "Pentagon"){
            let area = (w*l).toFixed(2);
            if(isNaN(area) != true){
                addResult(typee,area);
            }
            else{
                alert("Please enter valid number in both fields.")
            }
        }
        else if (typee == 'Ellipse'){
            let area = (3.14159*w*l).toFixed(2);
            if(isNaN(area) != true){
                addResult(typee,area);
            }
            else{
                alert("Please enter valid number in both fields.")
            }
        }
        
    })
}

// triangle
quickResult('triangle-b','triangle-h','triangle-btn','Triangle');
// rectangle
quickResult('rectangle-w','rectangle-l','rectangle-btn','Rectangle');
// Parallelogram
quickResult('parallel-b','parallel-h','parallel-btn','Parallelogram');
// pentagon
quickResult('penta-p','penta-b','penta-btn','Pentagon');
// rhombus
quickResult('rhombus-d1','rhombus-d2','rhombus-btn','Rhombus');
// ellipse
quickResult('ellipse-a','ellipse-b','ellipse-btn','Ellipse');
