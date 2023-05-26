$(document).ready(function() {


	$("#signupForm").submit(function(e) {
        e.preventDefault(); // Prevent form submission

        // Get form data
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();

        var accountArray = [];
        var accLocal = JSON.parse(localStorage.getItem("created accounts"))
        console.log(accLocal);

        console.log(name, email, password);

        if (name == "" || email == "" || password == "") {
          $(".error-message").text("Please fill in all fields.");
          return;
        }
        
        $.each(accLocal, function(i,v) {

          if (name == v.name && email == v.email && password == v.password)
            {
              console.log("existing");
              alert("Existing account, kindly login your account.");
            }

            

          })

          var account = {
            "name" : name,
            "email" : email, 
            "password": password
          }

          sessionStorage.setItem("account" , JSON.stringify(account));
            //localStorage.setItem("created accounts", JSON.stringify(account));
    
            $(location).attr('href','index.html');
        

  })


  })