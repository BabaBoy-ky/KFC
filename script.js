// script.js
function play(userChoice) {
    const choices = ['pierre', 'feuille', 'ciseau'];
    const icons = {
        'pierre': '✊',
        'feuille': '📄',
        'ciseau': '✂️'
    };
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultMessage = '';

    if (userChoice === computerChoice) {
        resultMessage = `Égalité ! Vous avez tous les deux choisi ${icons[userChoice]} (${userChoice}).`;
    } else if (
        (userChoice === 'pierre' && computerChoice === 'ciseau') ||
        (userChoice === 'feuille' && computerChoice === 'pierre') ||
        (userChoice === 'ciseau' && computerChoice === 'feuille')
    ) {
        resultMessage = `🎉 Gagné ! ${icons[userChoice]} (${userChoice}) bat ${icons[computerChoice]} (${computerChoice}).`;
    } else {
        resultMessage = `😞 Perdu ! ${icons[computerChoice]} (${computerChoice}) bat ${icons[userChoice]} (${userChoice}).`;
    }

    document.getElementById('result').textContent = resultMessage;
}
