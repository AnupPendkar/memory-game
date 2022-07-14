const box = Array.from(document.querySelectorAll(".box"));
const counter = document.querySelector(".count");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

var first_element;
var first_element_color;
var size = 2;

const enterGame = (item)=>{
    const color = item.getAttribute("data-color");

    // If first image is selected then enter if loop
    if(size===2){
        first_element = item;
        first_element_color = color;
        item.classList.remove("data-hidden"); 
        size--;
    }
    // if second image is selected then enter else loop
    else{
        // if first element background and second element background are same then enter if loop
        if(first_element_color == color){
            item.classList.remove("data-hidden");  
        }
        // if first element background and second element background aren't same then enter else loop
        else{
            item.classList.remove("data-hidden");
            setTimeout(() => {
                item.classList.add("data-hidden");
                first_element.classList.add("data-hidden");
            }, 200);
        }
        size = 2;
    }
}


let count = 40;
counter.textContent = count;
box.map((item)=>{
    item.addEventListener("click", ()=>{
        var won = true;
        if(counter.textContent > 0){
            if(item.classList.contains("data-hidden") && --counter.textContent>=0){
                enterGame(item);  
            }

            for(var i=0; i<box.length; i++){
                if(box[i].classList.contains("data-hidden")){
                    won = false;
                }
            }
            if(won){
                result.textContent = "YOU WIN";
                btn.style.display = "block";
                counter.textContent=0;
            }
        }

        if(!won && counter.textContent==0){
            result.textContent = "YOU LOSE";
            btn.style.display = "block";
        }    
    })
})

const play_again = ()=>{
    result.textContent = ""
    counter.textContent = count;
    btn.style.display = "none"
    box.forEach((item)=>{
        item.classList.add("data-hidden");
    })
}