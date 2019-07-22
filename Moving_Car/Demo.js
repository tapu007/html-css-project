var i =0;
document.querySelector('button').addEventListener('click',(event)=>{
    if(i == 0){
        //event.target.textContent = "hello there!!";
        document.getElementById('hello').innerHTML = "hello there";
        i =1;

    }
    else if(i ==1)
    {
        //event.target.textContent = '';
        document.getElementById('hello').innerHTML = "";
        i =0;
    }
})