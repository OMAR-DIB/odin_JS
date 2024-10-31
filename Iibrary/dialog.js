const dialog = document.querySelector(".dialog-form");
const showDialog = document.querySelector(".dialog-form + .open-dialog");
const closeDialog = document.querySelector(".close-dialog");

showDialog.addEventListener("click",() => {
    dialog.showModal();
});

closeDialog.addEventListener("click",()=>{
    dialog.close();
})