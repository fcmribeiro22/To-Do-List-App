(()=>{function e(){const e=document.getElementById("task-input"),t=document.getElementById("task-list");if(""!==e.value.trim()){const n=document.createElement("li");n.textContent=e.value,t.appendChild(n),e.value=""}}document.getElementById("add-task-btn").addEventListener("click",e),document.getElementById("task-input").addEventListener("keydown",(t=>{"Enter"===t.key&&e()})),alert("hehe")})();