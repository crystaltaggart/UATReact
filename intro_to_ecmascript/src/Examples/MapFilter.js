//hard-coded array of values
export const ages = [5,10,35,34,20,67];

//map the array to JSON  and create an isOld property
export const mapToJson = ages.map(age => ({age:age, isOld:age>30}));
//map the array to JSON, grab the index
export const mapToJsonWithIndex = ages.map((age, i) => ({index: i, age:age, isOld:age>30}));

//filter the array to only display ages over 30
export const filterAges = ages.filter(age => age>30);
//filter the JSON based on boolean value
export const filterJsonAges = mapToJson.filter(age => age.isOld);

export function testMap(){
    debugger;
    const objJson=mapToJson;
    const objJsonWithIndex=mapToJsonWithIndex;
    const objAgeFilter = filterAges;
    const objAgeFilterJson = filterJsonAges;

    console.table(objJson);
    console.table(objJsonWithIndex);
    console.table(objAgeFilter);
    console.table(objAgeFilterJson);
}


