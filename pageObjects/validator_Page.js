class validator_Page{
    get username() { return $("/html//input[@id='input-email']");}
    get password() { return $("/html//input[@id='input-password']");}
    get loginB() { return $("//button[.=' Log In ']");}

    get refreshB() { return $("//button[.='Refresh']");}
    get quoteIdSearch() { return $("//search/nb-card/nb-card-body/div/div[1]/div/input");}
    get searchB() { return $("//button[.='Search']");}
    get clearB() { return $("//button[.='Clear']");}
    get quotePhoto() { return $("//div[@class='gallery-text']");}
    get quotePhotoNumber() { return $("//div[@class='gallery-text']/h3");}

    get editOriginalImagesB() { return $("//button[.='Edit Original Segmented Images']");}
    get approveB() { return $("//button[.='Approve']");}
    get rawImage1() { return $("//nb-card[2]/nb-card-header/div/div[1]/ngx-gallery/div/ngx-gallery-image/div/div");}

    get imagesTotalVGG() { return $$("//div[@id='img_fn_list']/ul/li");}

    get confirmYesB() { return $("//button[.='Yes']");}
    get confirmNoB() { return $("//button[.='No']");}
    get readyForValidationText() { return $("//h5[.=' Ready for Validation ']");}
    //body/ngx-app/ngx-pages[@class='ng-star-inserted']/ngx-one-column-layout/nb-layout[@class='main_layout window-mode with-scroll']/div[@class='scrollable-container']//nb-layout-column//h5[@class='ng-star-inserted']
    get nameIt() { return $("");}
    get nameIt() { return $("");}
    get nameIt() { return $("");}
    
    async loginFunction() {
        await this.username.setValue('siddhi01');
        await this.password.setValue('scfd486');
        await this.loginB.click();
    }

    async openValidator() {
        await browser.url(`https://cq-uat-validator.web.app/#/auth/login`);
        await this.loginFunction();
        await this.refreshB.waitForDisplayed({ timeout: 20000 });
    }

    async openSearchPage() {
        await browser.url('https://cq-uat-validator.web.app/#/pages/search');
        await this.quoteIdSearch.waitForDisplayed({ timeout: 40000 });
    }

    async searchQuote(quoteID, quoteUnderscoreID) {
        await this.quoteIdSearch.setValue(quoteID);
        await this.searchB.click();
        await this.searchB.waitForClickable({ timeout: 30000});
        await this.quotePhoto.waitForDisplayed({ timeout: 15000});
        await this.quotePhoto.waitForClickable({ timeout: 15000});
        const quoteImageTotal = await this.quotePhotoNumber.getText();
        console.log("Total Image in QUote", quoteImageTotal);
        await this.quotePhoto.click();
        await browser.pause(12000);
        console.log(await browser.getUrl());
        var vggUrl = "https://cq-uat-validator.web.app/#/pages/estimate-details/segmentation/" + quoteUnderscoreID;
        await browser.switchWindow(vggUrl);
        console.log(await browser.getUrl());
        await this.rawImage1.waitForDisplayed({ timeout: 15000});
        await this.editOriginalImagesB.scrollIntoView();
        await this.editOriginalImagesB.click();
        await browser.pause(12000);
        await browser.switchWindow('VGG Image Annotator');
        console.log('after switching window : ', await browser.getUrl());
        await this.imagesTotalVGG[1].waitForDisplayed({ timeout: 30000});
        await this.imagesTotalVGG[1].click();
        await this.imagesTotalVGG[2].click();
        await browser.switchWindow(vggUrl);
        console.log('after switching window 1 : ', await browser.getUrl());
        await browser.pause(10000);
        await this.rawImage1.waitForDisplayed({ timeout: 30000});
        await this.approveB.scrollIntoView();
        console.log(await this.approveB.isClickable(), 'check here');
        if (await this.approveB.isClickable() === true) {
            console.log('if condition');
            await this.approveB.scrollIntoView();
            await this.approveB.click();
            await this.confirmYesB.click();
            await this.refreshB.waitForClickable({ timeout: 30000});
            await this.readyForValidationText.waitForDisplayed({ timeout: 60000});
        }
        else {
            console.log('else condition');
            await browser.switchWindow('VGG Image Annotator');
            await browser.pause(10000);
            await this.imagesTotalVGG[1].waitForDisplayed({ timeout: 30000});
            await this.imagesTotalVGG[1].click();
        }
        await browser.url('https://cq-uat.web.app/#/pages/details/estimation/' + quoteUnderscoreID);
    }

    async checkVGG() {
        
    }
}


module.exports = new validator_Page();