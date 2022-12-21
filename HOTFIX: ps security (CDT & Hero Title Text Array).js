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
        
        //get promo array from s3
        loadScript('https://wwwassets.s3.amazonaws.com/global/vivint.com/promo/banner/offer-testing-array.js', function () {
            
            utils.waitForElement('div.paragraph-hero').then(function () {
                for (var i = 0; i < promoCopy.length; i++) {
    
                    // get UTM paream
                    var urlParams = new URLSearchParams(window.location.search);
                      var getUtm = urlParams.get('utm_content');
    
                    //match UTM with array from s3
                    if( promoCopy[i].utm_content === getUtm){
                      
                      
                          //update eyebrow
                          document.querySelector('#hero-responsive-1088341 > div > div > div.text-container > div.clearfix.text-formatted.field.field--name-field-html-eyebrow.field--type-text-long.field--label-hidden.field__item > h1 > span').innerHTML = promoCopy[i].eyebrow;
        
                        //update title
                        document.querySelector('#hero-responsive-1088341 > div > div > div.text-container > div.field.heading.field--name-field-html-heading-h1.field--type-text-long.field--label-hidden > h2 > span').innerHTML = promoCopy[i].offer;
                      
                      //update subhead
                      if (promoCopy[i].subhead !== "") {
                        document.querySelector("#hero-responsive-1088341 > div > div > div.text-container > div.clearfix.text-formatted.field.field--name-field-html-subheading.field--type-text-long.field--label-hidden.field__item > p").innerHTML = '<span class="white">' + promoCopy[i].subhead + "</span>";
                      }
    
    
        
                        // move disclaimer from hidden optly comp to bottom hero text
                        var disclaimer = document.querySelector('div.paragraph.paragraph--type--optimizely-component-container > div > div.paragraph--type--compound-disclaimer');
                        document.querySelector('div.paragraph-hero > div > div > div.field.field--name-field-p-link.field--type-entity-reference-revisions.field--label-hidden.field__items').insertAdjacentElement('beforeend', disclaimer);
                        
                        //update disclaimer expiry and promo code
                        document.querySelector('p.viv-copy-update').innerHTML = 'Expires '+ promoCopy[i].exp +'. Use promo code: <strong>'+promoCopy[i].pcode+'</strong>.';
    
                        //check Gift Card
                        if( promoCopy[i].gc !== 'Y'){
                            document.querySelector('head').insertAdjacentHTML('beforeend', '<style>body > div.mfp-wrap.mfp-close-btn-in.mfp-auto-cursor.mfp-ready > div > div.mfp-content.tooltip-popup > div > div > p:nth-child(4), body > div.mfp-wrap.mfp-close-btn-in.mfp-auto-cursor.mfp-ready > div > div.mfp-content.tooltip-popup > div > div > p:nth-child(5){ display: none !important; }</style>');
                        }
                      
                      if(promoCopy[i].utm_content === 'dm_1yr_22' || promoCopy[i].utm_content === 'dm_12mo_22') {
                         document.querySelector("#simple-tooltip-1088321 > div > p:nth-child(3)").innerHTML = 'Offer requires purchase and professional installation of qualifying equipment package ($1799.99 minimum retail value) and execution of applicable services agreement with $54.99 minimum monthly service fee. DIY system purchases and reactivations of previously-installed systems not eligible for offer. Offer not available to existing Vivint customers or consumers located outside Vivint serviceable areas. Monthly $1.48 cellular network maintenance fee applies. Taxes and local permit fees may apply.';
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
      console.log("Optimizely Test - HOTFIX: ps/security (CDT & Hero Title Text Array) - Failed to Insert. Optimizely Error: "+ err);
    }