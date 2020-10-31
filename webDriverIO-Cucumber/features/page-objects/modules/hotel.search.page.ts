import selectors from "../../json-selectors/hotel.search.json"

export class HotelSearchPage implements IHotelSearchPage{

    constructor() {  }
    
    public selectHotelTab()
    {
        $(selectors.hotelsTab).click();
    }

    public fillSearchDetails(destination:string)
    {
        $(selectors.inputDestination).setValue(destination);
        browser.pause(5000);
        $(selectors.inputDestinationOption).click();
        browser.pause(5000);
        $(selectors.inputCheckInDateLabel).click();
        browser.pause(5000);
        $(selectors.startDateHotel).click();
        browser.pause(5000);
        $(selectors.endDateHotel).click();
        browser.pause(5000);
        $(selectors.selectHotelNumberAdults).click();
        browser.pause(5000)
        $(selectors.selectHotelNumberAdultsOptions).click();
    }

    public submitSearch()
    {       
        $(selectors.hotelSearchButton).click();
    }
}
