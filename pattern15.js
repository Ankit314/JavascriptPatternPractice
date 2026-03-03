let pattern="";
 
for(let i=1;i<=5;i++){
 
    for(let j=1;j<=5;j++){
        pattern+=(2*(i+j)-3).toString().padStart(3," ");
    }
    pattern+="\n";
   
}
console.log(pattern);


let pattern1="",a=1;
while(a<=5){
    let b=1;
    while(b<=5){
        pattern1+=(2*(a+b)-3).toString().padStart(3," ");
        b++;
    }
    pattern1+="\n";
    a++;
}
console.log(pattern1)


let pattern2="" ,c=1;
do{
    let d=1;
    do{
        pattern2+=(2*(c+d)-3).toString().padStart(3," ");
        d++;
    }while(d<=5)
        pattern2+="\n";
        c++;
}while(c<=5)
    console.log(pattern2)