// EXERCICE 1
// METHOD1

function PhoneNumber (phone){

    if(phone.startsWith('05')){
        let phoneNumber = phone.substring(1)
        let fix = "F :";
        let ma = "+212"
        return fix.concat(ma).concat(phoneNumber)
    }
    else if(phone.startsWith('06') || phone.startsWith('07')){
         let phoneNumber = phone.substring(1)
        let personal = "M :";
        let ma = "+212"
        return personal.concat(ma).concat(phoneNumber)
    }
    else{
        return console.log("Phone Number is Invalid");
    }
}

// METHOD2
// in this method without use any finction From js
function get(param){
    
    var b = typeof(param);
    var a = param.length;
    var result = '';
    for(var i=0; i <= 1; i++){
        result += param[i]
    }
    return result;
}

function insert05(b, param){
    var str1 = '';
    var str2 = '';
    var str3 = '';
    for(var i =0; i< param.length; i++){
        if( i === 0 ){
            str1 += param[i]
        }else{
            str2 += param[i]
        }
    }
    str3+= b + str2;
    return str3;
}

function insert06_07(a, param){
    var str1 = '';
    var str2 = '';
    var str3 = '';
    for(var i =0; i< param.length; i++){
        if( i === 0 ){
            str1 += param[i]
        }else{
            str2 += param[i]
        }
    }
    str3+= a + str2;
    return str3;
}

function phone(){
    var a = "M: +212"
    var b = "F: +212"
    var param = "0555768128"
    res = get(param);
    if(res == '06' || res == '07'){
        return SOL1 = insert06_07(a, param); 
    }else{
        return SOL2 = insert05(b, param); 
    }
    
}