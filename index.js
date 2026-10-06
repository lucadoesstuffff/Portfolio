const footer = document.querySelector(".footer");
const spacers = document.querySelectorAll(".footer-spacer");

if(footer) {
    const setSpacerHeight = () => {
        const styles = getComputedStyle(footer);
        const height =
            footer.getBoundingClientRect().height +
            parseFloat(styles.marginTop) +
            parseFloat(styles.marginBottom);

        spacers.forEach((spacer) => {
            spacer.style.height = `${height}px`;
        });
    };

    setSpacerHeight();
    new ResizeObserver(setSpacerHeight).observe(footer);
}
