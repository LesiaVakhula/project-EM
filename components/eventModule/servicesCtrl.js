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
        "Name:": "cars",
        "items": [{
                "itemId": "1",
                "image": "camry-black.png",
                "description": {
                    "Name:": "Toyota Camry",
                    "Cost:": "2500 uah/day",
                    "color": "black"
                }
            },
            {
                "itemId": "2",
                "image": "camry-white.png",
                "description": {
                    "Name:": "Toyota Camry",
                    "Cost:": "2500 uah/day",
                    "color": "white"
                }
            },
            {
                "itemId": "3",
                "image": "a6-black.png",
                "description": {
                    "Name:": "Audi A6",
                    "Cost:": "3900 uah/day",
                    "color": "black"
                }
            },
            {
                "itemId": "4",
                "image": "a6-white.png",
                "description": {
                    "Name:": "Audi A6",
                    "Cost:": "4400 uah/day",
                    "color": "white"
                }
            },
            {
                "itemId": "5",
                "image": "s500-black.png",
                "description": {
                    "Name:": "Mercedes-Benz S500",
                    "Cost:": "4600 uah/day",
                    "color": "black"
                }
            },
            {
                "itemId": "6",
                "image": "s500-silver.png",
                "description": {
                    "Name:": "Mercedes-Benz S550",
                    "Cost:": "4600 uah/day",
                    "color": "silver"
                }
            },
            {
                "itemId": "7",
                "image": "gl-black.png",
                "description": {
                    "Name:": "Mercedes-Benz GL350",
                    "Cost:": "5200 uah/day",
                    "color": "black"
                }
            },
            {
                "itemId": "8",
                "image": "gl-white.png",
                "description": {
                    "Name:": "Mercedes-Benz GL350",
                    "Cost:": "5000 uah/day",
                    "color": "white"
                }
            },
            {
                "itemId": "9",
                "image": "blue-mazda.png",
                "description": {
                    "Name:": "Mazda 6",
                    "Cost:": "3000 uah/day",
                    "color": "blue"
                }
            },
            {
                "itemId": "10",
                "image": "red-mazda.png",
                "description": {
                    "Name:": "Mazda 6",
                    "Cost:": "3000 uah/day",
                    "color": "red"
                }
            },
            {
                "itemId": "11",
                "image": "hundai-black.png",
                "description": {
                    "Name:": "Hyundai",
                    "Cost:": "5500 uah/day",
                    "color": "black"
                }
            },
            {
                "itemId": "12",
                "image": "ford.png",
                "description": {
                    "Name:": "Ford",
                    "Cost:": "6000 uah/day",
                    "color": "brown"
                }
            }
        ]
    },
    {
        "id": "11",
        "Name:": "funeral-cars",
        "items": [{
                "itemId": "9",
                "image": "funeral-rolls-royce.png",
                "description": {
                    "Name:": "Rolls-Royce Phantom",
                    "Cost:": "6000 uah",
                    "color": "silver",
                    "driver": "Vasya Pupkin"
                }
            },
            {
                "itemId": "10",
                "image": "funeral-cadilac-black.png",
                "description": {
                    "Name:": "Mercedes E class",
                    "Cost:": "4000 uah",
                    "color": "black",
                    "driver": "Vasya Pupkin"
                }
            },
            {
                "itemId": "11",
                "image": "funeral-cadilac-white.png",
                "description": {
                    "Name:": "Mercedes E class",
                    "Cost:": "4000 uah",
                    "color": "black",
                    "driver": "Vasya Pupkin"
                }
            }
        ]
    },
    {
        "id": "2",
        "Name:": "halls",
        "items": [{
                "itemId": "1",
                "image": "santinno.png",
                "description": {
                    "Name:": "Santino",
                    "number of people": "120",
                    "Cost:": "1000 uah/person"
                }
            },
            {
                "itemId": "2",
                "image": "buhta.png",
                "description": {
                    "Name:": "Viking Bay",
                    "number of people": "160",
                    "Cost:": "1200 uah/person"
                }
            },
            {
                "itemId": "3",
                "image": "citadel.png",
                "description": {
                    "Name:": "Citadel lnn",
                    "number of people": "150",
                    "Cost:": "1150 uah/person"
                }
            },
            {
                "itemId": "4",
                "image": "kumpel.png",
                "description": {
                    "Name:": "Kumpel",
                    "number of people": "60",
                    "Cost:": "750 uah/person"
                }
            },
            {
                "itemId": "5",
                "image": "malevich.png",
                "description": {
                    "Name:": "Malevich",
                    "number of people": "450",
                    "Cost:": "450 uah/person"
                }
            },
            {
                "itemId": "6",
                "image": "terazza.png",
                "description": {
                    "Name:": "Terrazza",
                    "number of people": "40",
                    "Cost:": "1800 uah/person"
                }
            },
            {
                "itemId": "7",
                "image": "taurus.png",
                "description": {
                    "Name:": "Taurus conference hall",
                    "number of people": "100",
                    "Cost:": "2000 uah/day"
                }
            },
            {
                "itemId": "8",
                "image": "panorama.png",
                "description": {
                    "Name:": "Panorama conference hall",
                    "number of people": "130",
                    "Cost:": "2500 uah/day"
                }
            },
            {
                "itemId": "9",
                "image": "warszawa.png",
                "description": {
                    "Name:": "InterContinental Warszawa conference hall",
                    "number of people": "120",
                    "Cost:": "2100 uah/day"
                }
            },
            {
                "itemId": "10",
                "image": "airport.png",
                "description": {
                    "Name:": "InterContinental conference hall",
                    "number of people": "110",
                    "Cost:": "1800 uah/day"
                }
            }
        ]
    },
    {
        "id": "4",
        "Name:": "memorial-halls",
        "items": [{
                "itemId": "1",
                "image": "dominican.png",
                "description": {
                    "Name:": "Dominician cathedral",
                    "...": "..."
                }
            },
            {
                "itemId": "2",
                "image": "Church of Transfiguration.png",
                "description": {
                    "Name:": "Church of Transfiguration",
                    "...": "..."
                }
            },
            {
                "itemId": "3",
                "image": "Temple of the Holy Supreme Apostles Peter and Paul.png",
                "description": {
                    "Name:": "Temple of the Holy Supreme Apostles Peter and Paul",
                    "...": "..."
                }
            },
            {
                "itemId": "4",
                "image": "Temple of St. Andrew.png",
                "description": {
                    "Name:": "Temple of St. Andrew",
                    "...": "..."
                }
            }
        ]

    },
    {
        "id": "5",
        "Name:": "food-courts",
        "items": [{
                "itemId": "1",
                "image": "Chief lviv ua.png",
                "description": {
                    "Name:": "Сhief bestcatering",
                    "link": "http://chef.lviv.ua",
                    "discount": "12 %"
                }
            },
            {
                "itemId": "2",
                "image": "cateringlviv.png",
                "description": {
                    "Name:": "Catering Lviv",
                    "link": "http://cateringlviv.com.ua",
                    "discount": "8 %"
                }
            },
            {
                "itemId": "3",
                "image": "embroidered.png",
                "description": {
                    "Name:": "Embroidered shirt",
                    "link": "http://catering-lviv.com",
                    "discount": "10 %"
                }
            },
            {
                "itemId": "4",
                "image": "citadel-inn.png",
                "description": {
                    "Name:": "Citadel-inn",
                    "link": "https://citadel-inn.com.ua",
                    "discount": "5 %"
                }
            },
            {
                "itemId": "5",
                "image": "fest.png",
                "description": {
                    "Name:": "Fest-lviv",
                    "link": "http://www.fest.lviv.ua",
                    "discount": "15 %"
                }
            },
            {
                "itemId": "6",
                "image": "defilada.png",
                "description": {
                    "Name:": "Defilada",
                    "link": "https://defilada.com.ua",
                    "discount": "18 %"
                }
            }
        ]
    },
    {
        "id": "6",
        "Name:": "animators",
        "items": [{
                "itemId": "1",
                "image": "brad-pitt.png",
                "description": {
                    "Name:": "Brad Pitt",
                    "Cost:": "2800 $"
                }
            },
            {
                "itemId": "2",
                "image": "will-smith.png",
                "description": {
                    "Name:": "Will Smith",
                    "Cost:": "3000 $"
                }
            },
            {
                "itemId": "4",
                "image": "poroh.png",
                "description": {
                    "Name:": "Petro Poroshenko",
                    "Cost:": "free"
                }
            },
            {
                "itemId": "3",
                "image": "zelenskyi.png",
                "description": {
                    "Name:": "Volodymyr Zelenskyi",
                    "Cost:": "1500 $"
                }
            }
        ]
    },
    {
        "id": "7",
        "Name:": "funeral-merchadnise",
        "items": [{
                "itemId": "1",
                "image": "grob-1.png",
                "description": {
                    "Name:": "coffin",
                    "Cost:": "3100 uah"
                }
            },
            {
                "itemId": "2",
                "image": "grob-2.png",
                "description": {
                    "Name:": "coffin",
                    "Cost:": "2950 uah"
                }
            },
            {
                "itemId": "3",
                "image": "grob-3.png",
                "description": {
                    "Name:": "coffin",
                    "Cost:": "3200 uah"
                }
            },
            {
                "itemId": "4",
                "image": "grob-4.png",
                "description": {
                    "Name:": "coffin",
                    "Cost:": "3500 uah"
                }
            },
            {
                "itemId": "5",
                "image": "vinok-1.png",
                "description": {
                    "Name:": "wreath",
                    "Cost:": "290 uah"
                }
            },
            {
                "itemId": "6",
                "image": "vinok-2.png",
                "description": {
                    "Name:": "wreath",
                    "Cost:": "300 uah"
                }
            },
            {
                "itemId": "7",
                "image": "vinok-3.png",
                "description": {
                    "Name:": "wreath",
                    "Cost:": "265 uah"
                }
            },
            {
                "itemId": "8",
                "image": "vinok-7.png",
                "description": {
                    "Name:": "wreath",
                    "Cost:": "240 uah"
                }
            },
            {
                "itemId": "9",
                "image": "vinok-5.png",
                "description": {
                    "Name:": "wreath",
                    "Cost:": "280 uah"
                }
            },
            {
                "itemId": "10",
                "image": "vinok-6.png",
                "description": {
                    "Name:": "wreath",
                    "Cost:": "250 uah"
                }
            }
        ]
    },
    {
        "id": "8",
        "Name:": "design",
        "items": [{
                "itemId": "1",
                "image": "rockets.png",
                "description": {
                    "Name:": "Rockets",
                    "link": "https://rocketsevent.com",
                    "discount": "7 %"
                }
            },
            {
                "itemId": "2",
                "image": "design-1.png",
                "description": {
                    "Name:": "Galicia",
                    "link": "http://event-galicia.lviv.ua",
                    "discount": "8 %"
                }
            },
            {
                "itemId": "3",
                "image": "design-2.png",
                "description": {
                    "Name:": "Valentinos",
                    "link": "http://valentinos.ua",
                    "discount": "10 %"
                }
            },
            {
                "itemId": "4",
                "image": "design-3.png",
                "description": {
                    "Name:": "Clevent",
                    "link": "http://clevent.com.ua",
                    "discount": "6 %"
                }
            }
        ]
    }
    ];
    $scope.currentService = $scope.serviceData.find((item) => item.id == $scope.id);
};
