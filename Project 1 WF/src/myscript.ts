/**
 * Utilized some code from Professor Jose Gomez's Various Web Frameworks Lectures
 */

let listCount: number = 0;
let listCount2: number = 0;

var comment = document.getElementById("comment") as HTMLInputElement;
var inputName = document.getElementById("name") as HTMLInputElement;
var rating = document.getElementById("rating") as HTMLInputElement;
var btnSubmit = document.getElementById('submit')! as HTMLButtonElement;
var currentMonth = new Date().getMonth();
var currentDate = new Date().getDate();
var currentYear = new Date().getFullYear();
var divInsert = document.getElementById('response')!;

var box1 = document.getElementById('ratingBox1') as HTMLImageElement;
var box2 = document.getElementById('ratingBox2') as HTMLImageElement; 
var box3 = document.getElementById('ratingBox3') as HTMLImageElement; 
var box4 = document.getElementById('ratingBox4') as HTMLImageElement; 
var box5 = document.getElementById('ratingBox5') as HTMLImageElement;   

let ratingArray: number[] = [];

    btnSubmit.addEventListener('click', function(){
        var x = rating.valueAsNumber;
        if(inputName.value == "" || rating.value == "" || x > 5 || x < 1){
            alert("Please Enter a Name and Rating between 1 and 5");
        }else{
            let templateClone = getTemplateClone('responseTemplate');
            templateClone.id=templateClone.id+listCount;
            listCount++;
            templateClone.content.getElementById('inputtedComment')!.innerText = comment.value;
            templateClone.content.getElementById('inputtedName')!.innerText = inputName.value;
            templateClone.content.getElementById('inputtedRating')!.innerText = rating.value;
            templateClone.content.getElementById('monthPosted')!.innerText = currentMonth.toString();
            templateClone.content.getElementById('datePosted')!.innerText = currentDate.toString();
            templateClone.content.getElementById('yearPosted')!.innerText = currentYear.toString();
            divInsert.appendChild(templateClone.content);
            
            
            ratingArray.push(x);
            var total = 0;
            for(var i = 0; i < ratingArray.length; i++) {
                total += ratingArray[i];
            }
            var avg = total / ratingArray.length;
            var roundedAvg = Math.round(avg);
            if(roundedAvg == 1){
                box1.src = "images/filledin.png";
                box2.src = "images/empty.png";
                box3.src = "images/empty.png";
                box4.src = "images/empty.png";
                box5.src = "images/empty.png";
            }
            if(roundedAvg == 2){
                box1.src = "images/filledin.png";
                box2.src = "images/filledin.png";
                box3.src = "images/empty.png";
                box4.src = "images/empty.png";
                box5.src = "images/empty.png";
            }
            if(roundedAvg == 3){
                box1.src = "images/filledin.png";
                box2.src = "images/filledin.png";
                box3.src = "images/filledin.png";
                box4.src = "images/empty.png";
                box5.src = "images/empty.png";
            }
            if(roundedAvg == 4){
                box1.src = "images/filledin.png";
                box2.src = "images/filledin.png";
                box3.src = "images/filledin.png";
                box4.src = "images/filledin.png";
                box5.src = "images/empty.png";
            }
            if(roundedAvg == 5){
                box1.src = "images/filledin.png";
                box2.src = "images/filledin.png";
                box3.src = "images/filledin.png";
                box4.src = "images/filledin.png";
                box5.src = "images/filledin.png";
            }
        }
    });
    
        
    

    function getTemplateClone(templateID:string)
    {
        return document.getElementById(templateID)?.cloneNode(true) as HTMLTemplateElement;
    }