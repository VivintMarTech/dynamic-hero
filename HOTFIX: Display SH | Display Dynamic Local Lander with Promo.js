// TARGETING:
// https://www.vivint.com/display/location

try{
    // grab Optimizely tools
    var utils = window.optimizely.get('utils');
    (function(){
        // wait for specific element to exist
        utils.waitForElement("#media-slider-1036711 > div > div.quotes-container.slick-initialized.slick-slider > div > div > div:nth-child(3) > div > div > h3").then(function(){
            //your code here
        // Local Service Area - Embedded Map
        document.querySelector("#local-area-google-map").innerHTML = '<iframe width="600" height="450" frameborder="0" style="border:0" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=provo+utah&key=AIzaSyAeYKL4bw9F4X9GKpgv_GZnBXmgvwFCF7o" data-src="https://www.google.com/maps/embed/v1/place?q=provo+utah&key=AIzaSyAeYKL4bw9F4X9GKpgv_GZnBXmgvwFCF7o" class=" hb-defer-offscreen"></iframe></div>';
        document.querySelector("#local-service-area-1036691").style.display = "none";
        document.querySelector("#local-service-area-1036691 > div > div > div > div.content > div.hours-container > ul > li:nth-child(2)").style.display = "none";
    
        var locationUrlParams = new URLSearchParams(window.location.search);
        var locationCopy = [
            {
                geo_id: "1015254",
                city: "Atlanta",
                state: "Georgia",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-1600.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-1024.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-768.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-520.jpg"
            },
            {
                geo_id: "21132",
                city: "",
                state: "Alaska",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/alaska/alaska-geo-hero-1600-min.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/alaska/alaska-geo-hero-1024-min.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/alaska/alaska-geo-hero-768-min.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/alaska/alaska-geo-hero-520-min.jpg"
            },
            {
                geo_id: "21133",
                city: "",
                state: "Alabama",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/alabama/alabama-geo-hero-1600.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/alabama/alabama-geo-hero-1024.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/alabama/alabama-geo-hero-768.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/alabama/alabama-geo-hero-520.jpg"
            },
            {
                geo_id: "21135",
                city: "",
                state: "Arkansas",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/arkansas/arkansas-geo-hero-1600.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/arkansas/arkansas-geo-hero-1024.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/arkansas/arkansas-geo-hero-768.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/arkansas/arkansas-geo-hero-520.jpg"
            },
            {
                geo_id: "21136",
                city: "",
                state: "Arizona",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/nevada/nevada-geo-hero-1600-min.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/nevada/nevada-geo-hero-1024-min.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/nevada/nevada-geo-hero-768-min.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/nevada/nevada-geo-hero-520-min.jpg"
            },
            {
                geo_id: "21137",
                city: "",
                state: "California",
                ophrs: "",
                  address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/california/california-geo-hero-1600-min.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/california/california-geo-hero-1024-min.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/california/california-geo-hero-768-min.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/california/california-geo-hero-520-min.jpg"
            },
            {
                geo_id: "21138",
                city: "",
                state: "Colorado",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/colorado/colorado-geo-hero-1600-min.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/colorado/colorado-geo-hero-1024-min.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/colorado/colorado-geo-hero-768-min.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/colorado/colorado-geo-hero-520-min.jpg"
            },
            {
                geo_id: "21139",
                city: "",
                state: "Connecticut",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21141",
                city: "",
                state: "Delaware",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21142",
                city: "",
                state: "Florida",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/florida-geo-hero-dark2-1600.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/florida-geo-hero-dark-1024.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/florida-geo-hero-dark-768.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/florida-geo-hero-dark-520.jpg"
            },
            {
                geo_id: "21143",
                city: "",
                state: "Georgia",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-1600.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-1024.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-768.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-520.jpg"
            },
            {
                geo_id: "21144",
                city: "",
                state: "Hawaii",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21145",
                city: "",
                state: "Iowa",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21146",
                city: "",
                state: "Idaho",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21147",
                city: "",
                state: "Illinois",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21148",
                city: "",
                state: "Indiana",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21150",
                city: "",
                state: "Kentucky",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/night-house-geo-hero-dark-1600.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/night-house-geo-hero-dark-1024.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/night-house-geo-hero-dark-768.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/night-house-geo-hero-dark-520.jpg"
            },
            {
                geo_id: "21151",
                city: "",
                state: "Louisiana",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/louisiana/louisiana-geo-hero-1600.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/louisiana/louisiana-geo-hero-1024.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/louisiana/louisiana-geo-hero-768.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/louisiana/louisiana-geo-hero-520.jpg"
            },
            {
                geo_id: "21153",
                city: "",
                state: "Maryland",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/maryland/maryland-geo-hero-1600.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/maryland/maryland-geo-hero-1024.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/maryland/maryland-geo-hero-768.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/maryland/maryland-geo-hero-520.jpg"
            },
            {
                geo_id: "21152",
                city: "",
                state: "Massachusetts",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21155",
                city: "",
                state: "Michigan",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21156",
                city: "",
                state: "Minnesota",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21158",
                city: "",
                state: "Mississippi",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21157",
                city: "",
                state: "Missouri",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21159",
                city: "",
                state: "Montana",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21162",
                city: "",
                state: "Nebraska",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21166",
                city: "",
                state: "Nevada",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/nevada/nevada-geo-hero-1600-min.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/nevada/nevada-geo-hero-1024-min.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/nevada/nevada-geo-hero-768-min.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/nevada/nevada-geo-hero-520-min.jpg"
            },
            {
                geo_id: "21163",
                city: "",
                state: "New Hampshire",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21164",
                city: "",
                state: "New Jersey",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21165",
                city: "",
                state: "New Mexico",
                ophrs: "",
                address: "",
                bg_1600: "https://wwwassets.s3.amazonaws.com/global/vivint.com/display/local/new-mexico-geo-hero-1600.jpg",
                bg_1024: "https://wwwassets.s3.amazonaws.com/global/vivint.com/display/local/new-mexico-geo-hero-1024.jpg",
                bg_768: "https://wwwassets.s3.amazonaws.com/global/vivint.com/display/local/new-mexico-geo-hero-768.jpg",
                bg_520: "https://wwwassets.s3.amazonaws.com/global/vivint.com/display/local/new-mexico-geo-hero-520.jpg"
            },
            {
                geo_id: "21167",
                city: "",
                state: "New York",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21160",
                city: "",
                state: "North Carolina",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21161",
                city: "",
                state: "North Dakota",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21168",
                city: "",
                state: "Ohio",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21169",
                city: "",
                state: "Oklahoma",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/oklahoma/oklahoma-geo-hero-1600-min.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/oklahoma/oklahoma-geo-hero-1024-min.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/oklahoma/oklahoma-geo-hero-768-min.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/oklahoma/oklahoma-geo-hero-520-min.jpg"
            },
            {
                geo_id: "21170",
                city: "",
                state: "Oregon",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21171",
                city: "",
                state: "Pennsylvania",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21172",
                city: "",
                state: "Rhode Island",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21173",
                city: "",
                state: "South Carolina",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21174",
                city: "",
                state: "South Dakota",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21175",
                city: "",
                state: "Tennessee",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21176",
                city: "",
                state: "Texas",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/texas/texas-geo-hero-1600.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/texas/texas-geo-hero-1024.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/texas/texas-geo-hero-768.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/texas/texas-geo-hero-520.jpg"
            },
            {
                geo_id: "21177",
                city: "",
                state: "Utah",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/utah/utah-geo-hero-1600-min.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/utah/utah-geo-hero-1024-min.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/utah/utah-geo-hero-768-min.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/utah/utah-geo-hero-520-min.jpg"
            },
            {
                geo_id: "21179",
                city: "",
                state: "Vermont",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21178",
                city: "",
                state: "Virginia",
                ophrs: "",
                address: "",
                bg_1600: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-1600.jpg",
                bg_1024: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-1024.jpg",
                bg_768: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-768.jpg",
                bg_520: "https://images.vivintcdn.com/global/vivint.com/display/local/american-flag-geo-hero-dark-520.jpg"
            },
            {
                geo_id: "21180",
                city: "",
                state: "Washington",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21183",
                city: "",
                state: "West Virginia",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21182",
                city: "",
                state: "Wisconsin",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            },
            {
                geo_id: "21184",
                city: "",
                state: "Wyoming",
                ophrs: "",
                address: "",
                bg_1600: "",
                bg_1024: "",
                bg_768: "",
                bg_520: ""
            }
        ];
        
        // loop through array
        for( var i=0; i<locationCopy.length; i++){
            //check if url param promo exists
            if( locationUrlParams.get('geo') === locationCopy[i].geo_id ){
                //do stuff here, you can assign vars to the object data below or just use the data inside the html you are injecting
    
                // insert background CSS 
                if( locationCopy[i].bg_1600 !== ''){
                    var heroBackground = '\
                    <style type="text/css">\
                    .webp body [data-responsive-background-image="hero-responsive-1036731"] {\
                        background-image: url('+locationCopy[i].bg_520+');\
                    }\
                    @media (min-width: 521px){\
                        .webp body [data-responsive-background-image="hero-responsive-1036731"] {\
                            background-image: url('+locationCopy[i].bg_768+');\
                        }\
                    }\
                    @media (min-width: 768px){\
                        .webp body [data-responsive-background-image="hero-responsive-1036731"] {\
                            background-image: url('+locationCopy[i].bg_1024+');\
                        }\
                    }\
                    @media (min-width: 1025px){\
                        .webp body [data-responsive-background-image="hero-responsive-1036731"] {\
                            background-image: url('+locationCopy[i].bg_1600+');\
                        }\
                    }\
                    </style>';
                    document.head.insertAdjacentHTML('beforeend', heroBackground);
                }
                var locNameShort = locationCopy[i].city;
                var locNameFull = locationCopy[i].city + ", " + locationCopy[i].state;
    
                var myCityLower = locationCopy[i].city.toLowerCase();
                var myStateLower = locationCopy[i].state.toLowerCase();
    
                var finalCity = myCityLower.replace(" ", "-");
                var finalState = myStateLower.replace(" ", "-");
    
                //set invoca campaign
                window.defaultCampaignId = myStateLower.replace(" ", "_");
    
                var cityState = "";
                if (locationCopy[i].city === "") {
                    cityState = finalState;
                    locNameShort = locationCopy[i].state;
                    locNameFull = locationCopy[i].state;
                } else {
                    cityState = finalCity + "+" + finalState;
                }
    
                console.log(cityState);
    
                document.querySelector("#local-service-area-1036691").style.display = "block";
    
                if (locationCopy[i].ophrs === "") {
                    document.querySelector("#local-service-area-1036691 > div > div > div > div.content > div.hours-container").style.display = "none";
                }else {
                    // Local Service Area - Hours of Operation
                    document.querySelector("#local-service-area-1036691 > div > div > div > div.content > div.hours-container > ul > li:nth-child(1) > p").innerHTML = locationCopy[i].ophrs;
                }
                if(locationCopy[i].address === "") {
                    // Local Service Area - Address and TFN
                    document.querySelector("#local-service-area-1036691 > div > div > div > div.content > div.address-container > h5").innerText = 'Vivint - ' + locNameFull;
                    document.querySelector("#local-service-area-1036691 > div > div > div > div.content > div.address-container > p").innerHTML = '<a class="store-phone invoca" href="tel:+18668221220" ctc-page-order-index="9">866.822.1220</a>';
                }else {
                    // Local Service Area - Address and TFN
                    document.querySelector("#local-service-area-1036691 > div > div > div > div.content > div.address-container > h5").innerText = 'Vivint - ' + locNameFull;
                    document.querySelector("#local-service-area-1036691 > div > div > div > div.content > div.address-container > p").innerHTML = locationCopy[i].address + '<br /><a class="store-phone invoca" href="tel:+18668221220">866.822.1220</a>';
                }
                // Hero H1 copy
                
                document.querySelector("#hero-responsive-1036731 > div > div > div.text-container > div.field.heading.field--name-field-html-heading-h1.field--type-text-long.field--label-hidden > h2 > span").innerText = "The best home security systems in " + locNameShort;
                // Making home security easy for CITY residents
                document.querySelector("#storytelling-slide-1036646 > div.paragraph-storytelling-text-container > div > div.paragraph-storytelling-headline > div.paragraph-storytelling-headline > div > h3 > span").innerText = "Making home security easy for " + locNameShort + " residents";
                // Customer reviews
                document.querySelector("#reference-block-1036681 > div.paragraph-content > div > div > div > div.top-container > div.heading-container > div > p > span").innerHTML = "Vivint home security changes lives in " + locNameShort + " and around the country.";
                // Local Service Area - Embedded Map
                document.querySelector("#local-area-google-map").innerHTML = '<iframe width="600" height="450" frameborder="0" style="border:0" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q='+cityState+'&key=AIzaSyAeYKL4bw9F4X9GKpgv_GZnBXmgvwFCF7o" data-src="https://www.google.com/maps/embed/v1/place?q='+cityState+'&key=AIzaSyAeYKL4bw9F4X9GKpgv_GZnBXmgvwFCF7o" class=" hb-defer-offscreen"></iframe></div>';
            }
        }
          });
    })();
      //Catch errors for failure to insert Optimizely test
    } catch(err){
      console.log("Optimizely Test - HOTFIX: Display SH | Display Dynamic Local Lander with Promo - Failed to Insert. Optimizely Error: "+ err);
    }