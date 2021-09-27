(function () {
    var pid = localStorage.getItem("ProductID2")
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'File.json', true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText)
        for (var i = 0; i < ourData.guitars.length; i++) {
            if (pid == ourData.guitars[i].photoName) {
                break
            }
        }
        document.getElementById('aimg').src = ourData.guitars[i].photoName
        document.getElementById('pinfodiv').innerHTML = ourData.guitars[i].productInfo
        document.getElementById('sinfodiv').innerHTML = ourData.guitars[i].shippingInfo
        document.getElementById('custrdiv').innerHTML = ourData.guitars[i].custReview
        document.getElementById('price').innerHTML = "Price: " + ourData.guitars[i].price
        document.getElementById('sprice').innerHTML = "Shipping Price: " + ourData.guitars[i].shippingPrice
        var p = ourData.guitars[i].price.substring(1)
        var q = ourData.guitars[i].shippingPrice.substring(1)
        var t = +p + +q
        t = t.toFixed(2)
        document.getElementById('tprice').innerHTML = "Total Price: <strong>$" + t + "</strong>"
        document.getElementById('fprice').innerHTML = localStorage.getItem("FPRICE2")        
    }
    ourRequest.send();
})();

document.getElementById('oid').innerHTML = Math.floor(Math.random() * 101);

function hm() {
    window.location.assign("guitarCenter.html")
}