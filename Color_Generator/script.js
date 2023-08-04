document.getElementById('btn').addEventListener('click',()=>
{
    const randomColor = Math.floor(Math.random()*16777215);
    const randomcode = "#"+randomColor.toString(16);

    console.log(randomColor,randomcode);

    document.body.style.backgroundColor = randomcode

    document.getElementById('color-code').innerHTML=randomcode;
})