
function changeStyles() {
    const BALANCE = '25 200₽';
    const BALANCE2 = '25 200₽';
    
    let balance_elem1 = document.getElementsByClassName('Text__StyledTextSpan-sc-9bqqn7-0 itslBl')[0];
    let balance_elem2 = document.getElementsByClassName('styled__StyledPriceRub-sc-1jfqnx2-6 eWttka qa-rub')[0];
    balance_elem1.innerHTML = BALANCE;
    balance_elem2.innerHTML = BALANCE2;
        
}

  

window.addEventListener("click",function() { changeStyles() });