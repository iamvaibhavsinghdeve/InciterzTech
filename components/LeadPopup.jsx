'use client';

import { useEffect, useState } from 'react';

const KEY = 'inciterz_popup_seen';
const DELAY_MS = 6000;

export default function LeadPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.location.pathname.startsWith('/contact')) return;
    if (sessionStorage.getItem(KEY)) return;
    const t = setTimeout(() => { setShow(true); sessionStorage.setItem(KEY, '1'); }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) return;
    const onKey = (e) => { if (e.key === 'Escape') setShow(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show]);

  return (
    <div className={`lead-overlay${show ? ' show' : ''}`} onClick={() => setShow(false)} aria-hidden={!show}>
      <div className="lead-modal" role="dialog" aria-modal="true" aria-label="Contact Inciterz" onClick={(e) => e.stopPropagation()}>
        <button className="lead-close" onClick={() => setShow(false)} aria-label="Close">&times;</button>
        <h2>Hold On! Let&apos;s Talk Growth</h2>
        <p className="lead-sub">Fill out the following form and we will get back to you in the next 24 hours.</p>
        <form name="popup-lead" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you/">
          <input type="hidden" name="form-name" value="popup-lead" />
          <p style={{ display: 'none' }}><input name="bot-field" aria-hidden="true" tabIndex={-1} /></p>
          <input type="text" name="name" placeholder="Name" aria-label="Name" required />
          <input type="email" name="email" placeholder="Email" aria-label="Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" />
          <button type="submit" className="lead-submit">Spark a conversation</button>
        </form>
        <p className="lead-alt">Prefer email? <b>connect@inciterz.com</b></p>
      </div>
    </div>
  );
}
