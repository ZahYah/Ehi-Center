   document.addEventListener('DOMContentLoaded', () => {
const searchDropDown = document.querySelector("#search-modal");
const dropDownBtn = document.getElementById("search-drop-down");
const addBtn = document.getElementById("openAddModalBtn");
const addModal = document.getElementById("add-modal");
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const saveBtn = document.getElementById('saveBtn');

let currentTabIndex = 0; // Keep track of the current active tab index


dropDownBtn.addEventListener("click", function(){
  searchDropDown.style.display="flex";
});
addBtn.addEventListener("click", function(){
addModal.style.display="flex";
});

 const showTab = (index) => {
    // Hide all tab contents and deactivate all tab buttons
    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show the selected tab content and activate the corresponding button
    if (tabContents[index]) {
        tabContents[index].classList.add('active');
    }
    if (tabButtons[index]) {
        tabButtons[index].classList.add('active');
    }

    currentTabIndex = index; // Update the current index

};

  addBtn.addEventListener('click', () => {
                addModal.classList.remove('invisible', 'opacity-0');
                addModal.classList.add('visible', 'opacity-100');
                addModal.querySelector('.modal-content').classList.remove('scale-95');
                addModal.querySelector('.modal-content').classList.add('scale-100');
                showTab(0); // Show the first tab (Biodata) when modal opens
            });

             tabButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    showTab(index);
                });
            });

              saveBtn.addEventListener('click', () => {
                // Implement your save logic here
                console.log('Saving form data...');
                // You can collect data from all input fields here
                const biodata = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    age: document.getElementById('age').value,
                    gender: document.getElementById('gender').value,
                };
                const locationData = {
                    houseNumber: document.getElementById('houseNumber').value,
                    street: document.getElementById('street').value,
                    areaCommunity: document.getElementById('areaCommunity').value,
                };
                const idData = {
                    newPin: document.getElementById('newPin').value,
                    fingerprintScan: document.getElementById('fingerprintScan').value,
                    idType: document.querySelector('input[name="idType"]:checked')?.value,
                };

                console.log('Biodata:', biodata);
                console.log('Location:', locationData);
                console.log('ID Data:', idData);

                // For demonstration, close the modal after saving
                closeModalBtn.click();
                alert('Form data saved! Check console for details.'); // Using alert for demo, consider a custom message box
            });

            // Initial display of the first tab and button states
            showTab(0);
        });

   
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
   