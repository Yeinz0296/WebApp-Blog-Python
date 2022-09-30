function handleReply(response_id) {
    const reply_form_container = document.querySelector(`#reply-form-container-${response_id}`)
    if (reply_form_container) {
        reply_form_container.style.display = 'block';
    }
}

function handleCancel(response_id) {
    const reply_form_container = document.querySelector(`#reply-form-container-${response_id}`)
    if (reply_form_container) {
        reply_form_container.style.display = 'none';
    }
}

(function() {
    "use strict";

    /**
    * Easy selector helper function
    */
    const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
    }

    /**
    * Easy event listener function
    */
    const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
        selectEl.addEventListener(type, listener)
        }
    }
    }

    /**
    * Mobile nav toggle
    */
    on('click', '.mobile-nav-toggle', function(e) {
        select('body').classList.toggle('mobile-nav-active')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
    * Hero type effect
    */
    const typed = select('.typed')
    if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
    }

})()