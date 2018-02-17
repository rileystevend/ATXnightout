import React from 'react';

const Show = ({ concert }) => (
  <div>
   {concert.Artists[0].Name}
   {concert.Venue.Name}
   {concert.Venue.Address}
   <a href={concert.Venue.Url}>Venue</a>
  </div>
)

export default Show;