function Validator(options){
   var formElement = document.querySelector(options.form)

   function Validate(inputElement,rule){
                var errorElement = inputElement.parentElement.querySelector('.form-message')// lấy element thẻ span HTML
                // value cua inputElement va ham Test
                var errorMessage= rule.test(inputElement.value) //chạy function kiểmn tra lỗi
                if(errorMessage){//khi có lỗi chạy dòng này
                   errorElement.innerText = errorMessage;
                   inputElement.parentElement.classList.add('invalid')//thêm dòng đỏ báo hiệu lỗi
                }
                else{//khi không có lỗi
                   errorElement.innerText = ''
                   inputElement.parentElement.classList.remove('invalid')//xóa dòng đỏ khi hết lỗi
    
                }
   }
  if(formElement){
   options.rules.forEach(function(rule){
      var inputElement = formElement.querySelector(rule.selector)// element của từng cái Email và tên
      if(inputElement){
         inputElement.onblur = function(){
            Validate(rule,inputElement)
  
         }
      }
   })
  }
}
//định nghĩa rules, nguyên tắc, lỗi và hợp lệ
Validator.isRequire = function(selector){
   return{
      selector:selector,
      test: function(value){
         return value.trim() ? undefined : 'vui lòng nhập tên'
      }
   }
}
Validator.isEmail = function(selector){
      return{
      selector:selector,
      test: function(){
      }
  }
}
