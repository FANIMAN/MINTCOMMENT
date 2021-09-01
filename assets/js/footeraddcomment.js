	
    
    // function checkCorrectness() {
	// 	var error = document.getElementById("error");
    //     let dep = document.getElementById('dep').value;
    //     let roomno =  document.getElementById('roomno').value;
    //     let recommed1 =  document.getElementById('recommed-1').value;
    //     let recommed2 =  document.getElementById('recommed-2').value;
    //     let recommed3 =  document.getElementById('recommed-3').value;
    //     let recommed4 =  document.getElementById('recommed-4').value;
    //     let recommed5 =  document.getElementById('recommed-5').value;
    //     let recommed6 =  document.getElementById('recommed-6').value;
    //     let recommed7 =  document.getElementById('recommed-7').value;
    //     let recommed8 =  document.getElementById('recommed-8').value;
    //     let recommed9 =  document.getElementById('recommed-9').value;
    //     let recommed10 =  document.getElementById('recommed-10').value;
    //     let recommed11 =  document.getElementById('recommed-11').value;
    //     let recommed12 =  document.getElementById('recommed-12').value;
    //     let comment =  document.getElementById('comment').value;

	// 	// if (isNaN(document.getElementById("number").value))
    //     // if((correctEmail !== inputEmail) || (correctPassword !== inputPassword))
    //     var comment1 = (!recommed1 && !recommed2 && !recommed3);
    //     var comment2 = (!recommed4 && !recommed5 && !recommed6);
    //     var comment3 = (!recommed7 && !recommed8 && !recommed9);
    //     var comment4 =  (!recommed10 && !recommed11 && !recommed12);
    //     if(!roomno || !deskno || comment1 || comment2 || comment3 || comment4 || !comment)
	// 	{
	// 		// Changing content and color of content
	// 		error.textContent = "Please Fill All The Form ....!"
	// 		error.style.color = "red"
	// 	} else {
	// 		error.textContent = ""
	// 	}
	// }


    window.onload = document.getElementById("dep").innerHTML = localStorage.getItem("storageNme");


    $(document).ready(function () {
        $("#form").submit(function(event){
            // console.log("Succesffully Submitted");
            alert("Successfully Submitted. Thank You for Your Suggestion!")
        })

    }
)



