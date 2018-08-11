function iLoveTheBeatles(n){
 
 var newArr=[];
 
 
  do{
    newArr[n-1]= "I love the Beatles!"

    --n;
  } while(n<15)
  return newArr
}
var x = iLoveTheBeatles(7)
console.log(x)