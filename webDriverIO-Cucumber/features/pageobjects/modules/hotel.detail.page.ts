
export class HotelDetailPage implements IHotelDetailPage{
   
    constructor() { }

     private isPageFound:boolean =false;
     private isSortSuccessful:boolean=false;
     private item:number=0;
  

     /**
     * define selectors using getter methods
     */
    get detailDestinationtext () { return $('//*[@id="WayfinderWrapper"]/div[1]') }
    get starRatingFilter () { return $('//*[@id="MainHotelResultsFilter"]/div[2]/fieldset/div/ul/li[3]/ul/li[3]/label/span[2]') }
    get starRatingFilter3Count () { return $('//*[@id="MainHotelResultsFilter"]/div[2]/fieldset/div/ul/li[3]/ul/li[2]/label/span[3]') }
    get headerResult () { return $('//*[@id="HotelResultsContent"]//h2') }
    get resultCount () { return $('//*[@id="HotelResultsContent"]/div[2]/div[2]/div[1]/h2') }
    get resultDestinationText () { return $('//*[@id="HotelSearchResults"]/li//div[@class="hotel-result-distance-address-info show-guest-summary"]/dl/dd[2]') }
    get hotelNameFilter () { return $('//*[@id="ui-id-1"]') }
    get hotelNameFilterText () { return $('//div[@id="InputFilterWrap"]/input[@id="HotelNameFilter"]') }
    get hotelNameFilterResult () { return $('//dl[@class="hotel-results-hotel-info"]//a[1]') }
    get hotelcount() { return $('//ul[@id="HotelSearchResults"]').$$('//li[@class="js-hotel-result"]') }
    get hotelName() { return $('//ul[@id="HotelSearchResults"]/li[1]/h3') }
    get hotelStars () { return $('//ul[@id="HotelSearchResults"]/li[1]/h3/parent::*//dd[@class="fi-star-rating"]').$$('.hotel-results-star-rating-selected') }
    get buttonChooseRoom() { return $('//ul[@id="HotelSearchResults"]/li[1]//button[contains(@id,"ChooseRoom")] ') }  
    get pageCount()  { return $('//div[@class="results-pagination js-pagination-container"]/div[1]/ul').$$('li')  }
    get buttonSortByStarRatings() { return $('//ul/li[@class="hotel-sort-item"]/button[@id="StarRating"]') }
    get buttonSortByDistance() { return $('//ul/li[@class="hotel-sort-item"]/button[@id="DistanceSort"]') }
    get buttonSortByHotelName() { return $('//ul/li[@class="hotel-sort-item"]/button[@id="HotelName"]') }
    get buttonSortByPricePerNight() { return $('//ul/li[@class="hotel-sort-item"]/button[@id="PricePerNight"]') }
    get pricePerNightListItem() { return $('//ul[@id="HotelSearchResults"]/li['+ this.item +']//div[@class="hotel-result-pricing-section-container "]//span[@class="unit-cash"]/span[1]') }
    get distanceListItem() { return $('//ul[@id="HotelSearchResults"]/li['+ this.item +']/h3/parent::*//div[@class="hotel-result-distance-address-info show-guest-summary"]/dl[2]/dd') }
    get hotelNameListItem() { return $('//ul[@id="HotelSearchResults"]/li['+ this.item +']//div[@class="hotel-result-detail-section"]//dl/dd[1]/a') }
    get starRatingsListItem() { return $('//ul[@id="HotelSearchResults"]/li['+ this.item +']/h3/parent::*//dd[@class="fi-star-rating"]').$$('.hotel-results-star-rating-selected') }



     //********* Hotel detail functionality **********/

    public verifyDetailPageLoaded()
    {
        return this.detailDestinationtext.getText();
    }

    //change method name to getStarResultCount
    public clickAndVerifyStarfilterResult()
    {
        browser.pause(5000);
        this.starRatingFilter.click();
        browser.pause(5000);
        return this.resultCount.getText();
    }

    public clickAndVerifyHotelNameFilterResult(hotel:string)
    {
        browser.pause(5000);
        this.hotelNameFilterText.setValue(hotel);
        browser.pause(5000);
        this.hotelNameFilter.click();
        browser.pause(5000);
        return this.hotelNameFilterResult.getText();
    }

    public verifyHotelResultCount()
    {
        browser.pause(5000);
        return this.hotelcount.length;
    }

    public verifyHotelName()
    {
        browser.pause(5000);
        return this.hotelName.getText();
    }

    public verifyHotelStars()
    {
        browser.pause(5000);
        return this.hotelStars.length;        
    }

    public chooseRoom()
    {
        browser.pause(5000);
        this.buttonChooseRoom.click();  
        browser.pause(5000);
    }



