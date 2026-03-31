import { Developer } from '../I-ISP/refactored/Developer.ts';
import { Designer } from '../I-ISP/refactored/Designer.ts';
import { Tester } from '../I-ISP/refactored/Tester.ts';
import { Manager } from '../I-ISP/refactored/Manager.ts';

export function exampleISP(): void {
  console.log('=== ISP Example ===');
  
  const developer = new Developer();
  const designer = new Designer();
  const tester = new Tester();
  const manager = new Manager();

  console.log('Developer:');
  developer.work();
  developer.code();
  developer.eat();

  console.log('Designer:');
  designer.work();
  designer.design();
  designer.sleep();

  console.log('Tester:');
  tester.work();
  tester.test();

  console.log('Manager:');
  manager.work();
  manager.manage();
}

exampleISP();
