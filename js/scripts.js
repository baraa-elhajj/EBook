const tooltips = document.querySelectorAll('.my-tooltip');
tooltips.forEach(t => {
    new bootstrap.Tooltip(t);
});