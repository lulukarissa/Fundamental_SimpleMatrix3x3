let array = [[1,2,3],[4,5,6],[7,8,9]]

for(var i=0; i<array.length; i++){
    console.log(array[i])
}
console.log('')
for(var j=array.length-1; j>=0; j--){
    console.log(array[j])
}
console.log('')
for(var k=array.length-1; k>=0; k--){
    console.log(array[k].reverse())
}
console.log('')
for(var l=0; l<array.length; l++){
    console.log(array[l])
    array[l].reverse()
}
console.log('')
for(var m=0; m<array.length; m++){
    array[1][0] = 2
    array[2][0] = 3
    array[2][1] = 6
    console.log(array[m])
}