var arrTrans = (arr, log) =>{
    for (let i=0;i < arr.length;){
      if (log(arr[i])){
        return arr;
      } else{
        arr.shift();
      }
    }
  };
  
  var arrLogic= (number)=>{
    if(number===2){
      return true;
    } else{
      return false;
    }
  };
  
  console.log(arrTrans([1,2,3,7,4] ,arrLogic));