let fact = document.querySelector('.fact');
let textFact = document.querySelector('.text-fact');
let inputNumber = document.querySelector('input')

inputNumber.addEventListener('input', getFactFetch);

// function getFactAjax() {
//     let number = inputNumber.value;
    
//     if (number != "") {
//         let xhr = new XMLHttpRequest;

//         xhr.open('GET', `http://numbersapi.com/${number}`)

//         xhr.onload = function() {
//             if (this.status == 200 ){
//                 fact.style.display = 'block';
//                 textFact.innerText = this.responseText;
//             }
//         }

//         xhr.send()
//     }
// }
function getFactFetch() {
    let number = inputNumber.value;

    if (number != "") {
        fetch(`http://numbersapi.com/${number}`)
        .then ( response => response.text())
        .then( data => {
            fact.style.display = 'block';
           textFact.innerText = data;
        } )
        .catch( err => {
            fact.style.display = 'block';
            textFact.innerText = err ;
        } )
    }
}