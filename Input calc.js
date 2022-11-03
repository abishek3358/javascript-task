function calculate() {
    let firstInputValue = document.getElementById("input1");
    secondInputValue = document.getElementById("input2");
    if (firstInputValue.value ,secondInputValue.value  == '') {
        alert('Empty inputs not allowed');
    }
    else {
        //Addition
        let valueAdd = Number(firstInputValue.value) + Number(secondInputValue.value);
        var addValue = document.getElementById("addvalue");
        addValue.innerHTML = "Addition of this inputs is <b>A + B =</b>" + '<b>' + valueAdd + '</b>';
        //Subtraction
        let valueSub = Number(firstInputValue.value) - Number(secondInputValue.value);
        var subValue = document.getElementById("subvalue");
        subValue.innerHTML = "Subtraction of this inputs is <b>A - B =</b>" + '<b>' + valueSub + '</b>';
        //Multiply
        let valueMultiply = Number(firstInputValue.value) * Number(secondInputValue.value);
        var multiplyValue = document.getElementById("multiply");
        multiplyValue.innerHTML = "Multiplication of this inputs is <b>A * B =</b>" + '<b>' + valueMultiply + '</b>';
        //Division
        let valueDivide = Number(firstInputValue.value) / Number(secondInputValue.value);
        var divisionValue = document.getElementById("division");;
        divisionValue.innerHTML = "Division of this inputs is <b>A / B =</b>" + '<b>' + valueDivide + '</b>';
        //Squared the sum value
        let valueSquared = valueAdd * valueAdd;
        var squaredValue = document.getElementById("squared");
        squaredValue.innerHTML = "Squared the sum value of <b>A </b> and <b>B =</b>" + '<b>' + valueSquared + '</b>';
        //Square root the sum value
        let valueSquareoot = Math.sqrt(valueAdd);
        var squareRootValue = document.getElementById('squareRoot');
        squareRootValue.innerHTML = "Square root the sum value of <b>A </b> and <b>B =</b>" + '<b>' + valueSquareoot + '</b>';
        //Logarithm of the sum value
        let valueLog = Math.log(valueAdd);
        var logarithmValue = document.getElementById('logvalue');
        logarithmValue.innerHTML = "Log<b>(A </b> + <b>B) =</b>" + '<b>' + valueLog + '</b>';
        //Sin value
        let valueSin = Math.sin(valueAdd);
        var SinValue = document.getElementById('sinValue');
        SinValue.innerHTML = "sin <b>(A </b> + <b>B) =</b>" + '<b>' + valueSin + '</b>';
        //cos value
        let valueCos = Math.cos(valueAdd);
        var cosValue = document.getElementById('cosValue');
        cosValue.innerHTML = "cos <b>(A </b> + <b>B) =</b>" + '<b>' + valueCos + '</b>';
        //tan value
        let valueTan = Math.tan(valueAdd)
        var tanValue = document.getElementById('tanValue');
        tanValue.innerHTML = "tan <b>(A </b> + <b>B) =</b>" + '<b>' + valueTan + '</b>';
    }
}


