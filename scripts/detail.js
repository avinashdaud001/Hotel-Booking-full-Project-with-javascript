function totalAmount() {
    var adult = document.getElementById("adults").value;
    var d1 = document.getElementById("start").value;
    var d2 = document.getElementById("end").value;
    
    
    const dateone = new date(d1);
    const datetwo = new date(d2);
    const time = Math.abs(datetwo - dateone);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    
    document.getElementById('result').value = days * adult;
    console.log(days);
}

  // WHEN the user clicks the login button for now it close.
  function Mylognbtn() {
    modal.style.display = "none";
  }
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