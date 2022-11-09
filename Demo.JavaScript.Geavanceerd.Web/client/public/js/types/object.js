console.info("*********");
console.info("object.js");
console.info("*********");

console.info("--- object literal ---");
let objectLiteral = {
    _property1: "Als een property start met _: niet gebruiken, da's privé! Gebruik de get/set accessors.",
    get property1() {
        // get accessor voor de private property
        return this._property1; 
    },
    set property1(value) {
        // set accessor voor de private property
        if (!value) throw "Gelieve een string van minstens één character in te stellen";
        this._property1 = value;
    },
    property2: "Dit is wel publiek.",
    toString: function () {
        return `property1: ${this.property1}, property2: ${this.property2}`;
    }
}

objectLiteral.property1 = "Dit is";
objectLiteral.property2 = "een test."
console.log("objectLiteral: " + objectLiteral.toString());

console.info("--- object from class ---");
class SomeClass {
    constructor() {
        this._field1 = "Als een field start met _: niet gebruiken, da's privé! Gebruik de get/set accessors.";
        this.field2 = "Dit is wel publiek.";
    }

    get property1() {
        // get accessor voor de private property
        return this._field1;
    }

    set property1(value) {
        // set accessor voor de private property
        if (!value) throw "Gelieve een string van minstens één character in te stellen";
        this._field1 = value;
    }

    toString() {
        return `_field1: ${this._field1}, field2: ${this.field2}`;
    }
}

class SomeClassWithRealPrivateFields {
    #field1;
    field2;

    constructor() {
        this.#field1 = "Dit is een echte private field";
        this.field2 = "Dit is een public field";
    }

    get property1() {
        // get accessor voor de private property
        return this.field1;
    }

    set property1(value) {
        // set accessor voor de private property
        if (!value) throw "Gelieve een string van minstens één character in te stellen";
        this.field1 = value;
    }

    toString() {
        return `#field1: ${this.#field1}, field2: ${this.field2}`;
    }
}

let objects = [];
for (let i = 0; i < 5; i++) {
    let object = new SomeClass();
    object.property1 = "Dit is";
    object._field1 = "Dit is"; // Dit werkt dus ook: je kan de property omzeilen en rechtstreeks het field aanpassen.
    object.field2 = "test nummer " + i + ".";
    objects.push(object)
}

for (let i = 0; i < objects.length; i++) {
    console.log("Object " + i + ": " + objects[i].toString());
}

let objectsWithRealPrivateFields = [];
for (let i = 0; i < 5; i++) {
    let object = new SomeClassWithRealPrivateFields();
    object.property1 = "Dit is";
    // object.#field1 = "Dit is"; // Dit werkt dus niet -> je kan geen 'echte' private fields accessen.
    object.field2 = "test nummer " + i + "."; // Dit field is dan weer niet private en kan je dus accessen.
    objectsWithRealPrivateFields.push(object)
}

for (let i = 0; i < objectsWithRealPrivateFields.length; i++) {
    console.log("Object with private field " + i + ": " + objects[i].toString());
}