'use strict';

document.querySelector('.reload').addEventListener('click',function()
    {
            location.reload();
    }
);





let oops= document.querySelector('.finalnumber').value = (Math.trunc(Math.random()*20+1));
console.log(oops*2);
console.log(Math.trunc(Math.random()*20+1));


let lifetime  = 19;
document.querySelector('.guess').addEventListener('click',function(){

    
    if(document.querySelector('.input').value == false )
{
    alert('enter the value');
}
if(document.querySelector('.input').value >20 )
{
    alert('Enter the Value between 1 to 20')
}
else
{

let val = Number(document.querySelector('.input').value);
console.log(val);

if(lifetime == 0)
{
    document.querySelector('.predict').textContent = '🤕🤕';
}
else if(val > oops)
{
    document.querySelector('.predict').textContent = 'You value is too High ⬆️';
}
else if(val < oops)
{
    document.querySelector('.predict').textContent = 'You value is too low ⬇️';
}

else
{
    document.querySelector('.predict').textContent = 'You are Done 💥💥';
}

if(oops === val)
{   
    
    document.querySelector('.resultupdate').textContent = '🥳🥳 Great Job 🌟🌟';
    document.querySelector('body').style.background = 'linear-gradient(to right, #a8ff78, #78ffd6)'; 
    document.querySelector('.highscore').textContent = `Your High Score: ${lifetime+1} 👏👏`;
}

else if(oops !== val)
{
 if(lifetime == 0)
 {
    document.querySelector('.resultupdate').textContent = 'Game Over 💥💥';
    document.querySelector('.input').type = 'hidden';
    document.querySelector('.score').textContent = `Chances You Miss: 0`;    
 }  
 else{ 
document.querySelector('.score').textContent = `Chances You Miss: ${lifetime}`;
lifetime--;
 }
}

}

}); 


