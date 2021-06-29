// $(document).ready(function () {
//     $("button").click(function () {
//         location.reload(true);
//         // alert('Reloading Page');
//     });
// });

    var date = new Date();
    var today = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    $("#searchbtn").click(function () {
        var pin = $('#pin').val();
        if (pin == '' || pin == undefined) {
            alert('Please enter a valid Pin Code');
            return;
            
        }
        $.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pin + "&date=" + today,function (data, status) {
                if (status) {
                    var sessions = data.sessions ? data.sessions : [];
                    
                    if (sessions) {

                        if ($("#session tbody").length != 0) {
                            $("#session tbody").empty(); 
                          }
                        
                        for (var i = 0; i <= sessions.length; i++) 
                        {
                          var color="success";
                          if(sessions[i].available_capacity_dose1===0 && sessions[i].available_capacity===0) 
                          var color="danger";
                          
                          if($("#session tbody").length == 0){
                            $("#session tbody").append("<tbody></tbody>");
                          }
                            
                          $('#session tbody').append("<tr class=" + color + "><td>" + sessions[i]
                                .name + "</td><td>" + sessions[i].pincode + "</td><td>" + sessions[i].date + "</td><td>" + sessions[i].vaccine + "</td><td>" +sessions[i].available_capacity + "</td><td>" +
                                sessions[i].available_capacity_dose1 + "</td><td>" + sessions[i].fee_type +"</td></tr>")
                        }
                    }
                    
                } else {
                    alert('error');
                }

            });
    });
