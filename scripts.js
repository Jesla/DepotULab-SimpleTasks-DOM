// FIRST OBJECTIVE

document.addEventListener('DOMContentLoaded', function () {
    var firstButton = document.createElement('button');
    firstButton.id = 'firstObj';
    firstButton.innerText = '#1';
    firstButton.addEventListener('click', clickAlert1);
    document.getElementById('firstObjDiv').appendChild(firstButton);

    function clickAlert1() {
        alert('Objective #1 Down!');
    }

    // SECOND OBJECTIVE

    var second = document.getElementById('secondObj');
    second.addEventListener('click', clickAlert2);

    function clickAlert2() {
        var textBoxInput = document.getElementById('secondObjTextBox').value;
        if (textBoxInput.length >= 1) {
            alert(textBoxInput);
        } else {
            alert('Please enter some text.')
        }
    }

    // THIRD OBJECTIVE

    var thirdObjective = document.getElementById('thirdObjDiv');
    thirdObjective.addEventListener('mouseover', colorChange);
    thirdObjective.addEventListener('mouseout', colorRevert);

    function colorChange() {
        var colorCh = document.getElementById('thirdObjDiv');
        this.style.backgroundColor = 'red';
    }

    function colorRevert() {
        var colorRv = document.getElementById('thirdObjDiv');
        this.style.backgroundColor = '';
    }

    // FOURTH OBJECTIVE 

    var fourthObjective = document.createElement('p');
    fourthObjective.id = 'fourthObj';
    fourthObjective.innerText = 'This is the fourth objective.';
    fourthObjective.addEventListener('click', clickAlert4);
    document.getElementById('fourthObjDiv').appendChild(fourthObjective);

    function clickAlert4() {
        var randColor = (Math.random() * 0xFFFFFF << 0).toString(16);
        this.style.color = '#' + randColor;
    }

    // FIFTH OBJECTIVE

    var fifthButton = document.createElement('button');
    fifthButton.id = 'fifthObj';
    fifthButton.innerText = '#5';
    fifthButton.addEventListener('click', clickAlert5);
    document.getElementById('fifthObjDiv').appendChild(fifthButton);

    var fifthTextDiv = document.createElement('div');
    fifthTextDiv.id = 'fifthObjText';
    document.getElementById('fifthObjDiv').appendChild(fifthTextDiv);

    var fifthSpan = document.createElement("span");
    fifthSpan.id = 'fifthObjSpan';
    fifthSpan.innerText = 'Jessica Larsen';

    function clickAlert5() {
        var textDiv = document.getElementById('fifthObjText').appendChild(fifthSpan);
    }

    // SIXTH OBJECTIVE

    var friendsArray = ["Stacy", "JD", "Jared", "Brian", "Kinley", "Blair", "Stephanie", "Susan", "Jim", "Mark"];
    var sixthObjClick = addEventListener('click', clickAlert6);

    function clickAlert6() {

        for (var i = 0; i < friendsArray.length; i++) {
            var friendList = friendsArray[i];
            var sixthObjList = document.createElement('li');
            sixthObjList.class = 'sixthLiList';
            sixthObjList.innerHTML = friendList;
            document.getElementById('sixthUl').appendChild(sixthObjList);
        }
    }

}); // THESE ARE THE FINAL CLOSE TAGS FOR THE PAGE - DO NOT REMOVE