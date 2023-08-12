var username = document.querySelector('#fullname')
var email = document.querySelector('#email')
var form = document.querySelector('form')
var password = document.getElementById('password')
var passwordConfirm = document.getElementById('password_confirmation')
showError = function(input,message){
    input.parentElement.classList.add('invalid')
    var loiSpan = input.parentElement.querySelector('span')
    loiSpan.innerText = message
}

showSuccess = function(input,message){
    input.parentElement.classList.remove('invalid')
    var loiSpan = input.parentElement.querySelector('span')
    loiSpan.innerText = ''
}
checkEmty = function(input){

        
    
        input.value.trim()
        if(input.value==''){
            showError(input,'Không Để Trống')
        }
        else{
            showSuccess(input)
       }
    }
checkEmail=function(input){
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value.trim();
    
    if(regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(input,'Không Hợp Lệ')
    }
checkPassword = function(input,min,max){
    input.value.trim()
    if(input.value.length<min){
        showError(input,`Mật khẩu dài hơn ${min} ký tự`)
    }
    else if(input.value.length>max){
        showError(input,`Mật khẩu không được quá ${max} ký tự`)
    }
    else{
        showSuccess(input)
    }
}
checkConfirmPassword = function(input){
    if(passwordConfirm.value === password.value){
        showSuccess(input)
    }
    else{
        showError(input,'Mật khẩu không trùng khớp')
    }
}
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    checkEmail(email)
    checkEmty(username)
    checkEmty(email)
    checkEmty(passwordConfirm)
    checkEmty(password)    
    checkPassword(password,3,16)
    checkConfirmPassword(passwordConfirm)
})