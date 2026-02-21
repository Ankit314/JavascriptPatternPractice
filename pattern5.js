let pattern="";
let k=1;
for(let i=1;i<=5;i++){
    
    for(let j=1;j<=5;j++){
        pattern+=k.toString().padStart(3," ");
       k++;

    }
    pattern+="\n";
}
console.log(pattern);

let pattern1="";
let i=1;
let q=1;
while(i<=5){
    let j=1;
    while(j<=5){
        pattern1+=q.toString().padStart(3," ");
        q++;
        j++;

    }
    pattern1+="\n";
    i++;

}
console.log(pattern1);


let pattern3="";

let a=1;
let l=1;
do{
    let b=1;
    do{
        pattern3+=l.toString().padStart(3," ");
        b++;
        l++;

    }while(b<=5);
    pattern3+="\n";
    a++;

}while(a<=5);
console.log(pattern3);
    