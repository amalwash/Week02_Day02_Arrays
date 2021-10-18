  // odd numbers 

   let num = [4,5,6,7,8];
   function odd(){
    for(i=0;i < num.length; i++){

      if (num[i] %2 != 0) 

          num[i] = num[i]*2
      }
      console.log(num);
    }
    odd();


      // even numbers 

      let num = [4,5,6,7,8];
      function even(){
    for(i=0;i < num.length; i++){

      if (num[i] %2 == 0) 

          num[i] = num[i]*2
      }
      console.log(num);
    }
    even();

   
       //array colors

       let colorc= ["red","green","black","blue"];
       function color(){
       for(i=0;i < colorc.length; i++){
    
            console.log('my #', i+1 ,colorc[i]);
       
       }
    }
    color();
       
      
      // push and unshift

          let num =[12,13];
          function add(){
         console.log (num);
        num.unshift(11);
        num.unshift(10);
        num.unshift(0);
        num.push(14);
        num.push(15);
        num.push(16);
        console.log (num);
          }
          add();

//true and zero

let numbers=[1,2,3,40,8,6];
let num = 2;
function check(){
for (i=0; i<numbers.length; i++){
    if(numbers[i] == num){

        indx = true ;
        break;
    }
    else{
        indx = zero;
    }
}
console.log(indx);
}
check()

  
//the question 6

let num = [2,3,4,6,8,9];
let numbers = 7;
let Nu = 0;
function key(){
for (i=0; i<num.length; i++){

    for(j=1;j<num.length;j++){

        Nu=num[i]+num[j];

        if(Nu=== numbers){

        console.log('the result is ' +num[i] +'+' +num[j] +' =', Nu)
    

    }
}

}

}
key();