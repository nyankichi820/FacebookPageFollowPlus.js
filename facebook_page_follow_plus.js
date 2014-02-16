(function(){
    var isChecked  = false;
    function checkPageFollowed(){
        var widget = document.getElementById("fb-follow-plus");
        if(widget){
            var span = widget.firstChild;
            if(span && span.clientHeight == 20){
                if(!isChecked){
                    isChecked = true;
                    widget.style.display = "none";
                    if(widget.dataset.followedElementId){
                        var followedElement = document.getElementById(widget.dataset.followedElementId);
                        console.log(followedElement);
                        followedElement.style.display = "block";
                    }
                }
                else{
                    setTimeout(function(){
                        location.href =  widget.dataset.followedJumpHref;
                        console.log(span);
                    },500);
                }
            }
            else{
                if(!isChecked){
                    isChecked = true;
                    if(widget.dataset.followedElementId){
                        var followedElement = document.getElementById(widget.dataset.followedElementId);
                        followedElement.style.display = "none";
                    }
                }
                setTimeout(checkPageFollowed,1000);
            }

        }
    }
    console.log("hoge");
    setTimeout(checkPageFollowed,1000);
})();
