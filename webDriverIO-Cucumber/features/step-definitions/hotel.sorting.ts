/*****import*****/
import {  Before, When, Then, After} from 'cucumber';
import { HotelDetailPage } from '../page-objects/modules/hotel.detail.page'

/*****object declaration*****/
let detailPage:IHotelDetailPage;
let actual:boolean;

/*****instantiate Hotel detail page*****/ 
Before(async function() {
    detailPage = new HotelDetailPage();   
});

/*****condition*****/
When(/^I sort by specific sort name- (.+)$/, (sortName:string) => {
    actual=  detailPage.verifysort(sortName);    
});

/*****expectation*****/
Then(/^It should sort by specific sort name and order properly$/, () => {
    expect(actual).toBe(true); 
});

/*****dispose objects*****/ 
After(async function() {    
    detailPage = null; 
    actual=null;  
});