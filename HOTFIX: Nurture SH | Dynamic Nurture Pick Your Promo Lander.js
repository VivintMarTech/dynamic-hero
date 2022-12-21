// TARGETING:
// https://www.vivint.com/promo/pick

try {
// grab Optimizely tools
var utils = window.optimizely.get('utils');
(function () {

    var loadScript = function (location, callback) {
        var fileRef = document.createElement('script');
        fileRef.setAttribute('type', 'text/javascript');
    
        if (callback) {
            if (fileRef.readyState) {  // IE
                fileRef.onreadystatechange = function () {
                    if (fileRef.readyState == 'loaded' || fileRef.readyState == 'complete') {
                        fileRef.onreadystatechange = null;
                        callback();
                    }
                };
            } else {  // Non-IE
                fileRef.onload = function () {
                    callback();
                };
            }
        }
    
        fileRef.setAttribute('src', location);
        document.head.appendChild(fileRef);
    };
    
    loadScript('https://wwwassets.s3.amazonaws.com/global/email/Acquisition/landers/pick-promo-array.js', function () {
        console.log("External loaded");
        
        // wait for specific element to exist
        utils.waitForElement('#compound-info-cards-1139361 > div > div.clearfix.text-formatted.field.field--name-field-html-heading-h2-h6.field--type-text-long.field--label-hidden.field__item > h3 > span').then(function () {
            //your code here

            document.querySelector("#link-default-1139481 > div.field.field--name-field-p-disclaimer.field--type-entity-reference-revisions.field--label-hidden.field__item").style.display = "none";

            var nurtureUrlParams = new URLSearchParams(window.location.search);
    
            // create an array of objects that represent your data
    
            // loop through array
            for (var i = 0; i < promoCopy.length; i++) {
                //check if url param promo exists
                if (nurtureUrlParams.get('promo') === promoCopy[i].promo) {
                    //do stuff here, you can assign vars to the object data below or just use the data inside the html you are injecting
                    var nurHeroEyebrow = promoCopy[i].eyebrow;
                    var nurHeroHeadline = promoCopy[i].headline;
                    var nurHeroSubhead = promoCopy[i].subhead;
                    var nurHeroCTABtn1 = promoCopy[i].cta1;
                    var nurHeroCTABtn2 = promoCopy[i].cta2;
                    var nurP1Headline = promoCopy[i].p1headline;
                    var nurP1Code = promoCopy[i].p1pcode;
                    var nurP1Exp = promoCopy[i].p1exp;
                    var nurP1GC = promoCopy[i].p1gc;
                    var nurP2Headline = promoCopy[i].p2headline;
                    var nurP2Code = promoCopy[i].p2pcode;
                    var nurP2Exp = promoCopy[i].p2exp;
                    var nurP2GC = promoCopy[i].p2gc;


                    
                    // PROMO CODE EXPIRATION DATE CONDITIONALS
                    var g1 = new Date();
                    var g2 = new Date(`${nurP1Exp} 23:59:59 GMT-07:00`);
                    
                    // OFFER EXPIRED
                    if (g1.getTime() > g2.getTime()) {
                        console.log("Offer is expired");
                        nurHeroHeadline = "This offer has expired";
                        nurHeroSubhead = "But you can still save with Free Installation*";

                        document.querySelector("#hero-responsive-1139471 > div > div > div.field.field--name-field-p-link.field--type-entity-reference-revisions.field--label-hidden.field__items > div:nth-child(1)").style.display = "none";

                        document.querySelector("#link-default-1139481 > div.clearfix.text-formatted.field.field--name-field-html-eyebrow.field--type-text-long.field--label-hidden.field__item > p > span").innerHTML = "Call now: use promo code FREE23";

                        nurHeroCTABtn2 = "Claim Offer";
                        
                        nurP1Code = "FREE23";
                        nurP2Code = "FREE23";
                        nurP1Exp = "Dec 31, 2022";
                        nurP2Exp = "Dec 31, 2022";
                        nurP1Headline = "Get Free Installation of a Vivint System";
                        nurP2Headline = "Get Free Installation of a Vivint System";


                        document.querySelector("#compound-disclaimer-1140266 > div > div.clearfix.text-formatted.field.field--name-field-description.field--type-text-long.field--label-hidden.field__item > p > span > span").style.display = "inline-block";
                      document.querySelector("#link-default-1139481 > div.field.field--name-field-p-disclaimer.field--type-entity-reference-revisions.field--label-hidden.field__item").style.display = "inline-block";
                      
                      document.querySelector("#simple-tooltip-1140261 > div > div > p:nth-child(1)").innerHTML = "Expires " + nurP1Exp + ". Use promo code: <strong>" + nurP1Code + "</strong>.";
                        }
                    
                    // HERO MODULE
                    document.querySelector("#hero-responsive-1139471 > div > div > div.text-container > div.clearfix.text-formatted.field.field--name-field-html-eyebrow.field--type-text-long.field--label-hidden.field__item > p > span").innerHTML = nurHeroEyebrow;

                    document.querySelector("#hero-responsive-1139471 > div > div > div.text-container > div.field.heading.field--name-field-html-heading-h1.field--type-text-long.field--label-hidden > h2 > span").innerHTML = nurHeroHeadline;

                    document.querySelector("#hero-responsive-1139471 > div > div > div.text-container > div.clearfix.text-formatted.field.field--name-field-html-subheading.field--type-text-long.field--label-hidden.field__item > h5 > span").innerHTML = nurHeroSubhead;

                  document.querySelector("#link-default-1139476 > div > a").innerText = nurHeroCTABtn1;
                  
                  document.querySelector("#link-default-1139481 > div.field--type-link.field--name-field-link.primary.theme-default.theme-green.mod-no-icon > a").innerText = nurHeroCTABtn2;

                  // PROMO CODE 1 MODULE
                  document.querySelector("#compound-text-cta-1139376 > div > div.clearfix.text-formatted.field.field--name-field-description.field--type-text-long.field--label-hidden.field__item > h5 > span").innerHTML = nurP1Headline + "*";

                  document.querySelector("#compound-text-cta-1139376 > div > div.clearfix.text-formatted.field.field--name-field-description.field--type-text-long.field--label-hidden.field__item > p > span").innerHTML = "Call now: use promo code " + nurP1Code;

                  document.querySelector("#simple-tooltip-1139486 > div > div > p").innerHTML = "Expires " + nurP1Exp + ". Use promo code: <strong>" + nurP1Code + "</strong>.";

                  if (promoCopy[i].p1gc !== "Y") { document.querySelector("#simple-tooltip-1139486 > div > p:nth-child(4)").style.display = "none"; document.querySelector("#simple-tooltip-1139486 > div > p:nth-child(5)").style.display = "none"; }
                  

                  // PROMO CODE 2 MODULE
                  document.querySelector("#compound-text-cta-1139431 > div > div.clearfix.text-formatted.field.field--name-field-description.field--type-text-long.field--label-hidden.field__item > h5 > span").innerHTML = nurP2Headline + "*";

                  document.querySelector("#compound-text-cta-1139431 > div > div.clearfix.text-formatted.field.field--name-field-description.field--type-text-long.field--label-hidden.field__item > p > span").innerHTML = "Call now: use promo code " + nurP2Code;

                  document.querySelector("#simple-tooltip-1139491 > div > div > p").innerHTML = "Expires " + nurP2Exp + ". Use promo code: <strong>" + nurP2Code + "</strong>.";

                  if (promoCopy[i].p2gc !== "Y") { document.querySelector("#simple-tooltip-1139491 > div > p:nth-child(4)").style.display = "none"; document.querySelector("#simple-tooltip-1139491 > div > p:nth-child(5)").style.display = "none"; }

                    
            }
            }
    
        });
    });
})();
} catch(err) {
  console.log("Optimizely Test - HOTFIX: Nurture SH | Dynamic Nurture Pick Your Promo Lander. Optimizely Error: "+ err);
}
