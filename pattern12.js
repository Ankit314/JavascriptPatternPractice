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

let pattern1="";
let l,m=1;
while(m<=5){
    let p=1;
    l=5-m+1;
    while(p<=5){
        pattern1+=l.toString().padStart(3," ");
        l+=5;
        p++;
    }
    pattern1+="\n";
    m++;
}
console.log(pattern1);

let pattern2="";
let a,b=1;
do{
    let c=1;
    a=5-b+1;
    do{

        pattern2+=a.toString().padStart(3," ");
        a+=5;
        c++;

    }while(c<=5)
        pattern2+="\n";
        b++;
}while(b<=5)

console.log(pattern2);
