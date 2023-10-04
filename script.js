let canvas=document.getElementById('canvas1');
let ctx=canvas.getContext('2d');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

let gradient=ctx.createLinearGradient(canvas.width/2,0,canvas.width/2,canvas.height);
gradient.addColorStop(0.6,'green');
gradient.addColorStop(1,'white');

class Symbol{
    constructor(x,y,fontSize,canvasHeight){
        this.characters='日ｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789":・."=*+-<>Z"¦｜ç'
        this.x=x;
        this.y=y;
        this.fontSize=fontSize;
        this.canvasHeight=canvasHeight;
        this.text='';
    }
    draw(context){
        this.text=this.characters.charAt(Math.floor(Math.random()*this.characters.length));
        context.fillText(this.text, this.x*this.fontSize, this.y*this.fontSize);
        context.textAlign='center';
        if(this.y*this.fontSize>this.canvasHeight && Math.random()>0.9){
            this.y=0;
        }
        else{
            this.y+=1;
        }
    }
}
class Effect{
    constructor(canvasWidth,canvasHeight){
        this.canvasWidth=canvasWidth;
        this.canvasHeight=canvasHeight;
        this.fontSize=20;
        this.columns=canvasWidth/this.fontSize;
        this.symbols=[];
        this.#initialize();
    }
    #initialize(){
        for(let i=0;i<this.columns;i++){
            this.symbols[i]=new Symbol(i,0,this.fontSize,this.canvasHeight);
        }
    }
    resize(canvasWidth,canvasHeight){
        this.canvasWidth=canvasWidth;
        this.canvasHeight=canvasHeight;
        this.columns=canvasWidth/this.fontSize;
        this.symbols=[];
        this.#initialize();
    }
}
const effect=new Effect(canvas.width,canvas.height);

setInterval(()=>{
    ctx.fillStyle='rgba(0,0,0,0.19)'
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='green';
    ctx.font=effect.fontSize+'px monospace'
    effect.symbols.forEach(symbol=>symbol.draw(ctx));
},50)

window.addEventListener('resize',()=>{
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    effect.resize(canvas.width,canvas.height);
    // gradient=ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    // gradient.addColorStop(0,'red');
    // gradient.addColorStop(0.2,'white');
    // gradient.addColorStop(0.4,'magenta');
    // gradient.addColorStop(0.6,'green');
    // gradient.addColorStop(0.8,'cyan');
    // gradient.addColorStop(1,'purple');
})
