export default class siteDataMaintainanceUtil {

    constructor() { }
    
    static siteURL:string;
    
    static setSiteURL(testData:any):string
    {
        this.siteURL =testData.siteUrl;
        console.log(testData.siteURL);
        return this.siteURL;
    }
}