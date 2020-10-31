interface IHotelDetailPage
{

    verifyDetailPageLoaded():string;
    clickAndVerifyStarfilterResult():string;
    clickAndVerifyHotelNameFilterResult(hotel:string):string;
    verifyHotelResultCount():number;
    verifyHotelName():string;
    verifyHotelStars():number;
    chooseRoom():void;
    forwardPages(pageNo:string):boolean;
    verifysort(sortName:string, sortButton:any):boolean;
}