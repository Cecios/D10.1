let mini_nav_items = [
    {
        icon: 'videocam-outline',
        h: '30,000 online courses',
        p: 'Enjoy a variety of fresh topics'
      },
      {
        icon: 'people-outline',
        h: 'Expert instruction',
        p: 'Find the right instructor for you'
      },
      {
        icon: 'time-outline',
        h: 'Lifetime access',
        p: 'Learn on your schedule'
      }
]
const mini_nav = document.querySelector(".mini-nav .row")
const carousel_1 = document.querySelector("#carousel_1_active .row")

const addItems = function(){

  for (let i = 0; i < mini_nav_items.length; i++) {
    mini_nav.innerHTML += `<div class="col-12 col-md-4">
    <div class="d-flex">
      <div class="d-flex w-25 justify-content-center">
        <div class="email-badge">
         <i class="ion-email w-100 d-flex justify-content-center">
          <ion-icon class="fs-5" name="${mini_nav_items[i].icon}"></ion-icon>
        </i>
        </div>
      </div>
      <div class="w-75">
        <p><b>${mini_nav_items[i].h}</b><br>${mini_nav_items[i].p}</p>
      </div>
    </div>
  </div>`
  }

}
const addCarousel = function(){
    for (let i = 0; i < 4; i++) {

        carousel_1.innerHTML += `<div class="col-6 col-md-3 gy-1 m-0">
                                
        <!-- BGN CARD -->
<div class="card w-100">
<img src="./assets/assets/course-graphql.jpg" class="card-img-top" alt="corso-1">
<div class="card-body d-flex flex-wrap pb-2 w-100 p-1">
<div class="w-100"> 
<h6 class="card-title w-100 d-block">GraphQL: introduction to graphQL for beginners</h6>
</div>
<div class="w-100 d-flex align-items-center pb-2" style="gap: 5px;">
<ion-icon name="time-outline"></ion-icon>
<div>2h 40</div>
<ion-icon name="cellular-outline"></ion-icon>
<div>Advance</div>
</div>

<div class="w-100 rating d-flex justify-content-start align-items-center pb-2" id="rating" data-rating="0">
<div class="rating d-flex w-100 align-items-center  ">
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
<ion-icon name="star-outline"></ion-icon>
<div class="score p-2" style="color: #FFAA46 ;">0.0</div>
<div class="text-secondary fs-6">(1,500)</div>
</div>
</div>

<div class="d-flex w-100 pt-1 pb-2">
<h5>$500</h5>
<h6 class="text-secondary fs-6 m-0 ps-2 pt-1"><s>$600</s></h6>
</div>

</div>
<ul class="list-group list-group-flush w-100">
<li class="list-group-item px-0 w-100">

<div class="d-flex align-self-center pe-0 w-100"> 
<div class="  align-items-center">
<div class=""><img src="./assets/assets/avatar-5.jpg" alt="avatar" style="width: 20px;" class="rounded-circle"></div>
</div>
<div class=" ps-2 pe-4 text-nowrap">Brooklyn Simmons</div>
<div class="saveIcon"><ion-icon name="bookmark-outline"></ion-icon></div>
</div>
</li>
</ul>
</div>
<!-- END CARD -->
</div>`

    }
    
}
addItems();
addCarousel();

const score = document.querySelector('.score')
const stars = document.querySelectorAll('.rating ion-icon')
const save = document.querySelectorAll('.saveIcon ion-icon')
const fillStar = function(event,index){
  const starPerCard = event.target.closest('.card').querySelectorAll("ion-icon[name*=star]")
    for (let i = 0; i <= starPerCard.length; i++) {
      // event.target.setAttribute('name','star')
      console.log(starPerCard[i].name);
      if (i <= index) {
        starPerCard[i].name = "star";
        score.innerHTML = index+1 +'.0'      
      }
      else{
        starPerCard[i].name = "star-outline";
      }
    }

  }
  const toggleStar = function(event,index){
      for (let i = 0; i <= index; i++) {
        stars[i].name = "star-outline" 
        score.innerHTML = '0.0' 
      }
  }
  
  const fillSaveIcon = function(event,index){
    
      event.target.name = 'bookmark'
      // if (event.type === "click") {
      //     console.log(event);
      // }  
    }
  const removeSaveIcon = function(event){
      event.target.name = 'bookmark-outline'
    }

  for (let i = 0; i < save.length; i++) {
    save[i].onmouseover = function(event){
      fillSaveIcon(event,i)
    }
    save[i].onmouseleave = function(event){
      removeSaveIcon(event,i)
    }
    save[i].onclick = function(event){
      fillSaveIcon(event,i)
      save[i].onmouseleave = null;
    }
  }

  for (let i = 0; i < stars.length; i++) {
    stars[i].onmouseover = function(event){
      fillStar(event,i);
    };
    stars[i].onmouseleave = function (event){
      toggleStar(event,i);  
    }
    stars[i].onclick = function(event) {
      fillStar(event,i);
      stars[i].onmouseleave = null; 
    };
  }


// save.addEventListener("mouseover",fillSaveIcon);
// save.addEventListener("mouseleave",removeSaveIcon);
// save.addEventListener("click",fillSaveIcon);


