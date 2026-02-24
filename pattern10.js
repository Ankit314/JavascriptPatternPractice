let pattern="";
for(let i=1;i<=5;i++){
    let k=i;
    for(let j=1;j<=5;j++){
        pattern+=(k).toString().padStart(3," ");
        k=k+5;
    }
    pattern+="\n";
}
console.log(pattern)


let pattern1="",l=1;
while(l<=5){
    let m=l,n=1;
    while(n<=5){
        pattern1+=m.toString().padStart(3," ");
        m=m+5;
        n++;
    }
    l++;
    pattern1+="\n"

}
console.log(pattern1);


let pattern3="" ,p=1;
do{
    let q=p,r=1;
    do{
        pattern3+=q.toString().padStart(3," ");
        q=q+5;
        r++;
    }while(r<=5);
    pattern3+="\n";
    p++;
}while(p<=5);
console.log(pattern3);
