/**
 * main.js — Navegación, menú hamburguesa, scroll suave y tarjetas de proyecto
 */

(function () {
  'use strict';

  // --- DOM references ---
  const navbar = document.getElementById('navbar');
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');

  // --- Scroll: add .navbar--scrolled when scrollY > 50 ---
  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  // --- Hamburger menu toggle ---
  function toggleMenu() {
    if (!menu || !toggle) return;
    const isOpen = menu.classList.toggle('navbar__menu--open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  }

  // --- Close mobile menu helper ---
  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove('navbar__menu--open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  // --- Smooth scroll to a section ---
  function smoothScroll(targetId) {
    if (!targetId) return;
    const id = targetId.replace(/^#/, '');
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
  }

  // --- Project detail panel toggle ---
  function handleProjectCardClick(e) {
    const card = e.currentTarget;
    const detail = card.querySelector('.project-detail');
    if (!detail) return;
    detail.classList.toggle('project-detail--open');
  }

  // --- Initialisation ---
  function init() {
    // Scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load in case page is already scrolled
    handleScroll();

    // Hamburger button
    if (toggle) {
      toggle.addEventListener('click', toggleMenu);
    }

    // Nav link clicks: smooth scroll + close menu
    if (menu) {
      menu.addEventListener('click', function (e) {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        e.preventDefault();
        smoothScroll(link.getAttribute('href'));
        closeMenu();
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!menu || !toggle) return;
      if (!menu.classList.contains('navbar__menu--open')) return;
      // If click is inside menu or on toggle, ignore
      if (menu.contains(e.target) || toggle.contains(e.target)) return;
      closeMenu();
    });

    // Project demo cards: toggle detail panel
    var cards = document.querySelectorAll('.project-card[data-category="demo"]');
    cards.forEach(function (card) {
      card.addEventListener('click', handleProjectCardClick);
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
