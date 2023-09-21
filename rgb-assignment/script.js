function change(){
    const red=document.getElementById("red").value;
    const blue=document.getElementById("blue").value;
    const green =document.getElementById("green").value;
    document.body.style.background = 'rgb('+ red + ','+ green +','+ blue +')';
     const output =document.querySelector(".output")
     output.innerHTML='rgb('+ red + ',' + blue +',' + green + ')'
}   