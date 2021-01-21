function init() {
    let facts = document.querySelector('.facts');
    let features = document.querySelector('.features');
    let features_list_grp = document.querySelector('.features ul .grp');
    let see_features = document.querySelector('.features > a');
    let play_btn = document.querySelector('.play__button');
    let close_btn = document.querySelector('.close__button');
    let clip = document.querySelector('.clip');
    let cloak = document.querySelector('.cloak');
    let caption_header = document.querySelector('.caption h3');
    let caption_content = document.querySelector('.caption p');


    let features_expanded = 0;

    const tl = new TimelineMax();

    
        new Glider(document.querySelector('.view__container'), {
            type: 'carousel',
            slidesToShow: 1,
            draggable: true,
            arrows: {
              prev: '.carousel__nav__prev',
              next: '.carousel__nav__next'
            }
          });

        new Glider(document.querySelector('.glider'), {
            type: 'carousel',
            slidesToShow: 3,
            slidesToScroll: 3,
            draggable: false,
          });


        




    see_features.addEventListener('click', function (e) {

        e.preventDefault();
        let icon = this.querySelector('i');

        if (features_expanded == 0) {

            //change icon from - to x

            icon.setAttribute('class', 'fa fa-times');
            features_expanded = 1;

            tl.fromTo(facts, 1.2, { height: "44vh" }, { height: "100vh", ease: Expo.easeInOut });
            tl.fromTo(features_list_grp, 1.5, { display: "none" }, { display: "block" }, 1);
            tl.fromTo(features_list_grp, 0.5, { opacity: "0" }, { opacity: "1" }, 1);
            
            

        } else {
            //change icon from x to -
            icon.setAttribute('class', 'fas fa-plus');
            features_expanded = 0;

            tl.fromTo(features_list_grp, 0.2, { opacity: "1" }, { opacity: "0" }, 1);
            tl.fromTo(features_list_grp, 0.2, { display: "block" }, { display: "none" }, 0.5);
            tl.fromTo(facts, 1.2, { height: " 100vh" }, { height: "44vh", ease: Expo.easeInOut });
            

        }
        
    });

    play_btn.addEventListener('click', function(e){
        e.preventDefault();
        tl.fromTo(features, 0.5, { opacity: "1" }, { opacity: "0" });
        tl.fromTo(features, 0.5, { display: "block" }, { display: "none" });
        tl.fromTo(facts, 1, { width: '40%' }, { width: '100%', ease: Expo.easeInOut });
        tl.fromTo(clip, 0.2, { display: "none" }, { display: "block" });
        tl.fromTo(close_btn, 0.5, { opacity: "0" }, { opacity: "1" });
        tl.fromTo(caption_header, 0.7, { y: "500%" }, { y: "0%", ease: Expo.easeInOut });
        tl.fromTo(caption_content, 1, { y: "500%" }, { y: "0%", ease: Expo.easeInOut });
        

    });

    close_btn.addEventListener('click', function(e){
        e.preventDefault();
        location.reload(); 

    });


}

init();