// src/components/ScrollToAnchor.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToAnchor() {
  const { hash, key } = useLocation(); // key changes on navigation

  useEffect(() => {
    // ensure browser won't auto restore (you already set manual in App but keep this safe)
    if ("scrollRestoration" in window.history) {
      try {
        window.history.scrollRestoration = "manual";
      } catch (e) {}
    }

    if (!hash) {
      // when navigated without hash, scroll to top
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 12; // retry up to ~1.2s
    const interval = 100;

    const tryScroll = () => {
      attempts += 1;
      const el = document.getElementById(id);
      if (el) {
        // small extra delay to allow images/layout to settle
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
        return;
      }
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, interval);
      } else {
        // fallback: scroll to top of page (or do nothing)
        // window.scrollTo(0, 0);
      }
    };

    // Run first attempt on next tick to allow React to render
    setTimeout(tryScroll, 20);

    // Re-run if key/hash changes (useEffect dependency handled by key below)
  }, [hash, key]);

  return null;
}
