var button = document.getElementById("btn");


function trigger(){
    var value = document.getElementById("in").value;
    if(value==""){
        alert("PLease Entre A Number")
        return
    }
    console.log(value)

    if(value<1 || value>99999){
        alert("PLease Entre A Number Within The Range")
        return
    }
    

    var id =setInterval(() => {

        let curr=1;
        while( curr<value && curr<10){

            var up = document.querySelector("#one>.up");
            up.innerHTML(curr)
            curr=curr+1;

            let down = document.querySelector("#one>.down");
            down.innerHTML(curr)
            down.classList.add("apply")
        }
    }, 1050);

}

button.onclick=trigger