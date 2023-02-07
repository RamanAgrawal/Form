window.onload = function(e) {
    e.preventDefault();

    // Check for LocalStorage support.
    if (localStorage) {

        // Add an event listener for form submissions
        document.getElementById('my-form').addEventListener('submit', function (e) {

            // e.preventDefault();
            var name = document.getElementById('name').value;
            // console.log(name);
            var email = document.getElementById('email').value;
            let myobj = {
                name: `${name}`,
                email: `${email}`
            }
            let myobjnew = JSON.stringify(myobj);
            localStorage.setItem('myobj', myobjnew)
            // Saving in localStorage.
            // localStorage.setItem('name', name);
            // localStorage.setItem('email', email);
        });

    }
    }
}
