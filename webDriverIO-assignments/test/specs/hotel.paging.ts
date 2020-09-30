import BasePage from '../pageobjects/base.page'
import { HotelSearchPage } from '../pageobjects/hotel.search.page'
import { HotelDetailPage } from '../pageobjects/hotel.detail.page'

describe('Paging and filtering search for hotels: ', () => {
    let searchPage:any;
    let detailPage:any;

    before('should search the hotels with right destination details.', () => {

        //initiate HotelSearchPage
        searchPage = new HotelSearchPage();
        detailPage = new HotelDetailPage();

       //redirect to site
       BasePage.PAGE_URL='https://vacationsdirect.com/';
       BasePage.openSiteUrl();
       browser.maximizeWindow();
       browser.pause(5000);
       expect(browser).toHaveTitle('Home');
    
       //click on RoundTrip Tab
       searchPage.selectHotelTab();
       
       //fill hotel search details
       const destination:string='Houston, TX';
       searchPage.fillSearchDetails(destination);
       
       //submit the form
       searchPage.submitSearch();   
       browser.pause(10000);
    })

    it('should redirect hotels details page properly.', () => {

        const expected:string ='Houston';
        let actual:any = detailPage.verifyDetailPageLoaded();

        expect(actual).not.toBe(undefined);
        expect(actual).not.toBe(null);
        expect(actual).not.toBe(Number);
        expect(actual.includes(expected)).toBe(true);
    })
  
    it('should verify that paging works properly.', () => {
        const pageNo:string = '12';
        let actual:any[]=  detailPage.forwardPages(pageNo);
        expect(actual).toBe(true); 
    })

})
