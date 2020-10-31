/*****import*****/
import {Before, Given, When, Then, After, BeforeAll } from 'cucumber';
// import testData from "../test-data/bank.base.json"
// import siteDataMaintainanceUtil from '../utilities/site-data-maintenance-util'
//import SkippedScenerioMaintainanceUtil from '../utilities/skipped-scenerio-maintenance-util'

// Before(async function() {
//       //redirect to site        
//     browser.url(siteDataMaintainanceUtil.setSiteURL(testData));
//     browser.pause(5000);
// });

// Before(async function(scenario)
// {
//     if(SkippedScenerioMaintainanceUtil.checkForSkippedScenerio(scenario, testData))
//     {
//         return 'skipped';
//     }
// });

//Bank base scenario 1.0
Given(/^I redirect to bank online$/, () => {
    console.log("browse any bank site");
});

//Bank base scenario 1.1

/*****condition*****/
When(/^I open any bank site$/, () => {
    console.log("open any bank site");
});

/*****expectation*****/
Then(/^It should redirect bank site properly$/, () => {
    console.log("It should redirect bank site properly");
//   expect(browser).toHaveTitle(title);
});


//Bank base scenario 1.2
Given(/^I try Bank base scenario 1.2$/, () => {  
    console.log("I try Bank base scenario 1.2");
});
/*****condition*****/
When(/^I check scenario 1.2$/, () => {
    console.log("I check scenario 1.2");
});

/*****expectation*****/
Then(/^It should verify scenario 1.2 properly$/, () => {
    console.log("It should verify scenario 1.2 properly");
//   expect(browser).toHaveTitle(title);
});


//Bank base scenario 1.3
Given(/^I try Bank base scenario 1.3$/, () => {  
    console.log("I try Bank base scenario 1.3");
});
/*****condition*****/
When(/^I check scenario 1.3$/, () => {
    console.log("I check scenario 1.3");
});

/*****expectation*****/
Then(/^It should verify scenario 1.3 properly$/, () => {
    console.log("It should verify scenario 1.3 properly");
//   expect(browser).toHaveTitle(title);
});


//Bank base scenario 1.4
Given(/^I try Bank base scenario 1.4$/, () => {  
    console.log("I try Bank base scenario 1.4");
});
/*****condition*****/
When(/^I check scenario 1.4$/, () => {
    console.log("I check scenario 1.4");
});

/*****expectation*****/
Then(/^It should verify scenario 1.4 properly$/, () => {
    console.log("It should verify scenario 1.4 properly");
//   expect(browser).toHaveTitle(title);
});

//Bank base scenario 1.5
Given(/^I try Bank base scenario 1.5$/, () => {  
    console.log("I try Bank base scenario 1.5");
});
/*****condition*****/
When(/^I check scenario 1.5$/, () => {
    console.log("I check scenario 1.5");
});

/*****expectation*****/
Then(/^It should verify scenario 1.5 properly$/, () => {
    console.log("It should verify scenario 1.5 properly");
//   expect(browser).toHaveTitle(title);
});