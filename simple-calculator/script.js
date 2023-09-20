
function calculator(){

    // alert('clicked')
    const firstInput = parseInt(document.getElementById('firstInput').value);
    const secondInput= parseInt(document.getElementById('secondInput').value);
    const operation = document.getElementById('operation').value;

    // console.log(firstInput);
    // console.log(secondInput);
    // console.log(operation);

        if(operation==="+"){

            var result =  firstInput + secondInput;
            
        }
        if(operation==="-"){

            var result =  firstInput - secondInput;
            
        }
        if(operation==="*"){

            var result =  firstInput * secondInput;
            
        }
        if(operation==="/"){

            var result =  firstInput / secondInput;
            
        }

        document.getElementById('result').value= result;

}

