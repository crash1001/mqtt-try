//Global variables
var emailId;
var headerData = {"Content-type" : "application/json"};
var url = "http://hardware.wscada.net:88/api/";

//Validate Login for Users
function UserAuthenticate() {

    emailId = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    var requestUrl = url + "userauthenticate";
    var jsonBody = JSON.stringify({
        "emailId": emailId,
        "password": password
    });
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});

    fetch(request)
        .then(response => response.json())
        .then(function (responseData) {
            console.log('data', responseData.response);
            if (responseData.response.errors.length === 0) {
                console.log(responseData.response);
                window.location.replace("web/index.html");
            }
            else {
                alert("Error : " + responseData.response.errors[0].reason);
                $("inputPassword").val('');
            }
        })
        .catch(function (error) {
            alert('Request Failed :' + error);
            $("inputPassword").val(null);
            $("inputEmail").val(null);
        });
}
//End of function  UserAuthenticate


//Adding new users
function UserCreate() {

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var nickName = $("#userName").val();
    var mobileNumber = $("#mobileNumber").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var country = $("#country").val();
    var gender = $("input[type='radio'][name='gender']:checked").val();


    var jsonBody = JSON.stringify({
        "emailId" : email,
        "firstName" : firstName,
        "lastName" : lastName,
        "nickname" : nickName,
        "password" : password,
        "cellPhoneNumber" : mobileNumber,
        "gender" : gender,
        "country" : country
    });

    // var jsonBody = JSON.stringify({
    //     "emailId" : 'ditish.maharjan@rts.com.np' ,
    //     "firstName" : 'Ditish',
    //     "lastName" : 'Maharjan',
    //     "nickName" : 'dtsmzn',
    //     "password" : 'password123',
    //     "cellPhoneNumber" : '9843632323',
    //     "gender" : 'Male',
    //     "country" : 'Nepal'
    // });

    console.log('Body :',jsonBody);
    var requestUrl = url + "usercreate";
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);

    fetch(request)
        .then(response => response.json())
            .then(function (responseData) {

                if (responseData.response.errors.length === 0) {
                    alert("Sucessfully Registered ");
                    console.log('response :',responseData.response);

                }
                else {
                    alert("Error : " + responseData.response.errors[0].reason);
                    console.log("E");
                }
            })
        .catch(function (error) {
            alert('Request Failed :' + error);
            console.log("fault");

        });
}
//End of function UserCreate

//Add Device function
function DeviceAdd() {
    var requestUrl = url + "deviceadd";
    var newDeviceUDI = $("#deviceUDI").val();
    var jsonBody = JSON.stringify({
        "emailId" : emailID,
        "udi" : newDeviceUDI
    });
    console.log('Body :',jsonBody);
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);

    fetch(request)
        .then(response => response.json())
.then(function (responseData) {

        if (responseData.response.errors.length === 0) {
            alert("Device Added Sucessfully !! ");
            console.log('response :',responseData.response);

        }
        else {
            alert("Error while adding device : " + responseData.response.errors[0].reason);
            console.log("Error", responseData.response.errors[0].reason);
        }
    })
        .catch(function (error) {
            alert('Request Failed :' + error);
            console.log("fault", error);

        });
}
//End of Device Add Function

//Remove Device function
function DeviceRemove() {

    var requestUrl = url + "deviceremove";
    var newDeviceUDI = $("#deviceUDI").val();
    var jsonBody = JSON.stringify({
        "emailId" : emailID,
        "udi" : newDeviceUDI
    });
    console.log('Body :',jsonBody);
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);

    fetch(request)
        .then(response => response.json())
.then(function (responseData) {

        if (responseData.response.errors.length === 0) {
            alert("Device Removed !! ");
            console.log('response :',responseData.response);

        }
        else {
            alert("Error while removing device : " + responseData.response.errors[0].reason);
            console.log("Error", responseData.response.errors[0].reason);
        }
    })
        .catch(function (error) {
            alert('Request Failed :' + error);
            console.log("fault", error);

        });

}
//End of Remove Device function


function linkagelink() {
	var publisherUDIl = document.getElementById("publisherUDI").value;
	var subscriberUDIl = document.getElementById("subscriberUDI").value;
	var targetApi = "linkagelink";
	var apiDeviceAdd = url + targetApi;
	var bodyData = JSON.stringify({
		"emailId" : emailID,
		"publisherudi" : publisherUDIl,
		"subscriberudi" : subscriberUDIl
	});

    fetch(url, {
        method : 'post',
        headers : headerData,
        body : bodyData
    })
        .then(response => response.json())
.then(function(data) {
        console.log('Request succeeded with JSON response', data);
        if(data.response.errors.length === 0) {

            alert("Device Sucessfully Linked");
        }
        else
        {
            alert("Failed to link device!");

        }
    })
        .catch(function(error) {
            console.log('Request Failed', error);
        });

}

function linkageunlink() {
    var publisherUDIl = document.getElementById("publisherUDI").value;
    var subscriberUDIl = document.getElementById("subscriberUDI").value;
    var targetApi = "linkageunlink";
    var apiDeviceAdd = url + targetApi;
    var bodyData = JSON.stringify({
        "emailId" : emailID,
        "publisherudi" : publisherUDIl,
        "subscriberudi" : subscriberUDIl
    });

    fetch(url, {
        method : 'post',
        headers : headerData,
        body : bodyData
    })
        .then(response => response.json())
.then(function(data) {
        console.log('Request succeeded with JSON response', data);
        if(data.response.errors.length === 0) {

            alert("Device Sucessfully Linked");
        }
        else
        {
            alert("Failed to link device!");

        }
    })
        .catch(function(error) {
            console.log('Request Failed', error);
        });

}
// function fetchRequest(headerData, bodyData, url) {
//
//         fetch(url, {
//             method : 'post',
//             headers : headerData,
//             body : bodyData
//         })
//             .then(response => response.json())
//              .then(function(data) {
//                     console.log('Request succeeded with JSON response', data);
//                     if(data.response.errors.length === 0) {
//
//                           alert("OK!");
//                     }
//                    else
//                    {
//                        alert("Failed!");
//
//                    }
//               })
//             .catch(function(error) {
//                 console.log('Request Failed', error);
//             });
// }