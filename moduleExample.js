var item = "important value";

function getImportantValue(){
  return item;
}

//run logImportantValue();

/*
 * Later on...
 */

function sumUselessArray(){
  var uselessArray = [0,1,2,3,4,5,6,7,8,9];
  var sum = 0;
  for(var i=0; i<uselessArray.length; i++){
    item = uselessArray[i];
    sum+=item;
  } 
  return sum;
}

sumUselessArray();

//run getImportantValue();
//...uh-oh
