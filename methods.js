let arr=[10,20,30];

let str=arr.toString();
//console.log(str);

let arr1=arr.map((val,index)=>{
    return val*index;
})

//console.log(arr1);

let arr2=arr.filter((val)=>{
    return val>10;
})

//console.log(arr2);

let sum=arr.reduce((acc,curr)=>{
    return acc+curr;
})

//console.log(sum);

for(val of arr){
    //console.log(val)
}

let check=Array.isArray(arr);
//console.log(check);

let newstr=arr.join('|');
//console.log(newstr);

let fullArr=[...arr1,...arr2];
//console.log(fullArr);

let arr3=arr.flat();
//console.log(arr3);

arr3.unshift(40);
//console.log(arr3);

arr3.shift()
//console.log(arr3);

arr.splice(1,2,100,200);
//console.log(arr);

let ans=arr.slice(1,2);
console.log(ans)