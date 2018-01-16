// var email;
// var headerData = {"Content-type" : "application/json"};
//
// //validates login credentials
// function validateLogin() {
//
//         email = $("#inputEmail").val();
//         var password = $("inputPassword").val();
//
//         var url ="https://hardware.wscada.net:483/api/userauthenticate";
//         var bodyData = JSON.stringify({
//             "emailId" : email ,
//             "password" : password
//         });
//
//         fetch(url, {
//             method : 'post',
//             headers : headerData,
//             body : bodyData
//         })
//             .then(response => response.json())
//             .then(function(data) {
//             console.log('Request succeeded with JSON response', data);
//             if(data.response.errors.length === 0) {
//                 Cookies.set('emailId', email, {expires : 1, path: ''});
//                 window.location.replace("index.html");
//             }
//             else
//             {
//                 alert("Email address or Password incorrect!!");
//                 $("#inputEmail").val(null);
//                 $("#inputPassword").val(null);
//
//             }
//         })
//             .catch(function(error) {
//                 alert('Request Failed' + error);
//                 $("#inputPassword").val(null);
//             });
//
// }
//
// function registerNewUser() {
//     var firstName = $("#firstName").val();
//     var lastName = $("#lastName").val();
//     var nickName = $("#userName").val();
//     var mobileNumber = $("#mobileNumber").val();
//     var email = $("#email").val();
//     var password = $("#password").val();
//     var country = $("#country").val();
//     var gender = $("input[type='radio'][name='gender']:checked").val();
//
//     var url ="https://hardware.wscada.net:483/api/userauthenticate";
//     var bodyData = JSON.stringify({
//         "emailId" : email ,
//         "firstName" : firstName,
//         "lastName" : lastName,
//         "nickName" : nickName,
//         "password" : password,
//         "cellPhoneNumber" : mobileNumber,
//         "gender" : gender,
//         "country" : country
//     });
//
//     fetch(url, {
//         method : 'post',
//         headers : headerData,
//         body : bodyData
//     })
//         .then(response => response.json())
// .then(function(data) {
//         console.log('Request succeeded with JSON response', data);
//         if(data.response.errors.length === 0) {
//             window.location.replace("login.html");
//         }
//         else
//         {
//             alert("Problem while registering, please try again later!");
//             $("firstName").val(firstName);
//             $("lastName").val(lastName);
//             $("userName").val(nickName);
//             $("mobileNumber").val(mobileNumber);
//             $("email").val(email);
//             $("country").val(country);
//             $("password").val(null);
//             $("input[name='gender'].checked").val(gender);
//
//         }
//     })
//         .catch(function(error) {
//             alert('Request Failed' + error);
//             $("firstName").val(firstName);
//             $("lastName").val(lastName);
//             $("userName").val(nickName);
//             $("mobileNumber").val(mobileNumber);
//             $("email").val(email);
//             $("country").val(country);
//             $("password").val(null);
//             $("input[name='gender'].checked").val(gender);
//         });
//
// }
