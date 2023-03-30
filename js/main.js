for (let i=1; i <= 100; i++)
{
    if (i % 15 == 0){
    document.getElementById("container-for-squares").innerHTML += `
    <div class= "fizzbuzz">
        <p>FizzBuzz</p>
    </div>
    `;
        console.log("FizzBuzz");
    } else if (i % 3 == 0){
    document.getElementById("container-for-squares").innerHTML += `
    <div class= "fizz">
        <p>FizzBuzz</p>
    </div>
    `;
        console.log("Fizz");
    } else if (i % 5 == 0){
    document.getElementById("container-for-squares").innerHTML += `
    <div class= "buzz">
        <p>FizzBuzz</p>
    </div>
    `;
        console.log("Buzz");
    } else {
    document.getElementById("container-for-squares").innerHTML += `
    <div class= "none">
        <p>${i}</p>
    </div>
    `;
        console.log(i);
    }
}