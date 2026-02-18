 const arr=JSON.parse(input);
 const res=arr.filter(x=>x>=0).map(x=>x*2).reduce((a,b)=>a+b,0);


