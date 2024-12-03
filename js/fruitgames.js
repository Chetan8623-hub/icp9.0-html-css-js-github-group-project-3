function checkName() {
    const name = document.getElementById('name').value.trim();
    if (name) {
        alert(`Welcome, ${name} ! Get Ready To Play Fruit Games.🤩`);
        document.getElementById('games').style.display = 'block';
        initializeTrafficSignal();
    } else {
        alert('Please Enter Valid Name To Play Fruit Games.');
    }
}

function countAlphabets() {
    const text = document.getElementById('textInput').value;
    const alphabetsCount = text.replace(/[^a-zA-Z]/g, '').length;

    if (alphabetsCount > 0) {
        document.getElementById('result1').innerText = `The input contains ${alphabetsCount} alphabets. 🤩`;
    } else {
        document.getElementById('result1').innerText = 'No alphabets found in the input! 😥';
    }
}
function resetAlphabetsGame() {
    document.getElementById('textInput').value = '';
    document.getElementById('result1').innerText = '';
}