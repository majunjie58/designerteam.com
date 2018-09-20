var global_slice = -1;

$(".createPicture").click(function(){
    var node = document.querySelector(".scale-container");
    refreshHeight();
    html2canvas(node,{
        scale: 1.4
    }).then(function(canvas) {
        var img = canvasToPicture(canvas);
        document.querySelector(".picturePopup").innerHTML = "";
        var cHeight = canvas.height;
        var cWidth = canvas.width;
        var count = Math.ceil(cHeight / 1000);
        global_slice = count;
        global_links = $(".square .links a");
        img.onload = function(){
            for(var i=0;i<count;i++){
                var can = document.createElement("canvas");
                can.width = cWidth;
                can.height = i==0?cHeight%1000:1000;
                can.setAttribute("data-src","");
                var ctx =can.getContext('2d');
                ctx.drawImage(img,0,i==0?0:(i-1)*1000+cHeight%1000,cWidth,i==0?cHeight%1000:1000,0,0,cWidth,i==0?cHeight%1000:1000);
                document.querySelector(".picturePopup").appendChild(can);
                can.ondblclick = function(){
                    var link_temp = $(this).attr("data-src");
                    var link = prompt("src:",link_temp);
                    if(link == null){
                        link = link_temp;
                    }
                    $(this).attr("data-src",link);
                    return false;
                }
            }
        }
        
    });
});

function canvasToPicture(canvas) {
    var imgUrl = canvas.toDataURL('image/png');
    var img = new Image();
    img.src = imgUrl;
    return img;
}

function refreshData(data){
    for(var i=0;i<data.length;i++){
         $("[data-html]").eq(i).html(data[i]);
    }
}

function refreshHeight(){
    $(".scale-container").height($(".email-editor").height()*1.5 - 180);
}

refreshHeight();


$(document).on("keyup",function(){
    refreshHeight();
});

$(".links .link-item").each(function(){
    var that = this;
    that.ondblclick = function(){
        var link_temp = $(that).find("a").attr("data-href");
        var link = prompt("link:",link_temp);
        if(link == null){
            link = link_temp;
        }
        $(that).find("a").attr("data-href",link);
        return false;
    }
});

$(".button.createCode").click(function(){
    $(".code").addClass("codeShow");
    var text = '<center><table align="center" bgcolor="#f0f0f0" border="0" cellpadding="0" cellspacing="0" class="wrapper" style="margin: 0; padding: 0;" width="700"><tbody>';
    var srcs = [];
    $(".picturePopup canvas").each(function(){
        var src = $(this).attr("data-src");
        srcs.push(src);
    });
    var links = [];
    $(".scale-container .links a").each(function(){
        var link = $(this).attr("data-href");
        links.push(link);
    });
    console.log(links);
    for(var i=0;i<global_slice;i++){
        if(i==global_slice-1){
            text += '<tr><td><img usemap="#areamaps" style="width:100%;display:block;height: auto" src="'+srcs[i]+'">';
            text += '<map name="areamaps" id="areamaps"><area shape="poly" href="'+links[0]+'" coords="40,340,135,325,135,350,40,365,40,340" /><area shape="poly" href="'+links[1]+'" coords="160,320,325,295,325,315,160,340,160,320" /><area shape="poly" href="'+links[2]+'" coords="40,370,135,355,135,380,40,395,40,370" /><area shape="poly" href="'+links[3]+'" coords="160,350,325,325,325,345,160,370,160,350" /></map>'
            text += '</td></tr>';
        }else{
            text += '<tr><td><img style="width:100%;display:block;height: auto" src="'+srcs[i]+'"></td></tr>'
        }
    }
    text += '</tbody></table></center>';
    $(".code textarea").html('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width; initial-scale=1.0;" /><!-- CSS: START --><!-- CSS: END --></head><body>'+text+'</body></html>');
})

$(".code .close").click(function(){
    $(".code").removeClass("codeShow");
});