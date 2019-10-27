var textArea = document.getElementById('textArea') ;
var str  = "" ;
var isResult = 0  ;

var one = document.getElementById('1').addEventListener('click' , oneF);
var two = document.getElementById('2').addEventListener('click' , twoF);
var three = document.getElementById('3').addEventListener('click' , threeF);
var four = document.getElementById('4').addEventListener('click' , fourF);
var five = document.getElementById('5').addEventListener('click' , fiveF);
var six = document.getElementById('6').addEventListener('click' , sixF);
var seven = document.getElementById('7').addEventListener('click' , sevenF);
var eight = document.getElementById('8').addEventListener('click' , eightF);
var nine = document.getElementById('9').addEventListener('click' , nineF);
var zero = document.getElementById('0').addEventListener('click' , zeroF);
var plus = document.getElementById('+').addEventListener ('click' , plusFun);
var minus = document.getElementById('-').addEventListener ('click' , minusFun);
var mult = document.getElementById('*').addEventListener ('click' , multFun);
var div = document.getElementById('/').addEventListener ('click' , divFun);
var dot = document.getElementById('.').addEventListener ('click' , dotFun);
var ce = document.getElementById('CE').addEventListener ('click' , ceFun);
var mod = document.getElementById('%').addEventListener ('click' , modFun);
var leftp = document.getElementById('(').addEventListener ('click' , leftpFun);
var rightp = document.getElementById(')').addEventListener ('click' , rightpFun);
var del = document.getElementById('del').addEventListener ('click' , delFun);
var Pi = document.getElementById('π').addEventListener('click' , piFun);
var sin = document.getElementById('sin').addEventListener('click' , sinFun );
var cos = document.getElementById('cos').addEventListener('click' , cosFun );
var tan = document.getElementById('tan').addEventListener('click' , tanFun );


 


var equal = document.getElementById('=').addEventListener ('click' , equFun);



function makeExp(n){




    var repeat = str[str.length -1];
    if ( (n =='+' &&( repeat =='+' || repeat =='-' || repeat =='*' || repeat =='/' ||repeat == '%' )) 
      || (n =='-' &&( repeat =='+' || repeat =='-' || repeat =='*' || repeat =='/' ||repeat == '%' )) 
      || (n =='*' &&( repeat =='+' || repeat =='-' || repeat =='*' || repeat =='/' ||repeat == '%' ))
      || (n =='/' &&( repeat =='+' || repeat =='-' || repeat =='*' || repeat =='/' ||repeat == '%' ))
      || (n =='%' &&( repeat =='+' || repeat =='-' || repeat =='*' || repeat =='/' ||repeat == '%' ))){
    return str ;
    }
    else {

    

 return str+=n;
    }
}

function makeRed(){
    document.getElementById('textArea').style.color ="Red";
}

function makeBlack(){
    document.getElementById('textArea').style.color ="Black";
}

function oneF (){
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp(1);
    else {
        ceFun();
        textArea.value =makeExp(1);
        isResult = 0 ;
    }
}
function twoF (){
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp(2);
    else {
        ceFun();
        textArea.value =makeExp(2);
        isResult = 0 ;
    }
}
function threeF (){
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp(3);
    else {
        ceFun();
        textArea.value =makeExp(3);
        isResult = 0 ;
    }
}
function fourF (){
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp(4);
    else {
        ceFun();
        textArea.value =makeExp(4);
        isResult = 0 ;
    }
}
function fiveF (){
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp(5);
    else {
        ceFun();
        textArea.value =makeExp(5);
        isResult = 0 ;
    }
}
function sixF (){
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp(6);
    else {
        ceFun();
        textArea.value =makeExp(6);
        isResult = 0 ;
    }
}
function sevenF (){
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp(7);
    else {
        ceFun();
        textArea.value =makeExp(7);
        isResult = 0 ;
    }
}
function eightF (){
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp(8);
    else {
        ceFun();
        textArea.value =makeExp(8);
        isResult = 0 ;
    }
}
function nineF (){
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp(9); 
    else {
        ceFun();
        textArea.value =makeExp(9);
        isResult = 0 ;
    }
}
function zeroF (){
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp(0);
    else {
        ceFun();
        textArea.value =makeExp(0);
        isResult = 0 ;
    }
}

