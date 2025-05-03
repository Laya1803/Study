
const button = document.getElementById("button");

function after(){
    var name = document.getElementById("name")
    if (name&&name.value){
        document.getElementById('button').innerHTML=`SUBSCRIBED`;
        
    } else{
        alert("Please, Fill the data!!")
    }
    
   
}
button.addEventListener('click',function onClick(event){
    event.target.style.backgroundColor = 'grey';

    })  
