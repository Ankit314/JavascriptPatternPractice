let pattern="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=3;j++){
        pattern+=j+" "+i+" ";

    }
    pattern+="\n";
}
console.log(pattern);

let pattern1="";
let a=1;
while(a<=5)
{
    let b=1
    while(b<=3){
        pattern1+=b+" "+a+" ";
        b++;
    }
    pattern1+="\n";
    a++;
}
console.log(pattern1);


let pattern3="",c=1;
do{
    let d=1;
    do{
        pattern3+=d+" "+c+" ";
        d++;
    }while(d<=3);
    pattern3+="\n";
    c++;
}while(c<=5);
console.log(pattern3);