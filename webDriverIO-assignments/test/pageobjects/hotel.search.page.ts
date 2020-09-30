

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class HotelSearchPage{

     /**
     * define selectors using getter methods
     */
    get hotelsTab () { return $('//*[@id="search-hotel-button"]') }
    get inputDestination () { return $('//*[@id="inputDestination"]') }
    get inputDestinationOption () { return $('//ul/li/span[1]') }
    get inputCheckInDateLabel () { return $('//*[@id="inputCheckInDate_Label"]/parent::*/div/input[2]') }
    get startDateHotel () { return $('//*[@id="jd-10-29-20"]') }  
    get endDateHotel () { return $('//*[@id="jd-11-05-20"]') }
    get selectHotelNumberAdults () { return $('//*[@id="selectHotelNumberAdults"]') }
    get selectHotelNumberAdultsOptions () { return $('//*[@id="selectHotelNumberAdults"]/option[2]') }
    get selectHotelNumberChildren () { return $('//*[@id="selectHotelNumberChildren"]') }
    get selectHotelNumberChildrenOption () { return $('//*[@id="selectHotelNumberChildren"]/option[2]') }  
    get hotelSearchButton () { return $('//*[@id="hotelSearchButton"]') }

    
    
    public selectHotelTab()
    {
        this.hotelsTab.click();
    }


    public fillSearchDetails(destination:string)
    {
        this.inputDestination.setValue(destination);
        browser.pause(5000);
        this.inputDestinationOption.click();
        browser.pause(5000);
        this.inputCheckInDateLabel.click();
        browser.pause(5000);
        this.startDateHotel.click();
        browser.pause(5000);
        this.endDateHotel.click();
        browser.pause(5000);
        this.selectHotelNumberAdults.click();
        this.selectHotelNumberAdultsOptions.click();
    }

    public submitSearch()
    {
        this.hotelSearchButton.click(); 
    }
  

}

//use types as per the conditions
//break selector and function in seperate classes or use json file for select
//use browser object globally

