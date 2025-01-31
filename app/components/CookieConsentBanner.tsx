'use client';

import CookieConsent from 'react-cookie-consent';

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      debug
      cookieName="CookieConsent"
      buttonText="Εντάξει"
      style={{ background: '#2B373B', textAlign: 'center', justifyContent: 'center' }}
      buttonStyle={{ color: '#4E503B', fontSize: '0.8rem' }}
    >
      Αυτή η σελίδα χρησιμοποιεί μόνο τα απολύτως απαραίτητα cookies.
    </CookieConsent>
  );
}
