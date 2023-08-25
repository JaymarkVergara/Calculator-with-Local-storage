let calculation = localStorage.getItem('save') ||'';
showResult()

function calculate(value){
    calculation = calculation + value;
    console.log(calculation);
    showResult()
    localStorage.setItem('save', calculation);
}
function showResult(){
    document.querySelector('.js-output').innerHTML= calculation;
}