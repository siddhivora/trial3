class UAT_Page{
    get username() { return $("/html//input[@id='input-email']");}
    get password() { return $("/html//input[@id='input-password']");}
    get login() { return $(".ng-dirty.ng-touched.ng-valid > .appearance-filled.full-width.nb-transition.shape-rectangle.size-medium.status-primary");}

    get cqLogo() { return $("//img[@class='img-logo']");}
    get createQuoteButtonHomepage() { return $("//ngx-app/ngx-pages[@class='ng-star-inserted']/ngx-one-column-layout/nb-layout[@class='main_layout window-mode with-scroll']//nb-layout-column/ngx-dashboard[@class='ng-star-inserted']/button//span[@class='ng-star-inserted']");}
    
    async openClearquote() {
        await browser.url(`https://cq-uat.web.app/#/auth/login`);
        await expect(await browser.getTitle()).to.equal('ClearQuote');
        await browser.maximizeWindow();
        await this.loginFunction();
        await this.navigateToHomepage();
    }
    
    async loginFunction() {
        await this.username.setValue('siddhi01');
        await this.password.setValue('scfd486');
        await this.login.click();
    }
    
    async navigateToHomepage() {
        await this.cqLogo.waitForDisplayed({ timeout: 15000 });
        await this.cqLogo.click();
    }

    async navigateToInputQuotePage() {
        //await this.createQuoteButtonHomepage.waitForDisplayed({ timeout: 4000 });
        //await this.createQuoteButtonHomepage.click();
        await browser.url('https://cq-uat.web.app/#/pages/analysis/estimation');
    }

    async navigateToAssessmentQuotePage() {
        await browser.url('https://cq-uat.web.app/#/pages/lease/quote');
    }

    async waitForDisplayedAndClick(elementLocator) {
        await elementLocator.waitForDisplayed({ timeout: 6000 });
        await elementLocator.click();
    }

    async waitForDisplayedAndSetValue(elementLocator, elementValue) {
        await elementLocator.waitForDisplayed({ timeout: 4000 });
        await elementLocator.setValue(elementValue); 
    }
    
}





module.exports = new UAT_Page();