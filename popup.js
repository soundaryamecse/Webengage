window.addEventListener("load",function(){    
    var popup = document.getElementById('popup-wrapper')
    
    //To make to popup element to popup after 4s
    setTimeout(()=>{       
            popup.setAttribute('class','show')        
    },4000)

    //closing the popup element
    var closeItem = document.getElementById('close')
    closeItem.addEventListener("click",function(){
        popup.setAttribute('class',"popup")
    })

    //copy code to the clipBoard
    var button = document.getElementsByClassName('copying-code')
    for(var i=0;i<button.length;i++){
        button[i].addEventListener('click',function(event){ 
            content = event.target.value           
            window.navigator.clipboard.writeText(content)
            event.target.value=""
            event.target.innerHTML = "Code Copied"
        })
    }  

    //onFocusing on the input tag 
    var input = document.getElementsByTagName('input')
    for(var i=0;i<input.length;i++){
        input[i].addEventListener('focus',function(event){
            event.target.value = "Add The copied text"
        })
    }
    



})
