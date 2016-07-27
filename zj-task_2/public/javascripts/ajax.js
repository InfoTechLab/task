onload = function () {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var body = document.getElementsByTagName("body")[0];
            var data = JSON.parse(xmlhttp.responseText);
            var bg = document.createElement("div");
            bg.className = "bg";
            body.appendChild(bg);
            addTitle(body,data);
            var h1 = document.getElementsByTagName("h1")[1];
            addImg("imgs-1",data.imgs1, 3, body, h1);
            addImg("img-2", data, 4, body);
        }
    }
    xmlhttp.open("GET", "data.json");
    xmlhttp.send();

    function addTitle(body,data) {
        var h = [];
        for (var i = 0; i < 2; i++) {
            h[i] = document.createElement("h1");
            h[i].className = "title";
            h[i].innerHTML = data.title[i]
            body.appendChild(h[i]);
        }
    }

    function addImg(classN,data, imgCount, body, h1) {
        var imgContainer = document.createElement("div");
        imgContainer.className = classN;
        var ul = document.createElement("ul");
        var li = [];
        var img = [];
        for (var i = 0; i < imgCount; i++) {
            li[i] = document.createElement("li");
            img[i] = document.createElement("img");
            img[i].src =data;
            li[i].appendChild(img[i]);
            ul.appendChild(li[i]);
            if (!h1) {
                addP(li[i],data,i);
            }
        }
        imgContainer.appendChild(ul);
        if (h1) {
            body.insertBefore(imgContainer, h1);
        } else {
            body.appendChild(imgContainer);
        }
    }

    function addP(li,data,i) {
        var pNode = [];
            pNode[i] = document.createElement("p");
            pNode[i].innerHTML = data.p;
            li.appendChild(pNode[i]);
    }
}