	
    
    function errorMessage() {
		var error = document.getElementById("error")
        let correctEmail = 'fani@gmail.com'
        let correctPassword = 'faniman'
        let inputEmail = document.getElementById('email').value ;
        let inputPassword = document.getElementById('number').value;
		// if (isNaN(document.getElementById("number").value))

        if(!inputEmail && !inputPassword){
            error.textContent = "Please Fill Email and Password..!"
        }

        if(!inputEmail || !inputPassword){
            error.textContent = "Please Fill Email/Password..!"
        }

        if((correctEmail !== inputEmail) || (correctPassword !== inputPassword))
		{
			// Changing content and color of content
			error.textContent = "Incorrect Email/Password. Please try Again..!"
			error.style.color = "red"
		} else {
			error.textContent = ""
		}

	}


