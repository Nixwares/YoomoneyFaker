function ChangePhone() {
    const FakePhone = '+7900 0000000'
    let NumberElem = document.getElementsByClassName('Text__StyledTextSpan-sc-9bqqn7-0 ibBqHn qa-favorite-example-phone')[0];
    NumberElem.innerHTML = FakePhone;
}


function ChangeVisibilityBalance() {
    const BALANCE = '25 200';
    const BALANCE2 = '25 200';
    let BalanceElem1 = document.getElementsByClassName('Text__StyledTextSpan-sc-9bqqn7-0 itslBl')[0];
    let BalanceElem2 = document.getElementsByClassName('styled__StyledPriceRub-sc-1jfqnx2-6 eWttka qa-rub')[0];
    let BalanceElem3 = document.getElementsByClassName('Text__StyledTextSpan-sc-9bqqn7-0 fZqWsL')[0];

    BalanceElem1.innerHTML = `<b>${BALANCE}</b> ₽`;
    BalanceElem2.innerHTML = `${BALANCE2} <small>₽</small>`;
    BalanceElem3.innerHTML = `${BALANCE} ₽`;
}

function ChangeCountScores() {
    const FakeScores = '65';
    let ScoresElem = document.getElementsByClassName('Text__StyledTextSpan-sc-9bqqn7-0 kQQMlI')[0];
    ScoresElem.innerHTML = FakeScores;

}

window.addEventListener("click", function() { 
    ChangePhone()
    ChangeVisibilityBalance()
    ChangeCountScores()

});
