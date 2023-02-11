window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

let shopItemsData = [
    {
      id: "vapo1",
      name: "Supreme Epic Blue Raspberry",
      price: 8000,
      desc: "5000 Puffs",
      img: "images/34.jpeg"
    },
  
    { id: "vapo2",
      name: "Supreme Epic Watermelon Candy",
      price: 8000,
      desc: "5000 Puffs",
      img: "images/32.jpeg"
    },
  
     { id: "vapo3",
      name: "Supreme Epic+ Banana Ice",
      price: 9000,
      desc: "7000 Puffs Recargable",
      img: "images/40.jpeg"
    },
  
    { id: "vapo4",
      name: "Supreme Epic+ Purple Rain",
      price: 9000,
      desc: "7000 Puffs Recargable",
      img: "images/42.jpeg"
    },
  
    { id: "vapo5",
      name: "Supreme Epic+ Strawberry Water",
      price: 9000,
      desc: "7000 Puffs Recargable",
      img: "images/39.jpeg"
    },
  
    { id: "vapo6",
      name: "Supreme Epic+ Watermelon Candy",
      price: 9000,
      desc: "7000 Puffs Recargable",
      img: "images/37.jpeg"
    },
  
    { id: "vapo7",
      name: "Supreme Epic+ Blueberry Mint",
      price: 9000,
      desc: "7000 Puffs Recargable",
      img: "images/46.jpeg"
    },

    { id: "vapo8",
      name: "Supreme Epic+ Black Ice",
      price: 9000,
      desc: "7000 Puffs Recargable",
      img: "images/61.jpeg"
    },
  
    { id: "vapo9",
      name: "Supreme Epic+ Lush Ice",
      price: 9000,
      desc: "7000 Puffs Recargable",
      img: "images/62.jpeg"
    },

    { id: "vapo10",
    name: "Supreme Epic+ Grape Ice",
    price: 9000,
    desc: "7000 Puffs Recargable",
    img: "images/63.jpeg"
  },
 ];