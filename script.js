function calInterest(event){
    event.preventDefault();
    let p = document.querySelector("#prince").value;
    let t = document.querySelector("#tm").value;
    let r = document.querySelector("#rt").value;
    if(isNaN(p) || isNaN(t) || isNaN(r)){
        alert("Please enter valid values for principal, time and rate");
        return;
    }

    let si = (p*t*r)/100;
    document.querySelector("#abc").innerText =`The interest is ${si.toFixed(2)}`;
    
}