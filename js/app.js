
var url = "https://hardware.wscada.net:483/api/"
var headerData = {"Content-type" : "application/json"};
console.log(Cookies.get('emailId'));

function deviceadd() {
    var newDeviceUDI = document.getElementById("deviceUDI").value;
    var targetApi = "deviceadd";
    var apiDeviceAdd = url + targetApi;
    var bodyData = JSON.stringify({
        "emailId" : emailID,
        "udi" : newDeviceUDI
    });

    // fetchRequest(headerData, bodyData ,apiDeviceAdd);
    fetch(url, {
        method : 'post',
        headers : headerData,
        body : bodyData
    })
        .then(response => response.json())
.then(function(data) {
        console.log('Request succeeded with JSON response', data);
        if(data.response.errors.length === 0) {

            alert("Device Sucessfully Added");
        }
        else
        {
            alert("Failed to add device!");

        }
    })
        .catch(function(error) {
            console.log('Request Failed', error);
        });
}

function deviceremove() {
    var newDeviceUDI = document.getElementById("deviceUDI").value;
    var targetApi = "deviceremove";
    var apiDeviceAdd = url + targetApi;
    var bodyData = JSON.stringify({
        "emailId" : emailID,
        "udi" : newDeviceUDI
    });

    // fetchRequest(headerData, bodyData ,apiDeviceAdd);
    fetch(url, {
        method : 'post',
        headers : headerData,
        body : bodyData
    })
        .then(response => response.json())
        .then(function(data) {
        console.log('Request succeeded with JSON response', data);
        if(data.response.errors.length === 0) {

            alert("Device sucessfully removed");
        }
        else
        {
            alert("Failed to remove device!");

        }
    })
        .catch(function(error) {
            console.log('Request Failed', error);
        });
}

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