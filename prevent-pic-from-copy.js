function nocontext(e) {
        var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
        if (clickedTag == "IMG") {
            return false;
        }
    }
    var alertMsg = "يمنع منعا باتا نسخ الصور";
    document.oncontextmenu = nocontext;
