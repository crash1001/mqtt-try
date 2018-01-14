var emailID="rohit.singh@rts.com.np";
var url = "http://hardware.wscada.net:88/api/"

function addNewDevice() {
    var newDeviceUDI = document.getElementById("deviceUDI").value;
    var targetApi = "deviceadd";
    var apiDeviceAdd = url + targetApi;
    var bodyData = JSON.stringify({
        "emailId" : emailID,
        "udi" : newDeviceUDI
    });
    var headerData = {"Content-type" : "application/x-www-form-urlencoded"};
    fetchRequest(headerData, bodyData ,apiDeviceAdd);
}

function addLinkage() {

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
                    if(data.response) {
                        //if request passed
                          alert("request passed");
                    }
                   else
                   {
                       alert("request failed");

                   }
              })
            .catch(function(error) {
                console.log('Request Failed', error);
            });
}