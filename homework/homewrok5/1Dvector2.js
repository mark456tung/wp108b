var num = [1,2,3,4,5];
var sum = 0;
for(var i=0;i<num.length;i++){
    sum+=num[i];
}
var mean=sum/num.length; 
sum=0;
for(var i=0;i<num.length;i++){  
    var deviation=num[i]-mean;
    sum+=deviation*deviation;
}
var seddev=Math.sqrt(sum/num.length); 
console.log("%s的標準差: %f", num, seddev); 