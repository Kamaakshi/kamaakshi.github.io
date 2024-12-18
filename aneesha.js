'use strict';

// Opening or closing side bar
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() { elementToggleFunc(sidebar); });

// Enabling Contact Form
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if(form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else { 
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation 
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        // Remove active class from all pages and nav links
        pages.forEach(page => page.classList.remove('active'));
        navigationLinks.forEach(link => link.classList.remove('active'));

        // Find the matching page for the clicked navigation link
        const clickedPageName = this.innerHTML.toLowerCase();
        const targetPage = document.querySelector(`[data-page="${clickedPageName}"]`);

        if (targetPage) {
            targetPage.classList.add('active');
            this.classList.add('active');
            window.scrollTo(0, 0);
        }
    });
}