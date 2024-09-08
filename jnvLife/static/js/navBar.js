
console.log('hii nav');

// Toggle the mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
try {
    
    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
    
        // Toggle the icons
        mobileMenuButton.querySelectorAll('svg').forEach(svg => svg.classList.toggle('hidden'));
    });
} catch (error) {
    console.log(error);
    console.log(mobileMenuButton);
    
}

try {
    // Toggle the user menu dropdown
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenuButtonQ = document.getElementById('#user-menu-button');
    // console.log(userMenuButtonQ);
    
    const userMenu = document.getElementById('user-menu');
    
    userMenuButton.addEventListener('click', () => {
        userMenu.classList.toggle('hidden');
    });
    
    // Close the dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
            userMenu.classList.add('hidden');
        }
    });
} catch (error) {
    console.log(error);
    
}
