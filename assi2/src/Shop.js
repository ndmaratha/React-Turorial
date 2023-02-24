import React from 'react'
//map example
export default function Shop() {
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
      ];
      const list=products.map(product=>
        <li key={product.id}
        style={{color: product.isFruit?'red':'green'}}>{product.title}</li>);
    return (
    <div>
      {list}
    </div>
  )
}
