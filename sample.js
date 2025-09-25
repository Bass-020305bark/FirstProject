let map = new Map(); //Maintain same order, any type of key will be accept
map.set(1,"bass");
let arr = [1,2,3];
map.set(arr,"Array");
console.log(map);
for(let i of map.values()){
    console.log(i)
}
console.log(map.delete(arr))
console.log(map)



console.log("hiii");