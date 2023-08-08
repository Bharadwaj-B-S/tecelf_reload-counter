function inccount(){
    let counter = parseInt(localStorage.getItem("pageloadcounter", 0))
    if(isNaN(counter)){
        counter=0;
    }
    counter++;
    
    document.getElementById("Display").textContent=counter;

    localStorage.setItem("pageloadcounter", counter)

}

function reset(){
    let counter=0;
    document.getElementById("Display").textContent=counter;
    localStorage.setItem("pageloadcounter", counter)
}

function refresh(){
    inccount();
}

function div(a,b)
{
    return a/b;
}

console.log(div(8/0));