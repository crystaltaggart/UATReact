class Dog {
    //constructor - sets the values when creating
    constructor(name, breed, image){
        this._name=name;
        this._breed=breed;
        this._image=image;
    }
    //getter and setters - allows you to change values
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
}
export default Dog;