module.exports = function reverse (n) {
 let str = String(n);
let arr = str.split('');
if(n<0) arr.splice(0,1);
arr.reverse();
return Number(arr.join('')); 
}