   //********* Pagination functionality **********/

    public forwardPages(pageNo:string)
    { 
        console.log("Page count: " + this.pageCount.length);

        let lastIndex:number=this.pageCount.length;  
      
        return  this._forwardPagesRecursiveMethod(pageNo);          

    }

    private _forwardPagesRecursiveMethod(pageNo:string)
    {
        let startIndex:number =1;
        while(startIndex <= this.pageCount.length)
        {
           let buttonPageNumber:any =$('//*[@id="HotelResultsContent"]/div[2]/div[7]/div[1]/ul/li['+ startIndex +']');
           console.log("1. Page name: " + buttonPageNumber.getText());
          if( buttonPageNumber.getText() == pageNo)
           {
            console.log("Page name: " + buttonPageNumber.getText());
            console.log("Page no: " +pageNo);
            buttonPageNumber.click();
            browser.pause(5000);          
            this.isPageFound= true;               
           }   
           startIndex++;        
        }

        if(this.isPageFound == false && startIndex == (this.pageCount.length + 1) )
        {
           let nextButton= $('//*[@id="HotelResultsContent"]/div[2]/div[7]/div[1]/ul/li['+ this.pageCount.length +']');
        
           nextButton.click();
           browser.pause(5000);
           this._forwardPagesRecursiveMethod(pageNo);
        }

        return this.isPageFound;
    }


    //********* sort functionality **********/
    
      //Sorting Method 
      public verifysort(sortName:string)
      {
        try 
        {
            //throw "Exception:: Application Exception thrown!";

            //click on sort link button
            let sortButton:any;
            switch(sortName)
            { 
                case  "Price Per Night": 
                {                    
                    sortButton=  this.buttonSortByPricePerNight;
                    break;            
                } 
                case "Hotel Name": 
                { 
                    sortButton=   this.buttonSortByHotelName;
                    break; 
                } 
                case "Distance":
                { 
                    sortButton=   this.buttonSortByDistance;
                    break; 
                } 
                case "Star": 
                { 
                    sortButton=   this.buttonSortByStarRatings;
                    break; 
                } 
                default: 
                { 
                    this.buttonSortByStarRatings;
                } 
            } 
            sortButton.click();
            browser.pause(10000);
    
            let searchResultList=  this.hotelcount.length;
            console.log("searchResultList : " + searchResultList);
    
            //empty array
            let actualSortList:any[] =[];
            let n=0;
    
            for(let item:number=1;item<=searchResultList;item++)
            {  
                this.item=item;

                switch(sortName)
                { 
                    case  "Price Per Night": 
                    {                    
                        actualSortList[n]=  this.pricePerNightListItem.getText(); 
                        break;            
                    } 
                    case "Hotel Name": 
                    { 
                        actualSortList[n]=   this.hotelNameListItem.getAttribute("title"); 
                        break; 
                    } 
                    case "Distance":
                    { 
                        actualSortList[n]=  this.distanceListItem.getText();
                        break; 
                    } 
                    case "Star": 
                    { 
                        actualSortList[n]=  this.starRatingsListItem.length;  
                        break; 
                    } 
                    default: 
                    { 
                        actualSortList[n]= "";
                    } 
                } 
        
                console.log(sortName + " [" + n +"] : " +  actualSortList[n]);     
                n++;
            }
            
                let comparisionSortedList:string[];
                let sortDirection:string=sortButton.getAttribute("aria-describedby");
                console.log("sort direction: " + sortButton.getAttribute("aria-describedby"));
            
            //check the sort expected order 
            if(sortDirection.includes("-desc"))
            {
                // Descending
                comparisionSortedList=actualSortList.sort((a,b) => 0 - (a > b ? 1 : -1));
                console.log("Comparision List: Desc "+ sortName + " : " + comparisionSortedList);
                console.log("Actual List: Desc "+ sortName + " : " + actualSortList);
            }        
            else if(sortDirection.includes("-asc"))
            {
                // Ascending
                comparisionSortedList=actualSortList.sort((a,b) => 0 - (a > b ? -1 : 1));
                console.log("Comparision List: Asc "+ sortName + "  : " + comparisionSortedList);
                console.log("Actual List: Asc "+sortName + " : " + actualSortList);
            }   
            else
            {
                comparisionSortedList=actualSortList;
            }   
    
            //check if arrays are equal
            if(actualSortList === comparisionSortedList){
                this.isSortSuccessful=true;
                
                console.log( sortName + "  sort is working perfectely.");
            }

            return this.isSortSuccessful;
            
        }
        catch(e)
        {
            console.log(e);
            return false;
        }
      }

}


















//use proper case for arguments
//optimize selector, js selector as priority