var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var a = "1";
var b = "2";
var cont = a.concat(b);
var int = parseInt(cont);
int+=1;
// console.log(int)


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

// EXERCICE 2
// input [1,4,7,9,2,5,3,6,8]
// output [1,2,3,4,5,6,7,8,9]
function tri(){
    arr = [1,4,7,9,2,5,3,6,8]
    for(var i=0 ; i <arr.length ; i++){
        for(var j=0 ; j < arr.length ; j++){
            if(arr[j] > arr[j+1]){
                [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
            }
        }  
    }
    return arr;
}


// EXERCICE 3
function isArmstrong(number) {
    var str = number.toString();
    var len = str.length;
    var b = 0;

    for (var i=0; i < len; i++){
        var HEY = parseInt(str[i]);
        b += Math.pow(HEY , len);
    }

    if(number == b){
        return true;
    }else return false;
}

console.log(isArmstrong(153)); // true
console.log(isArmstrong(1583)); //false



// EXERCICE4
// Odd or Even: Write a program that checks if a number is odd or even.
function Odd_Or_Even(a){
    var n = a % 2;
    
    if( n === 0 ){
        return a + ": number zawji"
    }else return a + ": number fardi"    
}
console.log(Odd_Or_Even(7))

// EXERCICE5
// Factorial Calculation: Calculate the factorial of a number using a loop.
var factorial = (n) => {
    var b = 1;
    for( var i=n ; i > 0; i-- ){
       b *= i
       //  console.log(b)
    }
    return b;
}
console.log(factorial(5))



