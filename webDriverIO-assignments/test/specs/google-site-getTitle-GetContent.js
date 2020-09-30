describe('google page title ', () => {
    it('should have the right title', () => {

        browser.url('https://www.google.com/')
        expect(browser).toHaveTitle('Google');
    })
})

describe('google page link ', () => {
    it('should have the right link', () => {

        browser.url('https://www.google.com/')
        expect(browser).toHaveTitle('Google');       

        const paragraph = $('//*[@id="prm"]/div/a')
        expect(paragraph).toBeExisting();
        expect(paragraph).toHaveTextContaining('Wear a mask. Help slow the spread of COVID-19');
    })
})