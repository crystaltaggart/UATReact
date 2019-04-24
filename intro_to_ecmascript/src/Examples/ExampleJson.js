
//single JSON object
export const jsonObj= {name:'Crystal', profession:'Entrepreneur'};
//JSON array
export const jsonArray = {
    "professions":[
        {"jobTitle": "Developer","Company":"InfoImage"},
        {"jobTitle": "Developer", "Company": "CleanWave"},
        {"jobTitle": "Developer", "Company": "Advertising Checking Bureau"}
    ]
};

export function testJson(){
    debugger;
    let objJson = jsonObj;
    let objJsonArray = jsonArray;
    console.table(objJson);
    console.table(objJsonArray);
    console.log(objJson.profession);
    console.log(objJsonArray.professions[0])
}