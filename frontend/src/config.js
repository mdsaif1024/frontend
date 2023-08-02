const app_config = {
    apiUrl : 'http://localhost:5000',
    mockupData: {
        templates : [
            {
              name : 'Book',
              category : 'stationary',
              type: 'book',
                image : '/mockups/img6.jpg',
                dimensions: {
                  x: 475,
                  y: 197,
                  width: 335,
                  height: 490
                }

            },
            {
              name : 'Recycle Bag',
              category : 'bag',
              type: 'bag',
                image : '/mockups/img9.jpg',
                dimensions: {
                  x: 268,
                  y: 538,
                  width: 375,
                  height: 271
                }
            },
            {
              name : 'Watch',
              category : 'watch',
              type: 'time',
                image : '/mockups/img10.jpg'
            },
            {
              name : 'Mug',
              category : 'mug',
              type: 'utensil',
                image : '/mockups/img3.png',
                dimensions: {
                  x: 428,
                  y: 213,
                  width: 272,
                  height: 270
                }
            },
            {
              name : 'T-Shirts',
              category : 'cloth',
              type: 'cloth',
                image : '/mockups/img4.jpg',
                dimensions: {
                  x: 592,
                  y: 371,
                  width: 194,
                  height: 224
                }
                
            },
            {
              name : 'Pillow',
              category : 'bedroom',
              type: 'cover',
                image : '/mockups/img5.jpg',
                dimensions: {
                  x: 549,
                  y: 424,
                  width: 168,
                  height: 149
                }
            },
            {
              name : 'Smart TV',
              category : 'electronics',
              type: 'gadgets',
                image : '/mockups/img11.jpg',
                dimensions: {
                  x: 402,
                  y: 268,
                  width: 364,
                  height: 203
                }
            },
            {
              name : 'Instagram Website Post',
              category : 'social-media',
              type: 'desktop',
                image : '/mockups/img12.jpg',
                dimensions: {
                  x: 506,
                  y: 198,
                  width: 268,
                  height: 518
                }
            },
            
        ],

    }
}

export default app_config;