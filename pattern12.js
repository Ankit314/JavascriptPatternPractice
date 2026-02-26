let pattern="";
let k;
for(let i=1;i<=5;i++){
    k=5-i+1;
    for(let j=1;j<=5;j++){
        pattern+=k.toString().padStart(3," ");
        k+=5;
    }
    pattern+="\n";
}
console.log(pattern);