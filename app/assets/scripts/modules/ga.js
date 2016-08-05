/** @module google analytics events */

import $ from 'jquery';

$(document).on('click', '[data-ga-cat]', function() {
    let $this = $(this),
        cat   = $this.attr('data-ga-cat') || undefined,
        act   = $this.attr('data-ga-act') || undefined,
        lab   = $this.attr('data-ga-lab') || undefined,
        val   = $this.attr('data-ga-val') || undefined;

    if (typeof ga === 'function' && cat && act) ga('send', 'event', cat, act, lab, val);
});