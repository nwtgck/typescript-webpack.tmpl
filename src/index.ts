import {supperAdder} from './my-lib';

class ClassExample{
  constructor(public name: string, public age: number){
  }
}

interface InterfaceExample{
  close: () => any;
}


const ce1 = new ClassExample("some name1", 4);
const age = supperAdder(2, 1);
const ce2 = new ClassExample("some name2", age);


document.write('<h1>Dynamic "hello, world" from TypeScript</h1>');
