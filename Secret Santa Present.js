function hue(c) {m=(v,af,bf,at,bt)=>((v-af)/(bf-af))*(bt-at)+at;var r,g,b;c%=360;if(c<=60||c>=300)r=255;if(c>=60&&c<=180)g=255;if(c>=180&&c<=300)b=255;if(c>=60&&c<=120)r=m(c,60,120,255,0);else if(c<=300&&c>=240)r=m(c,240,300,0,255);if(c>=0&&c<=60)g=m(c,0,60,0,255);else if(c>=180&&c<=240)g=m(c,180,240,255,0);if(c>=120&&c<=180)b=m(c,120,180,0,255);else if(c>=300&&c<=360)b=m(c,300,360,255,0);return[r,g,b].map(Math.round)}

gen = (function*(){}).constructor("var t=[0,0,0,0];var p=0;"+`
// j
++++.>+.+>+++++++[-<<.>+.>]<<-.>+.<-.>.<-.>-.<
// p
+++++.>+.>+++++++[-<<.>-.>]+++[-<<+.>.>]<<+>>++++[-<<.>+.>]<+>+++[-<<-.>.>]<<
// V
+++++>-------->+++[-<<.>+.>]<<+>>+++[-<<.>+.>]<<+.>+.<.>+.<+>->+++[-<<.>-.>]<<+>>+++[-<<.>-.>]<<
// i
++.>.+>++++++[-<<.>+.>]<<
// nn
>>>++[-<<< ++>------>++++++[-<<.>+.>]<<+.>----.<+.>-.<+.>.<+>>+++++[-<<.>+.>] >]<<<
// i
++.>-------.+>++++++[-<<.>+.>]<<
// e
++++++.>-.+>+++[-<<-.>.>]<<->>++++[-<<.>-.>]<->+++[-<<+.>.>]<<+.>+.+>++++[-<<.->.>]
`.replace(/[+\-<>.[\]]/g, c=>"t[p]++;t[p]--;p--;p++;yield t[p];while(t[p]){;}".split(";")["+-<>.[]".indexOf(c)]+";"))()

//main
setTimeout(() => {s=document.createElement("canvas");y=s.style;s.width=640;s.height=192;p=s.getContext("2d");document.body.appendChild(s);y.position="absolute";y.margin="auto";y.top=y.left=y.bottom=y.right=0;i=p.createImageData(s.width,s.height);i.data.fill(255);c=0;d=Array(12).fill(NaN).map(n=>Array(40).fill("".slice(n)));t=72;setInterval(m=>{t++;m++;for(y=0;y<s.height;y++)for(x=~0;x<s.width+~[];)if(d[Math.floor(y/16)][Math.floor(++x/16)])for(n=~0;n<2;)i.data[x*4+y*s.width*4+ ++n]=d[Math.floor(y/16)][Math.floor(x/16)]==2?hue(t)[n]:hue(t+180)[n];if(!(x=gen.next()).done){y=gen.next().value;d[y][x.value]=-~-~"";for(k=-2;++k<2;)for(j=-1;j<2;)d[y+k][x.value+j++]||={}};p.putImageData(i,0,0)},1000/10)},10);