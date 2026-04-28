/**
 * form.js — Validación del formulario de contacto y envío vía Formspree
 */

(function () {
  'use strict';

  var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * Validate a single form field.
   * @param {HTMLInputElement|HTMLTextAreaElement} field
   * @returns {{ valid: boolean, message: string }}
   */
  function validateField(field) {
    var value = field.value.trim();
    var name = field.name;

    if (value === '') {
      return { valid: false, message: 'Este campo es requerido' };
    }

    if (name === 'name' && value.length < 2) {
      return { valid: false, message: 'El nombre debe tener al menos 2 caracteres' };
    }

    if (name === 'email' && !validateEmail(value)) {
      return { valid: false, message: 'Por favor ingresa un correo electrónico válido' };
    }

    if (name === 'message' && value.length < 10) {
      return { valid: false, message: 'El mensaje debe tener al menos 10 caracteres' };
    }

    return { valid: true, message: '' };
  }

  /**
   * Validate email format.
   * @param {string} email
   * @returns {boolean}
   */
  function validateEmail(email) {
    return EMAIL_REGEX.test(email);
  }

  /**
   * Show an error message on a field's parent .form-group.
   * @param {HTMLElement} field
   * @param {string} message
   */
  function showError(field, message) {
    var group = field.closest('.form-group');
    if (!group) return;
    group.classList.add('form-group--error');
    group.classList.remove('form-group--success');
    var errorSpan = group.querySelector('.form-error');
    if (errorSpan) {
      errorSpan.textContent = message;
    }
  }

  /**
   * Clear error state from a field's parent .form-group and mark as success.
   * @param {HTMLElement} field
   */
  function clearError(field) {
    var group = field.closest('.form-group');
    if (!group) return;
    group.classList.remove('form-group--error');
    group.classList.add('form-group--success');
    var errorSpan = group.querySelector('.form-error');
    if (errorSpan) {
      errorSpan.textContent = '';
    }
  }

  /**
   * Handle form submission: validate all fields, send via fetch to Formspree.
   * On success show confirmation; on failure show error with mailto fallback.
   * @param {Event} event
   */
  function handleSubmit(event) {
    event.preventDefault();

    var form = event.target;
    var fields = form.querySelectorAll('input, textarea');
    var allValid = true;

    fields.forEach(function (field) {
      var result = validateField(field);
      if (!result.valid) {
        showError(field, result.message);
        allValid = false;
      } else {
        clearError(field);
      }
    });

    if (!allValid) return;

    var formData = new FormData(form);
    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
    }

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(function (response) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar Mensaje';
        }

        if (response.ok) {
          // Remove any previous feedback
          removeFeedback(form);

          // Show success message
          var successDiv = document.createElement('div');
          successDiv.className = 'form-success';
          successDiv.textContent = '¡Mensaje enviado! Te responderé pronto.';
          form.appendChild(successDiv);

          // Reset form and clear visual states
          form.reset();
          fields.forEach(function (field) {
            var group = field.closest('.form-group');
            if (group) {
              group.classList.remove('form-group--error', 'form-group--success');
            }
            var errorSpan = group && group.querySelector('.form-error');
            if (errorSpan) errorSpan.textContent = '';
          });
        } else {
          showSubmitError(form);
        }
      })
      .catch(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar Mensaje';
        }
        showSubmitError(form);
      });
  }

  /**
   * Show a submit-level error with mailto fallback link.
   * @param {HTMLFormElement} form
   */
  function showSubmitError(form) {
    removeFeedback(form);
    var errorDiv = document.createElement('div');
    errorDiv.className = 'form-submit-error';
    errorDiv.innerHTML =
      'No se pudo enviar el mensaje. Intenta por correo directo: ' +
      '<a href="mailto:yoscelimesther18@gmail.com">yoscelimesther18@gmail.com</a>';
    form.appendChild(errorDiv);
  }

  /**
   * Remove any previous success/error feedback elements from the form.
   * @param {HTMLFormElement} form
   */
  function removeFeedback(form) {
    var prev = form.querySelector('.form-success, .form-submit-error');
    if (prev) prev.remove();
  }

  /**
   * Initialise form validation: bind blur listeners and submit handler.
   */
  function initFormValidation() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var fields = form.querySelectorAll('input, textarea');

    // Real-time validation on blur
    fields.forEach(function (field) {
      field.addEventListener('blur', function () {
        var result = validateField(field);
        if (!result.valid) {
          showError(field, result.message);
        } else {
          clearError(field);
        }
      });
    });

    // Full validation on submit
    form.addEventListener('submit', handleSubmit);
  }

  // --- Expose for testing ---
  if (typeof window !== 'undefined') {
    window.FormModule = {
      validateField: validateField,
      validateEmail: validateEmail,
      showError: showError,
      clearError: clearError,
      handleSubmit: handleSubmit,
      initFormValidation: initFormValidation
    };
  }

  document.addEventListener('DOMContentLoaded', initFormValidation);
})();
