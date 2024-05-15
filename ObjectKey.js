const obj = {
    name:"Vishal",
    roll:12,
    id:1
}
Object.keys(obj).forEach((key)=>console.log(key));

Object.entries(obj).forEach(([key,val])=>console.log(key,val));