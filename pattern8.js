let pattern="";
for (let i=1;i<=5;i++){
    
    for (let j=1;j<=5;j++){
        pattern+=(i*j).toString().padStart(3," ")
        
    }
    pattern+="\n"
}
console.log(pattern);

let pattern1="";
let a=1;
while(a<=5){
    let b=1;
    while(b<=5){
        pattern1+=(a*b).toString().padStart(3," ");
        b++;
    }
    pattern1+="\n";
    a++;
}
console.log(pattern1);

let pattern3="";
let c=1;
do{
    let d=1;
    do{
        pattern3+=(c*d).toString().padStart(3," ");
        d++;
    }while(d<=5);
    pattern3+="\n";
    c++;
}while(c<=5)

console.log(pattern3);
