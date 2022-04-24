 // WHEN the user clicks the login button for now it close.
      
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("login-btn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        //----------------------------------------------------------------------------------------------//
            
        //   Js for contact us modal 
        
         
    
// This is for changing login button to logout

  function headr_login(){

     var btn = document.getElementById('login-btn');
     var username = document.getElementById('user').value;
    var pass = document.getElementById('password').value;

    var User = localStorage.getItem('User');
    var password = localStorage.getItem('password');


    if(username==User && pass==password){
        btn.textContent='Logout';
    }else{

    }
}