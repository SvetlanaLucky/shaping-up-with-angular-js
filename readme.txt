ng-app creates an angular app by running this module when the document loads
in controllers we define behavior by defining functions and values

directives:
ng-hide
ng-show
ng-init
ng-repeat="product in store.products"
<h1>{{product.name}}</h1>

filters:
| currency
| uppercase
| limitTo: 2
| orderBy: '-price'