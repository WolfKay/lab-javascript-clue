var suspect = [
    "Mrgreen",
    "Orchid",
    "Plum",
    "Scarlet",
    "Peacock",
    "Mustard"
];

var tool = [
    "rope",
    "knife",
    "candlestick",
    "dumbbell",
    "poison",
    "axe",
    "bat",
    "trophy",
    "pistol"
];

var houseRoom = [
    "dining room",
    "conservatory",
    "kitchen",
    "study",
    "library",
    "billiard room",
    "lounge",
    "ballroom",
    "spa",
    "living room",
    "observatory",
    "theater",
    "guest house",
    "patio"
];
function ClueGame(pile) {
    var pile = pile;
    var randomIndex;

    function cardSelector(pile) {
        this.randomIndex = Math.floor(Math.random() * pile.length);
    }
    cardSelector(pile);
    if (!Array.isArray(this.secretEnvelope)){
        this.secretEnvelope = [];
    }
    this.secretEnvelope.push(pile[this.randomIndex]);

};

ClueGame(suspect);
ClueGame(tool);
ClueGame(houseRoom);
console.log(this.secretEnvelope[0] + " Killed MR.Mustard! " + "With a " + this.secretEnvelope[1] + " In the " + this.secretEnvelope[2] + "!!" );
