let pattern="";
let x;
for(let i=1;i<=5;i++){
    x=i;
    for(let j=1;j<=5;j++){
        pattern+=x.toString().padStart(3," ");
        x+=1;

    }
    pattern+="\n";
}
console.log(pattern);

let pattern1="";
let a,b=1;
while(b<=5){
    a=b;
    let c=1;
    while(c<=5){
        pattern1+=a.toString().padStart(3," ");
        a+=1;
        c++;
    }
    pattern1+="\n";
    b++;
}
console.log(pattern1)

let pattern2="";
let d,e=1;
do{
    d=e;
    let f=1;
    do{
        pattern2+=d.toString().padStart(3," ");
        d+=1;
        f++;
    }while(f<=5)
        pattern2+="\n";
        e++;
}while(e<=5)

 console.log(pattern2)
