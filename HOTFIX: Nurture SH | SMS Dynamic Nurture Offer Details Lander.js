try{
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
        
        loadScript('https://wwwassets.s3.amazonaws.com/global/email/Acquisition/landers/sms-dynamic-array.js', function () {
            console.log("External loaded");
            
            // wait for specific element to exist
            utils.waitForElement('[id*="compound-text-cta-"] > div > div.clearfix.text-formatted.field.field--name-field-description.field--type-text-long.field--label-hidden.field__item > p > span').then(function () {
                //your code here
        
                var nurtureUrlParams = new URLSearchParams(window.location.search);
        
                // create an array of objects that represent your data
        
                // loop through array
                for (var i = 0; i < promoCopy.length; i++) {
                    //check if url param promo exists
                    if (nurtureUrlParams.get('promo') === promoCopy[i].promo) {
                        //do stuff here, you can assign vars to the object data below or just use the data inside the html you are injecting
                        var nurturePromoOffer = promoCopy[i].offer;
                        var nurturePromoCode = promoCopy[i].pcode;
                        var nurturePromoExpiration = promoCopy[i].exp;
                        var nurturePromoGC = promoCopy[i].gc;
                        var nurturePromoExtra = promoCopy[i].extra;
                        var nurtureGCInsert = "";
                        var nurtureSubCTA = "";
                        var nurtureLowerOffer = "";
    
                        if (promoCopy[i].gc === "") { nurtureGCInsert = "</p>"; } else { nurtureGCInsert = '</p><p><strong>Gift Card Details</strong></p><p>The Vivint Gift Card offer requires redemption. You will receive an email from <a href="mailto:help@vivintgift.com">help@vivintgift.com</a> to the email address you provide within 15 business days after installation of your new Vivint system. This email will contain your Gift Card Redemption Form. To properly submit your Redemption Form, you must print, complete, and mail the Redemption Form to the address on the form within 30 days from the date of receipt. Your gift card will be mailed to you within 3-6 weeks of proper Redemption Form submission.</p>'; }
                        if (promoCopy[i].extra === "") { nurturePromoExtra = "&nbsp;"; } else { nurturePromoExtra = promoCopy[i].extra; }
    
                        // PROMO CODE EXPIRATION DATE CONDITIONALS
                        var g1 = new Date();
                        var g2 = new Date(`${nurturePromoExpiration} 23:59:59 GMT-07:00`);
                        
                        // OFFER EXPIRED
                        if (g1.getTime() > g2.getTime()) {
                            console.log("Offer is expired");
                            nurturePromoOffer = "This Offer Has Expired.";
                            nurtureSubCTA = "But you can still save with Free Installation*.<br />Call now: use promo code FREE23";
                            nurturePromoCode = "FREE23";
                            nurturePromoExpiration = "Dec 31, 2022";
                            nurtureLowerOffer = "Get Free Installation of a Vivint system*";
                            }
                        //OFFER ACTIVE
                        else if (g1.getTime() <= g2.getTime()) {
                            console.log("Offer is still active");
                            nurtureSubCTA = "Call now: Use promo code " + nurturePromoCode;
                            nurtureLowerOffer = nurturePromoOffer;
                        }
        
                        console.log("URL parameter is: " + promoCopy[i].promo);
                        console.log("Promo Offer is: " + nurturePromoOffer);
                        console.log("Promo code is: " + nurturePromoCode);
                        console.log("Promo expiration date is: " + nurturePromoExpiration);
        
                        document.querySelector('[id*="hero-responsive-"] > div > div > div.text-container > div.field.heading.field--name-field-html-heading-h1.field--type-text-long.field--label-hidden > h2 > span').innerHTML = nurturePromoOffer;
                        document.querySelector('[id*="hero-responsive-"] > div > div > div.text-container > div.clearfix.text-formatted.field.field--name-field-html-subheading.field--type-text-long.field--label-hidden.field__item > p > span').innerHTML = nurtureSubCTA;
                        document.querySelector('[id*="simple-tooltip-"] > div > div > p').innerHTML = 'Expires ' + nurturePromoExpiration + '. Use promo code: <strong>' + nurturePromoCode + '</strong>.';
                        document.querySelector('[id*="simple-tooltip-"] > div > p:nth-child(3)').innerHTML = nurturePromoExtra + 'Qualifying system purchase requires minimum $599.99 equipment purchase, professional installation and applicable services agreement. Click <a href="https://www.vivint.com/company/policies/terms-of-use" target="_blank">here</a>&nbsp;for monthly service plan prices. DIY system purchases and reactivations of previously-installed systems not eligible for offer. Offer not available in all states or provinces. Equipment purchase may be financed separately subject to an agreement with one of Vivint\'s third - party financing partners. Monthly $1.48 cellular network maintenance fee applies. Taxes and local permit fees may apply. New Vivint Customers only.' + nurtureGCInsert;
                        document.querySelector('[id*="compound-text-cta-"] > div > div.clearfix.text-formatted.field.field--name-field-description.field--type-text-long.field--label-hidden.field__item > h5 > span').innerHTML = nurtureLowerOffer;
                        document.querySelector('[id*="compound-text-cta-"] > div > div.clearfix.text-formatted.field.field--name-field-description.field--type-text-long.field--label-hidden.field__item > p > span').innerHTML = "Call now: Use promo code " + nurturePromoCode;
                        document.querySelector('[id*="compound-text-cta-"] > div > div.clearfix.text-formatted.field.field--name-field-description.field--type-text-long.field--label-hidden.field__item > h5 > span').innerHTML = nurtureLowerOffer;
                        document.querySelector('[id*="compound-text-cta-"] > div > div.clearfix.text-formatted.field.field--name-field-description.field--type-text-long.field--label-hidden.field__item > p > span').innerHTML = "Call now: Use promo code " + nurturePromoCode;
                    }
                }
        
            });
        });
    })();
    } catch(err){
      console.log("Optimizely Test - HOTFIX: Nurture SH | SMS Dynamic Nurture Offer Details Lander - Failed to Insert. Optimizely Error: "+ err);
    }