const person = {
    first: 'Crystal',
    last: 'Taggart',
    links: {
        social: {
            twitter: 'https;//twitter.com/crystaltaggart',
            linkedIN: 'https://linkedin.com/in/crystaltaggart'
        },
        web: {
            business: 'https://askatlas.ai'
        }
    }
};

export function testDestructuring(){
    debugger;
    //creates variables called twitter and linkedIn from object
    const {twitter, linkedIn} = person.links.social;
    //creates variables called feed and li from object
    const {twitter: feed, linkedIN: li} = person.links.social;
    //creates variables and sets default values if not present
    const {business = "NA", blog = "NA"} = person.links.web;

}