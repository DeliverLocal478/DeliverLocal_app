const ORDER_URL = "https://order.deliverlocal.net/glue/landing";
let deferredPrompt = null;

const installBtn = document.getElementById("installBtn");
const iosHelp = document.getElementById("iosHelp");
const installHelp = document.getElementById("installHelp");
const status = document.getElementById("status");

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches ||
         window.navigator.standalone === true;
}
function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

// Installed launcher behavior: immediately open the DeliverLocal ordering site.
if (isStandalone()) {
  status.textContent = "Opening DeliverLocal…";
  window.location.replace(ORDER_URL);
} else {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installBtn.hidden = false;
    installHelp.hidden = true;
  });

  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.hidden = true;
    if (result.outcome === "accepted") {
      status.textContent = "DeliverLocal installed! Use the new icon whenever you're ready to order.";
    }
  });

  window.addEventListener("appinstalled", () => {
    installBtn.hidden = true;
    status.textContent = "DeliverLocal installed! Use the new icon whenever you're ready to order.";
  });

  if (isIOS()) {
    iosHelp.hidden = false;
    installHelp.hidden = true;
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}
