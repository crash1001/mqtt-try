var emailID="rohit.singh@rts.com.np";
var url = "https://hardware.wscada.net:483/api/"

function addNewDevice() {
    var newDeviceUDI = document.getElementById("deviceUDI").value;
    var targetApi = "deviceadd";
    var apiDeviceAdd = url + targetApi;
    var bodyData = JSON.stringify({
        "emailId" : emailID,
        "udi" : newDeviceUDI
    });
    var headerData = {"Content-type" : "application/json"};
    fetchRequest(headerData, bodyData ,apiDeviceAdd);
}

function addLinkage() {
	var publisherUDIl = document.getElementById("publisherUDI").value;
	var subscriberUDIl = document.getElementById("subscriberUDI").value;
	var targetApi = "linkageLink";
	var apiDeviceAdd = url + targetApi;
	var bodyData = JSON.stringify({
		"emailId" : emailID,
		"publisherudi" : publisherUDIl,
		"subscriberudi" : subscriberUDIl
	});
	var headerData = {"Content-type" : "application/json"};
    fetchRequest(headerData, bodyData ,apiDeviceAdd);
}

function fetchRequest(headerData, bodyData, url) {

        fetch(url, {
            method : 'post',
            headers : headerData,
            body : bodyData
        })
            .then(response => response.json())
             .then(function(data) {
                    console.log('Request succeeded with JSON response', data);
                    if(data.response.errors.length === 0) {
                       
                          alert("OK!");
                    }
                   else
                   {
                       alert("Failed!");

                   }
              })
            .catch(function(error) {
                console.log('Request Failed', error);
            });
}