function addCustomStyle(elements, style) {
  elements.forEach((element) => {
    element.style.cssText += style;
  });
}

function applyStyles() {
  const targetElements1 = document.querySelectorAll(".r-1cvl2hr.r-4qtqp9.r-yyyyoo.r-1xvli5t");
  const customStyle1 = "color: goldenrod; margin-left: 6px;";
  
  const targetElements2 = document.querySelectorAll(".r-1cvl2hr.r-4qtqp9.r-yyyyoo.r-1xvli5t.r-f9ja8p");
  const customStyle2 = "color: rgb(240, 149, 29);";
  
  addCustomStyle(targetElements1, customStyle1);
  addCustomStyle(targetElements2, customStyle2);
}

// Apply styles initially
applyStyles();

// Set up a MutationObserver to watch for changes in the page
const observer = new MutationObserver((mutationsList) => {
  applyStyles();
});

// Set up the observer to watch the entire document
observer.observe(document, { childList: true, subtree: true });
