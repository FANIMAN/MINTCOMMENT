

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully")
})


$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    console.log(data);
    
     //        "url": `http://localhost:3000/api/users/${data.id}`,     //Kana ture dura
    var request= {
        "url": `http://suggestion-box-mint.herokuapp.com/api/users/${data.id}`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){  //This Is AJAX request
        alert("Data Updated Successfully");
    })
})

if(window.location.pathname == "/admin-page"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        
        //"url" : `http://localhost:3000/api/comments/${id}`,   //Kana ture Dura
        var request = {
            // "url" : `http://suggestion-box-mint.herokuapp.com/api/comments/${id}`,
            "url" : `http://localhost:3000/api/comments/${id}/`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}