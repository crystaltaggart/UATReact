export const person = {
    name: "Crystal",
    job: "Entrepreneur",
    getJob():function {
        console.log(this.job);
    },
    getJob2: () => {
        try{
            console.log(this.job);
        }
        catch {
            console.log("an error happened in getJob2");
        }
    }
};

export function testThis(){
    debugger;
    let myPerson = person;
    person.getJob();
    person.getJob2();
}