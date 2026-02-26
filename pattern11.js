let pattern="";
let n=5;
let x;
let y;
for(let i=1;i<=5;i++){
    x=i;
    y=n-i+1;
    for(let j=1;j<=n;j++){
        if(j%2==1){
            pattern+=x.toString().padStart(3," ");
        }
        else{
            pattern+=y.toString().padStart(3," ");
        }
        x=x+n;
        y=y+n;
    }
    pattern+="\n";
}
console.log(pattern);


let pattern1="";
let num=5;
let p;
let q;
let r=1;
while(r<=5){
    p=r;
    q=num-r+1;
    let j=1;
    while(j<=5){
        if(j%2==1){
            pattern1+=p.toString().padStart(3," ");

        }else{
            pattern1+=q.toString().padStart(3," ");

        }
        p=p+5;
        q=q+5;
        j++;
    }
    pattern1+="\n";
    r++;
}

console.log(pattern1);