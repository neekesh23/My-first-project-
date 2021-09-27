(function () {
    var pid = localStorage.getItem("ProductID")
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
    }
    ourRequest.send();
})();

function frmchk() {
    var z = "true"
    var fn = document.getElementById('fnamei').value
        var letters = /^[A-Za-z]+$/;
        if(!fn.match(letters)) {
            alert("Only alphabets allowed in First Name")
            z = "false"
        }
    var ln = document.getElementById('lnamei').value
        if(!ln.match(letters)) {
            alert("Only alphabets in Last Name")
            z = "false"
        }
    var a = document.getElementById('addi').value
    var c = document.getElementById('cci').value
        var numbers = /^[0-9]+$/;
        if(!c.match(numbers)) {
            alert("Only numbers allowed in credit card number")
            z = "false"
        }
        if (c.length !== 16 ) {
            alert("Please enter the right credit card number")
            z = "false"
        }
    var em = document.getElementById('expmi').value
        if(!em.match(numbers)) {
            alert("Only numbers allowed in expiration month")
            z = "false"
        }
        if (em < 1 || em > 12 ) {
            alert("Please enter the right expiration month")
            z = "false"
        }
    var ey = document.getElementById('expyi').value
        if(!ey.match(numbers)) {
            alert("Only numbers allowed in expiration year")
            z = "false"
        }
        if (ey < 2021 || ey > 2025) {
            alert("Please enter the right expiration year")
            z = "false"
        }
    var s = document.getElementById('sci').value
        if(!s.match(numbers)) {
            alert("Only numbers allowed in security code")
            z = "false"
        }
        if (s.length !== 3 ) {
            alert("Please enter the right security code")
            z = "false"
        }

    if (z == "true") {
        document.getElementById('frmchk').style.display = "none"
        document.getElementById('sbmt').style.display = "block"
    }
}

function swp() {
    document.getElementById('frm').style.display = "none"
    document.getElementById('lnamei2').value = document.getElementById('lnamei').value
    document.getElementById('addi2').value = document.getElementById('addi').value
    document.getElementById('cci2').value = document.getElementById('cci').value
    document.getElementById('expmi2').value = document.getElementById('expmi').value
    document.getElementById('expyi2').value = document.getElementById('expyi').value
    document.getElementById('sci2').value = document.getElementById('sci').value
    document.getElementById('fnamei2').value = document.getElementById('fnamei').value
    document.getElementById('frmr').style.display = "block"
    document.getElementById('btns').style.display = "block"
}

function gobck() {
    document.getElementById('frmr').style.display = "none"
    document.getElementById('btns').style.display = "none"
    document.getElementById('fnamei').value = document.getElementById('fnamei2').value 
    document.getElementById('lnamei').value = document.getElementById('lnamei2').value 
    document.getElementById('addi').value = document.getElementById('addi2').value 
    document.getElementById('cci').value = document.getElementById('cci2').value
    document.getElementById('expmi').value = document.getElementById('expmi2').value
    document.getElementById('expyi').value = document.getElementById('expyi2').value
    document.getElementById('sci').value = document.getElementById('sci2').value
    document.getElementById('frm').style.display = "block"
}

function nxtpage() {
    var s = document.getElementById('aimg').src
    s = s.substring(s.length - 12)
    var p1 = document.getElementById('price').innerHTML.substring(1)
    var s1 = document.getElementById('sprice').innerHTML.substring(1)
    var t = +p1 + +s1
    t = t.toFixed(2)
    localStorage.setItem("ProductID2", s)
    localStorage.setItem("FPRICE2", t)
    window.location.assign("guitarCenter2.html")
}