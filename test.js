function sum_matching_range(x1,x2,y1,y2){
  var x=[];
  var y=[];
  var sum=0;
  for (var i=0;i<=(x2-x1);i++){
    x[i]=x1+i;
  }
  
  for (var n=0;n<=(y2-y1);n++){
    y[n]=y1+n;
  }
  
    for (var t=0;t<x.length;t++){
      for(var z=0;z<y.length;z++){
        if(x[t]===y[z]){
          sum +=x[t]
        }
      }
    }
    return sum
}

//console.log(sum_matching_range(5,20,1,10))   => 45