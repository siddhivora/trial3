/**
TestCase:1_1, Flow:Lease, DealerCode:"DEMODEALER4ESTIMATION", Dealer:Demo Dealer 4 Estimation, User:Admin, 
Bodystyle:Sedan/ Hatch/ SUV	, Make:Skoda, Model:Yeti, Reg number:autotestlease06122021generic, Images:1 to 8,10 to 13

Quote Generated: https://cq-uat.web.app/#/pages/details/estimation/61adbe7c2fbbd57fb8873b00
*/

const UAT_Page = require('../pageObjects/UAT_Page.js');
const home_Page = require('../pageObjects/home_Page.js');
const search_Page = require('../pageObjects/search_Page.js');
const input_Page = require('../pageObjects/input_Page.js');
const details_Page = require('../pageObjects/details_Page.js');
const validator_Page = require('../pageObjects/validator_Page.js');
const database_Function = require('../pageObjects/database_Function.js');
//const allureReporter = require('@wdio/allure-reporter').default;

describe('Test UAT::', () => {
    
    before(async () => {
        await UAT_Page.openClearquote();
    });
    
    it('Assessment Flow: Generate Quote for Demo Dealer 4 Estimation Dealer (Validation required)', async () => {
        await UAT_Page.openValidator();
        await validator_Page.openSearchPage();
        await validator_Page.quoteIdSearch.setValue(quoteID);
        await validator_Page.searchB.click();
        await validator_Page.searchB.waitForClickable({ timeout: 30000});

    });
    it('Assessment Flow: Generate Quote for Demo Dealer 4 Estimation Dealer (Validation required)', async () => {
        await UAT_Page.navigateToAssessmentQuotePage();        
        
        //Fill vehicle and customer details
        await input_Page.resetB.scrollIntoView();
        await input_Page.resetB.waitForDisplayed({ timeout: 15000 });
        await input_Page.tickI.click();
        await UAT_Page.waitForDisplayedAndClick(input_Page.dealerOtlUat);
        await input_Page.regNo1.click();
        await input_Page.regNo2.setValue("autotest26082022generic");
        await input_Page.confirm.click();
        
        await input_Page.mileage1.waitForDisplayed({ timeout: 4000 });
        await input_Page.mileage1.click();
        await input_Page.mileage2.setValue("123");
        await input_Page.confirm.click();
        await input_Page.makeModelDD.click();
        await input_Page.modelCitroenJumper.click();

        await input_Page.name.setValue("Siddhi");
        //await input_Page.email.setValue("abcdef");
        //await input_Page.phone.setValue("9409156737");
                         
        //click CREATE QUOTE button and wait till upload button is displayed 
        await input_Page.nextB.click();
        await details_Page.uploadB.waitForDisplayed({ timeout: 20000 });
        
        //upload images
        await details_Page.genericImageUpload();
        await details_Page.saveB.waitForDisplayed({ timeout: 30000 });
        await details_Page.saveB.click();

        await details_Page.inspectionChecklistSaveB.waitForDisplayed({ timeout: 30000 });
        await details_Page.inspectionChecklistOdometer1.setValue('34753');
        await details_Page.inspectionChecklistFuelLevelDD.click();
        await details_Page.inspectionChecklistFuelLevelDDHalf.click();
        await details_Page.inspectionChecklistSaveB.click();

        await details_Page.okayB.waitForDisplayed({ timeout: 6000 });
        await details_Page.okayB.click();
        
        //wait until analsis completes
        //await browser.url('https://cq-uat.web.app/#/pages/details/estimation/630f20462f620a48c552f9de');
        await details_Page.statusBar.waitForDisplayed({ timeout: 360000 });    
        global.quoteUrl = await browser.getUrl(); 
        var quoteUnderscoreID = global.quoteUrl.substring(50);
        console.log("Quote URL:: ", quoteUnderscoreID);

        await details_Page.quoteDetailsTick.click();
        var quoteID = await details_Page.quoteID.getText();
        quoteID = quoteID.substring(11);
        console.log("Quote ID:", quoteID);

        await validator_Page.openValidator();
        await validator_Page.openSearchPage();
        await validator_Page.searchQuote(quoteID, quoteUnderscoreID);

    });

    it.skip('Assessment Flow: Generate Quote for Automation Testing Demo Dealer (Validation not required)', async () => {
        await UAT_Page.navigateToAssessmentQuotePage();        
        
        //Fill vehicle and customer details
        await input_Page.resetB.waitForDisplayed({ timeout: 15000 });
        await input_Page.tickI.click();
        await UAT_Page.waitForDisplayedAndClick(input_Page.dealerDemoDealer);
        await UAT_Page.waitForDisplayedAndClick(input_Page.makeModelDD);
        await UAT_Page.waitForDisplayedAndClick(input_Page.makeModelDDAnyMakeAnyModel);
        //await UAT_Page.waitForDisplayedAndClick(input_Page.paintDD);
        //await UAT_Page.waitForDisplayedAndClick(input_Page.paintDDMetallic);
        await UAT_Page.waitForDisplayedAndSetValue(input_Page.regNoD1, "autotestlease23082022generic");

        await input_Page.name.setValue("Siddhi");
        //await input_Page.email.setValue("abcdef");
        //await input_Page.phone.setValue("9409156737");
                         
        //click CREATE QUOTE button and wait till upload button is displayed 
        await input_Page.nextB.click();
        await details_Page.uploadB.waitForDisplayed({ timeout: 20000 });
        
        //upload images
        await details_Page.genericImageUpload();
        await details_Page.saveB.waitForDisplayed({ timeout: 20000 });
        await details_Page.saveB.click();

        await details_Page.inspectionChecklistSaveB.waitForDisplayed({ timeout: 30000 });
        await details_Page.inspectionChecklistOdometer1.setValue('34753');
        await details_Page.inspectionChecklistFuelLevelDD.click();
        await details_Page.inspectionChecklistFuelLevelDDHalf.click();
        await details_Page.inspectionChecklistSaveB.click();

        await details_Page.okayB.waitForDisplayed({ timeout: 2000 });
        await details_Page.okayB.click();

        //wait until analsis completes
        await details_Page.statusBar.waitForDisplayed({ timeout: 360000 });    
        global.quoteUrl = await browser.getUrl(); 
        console.log("Quote URL:: ", await browser.getUrl());
        //uncomment when testing directly from generated quote
        //await browser.url(`https://cq-uat.web.app/#/pages/details/estimation/61adc1932fbbd57fb8875c2c`);
        //await details_Page.statusBar.waitForDisplayed({ timeout: 30000 });
        
        //await details_Page.validateGenericVehicleDetail();
        //await details_Page.requestCustomerApprovalUsingEmail("siddhi@clearquote.io");

        //await details_Page.validateAssessmentSectionIntensity();
        //await details_Page.validateDiscountFunctionality();
        //await details_Page.validateEstimatePrintFunctionality();
        //await details_Page.validateEstimateSectionIntensity();
       
    });

    it("Validate Search Page Estimate Quotes Count", async () => {
        await search_Page.openSearchPage();
        await search_Page.compareQuoteCountWithDB(await search_Page.estimateCount.getText(), await search_Page.paginationQuoteCount.getText());
    })

    it("Validate Search Page Reg No Field", async () => {
        await search_Page.openSearchPage();
        await search_Page.validateRegNo('BD70POV');
    })

    it("Validate Search Page Date Field", async () => {
        await search_Page.openSearchPage();
        await search_Page.validateDate('17-08-2022', '18/08/2022');
    });

    it("Validate Search Page Date Field with Dealer and User Field", async () => {
        await search_Page.openSearchPage();
        await search_Page.validateDateWithDealerAndUser();
    });

    it("Validate Search Page Dealer Field", async () => {
        await search_Page.openSearchPage();
        await search_Page.validateDealer();
    });

    it("Validate Search Page User Field", async () => {
        await search_Page.openSearchPage();
        await search_Page.validateUser();
    });

    it("Validate Search Page Clear Functionality", async () => {
        await search_Page.openSearchPage();
        await search_Page.validateClear();
    });

    it('Validate Home Page Today Filter', async () => {
        await home_Page.todayF.waitForDisplayed({ timeout: 15000 });

        const quoteCountDB = await database_Function.dbCOnnect();
        console.log("Script Count", quoteCountDB);

        var metricsQuoteCount = await home_Page.metricsQuoteCount.getText();
        //var metricsQuoteCount = '8'
        var summaryQuotesCount = await home_Page.summaryQuotesCount.getText();
        if (String(metricsQuoteCount) !== '0') {
            var myquotesQuotesCount= await home_Page.myquotesQuotesCount.getText();
            //var myquotesQuotesCount= '1 - 8 of 8'
            if (metricsQuoteCount < 10) {
                console.log('if 1');
                myquotesQuotesCount = await myquotesQuotesCount.slice(9);
            }
            else {
                console.log('else 1');
                myquotesQuotesCount = await myquotesQuotesCount.slice(10);
            }            
            console.log("check", myquotesQuotesCount);
            await expect(await myquotesQuotesCount).to.equal(await metricsQuoteCount);
            await expect(await myquotesQuotesCount).to.equal(await summaryQuotesCount);
            await expect(await myquotesQuotesCount).to.equal(JSON.stringify(quoteCountDB));
        }
        else {
            console.log("No quotes");
        }
        
        console.log(metricsQuoteCount);
        console.log(summaryQuotesCount);
        await expect(await metricsQuoteCount).to.equal(await summaryQuotesCount);
        console.log(await quoteCountDB);
        await expect(await metricsQuoteCount).to.equal(JSON.stringify(quoteCountDB));
        //await UAT_Page.navigateToInputQuotePage();

        
       
    });

    it.only('Generate Quote for Automation Testing Demo Dealer and Generic Model:', async () => {
        //allureReporter.addFeature('Quote Generation');
        //allureReporter.addSeverity('Critical')

        await UAT_Page.navigateToInputQuotePage();        
        
        //Fill vehicle and customer details
        await input_Page.resetB.waitForDisplayed({ timeout: 15000 });
        await input_Page.tickI.click();
        await UAT_Page.waitForDisplayedAndClick(input_Page.dealerDemoDealer);
        await UAT_Page.waitForDisplayedAndClick(input_Page.makeModelDD);
        await UAT_Page.waitForDisplayedAndClick(input_Page.makeModelDDAnyMakeAnyModel);
        await UAT_Page.waitForDisplayedAndSetValue(input_Page.regNoD1, "autotestlease27062022generic");

        //await input_Page.name.setValue("Siddhi");
        //await input_Page.email.setValue("abcdef");
        //await input_Page.phone.setValue("9409156737");
                         
        //click CREATE QUOTE button and wait till upload button is displayed 
        await input_Page.createQuoteB.click();
        await details_Page.uploadB.waitForDisplayed({ timeout: 20000 });
        
        //upload images
        await details_Page.genericImageUpload();
        await details_Page.inspectionChecklistUploadMoreImageB.waitForDisplayed({ timeout: 60000});
        await details_Page.inspectionChecklistUploadMoreImageB.click();
        //wait until analsis completes
        await details_Page.statusBar.waitForDisplayed({ timeout: 360000 });    
        global.quoteUrl = await browser.getUrl(); 
        console.log("Quote URL:: ", await browser.getUrl());
        //uncomment when testing directly from generated quote
        //await browser.url(`https://cq-uat.web.app/#/pages/details/estimation/61adc1932fbbd57fb8875c2c`);
        //await details_Page.statusBar.waitForDisplayed({ timeout: 30000 });
        
        //await details_Page.validateGenericVehicleDetail();
        //await details_Page.requestCustomerApprovalUsingEmail("siddhi@clearquote.io");

        //await details_Page.validateAssessmentSectionIntensity();
        //await details_Page.validateDiscountFunctionality();
        //await details_Page.validateEstimatePrintFunctionality();
        //await details_Page.validateEstimateSectionIntensity();
       
    });

    it('Validate Vehicle Detail::', async () => {
        //await UAT_Page.openClearquote();
        //await UAT_Page.navigateToInputQuotePage(); 

        //await browser.url(`https://cq-uat.web.app/#/pages/details/estimation/61adc1932fbbd57fb8875c2c`);
        await details_Page.statusBar.waitForDisplayed({ timeout: 30000 });
        
        await details_Page.validateGenericVehicleDetail();
    }); 

    it('Validate Request Customer Approval using Email Functionality::', async () => {
        //await browser.url(`https://cq-uat.web.app/#/pages/details/estimation/61d2cd9e67180d319aee4ae9`);
        await browser.url(quoteUrl);
        await details_Page.statusBar.waitForDisplayed({ timeout: 30000 });       
        await details_Page.requestCustomerApprovalUsingEmail("siddhi@clearquote.io");
    });

    it('Validate Damage Intensity in Estimate Section::', async () => {
        //await browser.refresh();
        //await details_Page.statusBar.waitForDisplayed({ timeout: 10000 });         
        await details_Page.validateEstimateSectionIntensity();
    });

    it('Validate Damage Intensity in Assessment Section::', async () => { 
        //await browser.url(quoteUrl);
        //await details_Page.statusBar.waitForDisplayed({ timeout: 10000 });       
        await details_Page.validateAssessmentSectionIntensity();
    });

    it('Validate Discount Functionality in Estimate Section::', async () => { 
        await browser.url(quoteUrl);
        await details_Page.statusBar.waitForDisplayed({ timeout: 10000 });        
        await details_Page.validateDiscountFunctionality();
        await browser.pause(5000);
    });

    it('Validate Edit Functionality in Assessment Section::', async () => {
        await browser.url(quoteUrl);
        await details_Page.statusBar.waitForDisplayed({ timeout: 10000 });         
        await details_Page.validateEditAssessmentFunctionality();
    });

    it('Validate Download Print Format 1,2,3,4 Functionality in Estimate Section::', async () => {
        await browser.url(quoteUrl);
        await details_Page.statusBar.waitForDisplayed({ timeout: 10000 });         
        await details_Page.validateEstimatePrintFunctionality();
    });

    it('Validate Download Print Format 1,2,3,4 Functionality in Assessment Section::', async () => {
        await browser.url(quoteUrl);
        await details_Page.statusBar.waitForDisplayed({ timeout: 10000 });         
        await details_Page.validateAssessmentPrintFunctionality();
    });

    it('Validate Repair Estimate by Paint type Functionality in Estimate Section::', async () => {
        await browser.url(quoteUrl);
        await details_Page.statusBar.waitForDisplayed({ timeout: 10000 });         
        await details_Page.validateRepairEstimateByPaintFunctionality();
    });
    
    it.skip('should create Fleet before quote for Automation Testing Fleet B/A Dealer:', async () => {
        await UAT_Page.navigateToInputQuotePage();        
         
        //Fill vehicle and customer details
        await input_Page.resetB.waitForDisplayed({ timeout: 15000 });
        await input_Page.tickI.click();
        await input_Page.dealerFleetBA.click();
        await input_Page.makeModelDD.click();
        await input_Page.makeModelDDVanAnyModel.click();
        await input_Page.regNo1.click();
        await input_Page.regNo2.setValue("autotest27062022van");
        await input_Page.confirm.click();
        await input_Page.radioButtonBefore.click();

        //await input_Page.name.setValue("Siddhi");
        //await input_Page.email.setValue("abcdef");
        //await input_Page.phone.setValue("9409156737");
        
        //click CREATE QUOTE button and wait till upload button is displayed 
        await input_Page.createQuoteB.click();
        await details_Page.uploadB.waitForDisplayed({ timeout: 20000 });
        
        //upload images
        await details_Page.vanImageUpload();
        //wait until analsis completes
        await details_Page.inspectionChecklistUploadMoreImageB.waitForDisplayed({ timeout: 60000});
        await details_Page.inspectionChecklistUploadMoreImageB.click();
        await details_Page.statusBar.waitForDisplayed({ timeout: 360000 })
        
        //uncomment when testing directly from generated quote
        //await browser.url(`https://cq-uat.web.app/#/pages/details/estimation/619ddc2b2fbbd57fb8acc7a8`);
        //await details_Page.statusBar.waitForDisplayed({ timeout: 30000 });

        console.log("Before Quote URL:: ", await browser.getUrl());
    });

    it.skip('should create Fleet After quote for Automation Testing Fleet B/A Dealer:', async () => {
        await UAT_Page.navigateToInputQuotePage();        
         
        //Fill vehicle and customer details
        await input_Page.resetB.waitForDisplayed({ timeout: 15000 });
        await input_Page.tickI.click();
        await input_Page.dealerFleetBA.click();
        await input_Page.makeModelDD.click();
        await input_Page.makeModelDDVanAnyModel.click();
        await input_Page.regNo1.click();
        await input_Page.regNo2.setValue("autotest27062022van");
        await input_Page.confirm.click();
        await input_Page.radioButtonAfter.click();

        //await input_Page.name.setValue("Siddhi");
        //await input_Page.email.setValue("abcdef");
        //await input_Page.phone.setValue("9409156737");
        
        //click CREATE QUOTE button and wait till upload button is displayed 
        await input_Page.createQuoteB.click();
        await details_Page.uploadB.waitForDisplayed({ timeout: 20000 });
        
        //upload images
        await details_Page.vanAfterImageUpload();
        //wait until analsis completes
        await details_Page.inspectionChecklistUploadMoreImageB.waitForDisplayed({ timeout: 60000});
        await details_Page.inspectionChecklistUploadMoreImageB.click();
        await details_Page.statusBar.waitForDisplayed({ timeout: 360000 })
        
        //uncomment when testing directly from generated quote
        //await browser.url(`https://cq-uat.web.app/#/pages/details/estimation/619ddc2b2fbbd57fb8acc7a8`);
        //await details_Page.statusBar.waitForDisplayed({ timeout: 30000 });
        console.log("After Quote URL:: ", await browser.getUrl());
        
        await details_Page.generateComparison.click();
        await details_Page.comparisonDamagedPanels.waitForDisplayed({ timeout: 20000 });

        const damagedPanels = await details_Page.comparisonDamagedPanels.getText();
        console.log("Comparison data is generated:", damagedPanels);

        
    });

    it.skip('Generate before quote for Comparison For All dealer', async () => {
        await UAT_Page.navigateToInputQuotePage();        
        
        //Fill vehicle and customer details
        await input_Page.resetB.waitForDisplayed({ timeout: 15000 });
        await input_Page.tickI.click();
        await input_Page.dealerComparisonForAll.click();
        await input_Page.regNo1.click();
        await input_Page.regNo2.setValue("autotest27062022generic");
        await input_Page.confirm.click();
        //await input_Page.name.setValue("Siddhi");
        //await input_Page.email.setValue("abcdef");
        //await input_Page.phone.setValue("9409156737");
        await input_Page.mileage1.waitForDisplayed({ timeout: 4000 });
        await input_Page.mileage1.click();
        await input_Page.mileage2.setValue("123");
        await input_Page.confirm.click();
        await input_Page.makeModelDD.click();
        await input_Page.modelCitroenJumper.click();
        
        //click CREATE QUOTE button and wait till upload button is displayed 
        await input_Page.createQuoteB.click();
        await details_Page.uploadB.waitForDisplayed({ timeout: 20000 });
        
        //upload images
        await details_Page.genericImageUpload();
        //wait until analsis completes
        await details_Page.inspectionChecklistUploadMoreImageB.waitForDisplayed({ timeout: 60000});
        await details_Page.inspectionChecklistUploadMoreImageB.click();
        await details_Page.statusBar.waitForDisplayed({ timeout: 360000 })
        
        //uncomment when testing directly from generated quote
        //await browser.url(`https://cq-uat.web.app/#/pages/details/estimation/61972e5a2fbbd57fb88a0523`);
        //await details_Page.statusBar.waitForDisplayed({ timeout: 30000 });

        //await details_Page.validateVanVehicleDetail();
    });

    it.skip('Generate after quote for Comparison For All dealer', async () => {
        await UAT_Page.navigateToInputQuotePage();        
        
        //Fill vehicle and customer details
        await input_Page.resetB.waitForDisplayed({ timeout: 15000 });
        await input_Page.tickI.click();
        await input_Page.dealerComparisonForAll.click();
        await input_Page.regNo1.click();
        await input_Page.regNo2.setValue("autotest27062022generic");
        await input_Page.confirm.click();
        //await input_Page.name.setValue("Siddhi");
        //await input_Page.email.setValue("abcdef");
        //await input_Page.phone.setValue("9409156737");
        await input_Page.mileage1.waitForDisplayed({ timeout: 4000 });
        await input_Page.mileage1.click();
        await input_Page.mileage2.setValue("41005");
        await input_Page.confirm.click();
        await input_Page.makeModelDD.click();
        await input_Page.modelCitroenJumpy.click();
        
        //click CREATE QUOTE button and wait till upload button is displayed 
        await input_Page.createQuoteB.click();
        await details_Page.uploadB.waitForDisplayed({ timeout: 20000 });
        
        //upload images
        await details_Page.genericAfterImageUpload();
        //wait until analsis completes
        await details_Page.inspectionChecklistUploadMoreImageB.waitForDisplayed({ timeout: 60000});
        await details_Page.inspectionChecklistUploadMoreImageB.click();
        await details_Page.statusBar.waitForDisplayed({ timeout: 360000 })
        
        //uncomment when testing directly from generated quote
        //await browser.url(`https://cq-uat.web.app/#/pages/details/estimation/6194b7d02fbbd57fb80b37f7`);
        //await details_Page.statusBar.waitForDisplayed({ timeout: 30000 });

        await details_Page.generateComparison.click();
        await details_Page.comparisonDamagedPanels.waitForDisplayed({ timeout: 20000 });

        const damagedPanels = await details_Page.comparisonDamagedPanels.getText();
        console.log("Comparison data is generated:", damagedPanels);

        //await details_Page.validateGenericVehicleDetail();
    });
});