function piFun (){
    makeBlack()
    var rep = str[str.length-1] ;
    if (rep == '1' || rep == '2' ||rep == '3' || rep == '4' || rep == '5' 
      ||rep == '6' ||rep == '7' || rep == '8' ||rep == '9' ||rep == '0' || rep == ')' ){
    if(isResult == 0 )
    textArea.value =makeExp('*('+Math.PI+')');
    else {
        ceFun();
        textArea.value =makeExp('*('+Math.PI+')');
        isResult = 0 ;
        }
    }else{
     if(isResult == 0 )
    textArea.value =makeExp(Math.PI);
    else {
        ceFun();
        textArea.value =makeExp(Math.PI);
        isResult = 0 ;
    }
   } 
  }

  function sinFun (){
    makeBlack()
    var rep = str[str.length-1] ;
    if (rep == '1' || rep == '2' ||rep == '3' || rep == '4' || rep == '5' 
      ||rep == '6' ||rep == '7' || rep == '8' ||rep == '9' ||rep == '0' || rep == ')' ){
    if(isResult == 0 )
    textArea.value =makeExp('*Sin(');
    else {
        ceFun();
        textArea.value =makeExp('*Sin(');
        isResult = 0 ;
        }
    }else{
     if(isResult == 0 )
    textArea.value =makeExp('Sin(');
    else {
        ceFun();
        textArea.value =makeExp('Sin(');
        isResult = 0 ;
    }
   } 
  }



  function cosFun (){
    makeBlack();
    var rep = str[str.length-1] ;
    if (rep == '1' || rep == '2' ||rep == '3' || rep == '4' || rep == '5' 
      ||rep == '6' ||rep == '7' || rep == '8' ||rep == '9' ||rep == '0' || rep == ')' ){
    if(isResult == 0 )
    textArea.value =makeExp('*Cos(');
    else {
        ceFun();
        textArea.value =makeExp('*Cos(');
        isResult = 0 ;
        }
    }else{
     if(isResult == 0 )
    textArea.value =makeExp('Cos(');
    else {
        ceFun();
        textArea.value =makeExp('Cos(');
        isResult = 0 ;
    }
   } 
  }


  function tanFun (){
    makeBlack()
    var rep = str[str.length-1] ;
    if (rep == '1' || rep == '2' ||rep == '3' || rep == '4' || rep == '5' 
      ||rep == '6' ||rep == '7' || rep == '8' ||rep == '9' ||rep == '0' || rep == ')' ){
    if(isResult == 0 )
    textArea.value =makeExp('*Tan(');
    else {
        ceFun();
        textArea.value =makeExp('*Tan(');
        isResult = 0 ;
        }
    }else{
     if(isResult == 0 )
    textArea.value =makeExp('Tan(');
    else {
        ceFun();
        textArea.value =makeExp('Tan(');
        isResult = 0 ;
    }
   } 
  }



function dotFun () {
    makeBlack()
    if(isResult == 0 )
    textArea.value =makeExp('.');
       else {
        ceFun();
        textArea.value =makeExp('.');
        isResult = 0 ;
    }
}


function plusFun () {
    makeBlack()
    isResult = 0 ;
    textArea.value =makeExp('+');
    
}
function minusFun () {
    makeBlack()
    isResult = 0 ;
   textArea.value =makeExp('-');
}
function multFun () {
    makeBlack()
    isResult = 0 ;
    textArea.value =makeExp('*');
}
function divFun () {
    makeBlack()
    isResult = 0 ;
    textArea.value =makeExp('/');
}
function modFun () {
    makeBlack()
    isResult = 0 ;
    textArea.value =makeExp('%');
}

function leftpFun () {
    makeBlack()
    isResult = 0 ;
    textArea.value =makeExp('(');
}

function rightpFun () {
    makeBlack()
    isResult = 0 ;
    textArea.value =makeExp(')');
}


function delFun(){
    makeBlack()
    if (isResult == 0 ){
    console.log('here')
    str = str.slice (0 , -1);
    console.log(str);
    textArea.value = textArea.value.slice(0,-1);
    }

    else {
        ceFun();
    }
}

function ceFun(){
    makeBlack()
    console.log('CE or number after result')
    isResult = 0 ;
    textArea.value = "";
    str = "";
}

