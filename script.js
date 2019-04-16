function checkValidateAccount() {
    let patt =/^[_a-z0-9]{6,}$/;
    let account = document.getElementById('account').value;
    let result = patt.test(account);
    if (result) document.getElementById('result').innerText = 'The account is valid';
    else document.getElementById('result').innerText = 'The account is not valid';
}