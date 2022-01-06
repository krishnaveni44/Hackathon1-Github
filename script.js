
var div1= document.createElement('div');
div1.setAttribute('class','main-header');
var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('name',' ');
input.setAttribute('id','fname');
input.setAttribute('placeholder','Enter Your Github Name...');
var logocon = document.createElement('i');
logocon.setAttribute('class','fa fa-github fa-3x');

var input1=document.createElement('input');
input1.setAttribute('type','submit');
input1.setAttribute('name',' ');
input1.setAttribute('value','Submit');
input1.setAttribute('onclick','gitu()');
document.body.append(div1,input);
div1.append(logocon,input,input1);

var div3= document.createElement('div');
div3.setAttribute('class','sec-hea');
div3.innerHTML = '<span>User photo</span><span>Repositories Name</span><span>Forks Count</span><span>Stars Count</span><span>Repository Link</span>'
document.body.append(div3);
var ddiv = document.createElement('div');
ddiv.setAttribute('class','di-split');
document.body.append(ddiv);

function gitu(){
    var res1=document.getElementById("fname").value;
var apigen = "https://api.github.com/users/"+res1+"/repos";
foo(res1);
}

async function foo(val){
    try{
var gitval = val;

     var res = await fetch('https://api.github.com/users/'+val+'/repos');  
  // // var res = await fetch('https://api.github.com/users'); 
   console.log(res);
   var result= await res.json();
    console.log(result);
    for(var i in result){
    console.log(result[i]);
          
      var div1= document.createElement('div');
      div1.setAttribute('class','sec-part');
      div1.innerHTML = `<ul><li><img src=${result[i].owner.avatar_url} /></li><li>${result[i].full_name} </li>
      <li><span>${result[i].forks_count}</span></li>
      <li><span>${result[i].stargazers_count}</span></li>
      <li><a href=${result[i].html_url} target=_blank>Go Repository</a></li>
     </ul> `;
     var refNode = document.querySelector('.di-split');
     refNode.after(div1);
 
     //document.body.append(div1);
      console.log(result[i].owner.avatar_url);
      //var img = document.createElement('img');
      //src = result[i].owner.avatar_url;
      //img.src = src;
        // img.src = result1[i].owner.avatar_url;
      //img.width = 150; 
      //document.body.append(img);
      //var a = document.createElement('a');
      //a.setAttribute('href',result[i].html_url);
      //a.setAttribute('target',result[i].html_url);
       //    a.innerHTML = `<a href=${result[i].html_url} target=_blank>View Repository</a>`;
      //document.body.append(a);
    } 
}
    catch(error)
    {
           console.log(error);
    }
} 
foo();

