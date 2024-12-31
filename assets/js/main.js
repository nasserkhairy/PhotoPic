let saturate=document.getElementById("saturate");
let contrast=document.getElementById("contrast");
let brightness=document.getElementById("brightness");
let sepia=document.getElementById("sepia");
let grayScale=document.getElementById("grayScale");
let blur=document.getElementById("blur");
let hueRotate=document.getElementById("hue-rotate");

let upload=document.getElementById("upload");
let download=document.getElementById("download");
let img=document.getElementById("img");

let reset= document.querySelector('span');
let imgBox=document.querySelector('.img-box');
const canvas=document.getElementById('canvas');
const ctx=  canvas.getContext('2d');


function resetValue(){
 img.style.filter='none';
 saturate.value="100";
 contrast.value="100";
 brightness.value="100";
 sepia.value="0";
 grayScale.value="0";
 blur.value="0";
 hueRotate.value="0";
     ctx.filter = 'none';
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

}
window.onload= function(){
    
    download.style.display="none";
    reset.style.display="none";
    imgBox.style.display="none";
}

upload.onchange =function(){
    resetValue();
    download.style.display="block";
    reset.style.display="block";
    imgBox.style.display="block";
    let file= new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        img.src=file.result;
    }
    img.onload= function(){
        canvas.width=img.width;
        canvas.height=img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display="none";
        // download.href=canvas.toDataURL("image/png");
        // download.download=upload.files[0].name;
        // imgBox.style.backgroundImage=`url(${img.src})`;
        // imgBox.style.display="block";
        // resetValue();

    }
}
let filters=document.querySelectorAll("ul li input");
filters.forEach(filter=> {
    filter.addEventListener("input", function(){
        ctx.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayScale(${grayScale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
       
        ` 
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
    })
})
download.onclick=function(){
    download.href=canvas.toDataURL("image/png");
    // download.download="edited-image.png";
}