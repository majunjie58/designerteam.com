var canvasHeight = 0;
$(".createPicture").click(function(){
    var node = document.querySelector(".scale-container");
    refreshHeight();
    html2canvas(node,{
        scale: 1.4
    }).then(function(canvas) {
        document.querySelector(".picturePopup").innerHTML = "";
        document.querySelector(".picturePopup").appendChild(canvas);
        global_links = $(".square .links a");
        canvas.setAttribute("data-src","");
        canvasHeight = canvas.height * 700 / 1470 ;
        console.log(canvasHeight);
        canvas.ondblclick = function(){
            var link_temp = $(this).attr("data-src");
            var link = prompt("src:",link_temp);
            if(link == null){
                link = link_temp;
            }
            $(this).attr("data-src",link);
            return false;
        }
        
    });
});

getData();

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
    var srcs = $(".picturePopup canvas").attr("data-src");
    var links = [];
    $(".scale-container .links a").each(function(){
        var link = $(this).attr("data-href");
        links.push(link);
    });
    var coords = [
        [40,340,135,325,135,350,40,365,40,340],
        [160,320,325,295,325,315,160,340,160,320],
        [40,370,135,355,135,380,40,395,40,370],
        [160,350,325,325,325,345,160,370,160,350]
    ]
    for(var i=0;i<coords.length;i++){
        for(var j=0;j<coords[i].length;j++){
            if(j%2!=0){
                coords[i][j] = canvasHeight - (475 - coords[i][j]);
            }
        }
    }
    text += '<tr><td><img usemap="#areamaps" style="width:100%;display:block;height: auto" src="'+srcs+'">';
    text += '<map name="areamaps" id="areamaps"><area shape="poly" href="'+links[0]+'" coords="'+coords[0].toString()+'" /><area shape="poly" href="'+links[1]+'" coords="'+coords[1].toString()+'" /><area shape="poly" href="'+links[2]+'" coords="'+coords[2].toString()+'" /><area shape="poly" href="'+links[3]+'" coords="'+coords[3].toString()+'" /></map>'
    text += '</td></tr>';
    text += '</tbody></table></center>';
    $(".code textarea").html('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width; initial-scale=1.0;" /><!-- CSS: START --><!-- CSS: END --></head><body>'+text+'</body></html>');
})

$(".code .close").click(function(){
    $(".code").removeClass("codeShow");
});


function saveData(){
    var data = $("[data-save]").html();
    localStorage.setItem("data",data);
}

function getData(){
    var data = localStorage.getItem("data");
    if(data!=null){
        $("[data-save]").html(data);
    }
}

setInterval(function(){
    saveData();
},5000);
