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
const carousel_1 = document.querySelector("#carousel_1 .row")

const addItems = function(){
    for (let i = 0; i < 4; i++) {
        console.log(mini_nav_items.h);
        carousel_1.innerHTML += `<div class="col-3">
                                
        <div class="card w-100">
            <img src="./assets/assets/course-graphql.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="card-title">GraphQL: introduction to graphQL for beginners</h6>
                <div class="d-flex align-items-center justify-content-around">
                    <ion-icon name="time-outline"></ion-icon>
                    <div>2h 40</div>
                    <ion-icon name="cellular-outline"></ion-icon>
                    <div>Advance</div>
                </div>
                <div class="rating" id="rating" data-rating="0">
                    <span class="star" data-value="1">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="5">&#9733;</span>
                </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>

    </div>`
    }
}
//  addItems();
// addCarousel()
