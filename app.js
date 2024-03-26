const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

function validateInputs() {
    const usernameval = username.Value.trim()
    const emailval = email.Value.trim();
    const passwordval = password.Value.trim();
    const cpasswordval = cpassword.Value.trim();


    if (usernameval === ''){
        seterror(username, "username is required")
    }
    else 
        setsuccess(username)
    
    if (emailval=== ''){
        seterror(email,"email is required")
    }
    if (passwordval === '') {
        seterror(password, "password is required")
    }
    else if (passwordval.length<8){
        seterror(password, "password must atleast 8 character")
    }
    else{
        setsuccess(password)
    }
    if (cpasswordval === '') {
        seterror(cpassword, "cpassword is required")
    }
    else if (cpasswordval !== passwordval) {
        seterror(cpassword, "password does not match")
    }
    else {
        setsuccess(cpassword)
    }
}

function seterror(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('sucess')
}
function setsuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    
    errorElement.innerText = '';
    inputGroup.classList.add('sucess')
    inputGroup.classList.remove('error')
}