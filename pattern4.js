let pattern="";

for(let i=5;i>=1;i--){
    for(let j=1;j<=5;j++){
        pattern+=i;
    }
    pattern+="\n";
}
console.log(pattern);

let pattern1="";
let i=5;
while(i>=1){
    let j=1;
    while(j<=5){
        pattern1+=i;
        j++;
    }
    pattern1+="\n";
    i--;
}
console.log(pattern1);

let pattern3="";
let a=5;
do{
    let b=1;

    do{
        pattern3+=a;
        b++;
    }while(b<=5)
        pattern3="\n";
        a--;


}while(a>=1);

console.log(pattern);
