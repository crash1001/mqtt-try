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
                    window.location.replace("../login.html");
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
            window.location.replace("device.html");
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
            window.location.replace("device.html");
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
            window.location.replace("linkage.html");
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
            window.location.replace("linkage.html");
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

            localStorage.setItem("firstName", responseData.firstName);
            $('.user-firstName').append(responseData.firstName);

            localStorage.setItem("lastName", responseData.lastName);
            $('.user-lastName').append(responseData.lastName);

            localStorage.setItem("nickName", responseData.nickname);
            $('.user-nickName').append(responseData.nickname);

            localStorage.setItem("cellPhoneNumber", responseData.cellPhoneNumber);
            $('.user-cell').append(responseData.cellPhoneNumber);

            localStorage.setItem("country", responseData.country);
            $('.user-country').append(responseData.country);

            localStorage.setItem("Gender", responseData.gender);
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

//Gets all the device added to the user'saccount
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
                var numOfPeopleShared = responseData[i].share.length;

                for(var j=0;j<numOfPeopleShared;j++) {
                    let deviceshare = responseData[i].share[j].id + ', ';
                    console.log('devicesharedlist :',deviceshare);
					deviceSharedList = deviceshare + deviceSharedList;
                }
                var sharedList = (deviceSharedList);
                var generatedview =
                    '<p style="margin-top: 2rem"> Alias : ' + alias + '</p>' +
                    '<p> DeviceType : ' + deviceType + '</p>' +
                    '<p> UDI : ' + udi + '</p>' +
                    '<p> Device is Shared to : ' + sharedList + '</p>';

                $(".user-devices").after(generatedview);
            }

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
//End of function User Get Device

//User Edit Function
function UserEdit() {

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var nickName = $("#userName").val();
    var mobileNumber = $("#mobileNumber").val();
    var email = localStorage.getItem('emailId');
    var country = $("#country").val();
    var gender = $("input[type='radio'][name='gender']:checked").val();



    var jsonBody = JSON.stringify({
        "emailId" : email,
        "firstName" : firstName,
        "lastName" : lastName,
        "nickname" : nickName,
        "cellPhoneNumber" : mobileNumber,
        "gender" : gender,
        "country" : country
    });


    console.log('Body :',jsonBody);
    var requestUrl = url + "useredit";
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);

    fetch(request)
        .then(response => response.json())
.then(function (responseData) {

        if (responseData.response.errors.length === 0) {
            window.location.replace('index.html');
            alert("User Edited Sucessfully");
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

function UserEditClear() {
    $("#firstName").val(localStorage.getItem("firstName"));
    $("#lastName").val(localStorage.getItem("lastName"));
    $("#userName").val(localStorage.getItem("nickName"));
    $("#mobileNumber").val(localStorage.getItem("cellPhoneNumber"));
    $("#email").val(localStorage.getItem("emailId"));
    $("#country").val(localStorage.getItem("country"));
}

//Device Share
function DeviceShare(){
    var email = localStorage.getItem("emailId");
    var udi = $("#udi").val();
    var shareEmail = $("#shareEmail").val();
 //   var privilage = $("#privilage").val();
    var requestUrl = url + "deviceshare";

    var jsonBody = JSON.stringify({
        "emailId" : email,
        "udi" : udi,
        "share" : {
            "id" : shareEmail
         //   "privilage" : privilage
        }

    });
    console.log('jsonBody :', jsonBody);

    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);
    fetch(request)
        .then(response => response.json())
.then(function (responseData) {

        if (responseData.response.errors.length === 0) {
            alert("Device Shared Sucessfully!!");
            console.log('response :',responseData.response);
            window.location.replace('share.html');
        }
        else {
            alert("Error Sharing Device : " + responseData.response.errors[0].reason);
            console.log("Error", responseData.response.errors[0].reason);
        }
    })
        .catch(function (error) {
            alert('Request Failed :' + error);
            console.log("fault", error);

        });
}
//End of function LinkageLink


//Device Un-Share
function DeviceUnShare(){
    var email = localStorage.getItem("emailId");
    var udi = $("#udi").val();
    var shareEmail = $("#shareEmail").val();
 //   var privilage = $("#privilage").val();
    var requestUrl = url + "deviceunshare";

    var jsonBody = JSON.stringify({
        "emailId" : email,
        "udi" : udi,
        "share" : {
            "id" : shareEmail
    //        "privilage" : privilage
        }

    });
    var request = new Request(requestUrl, {method: 'POST', headers: headerData, body: jsonBody});
    console.log('request :', request);
    fetch(request)
        .then(response => response.json())
.then(function (responseData) {

        if (responseData.response.errors.length === 0) {
            alert("Device Un-Shared Sucessfully!!");
            console.log('response :',responseData.response);
            window.location.replace('share.html');
        }
        else {
            alert("Error Un-Sharing Device : " + responseData.response.errors[0].reason);
            console.log("Error", responseData.response.errors[0].reason);
        }
    })
        .catch(function (error) {
            alert('Request Failed :' + error);
            console.log("fault", error);

        });
}
//End of function LinkageLink

//Get all the shared devices user
function UserGetSharedDevice() {
    //Request for user's device information
    var email = localStorage.getItem("emailId");
    console.log('emailID :',email);
    var requestUrl = url + "usergetshareddevice";

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
            console.log('number of shared device  :',responseData);
            for(var i=0;i<numberOfDevices;i++) {
                var udi = (responseData[i].udi);
                var alias = (responseData[i].alias);
                var deviceType = (responseData[i].messagingPattern);
                var owner =  responseData[i].owner;


                // var deviceSharedList = "";
                // var numOfPeopleShared = responseData[i].length;
                // for(var j=0;j<numOfPeopleShared;j++) {
                //     deviceSharedList = responseData[i][j] + ', ';
                // }
                // var sharedList = (deviceSharedList);
                var generatedview =
                    '<p style="margin-top: 2rem"> Alias : ' + alias + '</p>' +
                    '<p> DeviceType : ' + deviceType + '</p>' +
                    '<p> UDI : ' + udi + '</p>' +
                    '<p> Owner : ' + owner + '</p>';

                $(".user-share-device").after(generatedview);
            }

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