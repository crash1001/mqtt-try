//Global variables

var headerData = {"Content-type" : "application/json"};
var url = "http://hardware.wscada.net:88/api/";

//Validate Login for Users
function UserAuthenticate() {

    var email = $("#inputEmail").val();
	localStorage.setItem('emailId',email);
    var password = $("#inputPassword").val();
    var requestUrl = url + "userauthenticate";
    var jsonBody = JSON.stringify({
        "emailId": email,
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
	var email = localStorage.getItem("emailId");
	console.log('emailID :',email);
    var requestUrl = url + "deviceadd";
    var newDeviceUDI = $("#deviceUDI").val();
	
    var jsonBody = JSON.stringify({
        "emailId" : email,
        "udi" : newDeviceUDI
    });
    console.log('Body :',jsonBody);
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);

    fetch(request)
        .then(response => response.json())
.then(function (responseData) {

        if (responseData.response.errors.length === 0) {
			var msg = "Device Sucessfully Added!!";
			if(responseData.response.reply.value === null) {
				var msg = "Device Already exists!!";
			}
			
            alert(msg);
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
	var email = localStorage.getItem("emailId");

    var requestUrl = url + "deviceremove";
    var newDeviceUDI = $("#deviceUDI").val();
    var jsonBody = JSON.stringify({
        "emailId" : email,
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

//Linkage link function
function LinkageLink(){
    var email = localStorage.getItem("emailId");
    var publisherUDI = $("#publisherUDI").val();
    var subscriberUDI = $("#subscriberUDI").val();
    var requestUrl = url + "linkagelink";

    var jsonBody = JSON.stringify({
        "emailId" : email,
        "udi" : subscriberUDI,
        "publisherudi" : publisherUDI,
        "subscriberudi" : subscriberUDI
    });
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);
    fetch(request)
        .then(response => response.json())
        .then(function (responseData) {

        if (responseData.response.errors.length === 0) {
            alert("Device Link successfully added!!");
            console.log('response :',responseData.response);

        }
        else {
            alert("Error while linking publisher and subscriber : " + responseData.response.errors[0].reason);
            console.log("Error", responseData.response.errors[0].reason);
        }
    })
        .catch(function (error) {
            alert('Request Failed :' + error);
            console.log("fault", error);

        });
}
//End of Linkage link function

//Linkage Un-link function
function LinkageUnLink(){
    var email = localStorage.getItem("emailId");
    var publisherUDI = $("#publisherUDI").val();
    var subscriberUDI = $("#subscriberUDI").val();
    var requestUrl = url + "linkageunlink";

    var jsonBody = JSON.stringify({
        "emailId" : email,
        "udi" : subscriberUDI,
        "publisherudi" : publisherUDI,
        "subscriberudi" : subscriberUDI
    });
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);
    fetch(request)
        .then(response => response.json())
.then(function (responseData) {

        if (responseData.response.errors.length === 0) {
            alert("Device Link successfully removed!! ");
            console.log('response :',responseData.response);

        }
        else {
            alert("Error while un-linking publisher and subscriber : " + responseData.response.errors[0].reason);
            console.log("Error", responseData.response.errors[0].reason);
        }
    })
        .catch(function (error) {
            alert('Request Failed :' + error);
            console.log("fault", error);

        });
}
//End of Linkage Un-link function

//Gets all the information regarding the user
function UserGetInfo() {
    var email = localStorage.getItem("emailId");
    console.log('emailID :', email);
    var requestUrl = url + "usergetinfo";

    var jsonBody = JSON.stringify({
        "emailId": email
    });
    console.log('Body :', jsonBody);

    //Request for user information
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);
    fetch(request)
        .then(response => response.json())
        .then(function (responseData) {

        if (responseData !== null) {
            console.log('response :', responseData);
            $('.user-email').append(responseData.emailId);
            $('.user-firstName').append(responseData.firstName);
            $('.user-lastName').append(responseData.lastName);
            $('.user-nickName').append(responseData.nickname);
            $('.user-cell').append(responseData.cellPhoneNumber);
            $('.user-country').append(responseData.country);
            $('.user-gender').append(responseData.gender);
            $('.user-status').append(responseData.status);
            if (responseData.group) {

                for (i = 0; i < responseData.group.length; i++) {
                    $('.user-group').append(responseData.group[i] + ', ');
                }
            }
            if (responseData.role) {
                $('.user-role').append(responseData.role);
            }
            if (responseData.tag) {

                for (i = 0; i < responseData.group.length; i++) {
                    $('.user-tags').append(responseData.tag[i] + ', ');
                }

            }
        }

    })
        .catch(function (error) {
            alert('Request Failed UserGetInfo:' + error);
            console.log("fault", error);

        });

}
//End of UserGetInfo Function()

function UserGetDevice(){
    //Request for user's device information
    var email = localStorage.getItem("emailId");
    console.log('emailID :',email);
    var requestUrl = url + "usergetdevice";

    var jsonBody = JSON.stringify({
        "emailId" : email
    });
    console.log('Body :',jsonBody);

    //Request for user information
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);


    fetch(request)
        .then(response => response.json())
        .then(function (responseData) {

        if (responseData !== null) {
            console.log('response :',responseData);
            var numberOfDevices = responseData.length;

            for(var i=0;i<numberOfDevices;i++) {
                var udi = (responseData[i].udi);
                var alias = (responseData[i].alias);
                var deviceType = (responseData[i].messagingPattern);
                var deviceSharedList = "";
                var numOfPeopleShared = responseData[i].length;
                for(var j=0;j<numOfPeopleShared;j++) {
                    deviceSharedList = responseData[i][j] + ', ';
                }
                var sharedList = (deviceSharedList);
                var generatedview =
                    '<p style="margin-top: 2rem"> Alias : ' + alias + '</p>' +
                    '<p> DeviceType : ' + deviceType + '</p>' +
                    '<p> UDI : ' + udi + '</p>' +
                    '<p> Device is Shared to : ' + sharedList + '</p>';

                $(".user-devices").after(generatedview);
            }

            // $('.user-email').append(responseData.emailId);
            // $('.user-firstName').append(responseData.firstName);
            // $('.user-lastName').append(responseData.lastName);
            // $('.user-nickName').append(responseData.nickname);
            // $('.user-cell').append(responseData.cellPhoneNumber);
            // $('.user-country').append(responseData.country);
            // $('.user-gender').append(responseData.gender);
            // $('.user-status').append(responseData.status)

        }
        else {
            // alert("Error while adding device : " + responseData.response.errors[0].reason);
            console.log("Error");
        }
    })
        .catch(function (error) {
            alert('Request Failed UserGetInfo:' + error);
            console.log("fault", error);

        });

}

// //Function get user information
// function UserGetInfo() {
//
//     var email = localStorage.getItem("emailId");
//     console.log('emailID :', email);
//     var requestUrl = url + "usergetinfo";
//
//     var jsonBody = JSON.stringify({
//         "emailId": email
//     });
//     console.log('Body :', jsonBody);
//
//     //Request for user information
//     var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
//     console.log('request :', request);
//     fetch(request)
//         .then(response = > response.json()
// )
// .
//     then(function (responseData) {
//
//         if (responseData !== null) {
//             console.log('response :', responseData);
//             $('.user-email').append(responseData.emailId);
//             $('.user-firstName').append(responseData.firstName);
//             $('.user-lastName').append(responseData.lastName);
//             $('.user-nickName').append(responseData.nickname);
//             $('.user-cell').append(responseData.cellPhoneNumber);
//             $('.user-country').append(responseData.country);
//             $('.user-gender').append(responseData.gender);
//             $('.user-status').append(responseData.status);
//             if (responseData.grou) {
//
//                 for (i = 0; i < responseData.group.length; i++) {
//                     $('.user-group').append(responseData.group[i] + ', ');
//                 }
//             }
//             if (responseData.role) {
//                 $('.user-role').append(responseData.role);
//             }
//             if (responseData.tag) {
//
//                 for (i = 0; i < responseData.group.length; i++) {
//                     $('.user-tags').append(responseData.tag[i] + ', ');
//                 }
//
//             }
//         }
//
//     })
//         .catch(function (error) {
//             alert('Request Failed UserGetInfo:' + error);
//             console.log("fault", error);
//
//         });
//     UserGetDevice();
// }
//
// //Request for user's device information
// function UserGetDevice(){
//
//     var email = localStorage.getItem("emailId");
//     console.log('emailID :', email);
//     var  requestUrl = url + "usergetdevice";
//
//     var jsonBody = JSON.stringify({
//         "emailId": email
//     });
//    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
//
//     fetch(request)
//         .then(response => response.json())
// .then(function (responseData) {
//
//         if (responseData !== null) {
//             console.log('response :',responseData);
//             var numberOfDevices = responseData.length;
//
//             for(var i=0;i<numberOfDevices;i++) {
//                 var udi = (responseData[i].udi);
//                 var alias = (responseData[i].alias);
//                 var deviceType = (responseData[i].messagingPattern);
//                 var deviceSharedList = "";
//                 var numOfPeopleShared = responseData[i].length;
//                 for(var j=0;j<numOfPeopleShared;j++) {
//                     deviceSharedList = responseData[i][j] + ', ';
//                 }
//                 var sharedList = (deviceSharedList);
//                 var generatedview =
//                     '<p style="margin-top: 2rem"> Alias : ' + alias + '</p>' +
//                     '<p> DeviceType : ' + deviceType + '</p>' +
//                     '<p> UDI : ' + udi + '</p>' +
//                     '<p> Device is Shared to : ' + sharedList + '</p>';
//
//                 $(".user-devices").after(generatedview);
//             }
//
//             // $('.user-email').append(responseData.emailId);
//             // $('.user-firstName').append(responseData.firstName);
//             // $('.user-lastName').append(responseData.lastName);
//             // $('.user-nickName').append(responseData.nickname);
//             // $('.user-cell').append(responseData.cellPhoneNumber);
//             // $('.user-country').append(responseData.country);
//             // $('.user-gender').append(responseData.gender);
//             // $('.user-status').append(responseData.status)
//
//         }
//         else {
//             // alert("Error while adding device : " + responseData.response.errors[0].reason);
//             console.log("Error");
//         }
//     })
//         .catch(function (error) {
//             alert('Request Failed UserGetInfo:' + error);
//             console.log("fault", error);
//
//         });
//
// }
