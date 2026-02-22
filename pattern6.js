let pattern=""
let k=1;
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        pattern+=k.toString().padStart(3," ");
        k=k+2;

    }
    pattern+="\n"
}
console.log(pattern);


let pattern1="";
let l=1;
let a=1;
while(a<=5){
    let b=1;
    while(b<=5){
        pattern1+=l.toString().padStart(3," ");
        l=l+2;
        b++;
    }
    pattern1+="\n";
    a++;
}
console.log(pattern1);


let pattern3="";
let c=1;
let e=1;
do{

    let f=1;
    do{
        pattern3+=e.toString().padStart(3," ");
        e=e+2;
        f++;
    }while(f<=5);
    pattern3+="\n";
    c++;
}while(c<=5);
console.log(pattern3)