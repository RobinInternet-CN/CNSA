function scrollToTop(duration = 750) {
    // More easeing-function: https://github.com/cferdinandi/smooth-scroll
    let easeingFunction = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    let originScrollY = pageYOffset;
    let originScrollX = pageXOffset; // Keep abscissa
    let originTime = Date.now();
    let passedTime = 0;
    let _scrollToTop = () => {
        if (passedTime < duration) {
            passedTime = Date.now() - originTime;
            requestAnimationFrame(_scrollToTop);
            scrollTo(originScrollX, originScrollY * (1 - easeingFunction(passedTime / duration)));
        }
    };
    _scrollToTop();
}