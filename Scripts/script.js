$( document ).ready(function() {
 
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })

    let portfolio_pic_count = 8;
    let template = `<div class="col-md-4 col-sm-6">
                        <a href="portfolio-item.html">
                        <img class="img-responsive img-portfolio img-hover" src="/Images/{{index}}.JPG" alt="">
                        </a>
                    </div>`;

    for (i = 1; i <= portfolio_pic_count; i++) { 
        let htmlString = template.replace("{{index}}",i);
        $('#portfolio-pics').append(htmlString);
    } 
});



