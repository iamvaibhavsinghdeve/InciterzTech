'use client';

import { useEffect } from 'react';

/* Reads ?role=... from the URL (set by careers "Apply" links), pre-fills the
   contact form message + hidden role field, shows a banner, and scrolls to it. */
export default function RolePrefill() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const role = params.get('role');
    if (!role) return;

    const form = document.querySelector('form[name="contact"]');
    if (!form) return;

    const est = params.get('est');
    const msg = form.querySelector('textarea[name="message"]');
    if (msg && !msg.value) {
      msg.value = est
        ? 'I would like a quote based on this estimate:\n\n' + est + '\n\nAdditional details:\n'
        : 'I would like to apply for: ' + role + '.\n\nA bit about me:\n';
    }
    const roleField = form.querySelector('input[name="role"]');
    if (roleField) roleField.value = role;

    const banner = document.getElementById('apply-banner');
    if (banner) {
      banner.textContent = params.get('est') ? 'Quote request: ' + role.replace(/^Quote:\s*/, '') : 'You are applying for: ' + role;
      banner.style.display = 'block';
    }

    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return null;
}
