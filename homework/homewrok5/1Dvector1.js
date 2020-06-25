var a=[1,2,3,4,5,6,7,8,9,10];

var i=0, sum=0, ans=0;
for(i=0;i<a.length;i++){
    sum=sum+a[i];
}

ans=sum/a.length;

console.log("%s的平均值 ==> %f", a, ans);