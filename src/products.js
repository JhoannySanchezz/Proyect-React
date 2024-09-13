 const products = [

    // man
    { id: "man-01", 
      title: "Perfume Hombre 1",
      image: 'https://farmaciadardationline.com.ar/wp-content/uploads/2022/07/8410190627185.jpg',
      category:{
        id: "man",
      },
      precio: 1000,
    },

    { id: "man-02", 
        title: "Perfume Hombre 2",
        image: 'https://http2.mlstatic.com/D_NQ_NP_849970-MLA73480552984_122023-O.webp',
        category:{
          id: "man",
        },
        precio: 1000,
      },
      { id: "man-03", 
        title: "Perfume Hombre 3",
        image: 'https://sergioperfumerias.com/wp-content/uploads/2023/06/7791600778460-perfume-de-hombre-la-martina-rio-negro-eau-de-toilette-x-80-ml_11zon.webp',
        category:{
          id: "man",
        },
        precio: 1000,
      },

    //woman
    { id: "woman-01", 
        title: "Perfume Mujer 1",
        image: 'https://www.farmacialeloir.com.ar/img/articulos/paco_rabanne_olympea_eau_da_parfum_mujer_imagen1.jpg',
        category:{
          id: "woman",
        },
        precio: 1000,
      },
      { id: "woman-02", 
        title: "Perfume Mujer 2",
        image: 'https://http2.mlstatic.com/D_NQ_NP_834696-MLA74178516969_012024-O.webp',
        category:{
          id: "woman",
        },
        precio: 1000,
      },
      { id: "woman-03", 
        title: "Perfume Mujer 3",
        image: 'https://media.vogue.mx/photos/63595b75b16afcc77a2634ec/master/w_1600%2Cc_limit/Perfumes-Mujeres-Chanel-Chance.jpeg',
        category:{
          id: "woman",
        },
        precio: 1000,
      },

      //teenager
      { id: "teenager-01", 
        title: "Perfume Adolescente 1",
        image: 'https://http2.mlstatic.com/D_NQ_NP_701449-MLA77949499305_072024-O.webp',
        category:{
          id: "teenager",
        },
        precio: 1000,
      },
      { id: "teenager-02", 
        title: "Perfume Adolescente 2",
        image: 'https://img.remediosdigitales.com/b31c50/benetton/450_1000.jpeg',
        category:{
          id: "teenager",
        },
        precio: 1000,
      },
      { id: "teenager-03", 
        title: "Perfume Adolescente 3",
        image: 'https://http2.mlstatic.com/D_776874-MLU74712703966_032024-C.jpg',
        category:{
          id: "teenager",
        },
        precio: 1000,
      },
];

export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(products);
    },500)
})

}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

