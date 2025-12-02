const setupTooltip = (margin = 16, speed = 300, delay = 300) => {
    const tooltip = $('#tooltip');
    const elements = $('[data-tooltip]');

    elements
        .hover(
            function () {
                const message = $(this).attr('data-tooltip');
                tooltip.stop(true).text(message).fadeIn(speed);
            },
            function () {
                tooltip.stop(true).fadeOut(speed);
            }
        )
        .on('mousemove', (event) => {
            tooltip.css({ top: event.pageY + margin, left: event.pageX + margin });
        });
};

setupTooltip();