// Detailed function , cos and tan are the same ..
        function sinArth () {
    var c = 0 ;
    var t = "" ;
    var arr = [] ;
    //FIRST PART
    //here we get all sin strings like str = sin(5)+3*sin(6) -->output is --> [ sin(5) , sin(6) ]

    for (i = 0 ; i < str.length ; i++){ 
        if (str.charAt(i) == 'S' ){
        for (j = 0 ; j < str.length ; j++){
        t+= str.charAt(i+j);
        }     
        t = t.slice(0,(t.indexOf(')')+1));
        console.log("we extract here every sin --> "+t);
        arr[c] = t ;
        c++;
        console.log('stukked in loop  1 :(');
        }
        t = "" ;
        }
        //SECOND PART
        // HERE We calculate [sin(5) , sin(6)] -- > [-0.95 , -0.27]
        for (i =0 ; i < arr.length ; i++){
        var num =  arr[i].slice(arr[i].indexOf('(')+1 , arr[i].indexOf(')'));
        arr[i] = Math.sin(eval(num));
        console.log("index of "+i+"is "+arr[i]);
        console.log('stukked in loop  2 :(');
        }
        c = 0 ; 
       

        //THIRD PART
        //here we replcae each sin() with its value ---> -0.95 + 3 * -0.27
        for (i = 0 ; i < str.length ; i++){
        if (str.charAt(i) == 'S' ){
        for (j = 0 ; j < str.length ; j++){
        t+= str.charAt(i+j);
        }
        t = t.slice(0,(t.indexOf(')')+1));
        if (t == ""){
            textArea.value = ("Not valid excepression");
        }else {
        console.log('second t is ' + t + " " + typeof(t));
        arr[c] = arr[c] + " ";
        console.log('second arr is ' + arr[c] + " " + typeof(arr[c])); 
        str = str.replace(t,arr[c]);
        c++;
        }
        }
        t = "" ;
        console.log('stukked in loop  3 :(');
        }
        }
    

        function tahArth () {
        var c = 0 ;
        var t = "" ;
        var arr = [] ;
   

        for (i = 0 ; i < str.length ; i++){ 
            if (str.charAt(i) == 'T' ){
            for (j = 0 ; j < str.length ; j++){
            t+= str.charAt(i+j);
            }     
            t = t.slice(0,(t.indexOf(')')+1));
            console.log("we extract here every sin --> "+t);
            arr[c] = t ;
            c++;
            console.log('stukked in loop  1 :(');
            }
            t = "" ;
            }
            

            for (i =0 ; i < arr.length ; i++){
            var num =  arr[i].slice(arr[i].indexOf('(')+1 , arr[i].indexOf(')'));
            console.log(num)
            arr[i] = Math.tan(eval(num));

            console.log("tan of "+i+"is "+arr[i]);
            console.log('stukked in loop  2 :(');
            }
            c = 0 ; 
            

            for (i = 0 ; i < str.length ; i++){
            if (str.charAt(i) == 'T' ){
            for (j = 0 ; j < str.length ; j++){
            t+= str.charAt(i+j);
            }
            t = t.slice(0,(t.indexOf(')')+1));
            if (t == ""){
                textArea.value = ("Not valid excepression");
            }else {
            console.log('second t is ' + t + " " + typeof(t));
            arr[c] = arr[c] + " ";
            console.log('second arr is ' + arr[c] + " " + typeof(arr[c])); 
            str = str.replace(t,arr[c]);
            c++;
            }
            }
            t = "" ;
            console.log('stukked in loop  3 :(');
            }
        }
        
        function cosArth () {
            var c = 0 ;
            var t = "" ;
            var arr = [] ;
            for (i = 0 ; i < str.length ; i++){ 
            if (str.charAt(i) == 'C' ){
            for (j = 0 ; j < str.length ; j++){
            t+= str.charAt(i+j);
            }     
            t = t.slice(0,(t.indexOf(')')+1));
            console.log("we extract here every cos --> "+t);
            arr[c] = t ;
            c++;
            console.log('stukked in loop  1 :(');
            }
            t = "" ;
            }


       
            for (i =0 ; i < arr.length ; i++){
            var num =  arr[i].slice(arr[i].indexOf('(')+1 , arr[i].indexOf(')'));
            arr[i] = Math.cos(eval(num));
            console.log("index of "+i+"is "+arr[i]);
            console.log('stukked in loop  2 :(');
            }
            c = 0 ; 
        


            for (i = 0 ; i < str.length ; i++){
            if (str.charAt(i) == 'C' ){
            for (j = 0 ; j < str.length ; j++){
            t+= str.charAt(i+j);
            }
            t = t.slice(0,(t.indexOf(')')+1));
            if (t == ""){
            textArea.value = ("Not valid excepression");
            }else {
            console.log('second t is ' + t + " " + typeof(t));
            arr[c] = arr[c] + " ";
            console.log('second arr is ' + arr[c] + " " + typeof(arr[c])); 
            str = str.replace(t,arr[c]);
            c++;
            }
            }
            t = "" ;
            console.log('stukked in loop  3 :(');
            }
        }
            
            

function equFun (){
    makeRed()
     if(str[str.length-1] == '*'
     ||str[str.length-1] == '+'
     ||str[str.length-1] == '/'
     ||str[str.length-1] == '-'
     ||str[str.length-1] == '%'){
     }
     else {
          sinArth();
          cosArth();
          tahArth();
  
    isResult = 1 ;

    try { 

    str = eval(str);
    textArea.value = eval(str);
    }
catch (error){
    console.log('Illegal exp')
}
}
}
