const vector = require('./vector.js') // node modules
var v1 = new vector(1,2,3)
var v2 = new vector(4,5,6)
console.log("\nv1=%s",v1);
console.log("v2=%s",v2);
console.log("\nv1.add(v2) = %s",v1.add(v2));//顯示加法結果
console.log("\nv1.sub(v2) = %s",v1.sub(v2));//顯示減法結果
console.log("\nv1.dot(v2) = %s",v1.dot(v2));//顯示內積結果
console.log("\nv1.neg() = %s\n",v1.neg());//顯示取負向量結果