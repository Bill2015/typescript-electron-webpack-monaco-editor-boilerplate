// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import * as tester from '_test/dependencies'

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
      
    }
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type as keyof NodeJS.ProcessVersions]);
  }

});

window.addEventListener("DOMContentLoaded", () => {

  let git     = new tester.GitTester(window);
  let dif     = new tester.DiffTester(window); 
});


/*import * as monaco from 'monaco-editor';
window.addEventListener("DOMContentLoaded", () => {
  let element = document.getElementById('container');
  if( element ){
    monaco.editor.create(element, {
      value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
      ].join('\n'),
      language: 'javascript'
    });
  }

});*/
