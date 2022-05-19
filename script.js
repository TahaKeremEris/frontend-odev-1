// Elements
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

// Functions
function butonaBasildiginda () {
    // Log
    console.log('İçeriyor mu? ', mobileMenu.classList.contains('mobileMenuActive'));
    // Eğer mobileMenuActive classı varsa
    if (mobileMenu.classList.contains('mobileMenuActive')) {
        // mobileMenuActive classını kaldır
        mobileMenu.classList.remove('mobileMenuActive');
    } else {
        // mobileMenuActive classını ekle
        mobileMenu.classList.add('mobileMenuActive');
    }
};

// EventListeners
mobileMenuButton.addEventListener('click', butonaBasildiginda);