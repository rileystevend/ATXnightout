import React from 'react';

const Dine = ({ restaurant }) => (
  <div>
   {restaurant.restaurant.name}
   {restaurant.restaurant.currency}{restaurant.restaurant.average_cost_for_two}
   <a href={restaurant.restaurant.menu_url}>Menu</a> 
  </div>
)


 export default Dine;