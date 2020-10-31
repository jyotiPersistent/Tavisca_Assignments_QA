/*****import*****/
import {Before, Given, When, Then, After } from 'cucumber';
import SkippedScenerioMaintainanceUtil from '../utilities/skipped-scenerio-maintenance-util'
import testData from "../test-data/bank.axis.json"
import siteDataMaintainanceUtil from '../utilities/site-data-maintenance-util'

Before(async function() {
    //redirect to site        
  browser.url(siteDataMaintainanceUtil.setSiteURL(testData));
  browser.pause(5000);
});

Before(async function(scenario)
{
    if(SkippedScenerioMaintainanceUtil.checkForSkippedScenerio(scenario, testData))
    {
        return 'skipped';
    }
});

//Axis Bank scenario 3.0
Given(/^I try Axis Bank scenario 3.0$/, () => {
    console.log("I try Axis Bank scenario 3.0");
});

/*****condition*****/
When(/^I check scenario 3.0$/, () => {
    console.log("I check scenario 3.0");
});

/*****expectation*****/
Then(/^It should verify scenario 3.0 properly$/, () => {
    console.log("It should verify scenario 3.0 properly");
//   expect(browser).toHaveTitle(title);
});

//Citi Bank scenario 3.1
/*****condition*****/
When(/^I check scenario 3.1$/, () => {
    console.log("I check scenario 3.1");
});

/*****expectation*****/
Then(/^It should verify scenario 3.1 properly$/, () => {
    console.log("It should verify scenario 3.1 properly");
//   expect(browser).toHaveTitle(title);
});

//Citi Bank scenario 3.2
/*****condition*****/
When(/^I check scenario 3.2$/, () => {
    console.log("I check scenario 3.2");
});

/*****expectation*****/
Then(/^It should verify scenario 3.2 properly$/, () => {
    console.log("It should verify scenario 3.2 properly");
//   expect(browser).toHaveTitle(title);
});

//Citi Bank scenario 3.3
/*****condition*****/
When(/^I check scenario 3.3$/, () => {
    console.log("I check scenario 3.3");
});

/*****expectation*****/
Then(/^It should verify scenario 3.3 properly$/, () => {
    console.log("It should verify scenario 3.3 properly");
//   expect(browser).toHaveTitle(title);
});


//Citi Bank scenario 3.4
/*****condition*****/
When(/^I check scenario 3.4$/, () => {
    console.log("I check scenario 3.4");
});

/*****expectation*****/
Then(/^It should verify scenario 3.4 properly$/, () => {
    console.log("It should verify scenario 3.4 properly");
//   expect(browser).toHaveTitle(title);
});


//Citi Bank scenario 3.5
/*****condition*****/
When(/^I check scenario 3.5$/, () => {
    console.log("I check scenario 3.5");
});

/*****expectation*****/
Then(/^It should verify scenario 3.5 properly$/, () => {
    console.log("It should verify scenario 3.5 properly");
//   expect(browser).toHaveTitle(title);
});