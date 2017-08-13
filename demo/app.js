(function (){
	var app = angular.module('store', [ ])
	app.controller ('StoreController',function(){
		this.products=gems;
	});
	var gems=[
		{
			name: 'Diamond',
			price: '2.95',
			description: 'Valuable', 
			canPurchase:true,
			soldOut:false,
			image: 'flawless-diamond.png',
		},
				{
			name: 'Ruby',
			price: '5.95',
			description: ' Extremly Valuable', 
			canPurchase:true,
			soldOut:false,
			image: 'ruby.jpg',
		},
			{
			name: 'Melanite',
			price: '10.95',
			description: ' Extremly Valuable,Black', 
			canPurchase:true,
			soldOut:false,
			image: 'melanite.jpg',
		},


	];
	app.controller ('PanelController',function(){
		this.tab=1;
		this.selectTab = function(setTab){
			this.tab=setTab;
		};
		this.isSelected = function(checkTab){
			return checkTab === this.tab;
 		};
	});

})();