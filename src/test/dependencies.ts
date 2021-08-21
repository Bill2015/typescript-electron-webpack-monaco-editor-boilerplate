import * as fs from "fs";
//=======================================================
import * as ISO_GIT from "isomorphic-git";

class Tester{
    window: Window;
    constructor( window:Window ){
        this.window = window;
    }
}

export class GitTester extends Tester{
    constructor(window:Window){
        super(window);
        this.simpleTest();
    };

    public async simpleTest() {
        let commits = await ISO_GIT.log({
            fs,
            dir: 'D:/GitHubRepo/Just-Tag-Everything',
            depth: 5,
            ref: 'main'
        });
        console.log( commits );
        let element = this.window.document.getElementById("git-test");
        if( element )element.innerHTML = commits.toString();
    }
}
//=======================================================
import * as DIFF from "diff";
export class DiffTester extends Tester{
    constructor(window:Window){
        super(window);
        let diff = DIFF.diffSentences("Hello Miko!", "Hello Peko?");
        console.log( diff );
        let element = this.window.document.getElementById("diff-test");
        if( element )element.innerHTML = diff.toString();
    }
}

//========================================================


