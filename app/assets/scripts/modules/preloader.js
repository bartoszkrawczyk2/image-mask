/** @module preloader */

/**
 * Hiding the preloader
 */
const hide = function() {
    const preloader = document.getElementById('preloader');
    preloader.className = preloader.className + ' hide-me';
}

/**
 * Showing the preloader
 */
const show = function() {
    const preloader = document.getElementById('preloader');
    preloader.className = preloader.className.replace('hide-me', '');
}

export default {
    hide: hide,
    show: show
}
