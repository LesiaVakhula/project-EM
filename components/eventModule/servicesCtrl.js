module.exports = function ($scope, $stateParams, $state, filterFactory) {
    'ngInject';
    $scope.id = $stateParams.id;
    if ($scope.id == 3) {
        $state.go('invitation');
    };

    if ($scope.id == 9 || $scope.id == 10) {
        if ($scope.id == 9) {
            filterFactory.gender = 'male';
        } else {
            filterFactory.gender = 'female';
        };
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
                    "cost": "2500 uah/day",
                    "color": "black"
                }
            },
            {
                "itemId": "2",
                "image": "camry-white.png",
                "description": {
                    "name": "Toyota Camry",
                    "cost": "2500 uah/day",
                    "color": "white"
                }
            },
            {
                "itemId": "3",
                "image": "a6-black.png",
                "description": {
                    "name": "Audi A6",
                    "cost": "3900 uah/day",
                    "color": "black"
                }
            },
            {
                "itemId": "4",
                "image": "a6-white.png",
                "description": {
                    "name": "Audi A6",
                    "cost": "4400 uah/day",
                    "color": "blue"
                }
            },
            {
                "itemId": "5",
                "image": "s500-black.png",
                "description": {
                    "name": "Mercedes-Benz S500",
                    "cost": "4600 uah/day",
                    "color": "black"
                }
            },
            {
                "itemId": "6",
                "image": "s500-silver.png",
                "description": {
                    "name": "Mercedes-Benz S550",
                    "cost": "4600 uah/day",
                    "color": "silver"
                }
            },
            {
                "itemId": "7",
                "image": "gl-black.png",
                "description": {
                    "name": "Mercedes-Benz GL350 GL 350 ",
                    "cost": "5200 uah/day",
                    "color": "black"
                }
            },
            {
                "itemId": "8",
                "image": "gl-white.png",
                "description": {
                    "name": "Mercedes-Benz GL350 GL 350 ",
                    "cost": "5000 uah/day",
                    "color": "white"
                }
            },
            {
                "itemId": "13",
                "image": "hundai-black.png",
                "description": {
                    "name": "Hyundai",
                    "cost": "5500 uah/day",
                    "color": "black"
                }
            },
            {
                "itemId": "12",
                "image": "ford.png",
                "description": {
                    "name": "Ford",
                    "cost": "6000 uah/day",
                    "color": "brown"
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
                "image": "santinno.png",
                "description": {
                    "name": "Santino",
                    "number of people": "120",
                    "cost": "1000 uah/person"
                }
            },
            {
                "itemId": "2",
                "image": "buhta.png",
                "description": {
                    "name": "Viking Bay",
                    "number of people": "160",
                    "cost": "1200 uah/person"
                }
            },
            {
                "itemId": "3",
                "image": "citadel.png",
                "description": {
                    "name": "Citadel lnn",
                    "number of people": "150",
                    "cost": "1150 uah/person"
                }
            },
            {
                "itemId": "4",
                "image": "kumpel.png",
                "description": {
                    "name": "Kumpel",
                    "number of people": "60",
                    "cost": "750 uah/person"
                }
            },
            {
                "itemId": "5",
                "image": "malevich.png",
                "description": {
                    "name": "Malevich",
                    "number of people": "450",
                    "cost": "450 uah/person"
                }
            },
            {
                "itemId": "6",
                "image": "terazza.png",
                "description": {
                    "name": "Terrazza",
                    "number of people": "40",
                    "cost": "1800 uah/person"
                }
            },
            {
                "itemId": "7",
                "image": "taurus.png",
                "description": {
                    "name": "Taurus conference hall",
                    "number of people": "100",
                    "cost": "2000 uah/day"
                }
            },
            {
                "itemId": "8",
                "image": "panorama.png",
                "description": {
                    "name": "Panorama conference hall",
                    "number of people": "130",
                    "cost": "2500 uah/day"
                }
            },
            {
                "itemId": "9",
                "image": "warszawa.png",
                "description": {
                    "name": "InterContinental Warszawa conference hall",
                    "number of people": "120",
                    "cost": "2100 uah/day"
                }
            },
            {
                "itemId": "10",
                "image": "airport.png",
                "description": {
                    "name": "InterContinental conference hall",
                    "number of people": "110",
                    "cost": "1800 uah/day"
                }
            }
        ]
    },
    {
        "id": "4",
        "name": "memorial-halls",
        "items": [{
                "itemId": "1",
                "image": "dominican.png",
                "description": {
                    "name": "Dominician cathedral",
                    "...": "..."
                }
            },
            {
                "itemId": "2",
                "image": "Church of Transfiguration.png",
                "description": {
                    "name": "Church of Transfiguration",
                    "...": "..."
                }
            },
            {
                "itemId": "3",
                "image": "Temple of the Holy Supreme Apostles Peter and Paul.png",
                "description": {
                    "name": "Temple of the Holy Supreme Apostles Peter and Paul",
                    "...": "..."
                }
            },
            {
                "itemId": "4",
                "image": "Temple of St. Andrew.png",
                "description": {
                    "name": "Temple of St. Andrew",
                    "...": "..."
                }
            }
        ]

    },
    {
        "id": "5",
        "name": "food-courts",
        "items": [{
                "itemId": "1",
                "image": "Chief lviv ua.png",
                "description": {
                    "name": "Сhief bestcatering",
                    "link": "http://chef.lviv.ua",
                    "discount": "12 %"
                }
            },
            {
                "itemId": "2",
                "image": "cateringlviv.png",
                "description": {
                    "name": "Catering Lviv",
                    "link": "http://cateringlviv.com.ua",
                    "discount": "8 %"
                }
            },
            {
                "itemId": "3",
                "image": "embroidered.png",
                "description": {
                    "name": "Embroidered shirt",
                    "link": "http://catering-lviv.com",
                    "discount": "10 %"
                }
            },
            {
                "itemId": "4",
                "image": "citadel-inn.png",
                "description": {
                    "name": "Citadel-inn",
                    "link": "https://citadel-inn.com.ua",
                    "discount": "5 %"
                }
            },
            {
                "itemId": "5",
                "image": "fest.png",
                "description": {
                    "name": "Fest-lviv",
                    "link": "http://www.fest.lviv.ua",
                    "discount": "15 %"
                }
            },
            {
                "itemId": "6",
                "image": "defilada.png",
                "description": {
                    "name": "Defilada",
                    "link": "https://defilada.com.ua",
                    "discount": "18 %"
                }
            }
        ]
    },
    {
        "id": "6",
        "name": "animators",
        "items": [{
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
                "image": "rockets.png",
                "description": {
                    "name": "Rockets",
                    "link": "https://rocketsevent.com",
                    "discount": "7 %"
                }
            },
            {
                "itemId": "2",
                "image": "design-1.png",
                "description": {
                    "name": "Galicia",
                    "link": "http://event-galicia.lviv.ua",
                    "discount": "8 %"
                }
            },
            {
                "itemId": "3",
                "image": "design-2.png",
                "description": {
                    "name": "Valentinos",
                    "link": "http://valentinos.ua",
                    "discount": "10 %"
                }
            },
            {
                "itemId": "4",
                "image": "design-3.png",
                "description": {
                    "name": "Clevent",
                    "link": "http://clevent.com.ua",
                    "discount": "6 %"
                }
            }
        ]
    }
    ];
    $scope.currentService = $scope.serviceData.find((item) => item.id == $scope.id);
};