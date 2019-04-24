class Dogs extends Array {
    constructor(dogShow, ...items){
        super(...items);
        this.dogShow=dogShow;
    }
    add(dog){
        this.push(dog);
    }
}

class DogsUnspread extends Array {
    constructor(dogShow,items){
        super(items);
        this.dogShow=dogShow;
    }
    add(dog){
        this.push(dog);
    }
}
export default Dogs;
export function testDogs(){
    debugger
    const myDogs = new Dogs('Westminster',
        {name:'Barron', age:5}, {name: "Sweetie", age:1});
    myDogs.push({name: 'Ralphie', age:8 });

    const dogsUnspread = new DogsUnspread('Unspread',
        {name:'Barron', age:5},{name:'Sweetie', age:1});
    dogsUnspread.push({name:'Ralphie',age:8});

}
