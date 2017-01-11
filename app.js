(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService', MenuSearchService );

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowDown = this;
  narrowDown.found = MenuSearchService.getItemsToBeBought();
  narrowDown.searchText ="";
  narrowDown.errorMessage = "";

  narrowDown.narrowDownSearch = function ()
  {
    if(narrowDown.searchText === "")
    {
      narrowDown.errorMessage = "Nothing found";
    }
    else
    {
      MenuSearchService.getMatchedMenuItems(narrowDown.searchText);
    }
  }
}

function MenuSearchService() {
  var service = this;

  // List of shopping items
  var itemsToBeBought = [{
    name : "Milk",
    short_name: "10",
    description : "abc"
  }];

  service.getMatchedMenuItems = function (searchTerm) {

  }

})();
