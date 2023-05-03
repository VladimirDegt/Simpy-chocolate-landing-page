document.querySelector(".myValidate").addEventListener("keyup", function(){
    this.value = this.value.replace(/[^\d]/g, "");
});