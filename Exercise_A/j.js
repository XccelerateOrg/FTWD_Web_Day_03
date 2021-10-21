for (let i = 0; i <= 30; i++){
    if (i % 3 == 0 && i % 5 ==0){
      return console.log("Hong Kong");
    }
    else if(i % 3 == 0){
      return console.log("Hong");
    }
    else if(i % 5 == 0){
      return console.log("Kong");
    }
}
