module.exports = (['$scope', '$stateParams', '$state', 'filterFactory', function($scope, $stateParams, $state, filterFactory) {

    $scope.id = $stateParams.id;
    if ($scope.id == 9 || $scope.id == 10) {
        if ($scope.id == 9) {
            filterFactory.gender = 'male';
        } else {
            filterFactory.gender = 'female';
        }
        $state.go('partners');
    };
    if ($scope.id == 3){
        $state.go('invitationState');
    }
    $scope.serviceData = [{
            "id": "1",
            "name": "cars",
            "items": [{
                    "itemId": "1",
                    "image": "camry-black.png",
                    "description": {
                        "name": "Toyota Camry",
                        "cost": "2500 uah",
                        "amount": "3",
                        "color": "black",
                        "driver": "Vasya Pupkin",
                    }
                },
                {
                    "itemId": "2",
                    "image": "camry-white.png",
                    "description": {
                        "name": "Toyota Camry",
                        "cost": "2500 uah",
                        "amount": "2",
                        "color": "white",
                        "driver": "Vasya Pupkin",
                    }
                },
                {
                    "itemId": "3",
                    "image": "a6-black.png",
                    "description": {
                        "name": "Audi A6",
                        "cost": "3900 uah",
                        "amount": "2",
                        "color": "black",
                        "driver": "Vasya Pupkin",
                    }
                },
                {
                    "itemId": "4",
                    "image": "a6-white.png",
                    "description": {
                        "name": "Audi A6",
                        "cost": "4400 uah",
                        "amount": "2",
                        "color": "blue",
                        "driver": "Vasya Pupkin",
                    }
                },
                {
                    "itemId": "5",
                    "image": "s500-black.png",
                    "description": {
                        "name": "Mercedes-Benz S500",
                        "cost": "4600 uah",
                        "amount": "2",
                        "color": "black",
                        "driver": "Vasya Pupkin"
                    }
                },
                {
                    "itemId": "6",
                    "image": "s500-silver.png",
                    "description": {
                        "name": "Mercedes-Benz S550",
                        "cost": "4600 uah",
                        "amount": "2",
                        "color": "silver",
                        "driver": "Vasya Pupkin"
                    }
                },
                {
                    "itemId": "7",
                    "image": "gl-black.png",
                    "description": {
                        "name": "Mercedes-Benz GL350 GL 350 ",
                        "cost": "5200 uah",
                        "amount": "2",
                        "color": "black",
                        "driver": "Vasya Pupkin"
                    }
                },
                {
                    "itemId": "8",
                    "image": "gl-white.png",
                    "description": {
                        "name": "Mercedes-Benz GL350 GL 350 ",
                        "cost": "5000 uah",
                        "amount": "2",
                        "color": "white",
                        "driver": "Vasya Pupkin"
                    }
                },
                {
                    "itemId": "12",
                    "image": "gl-white.png",
                    "description": {
                        "name": "Mercedes",
                        "cost": "6000 uah",
                        "amount": "5",
                        "color": "white",
                        "driver": "Vasya Pupkin"
                    }
                },
                {
                    "itemId": "13",
                    "image": "gl-white.png",
                    "description": {
                        "name": "Hyundai",
                        "cost": "5500 uah",
                        "amount": "2",
                        "color": "black",
                        "driver": "Vasya Pupkin"
                    }
                }
            ]
        },
        {
            "id": "11",
            "name": "funeral-cars",
            "items": [{
                    "itemId": "9",
                    "image": "funeral-rolls-royce.png",
                    "description": {
                        "name": "Rolls-Royce Phantom",
                        "cost": "6000 uah",
                        "amount": "1",
                        "color": "silver",
                        "driver": "Vasya Pupkin"
                    }
                },
                {
                    "itemId": "10",
                    "image": "funeral-cadilac-black.png",
                    "description": {
                        "name": "Mercedes E class",
                        "cost": "4000 uah",
                        "amount": "1",
                        "color": "black",
                        "driver": "Vasya Pupkin"
                    }
                },
                {
                    "itemId": "11",
                    "image": "funeral-cadilac-white.png",
                    "description": {
                        "name": "Mercedes E class",
                        "cost": "4000 uah",
                        "amount": "1",
                        "color": "black",
                        "driver": "Vasya Pupkin"
                    }
                }
            ]
        },
        {
            "id": "2",
            "name": "halls",
            "items": [{
                    "itemId": "1",
                    "image": "imageurl",
                    "description": {
                        "name": "Santino",
                        "cost": "1000 uah/person"
                    }
                },
                {
                    "itemId": "2",
                    "image": "imageurl",
                    "description": {
                        "name": "Viking Bay",
                        "cost": "1200 uah/person"
                    }
                },
                {
                    "itemId": "3",
                    "image": "imageurl",
                    "description": {
                        "name": "Citadel lnn",
                        "cost": "1150 uah/person"
                    }
                },
                {
                    "itemId": "4",
                    "image": "imageurl",
                    "description": {
                        "name": "Kumpel",
                        "cost": "750 uah/person"
                    }
                },
                {
                    "itemId": "5",
                    "image": "imageurl",
                    "description": {
                        "name": "Malevich",
                        "cost": "450 uah/person"
                    }
                },
                {
                    "itemId": "6",
                    "image": "imageurl",
                    "description": {
                        "name": "Atlas hotel",
                        "cost": "2000 uah/person"
                    }
                }
            ]
        },
        {
            "id": "4",
            "name": "memorial-halls",
            "items": [{
                    "itemId": "1",
                    "image": "imageurl",
                    "description": {
                        "name": "Dominician cathedral",
                        "cost": "200"
                    }
                },
                {
                    "itemId": "2",
                    "image": "imageurl",
                    "description": {
                        "name": "Church of Transfiguration",
                        "cost": "200"
                    }
                },
                {
                    "itemId": "3",
                    "image": "imageurl",
                    "description": {
                        "name": "Roman Catholic Church",
                        "cost": "200"
                    }
                }
            ]

        },
        {
            "id": "5",
            "name": "food-courts",
            "items": [{
                    "itemId": "1",
                    "image": "imageurl",
                    "description": {
                        "name": "Red Fish",
                        "cost": "276"
                    }
                },
                {
                    "itemId": "2",
                    "image": "imageurl",
                    "description": {
                        "name": "caviar",
                        "cost": "276"
                    }
                }
            ]
        },
        {
            "id": "6",
            "name": "animators",
            "items": [
                {
                    "itemId": "1",
                    "image": "brad-pitt.png",
                    "description": {
                        "name": "Brad Pitt",
                        "cost": "2800 $"
                    }
                },
                {
                    "itemId": "2",
                    "image": "will-smith.png",
                    "description": {
                        "name": "Will Smith",
                        "cost": "3000 $"
                    }
                },
                {
                    "itemId": "4",
                    "image": "poroh.png",
                    "description": {
                        "name": "Petro Poroshenko",
                        "cost": "free"
                    }
                },
                {
                    "itemId": "3",
                    "image": "zelenskyi.png",
                    "description": {
                        "name": "Volodymyr Zelenskyi",
                        "cost": "1500 $"
                    }
                }
            ]
        },
        {
            "id": "7",
            "name": "funeral-merchadnise",
            "items": [{
                    "itemId": "1",
                    "image": "imageurl",
                    "description": {
                        "name": "coffin",
                        "cost": "276"
                    }
                },
                {
                    "itemId": "2",
                    "image": "imageurl",
                    "description": {
                        "name": "candle",
                        "cost": "276"
                    }
                }
            ]
        },
        {
            "id": "8",
            "name": "design",
            "items": [{
                    "itemId": "1",
                    "image": "imageurl",
                    "description": {
                        "name": "Kek",
                        "cost": "276"
                    }
                },
                {
                    "itemId": "2",
                    "image": "imageurl",
                    "description": {
                        "name": "Shrek",
                        "cost": "276"
                    }
                }
            ]
        }
    ];
    $scope.currentService = $scope.serviceData.find((item) => item.id == $scope.id);
}]);