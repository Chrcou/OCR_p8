/*global NodeList */
// (function(window) {
'use strict';
/**
 * Gets one element by CSS selector
 * @param {string} selector 
 * @param {Scope} scope 
 */
window.qs = function (selector, scope) {
    return (scope || document).querySelector(selector);
};

/**
 * Gets elements by CSS selector
 * @param {string} selector 
 * @param {Scope} scope 
 */


window.qsa = function (selector, scope) {
    return (scope || document).querySelectorAll(selector);
};


/**
 * A wrapper for addEventListener
 * @param {HTMLElement} target the element which will listened
 * @param {String} type the type of evenement to listen 
 * @param {Functon} callback a callback function
 * @param {*} useCapture 	Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase.
 */
// addEventListener wrapper:
window.$on = function (target, type, callback, useCapture) {
    target.addEventListener(type, callback, !!useCapture);
};
/**
 *  Attach a handler to event for all elements that match the selector,
 *  now or in the future, based on a root element
 * @param {HTMLElement} target the element which will listened
 * @param {string} selector 
 * @param {String} type the type of evenement to listen 
 * @param {*} handler The function to call
 */

window.$delegate = function (target, selector, type, handler) {
    function dispatchEvent(event) {
        var targetElement = event.target;
        var potentialElements = window.qsa(selector, target);
        var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

        if (hasMatch) {
            handler.call(targetElement, event);
        }
    }

    // https://developer.mozilla.org/en-US/docs/Web/Events/blur
    var useCapture = type === 'blur' || type === 'focus';

    window.$on(target, type, dispatchEvent, useCapture);
};
/**
 * Find the element's parent with the given tag name
 * @param {HTMLElement} element 
 * @param {String} tagName 
 */

window.$parent = function (element, tagName) {
    if (!element.parentNode) {
        return;
    }
    if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
        return element.parentNode;
    }
    return window.$parent(element.parentNode, tagName);
};

// Allow for looping on nodes by chaining:
// qsa('.foo').forEach(function () {})
NodeList.prototype.forEach = Array.prototype.forEach;
// })(window);