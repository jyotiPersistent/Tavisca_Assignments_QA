/*****import*****/
import { Before, When, Then, After } from 'cucumber';
import { HotelDetailPage } from '../page-objects/modules/hotel.detail.page'

/*****object declaration*****/
let detailPage:IHotelDetailPage;
let actual:boolean;

/*****initialize Hotel detail page*****/ 
Before(async function() {
    detailPage = new HotelDetailPage();   
});

/*****condition*****/
When(/^I search for specific page (.+)$/, (pageno:string) => { 
    actual=  detailPage.forwardPages(pageno);    
});

/*****expectation*****/
Then(/^It should search specific page properly$/, () => {
    expect(actual).toBe(true); 
});

/*****dispose objects*****/ 
After(async function() {    
    detailPage = null;
    actual=null;   
});