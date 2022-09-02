const database_Function = require('../pageObjects/database_Function.js');

class search_Page{
    get regNo() { return $("//nb-card[1]/nb-card-body/div/div[1]/div/input");}
    get startDate() { return $("//nb-card[1]/nb-card-body/div/div[2]/div/input");}
    get endDate() { return $("//nb-card[1]/nb-card-body/div/div[3]/div/input");}
    get selectDealerDD() { return $("//nb-card[1]/nb-card-body/div/div[4]/div/nb-select/button");}
    get selectDealerDDIcon() { return $("//nb-card[1]/nb-card-body/div/div[4]/div/nb-select/button/nb-icon/svg/g/g/rect");}
    get selectUserDD() { return $("//nb-card[1]/nb-card-body/div/div[5]/div/nb-select/button");}
    get selectUserDDIcon() { return $("//nb-card[1]/nb-card-body/div/div[5]/div/nb-select/button/nb-icon/svg/g/g/rect");}
    
    get dealerDemoDealer4Estimation() { return $("//nb-option[.=' Demo Dealer 4 Estimation']");}
    get dealerOtlUat() { return $("//nb-option[.=' OTL UAT']");}
    get userSiddhi() { return $("//nb-option[.=' siddhi01, admin']");}

    get searchB() { return $("//button[.='Search']");}
    get clearB() { return $("//button[.='Clear']");}
    
    get approvedB() { return $("//button[.='Approved']");}
    get rejectedB() { return $("//button[.='Rejected']");}
    get customerApprovalB() { return $("//button[.='Waiting for customer approval']");}
    get approvalNeededB() { return $("//button[.='Approval needed']");}
    
    get estimateCount() { return $("//div[1]/nb-card/nb-card-body/div/strong");}
    get totalValueCount() { return $("//div[1]/nb-card/nb-card-body/div/strong");}
    
    get paginationQuoteCount() { return $("//nb-card[4]/nb-card-body/div[2]/div/div[1]");}
    
    get calendarDate17() { return $("//nb-calendar-day-cell[.=' 17 ']");}
    get calendarDate18() { return $("//nb-calendar-day-cell[.=' 18 ']");}
    get calendarDate20() { return $("//nb-calendar-day-cell[.=' 20 ']");}
    get nameIt() { return $("");}
    get nameIt() { return $("");}

    async openSearchPage() {
        await browser.url(`https://cq-uat.web.app/#/pages/search`);
        await this.estimateCount.waitForDisplayed({ timeout: 25000 });
    }

    async compareQuoteCountWithDB(uiQuoteCount1, uiQuoteCount2) {
        const quoteCountDB = await database_Function.quotesCount();
        await expect(await uiQuoteCount1).to.equal(JSON.stringify(quoteCountDB));

        if (String(uiQuoteCount1) !== '0') {
            if (uiQuoteCount2 < 10) {
                console.log('if 1');
                uiQuoteCount2 = await uiQuoteCount2.slice(9);
            }
            else {
                console.log('else 1', typeof uiQuoteCount2);
                uiQuoteCount2 = await uiQuoteCount2.toString().slice(10);
            }            
            console.log("check", uiQuoteCount2);
            await expect(await uiQuoteCount2).to.equal(JSON.stringify(quoteCountDB));
        }
        else {
            console.log("No quotes");
        }
    }
    
    async validateRegNo(regNoValue) {
        await this.regNo.setValue(regNoValue);
        await this.searchB.click();
        await this.regNo.waitForClickable({ timeout: 15000});
        console.log('count check', await this.estimateCount.getText());
        const quoteCount = await database_Function.quotesByRegNoLast7Day(regNoValue);
        console.log('last 7 day quote regno', quoteCount);
        await expect(JSON.stringify(quoteCount)).to.equal(await this.estimateCount.getText());
    }
    
    async validateDate(startDateValue, endDateValue) {
        await this.startDate.click();
        await this.calendarDate17.click();
        await this.endDate.click();
        await this.calendarDate18.click();
        await this.searchB.click();
        await this.regNo.waitForClickable({ timeout: 15000});
        console.log('count check', await this.estimateCount.getText());
        const quoteCount = await database_Function.quotesByDate();
        console.log('quote by date filter DB', quoteCount);
        await expect(JSON.stringify(quoteCount)).to.equal(await this.estimateCount.getText());
        //await browser.pause(2000);
    }

    async validateDateWithDealerAndUser() {
        await this.startDate.click();
        await this.calendarDate17.click();
        await this.endDate.click();
        await this.calendarDate20.click();
        await this.selectDealerDD.click();
        await this.dealerOtlUat.click();
        await this.regNo.waitForClickable({ timeout: 15000});
        await this.selectUserDD.click();
        await this.userSiddhi.click();
        await this.searchB.click();
        await this.regNo.waitForClickable({ timeout: 15000});
        await this.searchB.waitForClickable({ timeout: 15000});
        console.log('count check', await this.estimateCount.getText());
        const quoteCount = await database_Function.quotesByDateDealerUser();
        console.log('quote by date, dealer, and user filter DB', quoteCount);
        await expect(JSON.stringify(quoteCount)).to.equal(await this.estimateCount.getText());
    }

    async validateDealer() {
        await this.selectDealerDD.click();
        await this.dealerOtlUat.click();
        await this.regNo.waitForClickable({ timeout: 15000});
        await this.searchB.click();
        await this.regNo.waitForClickable({ timeout: 15000});
        await this.searchB.waitForClickable({ timeout: 15000});
        console.log('count check', await this.estimateCount.getText());
        const quoteCount = await database_Function.quotesByDealer();
        console.log('quote by dealer filter DB', quoteCount);
        await expect(JSON.stringify(quoteCount)).to.equal(await this.estimateCount.getText());
    }

    async validateUser() {
        await this.selectUserDD.click();
        await this.userSiddhi.click();
        await this.regNo.waitForClickable({ timeout: 15000});
        await this.searchB.click();
        await this.regNo.waitForClickable({ timeout: 15000});
        await this.searchB.waitForClickable({ timeout: 15000});
        console.log('count check', await this.estimateCount.getText());
        const quoteCount = await database_Function.quotesByUser();
        console.log('quote by user filter DB', quoteCount);
        await expect(JSON.stringify(quoteCount)).to.equal(await this.estimateCount.getText());
    }

    async validateClear() {
        await this.clearB.click();
        await this.regNo.waitForClickable({ timeout: 15000});
        const quoteCount = await this.estimateCount.isDisplayed();
        console.log('quote displayed', quoteCount);
        await expect(quoteCount).to.equal(false);
    }
}


module.exports = new search_Page();