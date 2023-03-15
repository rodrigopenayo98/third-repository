 //var height = [1,6,3,5,2]
var height = [2,5,4,5,2]


function hurdleRace(k,height){
 
  for(let i = 0; i < height.length; i++){
     let maxValue = Math.max(...height);
     let dif = maxValue - k;

     if(k > maxValue){
        return 0;
      } else {
        return dif;
      }
   }

}


console.log(hurdleRace(4,height));


function hurdleRace(k, height) {
    // Write your code here
const max = height.reduce((acc, cur) => acc > cur ? acc : cur, 0 )
const maxHeight = max - k;

return maxHeight > 0 ? maxHeight : 0;

}