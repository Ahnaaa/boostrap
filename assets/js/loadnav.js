// Function to load the header and footer content dynamically
function loadHeaderFooter() {
    // Load Header
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });

    // Load Footer
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });
  }

  loadHeaderFooter();
