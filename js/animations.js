/**
 * animations.js — Scroll reveal, hero entrance, and counter animations
 */

(function () {
  'use strict';

  /**
   * Scroll Reveal: hide .scroll-reveal elements initially, then reveal
   * them when they enter the viewport via Intersection Observer.
   * CSS base state is opacity:1 so content is visible without JS (Req 10.5).
   * JS adds .scroll-reveal--hidden on init, then .scroll-reveal--visible on intersect.
   */
  function initScrollReveal() {
    var elements = document.querySelectorAll('.scroll-reveal');
    if (!elements.length) return;

    // Hide elements now that JS is available
    elements.forEach(function (el) {
      el.classList.add('scroll-reveal--hidden');
    });

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal--visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /**
   * Hero Animations: the hero elements use .animate-fade-in with CSS
   * keyframe animations and staggered --delay custom properties.
   * This function ensures the hero section is ready; CSS handles the rest.
   */
  function initHeroAnimations() {
    var hero = document.getElementById('hero');
    if (!hero) return;
    hero.classList.add('hero--loaded');
  }


  /**
   * Counter Animation: animate .metric__number[data-count] elements
   * from 0 to their data-count value over ~1.5 seconds when they
   * enter the viewport.
   */
  function initCounterAnimation() {
    var counters = document.querySelectorAll('.metric__number[data-count]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    });

    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  /**
   * Animate a single counter element from 0 to its data-count value.
   * @param {HTMLElement} el
   */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target) || target <= 0) {
      el.textContent = el.getAttribute('data-count');
      return;
    }

    var duration = 1500; // ~1.5 seconds
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  // --- Initialisation ---
  function init() {
    initScrollReveal();
    initHeroAnimations();
    initCounterAnimation();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
