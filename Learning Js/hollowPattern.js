//function to print whole rows
function printWholeRow(n){
  var str = "";
  for (var i=0; i<n; i++){
    str = str + "*";
  }
  console.log(str);
}

//function to print partial rows
function printPartialRow(n){
  var str = "";
  str = str + "*";
  for(var i=0; i<n-2; i++){
    str = str + " ";
  }
  str = str + "*";
  console.log(str);
}

//function to make the whole pattern
function wholePattern(n){
  printWholeRow(n);
  for (var i=0; i<n-2; i++){
    printPartialRow(n);
  }  
  printWholeRow(n);
}

wholePattern(10);
