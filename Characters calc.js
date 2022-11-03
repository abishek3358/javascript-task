function calculate() {
    var textarea = document.getElementById('textarea')
    if (textarea.value == '') {
        alert('Textarea was empty!')
    }
    else {
        var wrk = document.getElementById('work')
        wrk.className = 'col-lg-6'
        var textarea = document.getElementById('textarea')
        var output = document.getElementById('anwers')
        arrayValue = textarea.value.trim(' ').split(' ').join('')
        inputArray = arrayValue.split('')
        for (let i = 0; i < inputArray.length; i++) {
            let count = 0;
            for (let j = 0; j < inputArray.length; j++) {
                if (inputArray[i] == inputArray[j] && i > j) {
                    break;
                }
                if (inputArray[i] == inputArray[j]) {
                    count++;
                }
            }
            if (count > 0) {
                var output = document.getElementById('anwers')
                if (output.innerHTML == '') {
                    output.innerHTML = '<h2><p>This input contains <b>' + inputArray.length + '</b> characters.</p></h2>' + '<p>In this input includes ' + count + ' ' + '<b>' + inputArray[i].toUpperCase() + '</b>' + ' characters.</p>'
                }
                else {
                    output.innerHTML += '<p>In this input includes ' + count + ' ' + '<b>' + inputArray[i].toUpperCase() + '</b>' + ' characters.</p>'
                }
            }
        }


    }

}

