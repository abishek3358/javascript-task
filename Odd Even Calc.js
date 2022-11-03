function calculate() {
    var firstValue = document.getElementById('input1').value;
    var secondValue = document.getElementById('input2').value;
    if(firstValue , secondValue == ''){
        alert('Empty inputs not allowed');
    }
     else if (Number(firstValue) >= Number(secondValue)) {
        alert("Value of A is  greaterthan or equal to the value of B.Please enter lesser value");
     }
    else {
        var Array = [];
        oddArray = [];
        evenArray = [];
        sum = 0;
        evenSum = 0;
        oddSum = 0;
        var valueAdd = document.getElementById('addvalue');
        evenNumbers = document.getElementById('evenValue');
        evenSumTotal = document.getElementById('evenSum');
        oddNumbers = document.getElementById('oddValue');
        oddSumTotal = document.getElementById('oddSum');
        totalLegth = document.getElementById('totalLength');
        totalValue = document.getElementById('Value');
        for (let i = Number(firstValue); i <= Number(secondValue); i++){
            Array.push(i);
            sum += i;
            totalValue.innerHTML = 'The numbers in between <b>A and B =</b>' + '<b>' + Array + '</b>';
            valueAdd.innerHTML = "The sum of total numbers in between  <b>A and B =</b>" + '<b>' + sum + '</b>';
            totalLegth.innerHTML = 'The total numbers in between <b>A and B =</b>' + '<b>' + Array.length + '</b>';
            if (i % 2 == 0) {
                evenSum += i;
                evenArray.push(i);
                evenNumbers.innerHTML = 'Even numbers in between <b>A and B =</b>' + '<b>' + evenArray + '</b>';
                evenSumTotal.innerHTML = 'The sum of even numbers in between <b>A and B =</b>' + '<b>' + evenSum + '</b>';
            }
            else{
                oddSum += i;
                oddArray.push(i);
                oddNumbers.innerHTML = 'Odd numbers in between <b>A and B =</b>' + '<b>' + oddArray + '</b>';
                oddSumTotal.innerHTML = 'The sum of odd numbers in between <b>A and B =</b>' + '<b>' + oddSum + '</b>';
            }
        }
    }
}

