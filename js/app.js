(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });
 
    app.controller('PanelController', function(){  
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab; 
        }
    });
    app.controller('ReviewController', function(){  
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        }

    });

    var gems = [
        {
            name: 'product Name 01',
            price: 2.95,
            description: 'description 01',
            images: [
            { full: 'product01-image01-full.jpg', thumb: 'product01-image01-thumb.jpg' },
            { full: 'product01-image02-full.jpg', thumb: 'product01-image02-thumb.jpg' },
            { full: 'product01-image03-full.jpg', thumb: 'product01-image03-thumb.jpg' },
          ],
            reviews: [
                { body: "This product is awesome!", stars: 5, author: "fanboy@apple.com" },
                { body: "Would not buy again...", stars: 1, author: "hater@losers.com" },
            ],
            canPurchase: false,
            soldOut: false
        },
        {
            name: 'product Name 02',
            price: 40.5,
            description: 'description 02',
            images: [
            { full: 'product02-image01-full.jpg', thumb: 'product02-image01-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
                      reviews: [
            { body: "This product is S0OOO awesome!", stars: 2, author: "fanboy@apple.com" },
            { body: "Would it buy again...", stars: 1, author: "hater@losers.com" },
          ],
            canPurchase: true,
            soldOut: true
        },
        {
            name: 'product Name 03',
            price: 5.95,
            description: 'description 03',
                        images: [
            { full: 'product03-image01-full.jpg', thumb: 'product03-image01-thumb.jpg' },
            { full: 'product03-image02-full.jpg', thumb: 'product03-image02-thumb.jpg' },
            { full: 'product03-image03-full.jpg', thumb: 'product03-image03-thumb.jpg' },
          ],
            canPurchase: true,
            soldOut: false
        }
    ]
})();
