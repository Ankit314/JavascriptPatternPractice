let pattern="";
let k=2;
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        pattern+=k.toString().padStart(3," ");
        k=k+2;
    }
    pattern+="\n";

}
console.log(pattern)


let pattern1="";
let a=1,b=2;
while(a<=5){
    let c=1;
    while(c<=5){
        pattern1+=b.toString().padStart(3," ");
        b=b+2;
        c++;
    }
    pattern1+="\n";
    a++;
}
console.log(pattern1);

let pattern3="",m=1,n=2;
do{

    let o=1;
    do{
        pattern3+=n.toString().padStart(3," ");
        n=n+2;
        o++;
    }while(o<=5);
    pattern3+="\n";
    m++;
}while(m<=5);
console.log(pattern3);
 