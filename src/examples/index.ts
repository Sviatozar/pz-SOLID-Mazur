import { exampleSRP } from './srpExample.ts';
import { exampleOCP } from './ocpExample.ts';
import { exampleLSP } from './lspExample.ts';
import { exampleISP } from './ispExample.ts';
import { exampleDIP } from './dipExample.ts';

async function runAllExamples(): Promise<void> {
  try {
    exampleSRP();
    console.log('');
    
    exampleOCP();
    console.log('');
    
    exampleLSP();
    console.log('');
    
    exampleISP();
    console.log('');
    
    exampleDIP();
  } catch (error) {
    console.error('Error running examples:', error);
  }
}

runAllExamples();
