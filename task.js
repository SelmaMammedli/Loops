//task1
let num=43192;
let h=Math.floor(num/10000);
let g=((num%10000)-(num%1000))/1000;
let j=((num%1000)-(num%100))/100;
let k=((num%100)-(num%10))/10;
let l=(num%10);
console.log(Math.max(h,g,j,k,l))
//task2
let num=1234;
let sum1=0;
let sum2=0;
let a = Math.floor(num/1000);
let b = ((num%1000)-(num%100))/100;
let c =((num-(num%10))/10)%10;
let d = (num % 10);
sum1=a+c;
sum2=b+d
console.log(sum1*sum2)
//task3
var n=128;
let count=0;
for (let index = 0; index <= n; index++) {
    if (n==2**index) {
        count++;
    }
}
if (count==1) {
    console.log(true);
}
else{
    console.log(false);
}
//task4
let m=24;
let count=0;
for (let index = 0; index < m; index++) {
    if (m%index==0) {
    count++}
}
    
    if(count>2){
        console.log("composite")
    } else {
        console.log("prime")
    }
//task5
let M=100;
let count=0;
for (let index = 1; index < M; index++) {
    if (index%15==0) {
        count++;
    }
}
console.log(count)
