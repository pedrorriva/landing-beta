/**
 * Sticky WhatsApp Button
 * Enable sticky behavior of WhatsApp button on page scroll
 */

const stickyWhatsAppBtn = (() => {
  let whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn === null) return;

  let scrollOffset = 500;
  let appearedOnce = false;

  window.addEventListener("scroll", (e) => {
    if (e.currentTarget.pageYOffset > scrollOffset) {
      whatsappBtn.classList.remove("whatsapp-btn-hidden");
      appearedOnce = true;
    } else if (!appearedOnce) {
      whatsappBtn.classList.add("whatsapp-btn-hidden");
    }
  });
})();

export default stickyWhatsAppBtn;
