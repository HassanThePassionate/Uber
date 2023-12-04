let drop = document.getElementById('drop');
let dropdown = document.getElementById('drop-down');
let down =  document.getElementById('down');
let up =  document.getElementById('up');
drop.addEventListener('click',(()=>{
    if( dropdown.style.transform=== "translateY(-190%)"){
        dropdown.style.transform= 'translateY(0)'
        down.style.display = 'none';
        up.style.display = 'inline-block';
    }else{
        dropdown.style.transform= 'translateY(-190%)'
        down.style.display = 'inline-block';
        up.style.display = 'none';
    }
  


}))
