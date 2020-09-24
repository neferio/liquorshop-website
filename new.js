

document.querySelector('#c1').addEventListener('click',appear);
document.querySelector('#b1').addEventListener('click',none);

function appear(){
    document.getElementById('s1').style.width="400px";
    document.getElementById('s1').style.padding="20px"
    document.getElementById('b1').style.width="50px";
    document.getElementById('od').style.display='block';
}
function none(){
    document.getElementById('s1').style.width="0px";
    document.getElementById('s1').style.padding="0px"
    document.getElementById('b1').style.width="0px";
    document.getElementById('od').style.display='none';
    //document.getElementById('s1').getElementsByClassName('h3').style.display="none";
    //console.log(document.getElementById('s1').getElementsByClassName('h3').style.display);
}

var main={
    'total':0.0,
    'entry':{'BLACK LABEL':0,'BLUE LABEL':0,'RED LABEL':0,'DOUBLE BLACK':0,
                'GREEN LABEL':0,'Bulleit Bourbon':0,'Jack Daniels':0,'GOLD LABEL':0,
            },
    'count':0,
}

var mapping={
    'BLACK LABEL':0,
    'BLUE LABEL':0,
    'RED LABEL':0,
    'DOUBLE BLACK':0,

    'GREEN LABEL':0,'Bulleit Bourbon':0,'Jack Daniels':0,'GOLD LABEL':0,
}


var pricing={
    'BLACK LABEL':50.21,
    'BLUE LABEL':100.21,
    'RED LABEL':30.21,
    'DOUBLE BLACK':80.91,

    'GREEN LABEL':50.10,'Bulleit Bourbon':10.21,'Jack Daniels':50.71,'GOLD LABEL':105.21,
}





function add(hae){
    hae='boxy'+hae;
    console.log(hae);
    let x=document.getElementById(hae).getElementsByTagName('h5')[0];
    x=x.textContent;
   console.log(x);
    let y=document.getElementById(hae).getElementsByTagName('span')[0];
    let z=document.getElementById(hae).getElementsByTagName('img')[0].src;
    y=y.textContent;

    let client=main['entry'];
    main['total']+=parseFloat(y);
    if(client[x]==0){

        firstadd(client,x,y,z,hae);
        
    }
    else{
        //client[x]++;
        increase(x,mapping[x]);
    }

    totaladd()



}

function totaladd(){
    let tempy=document.getElementById('r1');
    console.log(tempy);
    let yy=tempy.getElementsByTagName('h3')[0];
    if(main['total']<1){
        main['total']=0;
    }
    yy.innerText=main['total'];
}




var flag=false;

function firstadd(client,x,y,z,hae){
    client[x]++;
    //main box
    var cc=main['count'];
    let x1=document.createElement('div');
    x1.setAttribute('class','box');
    x1.setAttribute('id',cc);
    main['count']++;
    
    mapping[x]=cc;
    
    //img
    let y1=document.createElement('img');
    y1.src=z;
    x1.appendChild(y1);

    //another div
    let x1_2=document.createElement('div');
    x1_2.setAttribute('class','box2');

    //info
    let a1,a2,a3;
    a1=document.createElement('p');
    a1.textContent=x;
    a1.setAttribute('class','name');
    a2=document.createElement('p');
    a2.textContent=y;
    a2.setAttribute('class','price');
    a3=document.createElement('a');
    a3.textContent='remove';
    a3.setAttribute('onclick','remov(this);')
    a3.style.cursor="pointer";

    x1_2.appendChild(a1);
    x1_2.appendChild(a2);
    x1_2.appendChild(a3);

    //main box appending
    x1.appendChild(x1_2);

    //main box to div
    let ans=document.getElementById('i');
    ans.appendChild(x1);

    let z2=document.createElement('div');
    z2.setAttribute('class','box3');
    
   

    let z2_1=document.createElement('span');
    z2_1.setAttribute('class','fa fa-arrow-up');
   z2_1.setAttribute('onclick','addy(this);');
   z2_1.style.cursor="pointer";


    z2.appendChild(z2_1);
    let z2_2=document.createElement('p');
    z2_2.textContent="1";

    z2.appendChild(z2_2);
    let z2_3=document.createElement('span');
    z2_3.setAttribute('class','fa fa-arrow-down');
    z2_3.setAttribute('onclick','suby(this);');
    z2_3.style.cursor="pointer";
    z2.appendChild(z2_3);

    // IN main box appending
    x1.appendChild(z2);

    if(flag==false){
        showscreen(y);
        flag=true;
    }
    
}

function remov(re1){
    let parent1=re1.parentNode.parentNode.id;
    let name1=document.getElementById(parent1).getElementsByClassName('name')[0].innerText;
    document.getElementById(parent1).remove();
    let tot1=main['total'];
    let client=main['entry'];
    let no=client[name1];
    let picr=pricing[name1];
    let final=tot1-(no*picr);
    main['total']=final;
    totaladd();
    console.log(main['total']);
  

    
}



function showscreen(yd){
    let tempy=document.getElementById('r1');
    console.log(tempy);
    let yy=tempy.getElementsByTagName('p')[0]
    yy.innerText='YOUR TOTAL';
    

}

function addy(alpha){
    let parent1=alpha.parentNode.parentNode.id;
    console.log(parent1);
    
    let name1=document.getElementById(parent1).getElementsByTagName('p')[0].innerText;
    increase(name1,parent1);
    let temp=pricing[name1];
    main['total']+=parseFloat(temp);
    totaladd();
    
}


function increase(name1,parent1){
    client=main['entry'];
    //console.log(client[name1]);

    client[name1]++;
   // console.log(client[name1]);
    document.getElementById(parent1).getElementsByTagName('p')[2].innerHTML=client[name1];
}


function suby(alpha){
    let parent1=alpha.parentNode.parentNode.id;
    //console.log(parent1);
    let name1=document.getElementById(parent1).getElementsByTagName('p')[0].innerText;
    client=main['entry'];
    if(client[name1]==1){
        document.getElementById(parent1).remove();
        client[name1]=0;
    }
    else{
        client[name1]--;
        document.getElementById(parent1).getElementsByTagName('p')[2].innerHTML=client[name1];
    }
    let temp=pricing[name1];
    main['total']=main['total']-temp;
    totaladd();
    //console.log(name1);
}