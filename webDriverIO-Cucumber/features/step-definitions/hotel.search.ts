/*****import*****/
import {Before, Given, When, Then, After } from 'cucumber';
import BasePage from '../page-objects/modules/base.page'
import { HotelSearchPage } from '../page-objects/modules/hotel.search.page'
import { HotelDetailPage } from '../page-objects/modules/hotel.detail.page'


/*****object declaration*****/
let searchPage:IHotelSearchPage;
let detailPage:IHotelDetailPage;  
let actual:string;

/*****instantiate HotelSearchPage and detail page*****/ 
Before(async function() {    
      searchPage = new HotelSearchPage();
      detailPage = new HotelDetailPage();   
  });


Given(/^I hotel search url (.+)$/, (pageurl:string) => {
     //redirect to site
      BasePage.PAGE_URL=pageurl;   
});

/*****condition*****/
When(/^I open the hotel search$/, () => {
    BasePage.openSiteUrl();
    browser.maximizeWindow();
    browser.pause(5000);
});

/*****expectation*****/
Then(/^It should redirect hotels search page properly and have title- (.+)$/, (title:string) => {
  expect(browser).toHaveTitle(title);
});

/*****condition*****/
When(/^I click on hotel tab and provide the destination (.+), date, and adults as search criteria$/, (destination:string) => {
       //click on hotel Tab
       searchPage.selectHotelTab();
       
      //fill hotel search details
      searchPage.fillSearchDetails(destination);
      
      //submit the form
      searchPage.submitSearch();   
      browser.pause(10000);
});

/*****expectation*****/
Then(/^It should redirect hotels details page properly with correct location name- (.+)$/, (location:string) => {
    actual = detailPage.verifyDetailPageLoaded();
    expect(actual).not.toBe(undefined);
    expect(actual).not.toBe(null);
    expect(actual.includes(location)).toBe(true);
});

/*****dispose objects*****/ 
After(async function() {    
    searchPage = null;
    detailPage = null;   
    actual=null;
});