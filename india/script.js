let today = new Date(),
tommorrow = new Date(Date.now() + 63113852000);
console.log(today.getFullYear());
console.log(tommorrow.getFullYear()-1);
(function($) {
    $(function() {
    
        $('.book_select').styler();

        $('.name_input').styler();
        
//tommorrow = new Date(Date.parse(today.getFullYear() + 3));

        $('#date').datepicker({
            
            // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня, а также не дальше, чем на 2 года вперёд.
            
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
function validMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid == false) document.getElementById('message_mail').innerHTML = 'Your email address is incorrect. Try again.';
    else document.getElementById('message_mail').innerHTML = '';
   // document.getElementById('message_mail').innerHTML = output;
    return valid;
}
    
function validPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid == false) document.getElementById('message_phone').innerHTML = 'Your phone number is incorrect. Try again.';
    else document.getElementById('message_phone').innerHTML ='';
    return valid;
}  
function validDate(){
    console.log(today.getFullYear(), tommorrow.getFullYear()-1,tommorrow.getFullYear() )
    //let re = new RegExp('/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(2020|2021|2022)[\s\D]([01]?[0-9]|2[0-3]):[0-5][0-9]/');
    let re = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.2020[\s\D]([01]?[0-9]|2[0-3]):[0-5][0-9]/;
    // re = new RegExp(re);
    // console.log(re);
    var myDate = document.getElementById('date').value;
    console.log(myDate);
    var valid = re.test(myDate);
    if (valid == false){
        console.log('false');
        document.getElementById('message_date').innerHTML = 'Please, enter correct date and time.';
    } 
    else{
        console.log('true');
        document.getElementById('message_date').innerHTML ='';
    } 
    return valid;
}
function validTime(){
    var re = /([01]?[0-9]|2[0-3]):[0-5][0-9]/;
    var myTime = document.getElementById('time').value;
    var valid = re.test(myTime);
    if (valid == false) document.getElementById('message_time').innerHTML = 'Your time is incorrect. Try again.';
    else document.getElementById('message_time').innerHTML ='';
    return valid;
}
let submit_btn = document.getElementById('submit_btn');

submit_btn.onclick = function(){
    validMail()
    validPhone()
    validDate()
    // console.log(document.getElementsByClassName('datepicker-here')[0].value)
    // if (document.getElementsByClassName('datepicker-here')[0].innerHTML == ''){
    //     document.getElementById('message_date').innerHTML = 'Please, enter date and time.';
    // }else{
    //     document.getElementById('message_date').innerHTML = '';
    // }
}