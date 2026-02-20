let pattern = "";
for(let i=1; i<=5;i++){
    for(let j=1;j<=5;j++){
        pattern+="*";
    }
    pattern+="\n";
}
console.log(pattern);


let pattern1="";
let i=1;
while(i<=5){
     let j=1;
     while(j<=5){
        pattern1+="*";
        j++;
     }
     i++;
     pattern1+="\n"

}
console.log(pattern1);

let pattern3="";
let a=1;
do{
    let b=1;
    do{
        pattern3+="*";
        b++;
    }while(b<=5);

    pattern3+="\n";
    a++;

}while(a<=5);
console.log(pattern3)