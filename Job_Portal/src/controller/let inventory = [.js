let inventory = [
    {
      brand: 'Parle',
      products: [
        {
          brand: 'Parle Agro',
          products: [
            {
              brand: 'Frooti',
              products: []
            },
            {
              brand: 'Bailey',
              products: []
            }
          ]
        }
      ]
    },
    {
      brand: 'Pepsico',
      products: [
        {
          brand: 'VB',
          products: [
            {
              brand: 'Lays',
              products: []
            },
            {
              brand: 'Kurkure',
              products: [
                {
                  brand: 'Mad Angles',
                  products: []
                }
              ]
            }
          ]
        },
        {
          brand: 'Pepsi',
          products: []
        }
      ]
    },
    {
      brand: 'Cadbury',
      products: []
    }
  ];
  

  
inventory.forEach((i)=>{
    const brandname=i.products.brand;
    console.log(`${i.brand}:${brandname}`);
})
