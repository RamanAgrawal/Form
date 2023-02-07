window.onload = function(e) {
    e.preventDefault();

    // Check for LocalStorage support.
    if (localStorage) {
  
      // Add an event listener for form submissions
      document.getElementById('my-form').addEventListener('submit', function(e) {
        
        e.preventDefault();

        var name = document.getElementById('name').value;
        console.log(name);
        var email = document.getElementById('email').value;
  
        // Saving in localStorage.
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
      });
  
    }
}
