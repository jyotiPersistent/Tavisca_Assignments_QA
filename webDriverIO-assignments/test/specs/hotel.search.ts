// import BasePage from '../pageobjects/base.page'
// import { HotelSearchPage } from '../pageobjects/hotel.search.page'
// import { HotelDetailPage } from '../pageobjects/hotel.detail.page'

// import { HotelRoomDetailPage } from '../pageobjects/hotel.room.detail.page'

// describe('Search for Hotels and check for rooms availability: ', () => {
//     let searchPage:any;
//     let detailPage:any;
//     let roomDetailPage:any;

//     before('should search the hotels with right destination details.', () => {

//         //initiate HotelSearchPage
//         searchPage = new HotelSearchPage();
//         detailPage = new HotelDetailPage();
//         roomDetailPage = new HotelRoomDetailPage();

//        //redirect to site
//        BasePage.PAGE_URL='https://vacationsdirect.com/';
//        BasePage.openSiteUrl();
//        browser.maximizeWindow();
//        browser.pause(5000);
//        expect(browser).toHaveTitle('Home');
    
//        //click on RoundTrip Tab
//        searchPage.selectHotelTab();
       
//        //fill hotel search details
//        const destination:string='Houston, TX';
//        searchPage.fillSearchDetails(destination);
       
//        //submit the form
//        searchPage.submitSearch();   
//        browser.pause(10000);
//     })

//       //Date 23 Sep 2020

//     it('should redirect hotels details page properly.', () => {

//         const expected:string ='Houston';
//         let actual:any = detailPage.verifyDetailPageLoaded();

//         expect(actual).not.toBe(undefined);
//         expect(actual).not.toBe(null);
//         expect(actual).not.toBe(Number);
//         expect(actual.includes(expected)).toBe(true);
//     })

//     it('should verify star filter result at hotel details page properly.', () => {

//        const expected:string ='5';
//        let actual:any = detailPage.clickAndVerifyStarfilterResult();

//        expect(actual).not.toBe(undefined);
//        expect(actual).not.toBe(null);
//        expect(actual).not.toBe('0');
//        expect(actual.includes(expected)).toBe(true);
//     })
 
//     //Date 24 Sep 2020
    
//     //Verify hotel name and star rating of any random selected hotel on hotel details page.

//     it('should verify hotel name result count properly.', () => {

//        const expected:number=5; 
//        let actual:any=  detailPage.verifyHotelResultCount();

//        expect(actual).not.toBe(undefined);
//        expect(actual).not.toBe(null);
//        expect(actual).not.toBe(0);
//        expect(actual).not.toBe(NaN);
//        expect(actual).toBe(expected);  
//     })

//     it('should verify remdom hotel name from result properly.', () => {

//         const expected:string='The Post Oak Hotel';
//         let actual:any = detailPage.clickAndVerifyHotelNameFilterResult(expected);

//         expect(actual).not.toBe(undefined);
//         expect(actual).not.toBe(null);
//         expect(actual.includes(expected)).toBe(true);   
//     })

//     it('should verify star rating of any random selected hotel on hotel details page properly.', () => {

//         const expected:number =5;
//         let actual:any=  detailPage.verifyHotelStars();

//         expect(actual).not.toBe(undefined);
//         expect(actual).not.toBe(null);
//         expect(actual).not.toBe(0);
//         expect(actual).not.toBe(NaN);
//         expect(actual).toBe(expected);  
//     })

//     //Verify room availability of selected hotel.
//     it('should click on choose room button and redirect on room detail page properly.', () => {

//         detailPage.chooseRoom();        
//     })

//     it('should verify room availability of selected hotel prperly and it should not be 0.', () => {

//         const expected:string='The Post Oak Hotel';
//         let actual:any = roomDetailPage.verifyHotelNameOnDetailPage();

//         expect(actual).not.toBe(undefined);
//         expect(actual).not.toBe(null);
//         expect(actual.includes(expected)).toBe(true); 
//     })

//     it('should verify room availability of selected prperly and it should not be 0.', () => {

//         const expected:string='3 Rooms';
//         let actual:any = roomDetailPage.verifyRoomAvailability();

//         expect(actual).not.toBe(undefined);
//         expect(actual).not.toBe(null);
//         expect(actual.includes(expected)).toBe(true); 
//     })

// })
