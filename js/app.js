// app.js
// Main entry file for the app logic

// This file handles the initialization of UI components and interactive features:
// - Hamburger menu toggle
// - SOS app navigation
// It imports utility functions from base.js to manage non-UI related tasks like setting the year and logging access.

// Function to initialize the hamburger menu
function initHamburgerMenu() {
    const hamburgerBtn = document.querySelector('#menu');
    const navigationBtn = document.querySelector('.toplinks');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('open');
        navigationBtn.classList.toggle('open');
    });
}


// Function to set the current year in elements with class 'currentyear'
function setCurrentYear() {

    const year = new Date().getFullYear();
    console.log(`Setting current year to: ${year}`);  // Debugging
    const yearElements = document.querySelectorAll('.currentyear');
    yearElements.forEach((element) => {
        element.textContent = year;
    });
}

// Function to set the last modified date in an element with id 'lastModified'
function setLastModified() {
    const lastModifiedElement = document.querySelector('#lastModified');
    console.log(`Setting last modified to: ${document.lastModified}`);  // Debugging
    lastModifiedElement.innerHTML = document.lastModified;
}


// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI components
    initHamburgerMenu();
    // initSOSApp();

    // Set current year and last modified
    setCurrentYear();
    setLastModified();

    // Store access info and log last access
    // storeAccessInfo();
    // logLastAccess();

    // Initialize tracking ID
    // initializeTracking();

});
