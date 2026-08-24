

function setupNavbarEvents() {
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.getElementById('searchContainer');

    if (!hamburger || !mobileMenu || !searchToggle || !searchContainer) {
        console.warn('Navbar elements not found');
        return;
    }

    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            searchContainer.classList.remove('active');
        }
    });

    searchToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    });

    document.addEventListener('click', function (e) {
        const isMenuClick = mobileMenu.contains(e.target) || hamburger.contains(e.target);
        const isSearchClick = searchContainer.contains(e.target) || searchToggle.contains(e.target);

        if (!isMenuClick && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
        if (!isSearchClick && searchContainer.classList.contains('active')) {
            searchContainer.classList.remove('active');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            mobileMenu.classList.remove('active');
            searchContainer.classList.remove('active');
        }
    });

    function handleResize() {
        const isDesktop = window.innerWidth >= 821;
        if (isDesktop) {
            searchContainer.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
}

