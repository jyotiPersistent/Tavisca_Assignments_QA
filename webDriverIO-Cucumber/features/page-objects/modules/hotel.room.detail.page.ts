import selectors from "../../json-selectors/hotel.room.detail.json"

export class HotelRoomDetailPage implements IHotelRoomDetailPage {
   
    constructor() {    
    }

    public verifyHotelNameOnDetailPage()
    {
        browser.pause(5000);
        return $(selectors.HotalName).getText();
    }

    public verifyRoomAvailability()
    {
        browser.pause(5000);
        return $(selectors.AvailableRooms).getText();
    }
}

