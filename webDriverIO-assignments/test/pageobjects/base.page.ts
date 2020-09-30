/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

export default class BasePage{

    static PAGE_URL: string;

    constructor() {
      
    }

    static openSiteUrl()
    {
        browser.url(this.PAGE_URL);
    }    
    
}