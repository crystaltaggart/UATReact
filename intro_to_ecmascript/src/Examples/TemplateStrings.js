const age=2;
const name="Barron";
const sentence = "My dog's name is " + name + " and he is " + (age*7).toString() + " years old.";
const sentence2 = `My dog's name is ${name} and he is ${age*7} years old.`;
const markup  = `
    <table>
        <tr><td>Dog Name</td><td>Age</td></tr>
        <tr><td>${name}</td><td>${age*7}</td></tr>
    </table>
`;

const dogs = [
    {name: 'Barron', age:3},
    {name: 'Sweetie', age:1}
];
const loopMarkup = `
    <table>
        <tr><td>Dog Name</td><td>Age</td></tr>
        ${dogs.map(dog => `<tr><td>${dog.name}</td><td>${dog.age*7}</td></tr>`).join('')}
     </table>
`;

export function testTemplateStrings() {
    console.log(sentence);
    console.log(sentence2);
    console.log(markup);
    console.log(loopMarkup);
}