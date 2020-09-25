let pole1 = ['green','red','blue'];
let pole2 = [0,0,0];
let pole3 = [0,0,0];
let flag = 0;
let points = 0;
let con = create('div','container','con');
let parent = create('div','parent','par');
let p = create('p','ins','instructions');
p.append("press play to start.select number of disk and press next and back buttons to move disks")
let pol1 = create('div','pole1','pol1');
let pol2 = create('div','pole2','pol2');
let pol3 = create('div','pole3','pol3');
parent.append(p,pol1,pol2,pol3);

let box1 = create('div','box1','green');
let box2 = create('div','box2','red');
let box3 = create('div','box3','blue');

parent.append(box1,box2,box3);


let move = create('div','move','move');
let bnext = createButton('input','submit','bnext','next');
move.append(bnext);
let move1 = create('div','move1','move1');
let aback = createButton('input','submit','aprev','back');
let anext = createButton('input','submit','anext','next');
move1.append(aback,anext);
let move2 = create('div','move2','move2');
let dback = createButton('input','submit','dback','back');
move2.append(dback);

parent.append(move,move1,move2);



let start = create('div','start','start');
let play = createButton('input','submit','play','play');
let reset = createButton('input','submit','reset','reset');
let select = createSelect('select','choice','choice');
let op1 = createOption('option',3);
op1.append('3');
let op2 = createOption('option',4);
op2.append('4');
select.append(op1,op2);

start.append(play,select,reset);
parent.append(start)



con.append(parent);
document.body.append(con);

let pbtn = document.getElementById('play');
pbtn.addEventListener('click',playFun);

let bn = document.getElementById('bnext');
bn.addEventListener('click',bnFun);
let an = document.getElementById('anext');
an.addEventListener('click',anFun);
let db = document.getElementById('dback');
db.addEventListener('click',dbFun);

let ab = document.getElementById('aprev');
ab.addEventListener('click',abFun);


function bnFun(){
    if(flag==1){
        points++;
        for(let i=0;i<pole1.length;i++){
            if(pole1[i]!=0){
                let x = document.getElementById(pole1[i]);
                
                    if(pole2[2]==0){
                        x.style.marginLeft = "250px";
                        x.style.marginTop = "70px";
                        let y = pole1[i];
                        pole1[i]=0;
                        pole2[2]=y;
                        console.log(pole1);
                        break;

                    }
                    else if(pole2[1]==0){
                        x.style.marginLeft = "250px";
                        x.style.marginTop = "-50px";
                        let y = pole1[i];
                        pole1[i]=0;
                        pole2[1]=y;
                        break;
                    }
                    else {
                        x.style.marginLeft = "250px";
                        x.style.marginTop = "-50px";
                        let y = pole1[i];
                        pole1[i]=0;
                        pole2[0]=y;
                        console.log(pole1,pole2)
                        break;
                    }
                
            }
        }

    }
    else{
        alert('Please Click Play to Start');
    }
}


function anFun(){
    if(flag==1){
        points++;
        for(let i=0;i<pole2.length;i++){
            if(pole2[i]!=0){
                let x = document.getElementById(pole2[i]);
                
                    if(pole3[2]==0){
                        x.style.marginLeft = "450px";
                        x.style.marginTop = "10px";
                        let y = pole2[i];
                        pole2[i]=0;
                        pole3[2]=y;
                        console.log(pole2);
                        break;

                    }
                    else if(pole3[1]==0){
                        x.style.marginLeft = "450px";
                        x.style.marginTop = "-50px";
                        let y = pole2[i];
                        pole2[i]=0;
                        pole3[1]=y;
                        break;
                    }
                    else {
                        x.style.marginLeft = "450px";
                        x.style.marginTop = "-10px";
                        let y = pole2[i];
                        pole2[i]=0;
                        pole3[0]=y;
                        console.log(pole1,pole2,pole3)
                        break;
                    }
                
            }
        }

    }
    else{
        alert('Please Click Play to Start');
    }
}

function dbFun(){
    if(flag==1){
        points++;
        for(let i=0;i<pole3.length;i++){
            if(pole3[i]!=0){
                let x = document.getElementById(pole3[i]);
                
                    if(pole2[2]==0){
                        x.style.marginLeft = "250px";
                        x.style.marginTop = "10px";
                        let y = pole3[i];
                        pole3[i]=0;
                        pole2[2]=y;
                        console.log(pole2);
                        break;

                    }
                    else if(pole2[1]==0){
                        x.style.marginLeft = "250px";
                        x.style.marginTop = "-50px";
                        let y = pole3[i];
                        pole3[i]=0;
                        pole2[1]=y;
                        break;
                    }
                    else {
                        x.style.marginLeft = "250px";
                        x.style.marginTop = "-10px";
                        let y = pole3[i];
                        pole3[i]=0;
                        pole2[0]=y;
                        console.log(pole1,pole2,pole3)
                        break;
                    }
                
            }
        }

    }
    else{
        alert('Please Click Play to Start');
    }
}

function abFun(){
    if(flag==1){
        points++;
        for(let i=0;i<pole2.length;i++){
            if(pole2[i]!=0){
                let x = document.getElementById(pole2[i]);
                
                    if(pole1[2]==0){
                        x.style.marginLeft = "55px";
                        x.style.marginTop = "0px";
                        let y = pole2[i];
                        pole2[i]=0;
                        pole1[2]=y;
                        console.log(pole1);
                        break;

                    }
                    else if(pole1[1]==0){
                        x.style.marginLeft = "55px";
                        x.style.marginTop = "-20px";
                        let y = pole2[i];
                        pole2[i]=0;
                        pole1[1]=y;
                        break;
                    }
                    else {
                        x.style.marginLeft = "55px";
                        x.style.marginTop = "-30px";
                        let y = pole2[i];
                        pole2[i]=0;
                        pole1[0]=y;
                        console.log(pole1,pole2,pole3)
                        break;
                    }
                
            }
        }

    }
    else{
        alert('Please Click Play to Start');
    }
}


function playFun(){
    flag=1;
    let a = 60;
    function time(){
        
       let f =  document.getElementById('instructions');
       f.innerHTML = a;
       if(a>0){
           if(pole3[0]=='green' && pole3[1]=='red' && pole3[2]=='blue'){
               flag=0;
               alert('you won'+' game points are '+points);
           }
           else{
               a--;
            setTimeout(time,1000);
           }
       }
       else{
           flag=0;
           alert('you loose'+'game points are '+points);
       }
    }

    time();


}

function create(ele,class1,id1){
    let a = document.createElement(ele);
    a.setAttribute('class',class1);
    a.setAttribute('id',id1);
    return a;

}
function createButton(ele,type,id1,value){

    let a = document.createElement(ele);
    a.setAttribute('type',type);
    a.setAttribute('id',id1);
    a.setAttribute('value',value);

    return a;
}
function createSelect(ele,name,id1){
    let a = document.createElement(ele);
    a.setAttribute('name',name);
    a.setAttribute('id',id1);
    return a;

}
function createOption(ele,value){
    let a = document.createElement(ele);
    a.setAttribute('value',value);
   
    return a;

}
