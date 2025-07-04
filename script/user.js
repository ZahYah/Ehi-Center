const searchDropDown = document.querySelector("#search-modal");
const dropDownBtn = document.getElementById("search-drop-down");
const addBtn = document.getElementById("openAddModalBtn");
const addModal = document.getElementById("add-modal");
const locationBtn = document.getElementById('location');
const locationSection = document.querySelector(".location");
const povertyStatsSection = document.querySelector(".povertyStats");
const povertyStatsBtn = document.getElementById("povertyStats");
const bioDataBtn = document.getElementById("bio-data");


dropDownBtn.addEventListener("click", function(){
  searchDropDown.style.display="flex";
});
addBtn.addEventListener("click", function(){
addModal.style.display="flex";
 showAddModalSection(povertyStatsSection); // Change to Bio-data later
});

        // Modal Navigation
        locationBtn.addEventListener("click", function() {
        showAddModalSection(locationSection);
        });
        povertyStatsBtn.addEventListener("click", function() { 
        showAddModalSection(povertyStatsSection);
        });
        bioDataBtn.addEventListener("click", function() {
        console.log("Biodata clicked - Implement content display");
        });

        

function hideAllAddModalSections() {
    povertyStatsSection.style.display = "none";
    locationSection.style.display = "none";
}

function showAddModalSection(sectionToShow) {
    hideAllAddModalSections(); // Hide all first
    sectionToShow.style.display = "grid"; // Poverty Stats is grid, Location is flex, etc.
    // Adjust display property based on the specific section's layout
    if (sectionToShow === locationSection) {
        sectionToShow.style.display = "flex";
    } else if (sectionToShow === povertyStatsSection) {
        sectionToShow.style.display = "grid";
    } 
}

   
        // Cancel Modal
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