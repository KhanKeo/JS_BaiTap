let myNodelist = document.getElementsByTagName("li");
for ( let i = 0; i < myNodelist.length; i++) {
   let span = document.createElement("span");
   let txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   myNodelist[i].appendChild(span);
}
// Khi button xóa được click thì ẩn phần tử li chứa nó
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
   close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
   }
}


// Thêm công việc mới khi click vào button "thêm"
function newElement() {
   // tạo node li
   let li = document.createElement("li");
   // lấy giá trị từ input
   let inputValue = document.getElementById("idInput").value;
   // tạo đối tượng text node
   let t = document.createTextNode(inputValue);
   // gán text node cho thẻ li vừa tạo
   li.appendChild(t);
   //thêm vào trong thẻ li
   document.getElementById("idUL").appendChild(li);
   // xóa giá trị thẻ input
   document.getElementById("idInput").value = "";
   // thêm button xóa vào thẻ li mới tạo
   let span = document.createElement("span");
   let txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);
   // gán lại sự kiện cho các button xóa
   for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
         let div = this.parentElement;
         div.style.display = "none"; 
      }
   }
}

//xóa toàn bộ
let clear = document.getElementById("idClear");
clear.addEventListener("click", function () {
    let ulList = document.getElementById("idUL");
    ulList.innerHTML = "";
 })