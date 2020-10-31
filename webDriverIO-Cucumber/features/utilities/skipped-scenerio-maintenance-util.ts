import { HookScenarioResult } from "cucumber";

export default class SkippedScenerioMaintainanceUtil {

    constructor() { }
   
    static checkForSkippedScenerio(scenario: HookScenarioResult, testData:any): boolean {
        
        console.log(scenario.pickle.tags);

        let obj = testData.skippedbankScenerios;
        console.log(testData.skippedbankScenerios);

        let array = Object.entries(obj);
        let result = scenario.pickle.tags.some(el => array.some(n => n[0] == el.name && n[1] === true));
        console.log("result : " + result);

        //check if the feature or scenerio is skipped so that test run can be avoid. 
        if (result) {
            console.log("return true");
            return true;
        }
        else {
            console.log("return false");
            return false;
        }
    }

}


