// TARGETING:
// https://www.vivint.com/influencers/monitoring

try{
    //dynamic hero
    (function () {
    
        var utils = window.optimizely.get('utils');
    
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
      
            //hide disclaimer
            document.querySelector("#link-call-1158471 > div.field.field--name-field-p-disclaimer.field--type-entity-reference-revisions.field--label-hidden.field__item").style.display = "no";
        
        //get promo array from s3
        loadScript('https://wwwassets.s3.amazonaws.com/global/vivint.com/promo/banner/offer-testing-array.js', function () {
            
            utils.waitForElement('div.paragraph-hero').then(function () {
                for (var i = 0; i < promoCopy.length; i++) {
    
                    // get UTM paream
                    var urlParams = new URLSearchParams(window.location.search);
                      var getUtm = urlParams.get('utm_content');
    
                    //match UTM with array from s3
                    if( promoCopy[i].utm_content === getUtm){
                      
                      
        
                        //update title in hero
                        document.querySelector("#hero-responsive-1158476 > div > div > div.text-container > div.field.heading.field--name-field-html-heading-h1.field--type-text-long.field--label-hidden > h1 > span").innerHTML = promoCopy[i].offer;

                        //update title in second blade
                        document.querySelector("#storytelling-slide-1158266 > div.paragraph-storytelling-text-container > div > div.paragraph-storytelling-headline > div.paragraph-storytelling-headline > div > h3 > span").innerHTML = promoCopy[i].offer;

                        //update CTA eyebrow with promo code
                        document.querySelector("#link-call-1158471 > div.clearfix.text-formatted.field.field--name-field-html-eyebrow.field--type-text-long.field--label-hidden.field__item > h6 > span").innerHTML = 'Call Now: Use promo code ' + promoCopy[i].pcode;

                        //update CTA eyebrow with promo code in second blade
                        document.querySelector("#link-call-2020-1158261 > div.clearfix.text-formatted.field.field--name-field-html-eyebrow.field--type-text-long.field--label-hidden.field__item > h6 > span").innerHTML = 'Call Now: Use promo code ' + promoCopy[i].pcode;


                        
                      
                      //update subhead
                      if (promoCopy[i].subhead !== "") {
                        document.querySelector("#hero-responsive-1158476 > div > div > div.text-container > div.clearfix.text-formatted.field.field--name-field-html-subheading.field--type-text-long.field--label-hidden.field__item > p > span").innerHTML = '<span class="white">' + promoCopy[i].subhead + "</span>";
                      }
                      
                      //show disclaimer
                      document.querySelector("#link-call-1158471 > div.field.field--name-field-p-disclaimer.field--type-entity-reference-revisions.field--label-hidden.field__item").style.display = "inline-block";
    
        
                        // move disclaimer from hidden optly comp to bottom hero text
                        document.querySelector("#simple-tooltip-1168001 > div > div > p").innerHTML = "Expires " + promoCopy[i].exp + ". Use promo code: <strong>" + promoCopy[i].pcode + "</strong>.";
    
                      
                      if(promoCopy[i].utm_content === 'dm_1yr_22' || promoCopy[i].utm_content === 'dm_12mo_22') {
                         document.querySelector("#simple-tooltip-1145436 > div > p:nth-child(3)").innerHTML = 'Offer requires purchase and professional installation of qualifying equipment package ($1799.99 minimum retail value) and execution of applicable services agreement with $54.99 minimum monthly service fee. DIY system purchases and reactivations of previously-installed systems not eligible for offer. Offer not available to existing Vivint customers or consumers located outside Vivint serviceable areas. Monthly $1.48 cellular network maintenance fee applies. Taxes and local permit fees may apply.';
                         }
                      
    
                        // break loop when exid is hit
                        break;
                    }
    
                }
            });
        });
    })();
      
    //Catch errors for failure to insert Optimizely test
    } catch(err){
      console.log("Optimizely Test - HOTFIX: Influencers Dynamic Lander (influencers/monitoring) - Failed to Insert. Optimizely Error: "+ err);
    }