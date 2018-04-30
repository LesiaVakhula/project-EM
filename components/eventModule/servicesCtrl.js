module.exports =  function ($scope, $stateParams) {
    $scope.id = $stateParams.id;
    $scope.serviceData = [{
            id: 1,
            name: 'cars',
            items: [{
                    itemId: 1,
                    name: 'Tesla',
                    cost: 276,
                    amount: 2,
                    color: 'black',
                    driver: ' Vasya Pupkin',
                    image: ' imageurl'
                },
                {
                    itemId: 2,
                    name: 'Toyota',
                    cost: 276,
                    amount: 2,
                    color: 'black',
                    driver: ' Vasya Pupkin',
                    image: ' imageurl'
                }
            ]
        },
        {
            id: 2,
            name: 'halls',
            items: [{
                    itemId: 1,
                    name: 'McDonalds',
                    cost: 276,
                    image: ' imageurl'
                },
                {
                    itemId: 2,
                    name: 'KFC',
                    cost: 276,
                    image: ' imageurl'
                }
            ]
        },
        {
            id: 4,
            name: 'memorial-halls',
            items: [{
                    itemId: 1,
                    name: 'test',
                    cost: 276,
                    image: ' imageurl'
                },
                {
                    itemId: 2,
                    name: 'kek',
                    cost: 276,
                    image: ' imageurl'
                }
            ]

        },
        {
            id: 5,
            name: 'food-courts',
            items: [{
                    itemId: 1,
                    name: 'Red Fish',
                    cost: 276,
                    image: ' imageurl'
                },
                {
                    itemId: 2,
                    name: 'caviar',
                    cost: 276,
                    image: ' imageurl'
                }
            ]
        },
        {
            id: 6,
            name: 'animators',
            items: [{
                    itemId: 1,
                    name: 'Brad Pitt',
                    cost: 276,
                    image: ' imageurl'
                },
                {
                    itemId: 2,
                    name: 'Ivo Bobul',
                    cost: 276,
                    image: ' imageurl'
                }
            ]
        },
        {
            id: 7,
            name: 'funeral-merchadnise',
            items: [{
                    itemId: 1,
                    name: 'coffin',
                    cost: 276,
                    image: ' imageurl'
                },
                {
                    itemId: 2,
                    name: 'candle',
                    cost: 276,
                    image: ' imageurl'
                }
            ]
        },
        {
            id: 8,
            name: 'design',
            items: [{
                    itemId: 1,
                    name: 'Kek',
                    cost: 276,
                    image: ' imageurl'
                },
                {
                    itemId: 2,
                    name: 'Shrek',
                    cost: 276,
                    image: ' imageurl'
                }
            ]
        }
    ];
    $scope.currentService = $scope.serviceData.find((item) => item.id == $scope.id);
}