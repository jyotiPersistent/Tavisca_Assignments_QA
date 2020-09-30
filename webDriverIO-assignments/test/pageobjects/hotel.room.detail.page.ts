
/**
 * sub page containing specific selectors and methods for a specific page
 */
export class HotelRoomDetailPage {
   
    constructor() {      
    }

     /**
     * define selectors using getter methods
     */
     get HotalName () { return $('//div[@class="hotel-details-grid-container"]/div/h2/span') }
     get AvailableRooms () { return $('//*[@id="hotel-rooms-count"]/strong') }

    public verifyHotelNameOnDetailPage()
    {
        browser.pause(5000);
        return this.HotalName.getText();
    }

    public verifyRoomAvailability()
    {
        browser.pause(5000);
        return this.AvailableRooms.getText();
    }


}

