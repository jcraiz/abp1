document.addEventListener('DOMContentLoaded', () => {
    const toggleAllButton = document.getElementById('toggleAll');
    const allDetails = document.querySelectorAll('details');

    // Una variable de estado para rastrear si todas las secciones están expandidas
    let areAllExpanded = false;

    // Establecer el estado inicial basado en qué está abierto al cargar la página.
    // Por defecto, todo estará contraído, excepto el primer capítulo para un inicio limpio.
    allDetails.forEach((detail, index) => {
        // El primer capítulo principal está abierto por defecto en el HTML, así que respetamos eso.
        if (!detail.open) {
            areAllExpanded = false;
        }
    });

    // Verificamos el estado real al cargar la página.
    const openDetails = document.querySelectorAll('details[open]').length;
    if (openDetails === allDetails.length) {
        areAllExpanded = true;
        toggleAllButton.textContent = '➖ Contraer Todo';
    } else {
        areAllExpanded = false;
        toggleAllButton.textContent = '➕ Expandir Todo';
    }


    toggleAllButton.addEventListener('click', () => {
        // Cambiamos el estado: si estaban expandidos, los contraemos, y viceversa.
        areAllExpanded = !areAllExpanded;

        // Aplicamos el nuevo estado a todos los elementos <details>
        allDetails.forEach(detail => {
            detail.open = areAllExpanded;
        });

        // Actualizamos el texto del botón para reflejar el nuevo estado
        if (areAllExpanded) {
            toggleAllButton.textContent = '➖ Contraer Todo';
        } else {
            toggleAllButton.textContent = '➕ Expandir Todo';
        }
    });
});
