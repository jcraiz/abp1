document.addEventListener('DOMContentLoaded', () => {
    const expandAllButton = document.getElementById('expandAll');
    const collapseAllButton = document.getElementById('collapseAll');
    
    // Select all details elements. Use a class selector if you only want to target main chapters.
    // Here, we select ALL details elements to open/close the whole structure.
    const allDetails = document.querySelectorAll('details');

    /**
     * Toggles the 'open' attribute on all details elements.
     * @param {boolean} shouldOpen - true to expand, false to collapse.
     */
    const toggleDetails = (shouldOpen) => {
        allDetails.forEach(detail => {
            detail.open = shouldOpen;
        });
    };

    expandAllButton.addEventListener('click', () => {
        toggleDetails(true);
    });

    collapseAllButton.addEventListener('click', () => {
        // Collapse only the main chapter level for a cleaner default state,
        // or toggleDetails(false) to collapse everything, including nested sections.
        // Let's collapse everything for simplicity of "Collapse All"
        toggleDetails(false);
    });
});