import { HStack } from '@chakra-ui/react';

const card = [
  {
    getImageSrc: () => require('../icons_assets/greek salad.jpg'),
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
    test: 'Order Delivery'
  },
  {
    getImageSrc: () => require('../icons_assets/greek salad.jpg'),
    title: 'Bruchetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    test: 'Order Delivery'
  },
  {
    getImageSrc: () => require('../icons_assets/greek salad.jpg'),
    title: 'Lemon Dessert',
    price: '$4.99',
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    test: 'Order Delivery'
  },
]

function Specials({title, price, description, test}) {
    return (
      <body>
        <HStack>
        <h2>Specials</h2>
        <button>Online Menu</button>
        
        </HStack>

      </body>
    );
  }
  
  export default Specials;
  