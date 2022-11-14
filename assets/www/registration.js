$(document).ready(function () {
   
    $("#register").click(function () {
                         
            //e.preventDefault();
            var from = $("#from").val();
            var name = $("#name").val();
            var mobile = $("#mobile").val();
        // var emergencytype = $("select#emergencytype option:selected").attr('value');
            var emergencytype = $('#emergencytype option:selected').val();
            var intRegex = /[0-9 -()+]+$/;
           
                
               // alert("You have selected the country - " + emergencytype);
            
                        

            //var senddata = { 'from': from, 'name': name, 'mobilenumber': mobilenumber };
                var senddata1 = { "from": from, "name": name, "mobile": mobile, "emergencytype": emergencytype };
        
            //  var senddata1 = $(this).serializeArray();
            if ((mobile.length < 10) || (!intRegex.test(mobile))) {

                alert('Please enter a valid phone number.');
                return false;
            }
            else {
                // alert("Data Inserted Successfully to server,we will provide u medical emergency quickly");
                // $.mobile.changePage("#list");
                //$('#search').html(html);
                $.ajax({
                    type: "POST",
                    url: "http://swapnilrajput.freetzi.com/register1.php",
                    data: senddata1,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                        $("#info").html(data);

                    }

                });

                //$.post('http://swapnilrajput.freetzi.com/register1.php', senddata1,
                //function (data, status) {
                //    console.log(data);
                //   $("#info").html(data);
                //   //$("form")[0].reset();

                //});

                //$.ajax({
                //    type: "POST",
                //    url: "https://127.0.0.1:8080/xampp/register1.php",
                //    data: senddata1,
                //    //dataType:"json",
                //    success: function (data) {
                //        $("#info").html(data);
                //        alert("idhar se jaara bhai");
                //    },

                //});
                                             

            }
        });
   
    });
