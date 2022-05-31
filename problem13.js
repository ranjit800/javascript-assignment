let d, i, num = 10;
let arr = [];
function item(num){
  for(i =1;i<=num;i++){
    d = i*i+i;
    arr.push(d);
  }
  console.log(arr[num-1]);
}
item(5)