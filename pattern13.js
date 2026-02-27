let pattern="";
let x,y;

for(let i=1;i<=5;i++){
    x=i;
    y=5-i+1;
    for(let j=1;j<=5;j++){
        if(j%2==0){
            pattern+=x.toString().padStart(3," ");

        }
        else{
            pattern+=y.toString().padStart(3," ");
        }
        x+=5;
        y+=5;
    }
    pattern+="\n";
}
console.log(pattern);

let pattern1=" ";
let a,b,c=1;
while(c<=5){
    a=c;
    b=5-c+1;
    let d=1;
    while(d<=5){
        if(d%2==0){
            pattern1+=a.toString().padStart(3," ");

        }
        else{
            pattern1+=b.toString().padStart(3," ");
        }
        a+=5;
        b+=5;
        d++;
    }
    pattern1+="\n";
    c++;


}
console.log(pattern1);
