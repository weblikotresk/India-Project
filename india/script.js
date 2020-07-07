let today = new Date(),
tommorrow = new Date(Date.now() + 63113852000),

today_time = `${today.getHours()}:${today.getMinutes()}`;

(function($) {
    $(function() {
        
        $('.book_select').styler();

        $('.name_input').styler();
        
        tommorrow = new Date(Date.parse(today.getFullYear() + 3));

        $('#date').datepicker({
            // Можно выбрать тольkо даты, идущие за сегодняшним днем, включая сегодня, а также не дальше, чем на 2 года вперёд.
            minDate: today,
            maxDate: tommorrow

        });
         // Сделаем неактивными воскресенье и субботу
        let disabledDays = [0, 6];

        $('#date').datepicker({
            
             onRenderCell: function (date, cellType) {
                 if (cellType == 'day') {
                     var day = date.getDay(),
                         isDisabled = disabledDays.indexOf(day) != -1;

                     return {
                         disabled: isDisabled
                     }
                 }
             }
        })

        
    });
    })(jQuery);
var cleave = new Cleave('#time', {
    time: true,
    timePattern: ['h', 'm']
});
function validName(){
    var re = /\w*\s(\w*\S)/;
    var myName = document.getElementById('name').value;
    var valid = re.test(myName);
    if (valid == false) document.getElementById('message_name').innerHTML = 'Please, enter your full name and try again.';
    else document.getElementById('message_name').innerHTML = '';

    if (document.getElementsByClassName('name_input')[0].value == ''){
        document.getElementById('message_name').innerHTML = 'Please, enter your full name.';
    }
    return valid;
}
function validDate(){
    let valid = false;
    if (document.getElementById('date').value == ''){
        document.getElementById('message_date').innerHTML = 'Please, enter your date.';
        valid = false;
    }else{
        valid = true;
    }
    return valid;
}
function validMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid == false) document.getElementById('message_mail').innerHTML = 'Your email address is incorrect. Please, try again.';
    else document.getElementById('message_mail').innerHTML = '';

    return valid;
}
    
function validPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid == false) document.getElementById('message_phone').innerHTML = 'Your phone number is incorrect. Please, try again.';
    else document.getElementById('message_phone').innerHTML ='';
    return valid;
}  

function validTime(){
    let hours = `${document.getElementById('time').value[0]}${document.getElementById('time').value[1]}`,
    valid = false;
    if(hours<8 || hours >22){
        document.getElementById('message_time').innerHTML = 'We work from 08:00 to 22:00. Please, enter correct time.';
    }else if(hours == 00 || hours == 'undefinedundefined'){
        document.getElementById('message_time').innerHTML = 'Please, enter correct time.';
    }else{
        document.getElementById('message_time').innerHTML ='';
        valid =true;
    } 
   return valid;
}
let submit_btn = document.getElementById('submit_btn');
submit_btn.onclick = function(){
    validName()
    validDate()
    validMail() 
    validPhone()
    validTime();
console.log(validName(),validDate(), validMail(), validPhone(), validTime());
    if(validName() && validDate() && validMail() && validPhone() && validTime()){
        document.getElementById('message_submit').innerHTML ='Excellent! Confirmation of your booking will be sent to your email address!';
    }
}
let opened =false;
document.getElementsByClassName('menu__btn')[0].onclick = function(){
    
    if(opened == false){
        document.getElementsByTagName('body')[0].style.position = 'fixed';
        document.getElementsByClassName('menu__btn')[0].style.position = 'fixed';
        opened = true;
    }else{
        document.getElementsByTagName('body')[0].style.position = 'static';
        document.getElementsByClassName('menu__btn')[0].style.position = 'relative';
        opened = false;
    }

}


if(document.getElementsByTagName('html')[0].classList.contains("webplossless")){
    let images = document.getElementsByTagName('img');
    for(let i = 0;i<images.length;i++){
        if(images[i].src.endsWith('.png')){
            images[i].src = images[i].src.replace('.png','.webp');
        }
    }
}
