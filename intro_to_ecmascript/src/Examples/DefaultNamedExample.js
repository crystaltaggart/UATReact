//create first class
class TestClassA{
    constructor(){this.name="public default class"}
}
//create a second class - generates a compile error
class TestClassB{
    constructor(){this.name="private class - you can't see me"}
}
//create a third class (public)
export class TestClassC{
    constructor(){this.name="public class - you can see me"}
    nowPublic(){return TestFunctionC();}
}
//create public function
export function TestFunctionA(){return "public function - you can see me";}
//crate private function
function TestFunctionB(){return "private function - you can't see me"}
//create a private function that is accessible from TestClassC
function TestFunctionC(){return "private function - you can see me from a public class"}
//make the first public and set it as the default
export default TestClassA;