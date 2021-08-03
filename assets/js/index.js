


$(document).ready(function () {

    $("#form").submit(function(event){
        // console.log("Succesffully Submitted");
        alert("Successfully Submitted. Thank You for Your Suggestion!")
    })
    
  
    "use strict";
    $('ul.nbr > li').on(function (e) {
        e.preventDefault();
        var currentID = $(this).attr("id");
      //  var getItem = $(this);
        console.log(currentID);
    // res.send(currentID);
    
    })

    // $(".naviagation-item").on('click', function(event){
    //     var currentID = $(this).attr("id");
    //     console.log(currentID);

    // })

})


// module.exports = currentID;

// $("#update_user").submit(function(event){
//     event.preventDefault();

//     var unindexed_array = $(this).serializeArray();
//     var data = {};

//     $.map(unindexed_array, function(n, i){
//         data[n['name']] = n['value']
//     })


//     console.log(data);

//     var request= {
//         "url": `http://localhost:3000/api/users/${data.id}`,
//         "method": "PUT",
//         "data":data
//     }

//     $.ajax(request).done(function(response){  //This Is AJAX request
//         alert("Data Updated Successfully");
//     })
// })

// if(window.location.pathname == "/"){
//     $ondelete = $(".table tbody td a.delete");
//     $ondelete.click(function(){
//         var id = $(this).attr("data-id")

//         var request = {
//             "url" : `http://localhost:3000/api/users/${id}`,
//             "method" : "DELETE"
//         }

//         if(confirm("Do you really want to delete this record?")){
//             $.ajax(request).done(function(response){
//                 alert("Data Deleted Successfully!");
//                 location.reload();
//             })
//         }

//     })
// }



// $(document).ready(function () {

//     $('.navigation-item').on('click', function (e) {
//         const currentID = $(this).attr("id");
//         console.log(currentID);
//         console.log(currentID+" = stored to localStorage");

//     });

   

// });