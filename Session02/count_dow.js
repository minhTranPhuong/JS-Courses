var numberSecond = prompt("moi ban nhap so");
countDown(numberSecond);
function countDown(second){
    var tag_body = document.getElementsByTagName("body");
    var header = document.createElement("h1");
    var id = setInterval(()=>{
        if(second ==0){
            header.innerText="CHUC MUNG SINH NHAT";
            header.style.fontSize="200px";
            header.style.textAlign="center"
            body_html[0].appendChild(header);
            clearInterval(id);
        }
        else{
            header.innerText = second;
            header.style.fontSize="200px";
            header.style.textAlign="center"
            tag_body[0].appendChild(header);
            --second;
        }
    },1000);
}