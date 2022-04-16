function elimination(list, ...targets){
    for(let i=0;i<list.length;i++){
      for(let h=0;h<list.length;h++){
        while(list[i] === targets[h]){
          if(list[i] === targets[h]){
            
            list.splice(i,1);
            
            
            
            
            
        } 
        
        }//break;
      }
    }
    return list;
      
    }
  
  console.log(elimination([1,4,4,4,5,3,1,3,3,8],3,4))