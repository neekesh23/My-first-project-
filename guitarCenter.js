(function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'File.json', true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText)
        document.getElementById('aimg').src = ourData.guitars[0].photoName
        document.getElementById('pinfodiv').innerHTML = ourData.guitars[0].productInfo
        document.getElementById('sinfodiv').innerHTML = ourData.guitars[0].shippingInfo
        document.getElementById('custrdiv').innerHTML = ourData.guitars[0].custReview
        document.getElementById('price').innerHTML = "Price: " + ourData.guitars[0].price
        document.getElementById('sprice').innerHTML = "Shipping Price: " + ourData.guitars[0].shippingPrice
        var p = ourData.guitars[0].price.substring(1)
        var q = ourData.guitars[0].shippingPrice.substring(1)
        var t = +p + +q
        t = t.toFixed(2)
        document.getElementById('tprice').innerHTML = "Total Price: <strong>$" + t + "</strong>"
    }
    ourRequest.send();
})();

function mi1() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item1')
    a.style.display = "block"
    b.style.display = "block"
    b.onmouseover = function() {
         b.style.display = "block"
    }
}
function mo1() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item1')
    a.style.display = "none"
    b.style.display = "none"
}
function mi2() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item2')
    a.style.display = "block"
    b.style.display = "inline-block"
}
function mo2() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item2')
    a.style.display = "none"
    b.style.display = "none"    
}
function mi3() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item3')
    a.style.display = "block"
    b.style.display = "inline-block"
}
function mo3() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item3')
    a.style.display = "none"
    b.style.display = "none"
}
function mi4() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item4')
    a.style.display = "block"
    b.style.display = "inline-block"
}
function mo4() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item4')
    a.style.display = "none"
    b.style.display = "none"
}
function mi5() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item5')
    a.style.display = "block"
    b.style.display = "inline-block"
}
function mo5() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item5')
    a.style.display = "none"
    b.style.display = "none"
}
function mi6() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item6')
    a.style.display = "block"
    b.style.display = "inline-block"
}
function mo6() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item6')
    a.style.display = "none"
    b.style.display = "none"
}
function mi7() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item7')
    a.style.display = "block"
    b.style.display = "inline-block"
}
function mo7() {
    var a = document.getElementById('navitems')
    var b = document.getElementById('item7')
    a.style.display = "none"
    b.style.display = "none"
}

function nxt() {

    var s = document.getElementById('aimg').src

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'File.json', true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText)
        changeDataNxt(ourData, s)
    }
    ourRequest.send();
}

function changeDataNxt(data, s) {
    
    s = s.substring(s.length - 12)
    for (var i = 0; i < data.guitars.length; i++) {
        var o = data.guitars[i].photoName
        if (s == o) {
            break
        }
    }

    var id = +i + +1

    if (id < data.guitars.length) {
        
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', 'File.json', true);
        ourRequest.onload = function() {
            var ourData = JSON.parse(ourRequest.responseText)
            document.getElementById('aimg').src = ourData.guitars[id].photoName
            document.getElementById('pinfodiv').innerHTML = ourData.guitars[id].productInfo
            document.getElementById('sinfodiv').innerHTML = ourData.guitars[id].shippingInfo
            document.getElementById('custrdiv').innerHTML = ourData.guitars[id].custReview
            document.getElementById('price').innerHTML = "Price: " + ourData.guitars[id].price
            document.getElementById('sprice').innerHTML = "Shipping Price: " + ourData.guitars[id].shippingPrice
            var p = ourData.guitars[id].price.substring(1)
            var q = ourData.guitars[id].shippingPrice.substring(1)
            var t = +p + +q
            t = t.toFixed(2)
            document.getElementById('tprice').innerHTML = "Total Price: <strong>$" + t + "</strong>"
        }
        ourRequest.send();
           
    }

}

function prv() {
    var s = document.getElementById('aimg').src

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'File.json', true);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText)
        changeDataPrv(ourData, s)
    }
    ourRequest.send();
}

function changeDataPrv(data, s) {
    
    s = s.substring(s.length - 12)
    for (var i = 0; i < data.guitars.length; i++) {
        var o = data.guitars[i].photoName
        if (s == o) {
            break
        }
    }

    if (i > 0) {
        
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', 'File.json', true);
        ourRequest.onload = function() {
            var ourData = JSON.parse(ourRequest.responseText)
            document.getElementById('aimg').src = ourData.guitars[+i - +1].photoName
            document.getElementById('pinfodiv').innerHTML = ourData.guitars[+i - +1].productInfo
            document.getElementById('sinfodiv').innerHTML = ourData.guitars[+i - +1].shippingInfo
            document.getElementById('custrdiv').innerHTML = ourData.guitars[+i - +1].custReview
            document.getElementById('price').innerHTML = "Price: " + ourData.guitars[+i - +1].price
            document.getElementById('sprice').innerHTML = "Shipping Price: " + ourData.guitars[+i - +1].shippingPrice
            var p = ourData.guitars[+i - +1].price.substring(1)
            var q = ourData.guitars[+i - +1].shippingPrice.substring(1)
            var t = +p + +q
            t = t.toFixed(2)
            document.getElementById('tprice').innerHTML = "Total Price: <strong>$" + t + "</strong>"
        }
        ourRequest.send();
           
    }

}

function buyg() {
    var s = document.getElementById('aimg').src
    s = s.substring(s.length - 12)
    localStorage.setItem("ProductID", s)
    window.location.assign("guitarCenter1.html")
}

