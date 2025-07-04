const searchDropDown = document.querySelector("#search-modal");
const dropDownBtn = document.getElementById("search-drop-down");
const addBtn = document.getElementById("openAddModalBtn");
const addModal = document.getElementById("add-modal");

dropDownBtn.addEventListener("click", function(){
  searchDropDown.style.display="flex";
});
addBtn.addEventListener("click", function(){
addModal.style.display="flex";
})
 
    document.addEventListener('DOMContentLoaded', () => {
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    function closeModals(modalToClose) {
        if (modalToClose) {
            if (modalToClose.id === 'search-modal') {
                modalToClose.style.display = "none";
            }
            else if (modalToClose.id === 'add-modal') {
                modalToClose.style.display = "none";
            }
          
        }
        document.body.style.overflow = ''; // Restore body scroll
    }

    window.addEventListener('click', (event) => {
        modalOverlays.forEach(modal => {          
            if (event.target === modal && modal.style.display !== 'none') {
                closeModals(modal);
            }
        });
    });  
});