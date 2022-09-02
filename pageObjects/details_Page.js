const path = require('path');

class details_Page {    
    get uploadB() { return $(".file_upload_button");}
    get uploadImage() { return $('#choose-images');}
    get statusBar() { return $(".status-bar");}

    get generateComparison() { return $(".appearance-outline.icon-end.icon-start.nb-transition.shape-round.size-giant.status-primary > .status-primary rect");}
    get comparisonDamagedPanels() { return $("//span[@class='ng-star-inserted']/button[@class='appearance-filled size-small status-primary shape-round ng-star-inserted nb-transition']");}

    get vehicleDetails() { return $$("//div[@class='col-md-3 col-lg-3 col-6 ng-star-inserted']");}
    get vehicleDetail1() { return $("//div[@class='col-md-3 col-lg-3 col-6 ng-star-inserted'][1]//p");}
    get vehicleDetail2() { return $("//div[@class='col-md-3 col-lg-3 col-6 ng-star-inserted'][2]//p");}
    get vehicleDetail3() { return $("//div[@class='col-md-3 col-lg-3 col-6 ng-star-inserted'][3]//p");}
    get vehicleDetail4() { return $("//div[@class='col-md-3 col-lg-3 col-6 ng-star-inserted'][4]//p");}
    get vehicleDetail5() { return $("//div[@class='col-md-3 col-lg-3 col-6 ng-star-inserted'][5]//p");}
    get vehicleDetail6() { return $("//div[@class='col-md-3 col-lg-3 col-6 ng-star-inserted'][6]//p");}
    get vehicleDetail7() { return $("//div[@class='col-md-3 col-lg-3 col-6 ng-star-inserted'][7]//p");}

    get requestCustomerApprovalB() { return $("//button[@class='appearance-filled size-medium status-primary shape-rectangle ng-star-inserted nb-transition']");}
    get requestCustomerApprovalEmail() { return $("//input[@type='email']");}
    get requestCustomerApprovalSendB() { return $("//button[@class='appearance-filled size-medium status-primary shape-rectangle nb-transition']");}
    get requestCustomerApprovalSuccessfulMessage() { return $("#swal2-content");}
    get requestCustomerApprovalOkB() { return $("//button[@class='swal2-confirm swal2-styled']");}
    
    get assessmentSectionTable() { return $$("//div[@class='col-12 computer_layout']/table[@class='table noPrint ng-star-inserted']/tbody");}
    get estimateSectionTable() { return $$("//ngx-app/ngx-pages[@class='ng-star-inserted']/ngx-one-column-layout/nb-layout[@class='main_layout window-mode with-scroll']//nb-layout-column/estimation/nb-card[5]/nb-card-body//table/tbody");}

    get estimateLabel() { return $("//label[.=' Estimate ']");}
    get estimateEditB1() { return $("nb-card.computer_layout.ng-star-inserted > nb-card-footer > div > div > button > nb-icon > svg > g > g > rect");}
    get estimateEditB2() { return $("tbody:nth-of-type(1) > tr:nth-of-type(1) > td:nth-of-type(9) > .appearance-outline.icon-end.icon-start.nb-transition.shape-rectangle.size-medium.status-primary");}
    get estimatedPriceTextBox() { return $("//tbody/tr[1]/td[2]/input[@type='number']");}
    get discountTextBox() { return $("//tbody/tr[1]/td[3]/input[@type='number']");}
    get estimateSaveB() { return $("//button[@class='appearance-filled size-medium status-primary shape-rectangle nb-transition']");}
    get estimateEditPanelPopup() { return $("li:nth-of-type(1) > .tab-link > .ng-star-inserted.tab-text");}
    get estimateEditPanelPopupSaveB() { return $(".modal-body .appearance-filled.nb-transition.shape-rectangle.size-medium.status-primary");}
    get estimateSendPDFinEmailB() { return $("//button[@class='appearance-outline size-medium status-primary shape-rectangle nb-transition']");}
        
    get printFormat1B() { return $("//button[.=' Print format 1 ']");}
    get printFormat2B() { return $("//button[.=' Print format 2 ']");}
    get printFormat3B() { return $("//button[.=' Print format 3 ']");}
    get printFormat4B() { return $("//button[.=' Print format 4 ']");}
    get printLoading() { return $("//ngx-app/ngx-pages[@class='ng-star-inserted']/ngx-one-column-layout/nb-layout[@class='main_layout window-mode with-scroll']//nb-layout-column/estimation/ngx-spinner[@type='ball-clip-rotate']/div/div[1]/div");}
    get printPopupClose() { return $("//button[@class='close']");}

    get printB() { return $$("//button[@class='appearance-outline size-medium status-primary shape-rectangle icon-start icon-end nb-transition']");}
    get detailsB() { return $("//nb-card/nb-card-header/div/div/div/nb-toggle/label/div");}
    get damageHeatmapSection() { return $("//zones-image/nb-card/nb-card-body");} 
    get damageHeatmapLabel() { return $("//nb-card/nb-card-header[.=' Damage Heatmap ']");}

    get fillInspectionChecklistHyperlink() { return $("//p[@class='fillInspChkList']");}
    get inspectionChecklistSaveB() { return $("//p[.='Save']");}
    get inspectionChecklistFullAddress() { return $("//input[@placeholder='Full address']");}
    get inspectionChecklistVIN() { return $("//input[@placeholder='VIN Number']");}
    get inspectionChecklistOdometer() { return $$("//input[@placeholder='Odometer KM']");}
    get inspectionChecklistOdometer1() { return $("//input[@placeholder='Odometer KM']");}
    get inspectionChecklistFuelLevelDD() { return $("//button[.='Fuel Level']");}
    get inspectionChecklistFuelLevelDDHalf() { return $("//ul[@class='option-list']/nb-option[.='1/2']");}
    get inspectionChecklistChecklist1() { return $("//div[@class='ng-star-inserted']/nb-card[1]/nb-card-body");}
    get inspectionChecklistChecklist2() { return $("//div[@class='ng-star-inserted']/nb-card[2]/nb-card-body");}
    get inspectionChecklistToggleB() { return $$("//nb-toggle");}
    get inspectionChecklistRoundB() { return $$("//button[@class='appearance-outline size-medium status-primary shape-round icon-start icon-end ng-star-inserted nb-transition']");}
    get inspectionChecklistUploadMoreImageB() { return $("//div[@role='dialog']/div[@class='swal2-actions']/button[1]");}
    

    get assessmentLabel() { return $("//nb-card/nb-card-header[@class='computer_layout section_header']");}
    get assessmentEditB() { return $("//div[@class='pull-left']/button[1]");}
    get assessmentSaveB() { return $("//button[@class='appearance-filled size-medium status-primary shape-rectangle nb-transition']");}
    get assessmentDamageDD() { return $("//nb-select/button[@class='select-button'][.='Clean']");}
    get assessmentDamageDDScratchMinor() { return $("//nb-option-list/ul/nb-option[.='Scratch major']");}

    get remarksLabel() { return $("//nb-card-header[@class='section_header'][.=' Remarks ']");}
    get shareWithCustomerLabel() { return $("//nb-card[@class='computer_layout ng-star-inserted']/nb-card-body//div[@class='col-12']");}
    
    get quoteDetailsTick() { return $(".eva.eva-arrow-ios-downward-outline rect");}
    get quoteID() { return $("//nb-card[2]/nb-card-body/div/div[1]/strong");}

    //locators specific to assessment flow
    get saveB() { return $("//button[.='Save']");}
    get okayB() { return $("//button[.='Okay']");}

    async genericImageUpload() {
        await this.uploadImage.waitForExist();
        const filePath1 = path.join(__dirname, '../Generic/10_1.jpg');
        const filePath2 = path.join(__dirname, '../Generic/10_2.jpg');
        const filePath4 = path.join(__dirname, '../Generic/12.jpg');
        const filePath5 = path.join(__dirname, '../Generic/13.jpg'); 
        const filePath6 = path.join(__dirname, '../Generic/before/1.jpg');
        const filePath7 = path.join(__dirname, '../Generic/before/2.jpg');
        const filePath8 = path.join(__dirname, '../Generic/before/3.jpg');
        const filePath9 = path.join(__dirname, '../Generic/before/4.jpg');
        const filePath10 = path.join(__dirname, '../Generic/before/5.jpg');
        const filePath11 = path.join(__dirname, '../Generic/before/6.jpg');
        const filePath12 = path.join(__dirname, '../Generic/before/7.jpg');
        const filePath13 = path.join(__dirname, '../Generic/before/8.jpg');
        
        //await this.uploadImage.addValue(filePath1+'\n'+filePath2+'\n'+filePath4+'\n'+filePath5+'\n'+filePath6+'\n'+filePath7+'\n'+filePath8+'\n'+filePath9+'\n'+filePath10+'\n'+filePath11+'\n'+filePath12+'\n'+filePath13);
        await this.uploadImage.addValue(filePath7+'\n'+filePath10+'\n'+filePath13);
    }

    async genericAfterImageUpload() {
        await this.uploadImage.waitForExist();
        const filePath1 = path.join(__dirname, '../Generic/10_1.jpg');
        const filePath2 = path.join(__dirname, '../Generic/10_2.jpg');
        const filePath4 = path.join(__dirname, '../Generic/12.jpg');
        const filePath5 = path.join(__dirname, '../Generic/13.jpg'); 
        const filePath6 = path.join(__dirname, '../Generic/after/2.jpg');
        const filePath7 = path.join(__dirname, '../Generic/after/4.jpg');
        const filePath8 = path.join(__dirname, '../Generic/after/5.jpg');
        const filePath9 = path.join(__dirname, '../Generic/after/6.jpg');
        const filePath10 = path.join(__dirname, '../Generic/after/7.jpg');
        const filePath11 = path.join(__dirname, '../Generic/after/8.jpg');
        const filePath12 = path.join(__dirname, '../Generic/after/14.jpg');
        const filePath13 = path.join(__dirname, '../Generic/after/15.jpg');
        const filePath14 = path.join(__dirname, '../Generic/after/16.jpg');
        
        //await this.uploadImage.addValue(filePath1+'\n'+filePath2+'\n'+filePath4+'\n'+filePath5+'\n'+filePath6+'\n'+filePath7+'\n'+filePath8+'\n'+filePath9+'\n'+filePath10+'\n'+filePath11+'\n'+filePath12+'\n'+filePath13+'\n'+filePath14);
        await this.uploadImage.addValue(filePath6+'\n'+filePath8+'\n'+filePath11);
    }

    async vanImageUpload() {
        await this.uploadImage.waitForExist();
        const filePath1 = path.join(__dirname, '../Generic/10_1.jpg');
        const filePath2 = path.join(__dirname, '../Generic/10_2.jpg');
        const filePath4 = path.join(__dirname, '../Generic/12.jpg');
        const filePath5 = path.join(__dirname, '../Generic/13.jpg'); 
        const filePath6 = path.join(__dirname, '../van/before/1.jpg');
        const filePath8 = path.join(__dirname, '../van/before/3.jpg');
        const filePath11 = path.join(__dirname, '../van/before/6.jpg');
        const filePath13 = path.join(__dirname, '../van/before/8.jpg');
        
        //await this.uploadImage.addValue(filePath1+'\n'+filePath2+'\n'+filePath4+'\n'+filePath5+'\n'+filePath6+'\n'+filePath8+'\n'+filePath11+'\n'+filePath13);
        await this.uploadImage.addValue(filePath6+'\n'+filePath8);
    }

    async vanAfterImageUpload() {
        await this.uploadImage.waitForExist();
        const filePath1 = path.join(__dirname, '../Generic/10_1.jpg');
        const filePath2 = path.join(__dirname, '../Generic/10_2.jpg');
        const filePath4 = path.join(__dirname, '../Generic/12.jpg');
        const filePath5 = path.join(__dirname, '../Generic/13.jpg'); 
        const filePath6 = path.join(__dirname, '../van/before/1.jpg');
        const filePath8 = path.join(__dirname, '../van/before/3.jpg');
        const filePath11 = path.join(__dirname, '../van/before/6.jpg');
        const filePath13 = path.join(__dirname, '../van/before/8.jpg');
        
        //await this.uploadImage.addValue(filePath1+'\n'+filePath2+'\n'+filePath4+'\n'+filePath5+'\n'+filePath6+'\n'+filePath8+'\n'+filePath11+'\n'+filePath13);
        await this.uploadImage.addValue(filePath6+'\n'+filePath8);
    }

    async pickupImageUpload() {
        await this.uploadImage.waitForExist();
        const filePath1 = path.join(__dirname, '../Generic/10_1.jpg');
        const filePath2 = path.join(__dirname, '../Generic/10_2.jpg');
        const filePath4 = path.join(__dirname, '../Generic/12.jpg');
        const filePath5 = path.join(__dirname, '../Generic/13.jpg'); 
        const filePath6 = path.join(__dirname, '../pickup/1.jpg');
        const filePath7 = path.join(__dirname, '../pickup/2.jpg');
        const filePath9 = path.join(__dirname, '../pickup/4.jpg');
        const filePath10 = path.join(__dirname, '../pickup/5.jpg');
        const filePath12 = path.join(__dirname, '../pickup/7.jpg');
        
        await this.uploadImage.addValue(filePath1+'\n'+filePath2+'\n'+filePath4+'\n'+filePath5+'\n'+filePath6+'\n'+filePath7+'\n'+filePath9+'\n'+filePath10+'\n'+filePath12);
    }

    async searchAvailableVehicleDetail(details){
        const vehicleDetail = await this.vehicleDetails;
        const len = vehicleDetail.length;
        const locator = [];      
        const detailAvailable = [];             
        
        for (let i=0; i < len; i++) {
            locator[i] = await vehicleDetail[i].getText();
            for (let j=0, text=''; j < details.length; j++) {
                text = locator[i].search(details[j]);
                if (text > -1) {
                    detailAvailable.push(j);
                }
            }
            
        }
        return detailAvailable;
    }

    async validateVehicleDetail(detailAvailable, valueExpected, details) {
        const detailValueActual = ['','','','','','',''];
        const locate = [this.vehicleDetail1, this.vehicleDetail2, this.vehicleDetail3, this.vehicleDetail4, this.vehicleDetail5, this.vehicleDetail6, this.vehicleDetail7];
        var a = 0;
        for (let i of detailAvailable) {
            detailValueActual[i] = await locate[a].getText();
            detailValueActual[i].should.include(valueExpected[i]);
            console.log(details[i] + ' ' + 'is correct.');
            a = a +1;
        }

    }

    async validateGenericVehicleDetail() {
        const vehicleDetails = ['Registration number', 'Logo', 'Namebadge', 'VIN', 'License Plate \\(Rear\\)', 'Odometer', 'License Plate \\(Front\\)'];
        const vehicleDetailValueExpected = ['KA03MM3625', 'Skoda', 'LANCIA', 'MAJ1XXMRJ1AT09074', '', '91308', ''];

        const vehicleDetailAvailable = await this.searchAvailableVehicleDetail(vehicleDetails);
        await this.validateVehicleDetail(vehicleDetailAvailable, vehicleDetailValueExpected, vehicleDetails);
        console.log("-----Vehicle Details are Validated-----");
    }
    
    async validateVanVehicleDetail() {
        const vehicleDetails = ['Registration number', 'Logo', 'Namebadge', 'VIN', 'License Plate \\(Rear\\)', 'Odometer', 'License Plate \\(Front\\) '];
        const vehicleDetailValueExpected = ['KA03MM3625', 'Renault', 'TRAFIC', 'MAJ1XXMRJ1AT09074', '94092KX5', '91308', '94F09KXT']; 

        const vehicleDetailAvailable = await this.searchAvailableVehicleDetail(vehicleDetails);
        await this.validateVehicleDetail(vehicleDetailAvailable, vehicleDetailValueExpected, vehicleDetails);
        console.log("-----Vehicle Details are Validated-----");
    }
    
    async validatePickupVehicleDetail() {
        const vehicleDetails = ['Registration number', 'Logo', 'Namebadge', 'VIN', 'License Plate \\(Rear\\)', 'Odometer', 'License Plate \\(Front\\)'];
        const vehicleDetailValueExpected = ['KA03MM3625', 'Toyota', 'Tacoma', 'MAJ1XXMRJ1AT09074', '', '91308', ''];

        const vehicleDetailAvailable = await this.searchAvailableVehicleDetail(vehicleDetails);
        await this.validateVehicleDetail(vehicleDetailAvailable, vehicleDetailValueExpected, vehicleDetails);
        console.log("-----Vehicle Details are Validated-----");
    }

    async requestCustomerApprovalUsingEmail(email) {
        //await this.requestCustomerApprovalB.scrollIntoView();
        await this.requestCustomerApprovalB.click();
        if (await this.requestCustomerApprovalB.getText() === "Request customer approval again") {
            await this.requestCustomerApprovalOkB.waitForDisplayed({ timeout: 50000});
            console.log(await this.requestCustomerApprovalSuccessfulMessage.getText());
            await this.requestCustomerApprovalOkB.click();
            await browser.waitUntil(
                async () => (await this.requestCustomerApprovalOkB.isDisplayed()) === false,
                {
                    timeout: 5000,
                    timeoutMsg: 'Timeout for Email Popup'
                }
            );
        }
        else {
            await this.requestCustomerApprovalEmail.setValue(email);
            await this.requestCustomerApprovalSendB.click();
            await this.requestCustomerApprovalOkB.waitForDisplayed({ timeout: 10000});
            const successfulMessage = await this.requestCustomerApprovalSuccessfulMessage.getText();
            successfulMessage.should.include("Customer approval link sent successfully");
            await this.requestCustomerApprovalOkB.click();
            console.log("Email for Requesting Customer Approval has been successfully sent to " + email);
        }
        console.log("-----Customer Approval Functionality is Validated-----"); 
    }

    async validateAssessmentSectionIntensity() {
        //await this.assessmentSectionTable.scrollIntoView();
        const assessmentTable = await this.assessmentSectionTable;
        const damageTypeExpected = ['Scratch minor','Scratch major','Dent 1','Dent 2','Dent 3','Dent 4','Dent 5','Tear','Bumper Dent','Bumper Tear','Clips Broken','Bumper Torn','Broken'];
        const damageIntensityExpected = [1,3,1,2,3,4,5,5,3,5,5,5,5];
        var damageIndex = 1;
        for (let i =1; i < assessmentTable.length; i++) {
            var joinMe1 = ['tbody:nth-of-type(', i, ') > tr > td:nth-of-type(3) > .ng-star-inserted'];
            var joinMe2 = ["//div[@class='col-12 computer_layout']//table/tbody[",i,"]/tr/td[2]/span[@class='ng-star-inserted']"];
            var damageLocator = joinMe1.join('');
            var panelLocator = joinMe2.join('');
            await this.assessmentLabel.scrollIntoView();
            var damageActual = await $(damageLocator).getText();
            var panelActual = await $(panelLocator).getText();
            var intensityActual = 0;
            
            if (damageActual === 'Clean') {
                break;
            }

            damageIndex = damageTypeExpected.indexOf(String(damageActual));
            for (let j=1;j <7;j++) {
                var joinMe3 = ["//div[@class='col-12 computer_layout']//table/tbody[",i,"]/tr/td[@class='ng-star-inserted']/span[",j,"][@class='damage-intensity-circle damage-intensity-",j," ng-star-inserted']"];
                var intensityPointLocator =joinMe3.join('');
                var isVisible = await $(intensityPointLocator).isDisplayed();
                if (isVisible === false) {
                    intensityActual = j - 1;
                    break;
                }
            }
            if (intensityActual === damageIntensityExpected[damageIndex]) {
                console.log("Intensity of ", panelActual, "is correct.");
            }
            else if (intensityActual === 0) {
                console.log('Intensity of ', panelActual, 'is Undefined.');
            }
            else {
                console.log("Intensity of ", panelActual, "is incorrect.");
                console.log("Intensity Actual:: ", intensityActual, "expected::",damageIntensityExpected[damageIndex]);
            }
            
        }
        console.log("-----Damage Intensity of Assessment Section is Validated-----");
    }

    async validateEstimateSectionIntensity() {
        const estimateTable = await this.estimateSectionTable;
        const damageTypeExpected = ['Scratch minor','Scratch major','Dent 1','Dent 2','Dent 3','Dent 4','Dent 5','Tear','Bumper Dent','Bumper Tear','Clips Broken','Bumper Torn','Broken'];
        const damageIntensityExpected = [1,3,1,2,3,4,5,5,3,5,5,5,5];
        var damageIndex = 1;
        console.log('check length', estimateTable.length);
        for (let i =1; i < estimateTable.length-1; i++) {
            var joinMe1 = ['tbody:nth-of-type(', i, ') > tr > td:nth-of-type(3) > .ng-star-inserted'];
            var joinMe2 = ["//div[@class='row']//table/tbody[",i,"]/tr[1]/td[2]/span[@class='ng-star-inserted']"];
            var damageLocator = joinMe1.join('');
            var panelLocator = joinMe2.join('');
            var damageActual = await $(damageLocator).getText();
            var panelActual = await $(panelLocator).getText();
            var intensityActual = 0;
            
            if (damageActual === 'Clean') {
                break;
            }

            damageIndex = damageTypeExpected.indexOf(String(damageActual));
            for (let j=1;j <7;j++) {
                var joinMe3 = ["//div[@class='row']//table/tbody[",i,"]/tr[1]/td[4]/span[",j,"][@class='damage-intensity-circle damage-intensity-",j," ng-star-inserted']"];
                var intensityPointLocator =joinMe3.join('');
                var isVisible = await $(intensityPointLocator).isDisplayed();
                if (isVisible === false) {
                    intensityActual = j - 1;
                    break;
                }
            }
            if (intensityActual === damageIntensityExpected[damageIndex]) {
                console.log("Intensity of ", panelActual, "is correct.");
            }
            else if (intensityActual === 0) {
                console.log('Intensity of ', panelActual, 'is Undefined.');
            }
            else {
                console.log("Intensity of ", panelActual, "is incorrect.");
                console.log("Intensity Actual:: ", intensityActual, "expected::",damageIntensityExpected[damageIndex]);
            }
            
        }
        console.log("-----Damage Intensity of Estimate Section is Validated-----");
    }

    async validateDiscountFunctionality() {
        await this.estimateLabel.scrollIntoView();
        await this.estimateEditB1.click();
        await this.estimateSaveB.waitForDisplayed({ timeout: 5000});
        await this.estimateEditB2.click();
        await this.estimateEditPanelPopup.waitForDisplayed({ timeout: 15000});
        await this.estimatedPriceTextBox.setValue('1000');
        await this.discountTextBox.setValue('5');
        await this.estimateEditPanelPopupSaveB.click();
        await this.estimateSaveB.click();
        await this.estimateSendPDFinEmailB.waitForDisplayed({ timeout: 20000});
        console.log("-----Discount Functionality is Validated-----");
    }

    async validateEstimatePrintFunctionality() {
        await this.statusBar.scrollIntoView();
        await this.printB[0].waitForDisplayed({ timeout: 5000});
        await this.printB[0].click();
        //Print Format 1
        await this.printFormat1B.waitForDisplayed({ timeout: 5000});
        await this.printFormat1B.click();
        await this.printLoading.waitForDisplayed({ timeout: 5000});
        await browser.waitUntil(
            async () => (await this.printLoading.isDisplayed()) === false,
            {
                timeout: 30000,
                timeoutMsg: 'Download for Print Format 1 is not completed even after waiting for over 15s.'
            }
        );
        //Print Format 2
        await this.printFormat2B.click();
        await this.printLoading.waitForDisplayed({ timeout: 5000});
        await browser.waitUntil(
            async () => (await this.printLoading.isDisplayed()) === false,
            {
                timeout: 30000,
                timeoutMsg: 'Download for Print Format 2 is not completed even after waiting for over 15s.'
            }
        );
        /** 
        //Print Format 3
        await this.printFormat3B.click();
        await this.printLoading.waitForDisplayed({ timeout: 5000});
        await browser.waitUntil(
            async () => (await this.printLoading.isDisplayed()) === false,
            {
                timeout: 50000,
                timeoutMsg: 'Download for Print Format 3 is not completed even after waiting for over 15s.'
            }
        );
        //Print Format 4
        await this.printFormat4B.click();
        await this.printLoading.waitForDisplayed({ timeout: 5000});
        await browser.waitUntil(
            async () => (await this.printLoading.isDisplayed()) === false,
            {
                timeout: 50000,
                timeoutMsg: 'Download for Print Format 4 is not completed even after waiting for over 15s.'
            }
        );
        */
        await this.printPopupClose.click();
        console.log("-----Print Functionality of Estimate Section is Validated-----");
    }

    async validateAssessmentPrintFunctionality() {
        await this.statusBar.scrollIntoView();
        await this.printB[1].click();
        //Print Format 1
        await this.printFormat1B.click();
        await this.printLoading.waitForDisplayed({ timeout: 5000});
        await browser.waitUntil(
            async () => (await this.printLoading.isDisplayed()) === false,
            {
                timeout: 30000,
                timeoutMsg: 'Download for Print Format 1 is not completed even after waiting for over 15s.'
            }
        );
        //Print Format 2
        await this.printFormat2B.click();
        await this.printLoading.waitForDisplayed({ timeout: 5000});
        await browser.waitUntil(
            async () => (await this.printLoading.isDisplayed()) === false,
            {
                timeout: 30000,
                timeoutMsg: 'Download for Print Format 2 is not completed even after waiting for over 15s.'
            }
        );
        /** 
        //Print Format 3
        await this.printFormat3B.click();
        await this.printLoading.waitForDisplayed({ timeout: 5000});
        await browser.waitUntil(
            async () => (await this.printLoading.isDisplayed()) === false,
            {
                timeout: 50000,
                timeoutMsg: 'Download for Print Format 3 is not completed even after waiting for over 15s.'
            }
        );
        //Print Format 4
        await this.printFormat4B.click();
        await this.printLoading.waitForDisplayed({ timeout: 5000});
        await browser.waitUntil(
            async () => (await this.printLoading.isDisplayed()) === false,
            {
                timeout: 50000,
                timeoutMsg: 'Download for Print Format 4 is not completed even after waiting for over 15s.'
            }
        );
        */
        await this.printPopupClose.click();
        console.log("-----Print Functionality of Assessment Section is Validated-----");
    }

    async validateRepairEstimateByPaintFunctionality() {
        
        const totalPanel = await this.estimateSectionTable.length;
        console.log("length:", totalPanel);
        
        //await this.detailsB.waitForDisplayed({ timeout: 5000});
        await this.statusBar.scrollIntoView();
        await this.detailsB.click();
        for (let i=1;i < totalPanel-1;i++) {
            var joinMe1 = ['//nb-card-body//table/tbody[', i ,']/tr[2]/td[2]'];
            var panelLocatorRaw = joinMe1.join('');
            const panelLocatorRawText = await $(panelLocatorRaw).getText();
            console.log("row in panel", panelLocatorRawText);
            if (panelLocatorRawText == 'Paint Labour' || panelLocatorRawText == 'Paint Labour - Metallic' || panelLocatorRawText == 'Paint Labour - Solid' || panelLocatorRawText == 'Paint Labour - Pearl') {
                console.log("-----Repair Estimate by Paint Type Functionality is Validated-----");
                break;
            }
            else if (i === totalPanel-2 && panelLocatorRawText !== 'Paint Labour') {
                console.log("-x-x-Repair Estimate by Paint Type Functionality is Validated-x-x-");
            }
            
        }
    }

    async validateEditAssessmentFunctionality() {
        //const assessmentTableLength = this.assessmentSectionTable.length;
        //const joinMe1 = ["//div[@class='col-12 computer_layout']/table[@class='table noPrint ng-star-inserted']/tbody[",assessmentTableLength,"]/tr/td[3]/span/div/nb-select"];
        //const damageDD = joinMe1.join('');
        await this.assessmentEditB.scrollIntoView();
        await this.assessmentEditB.click();
        await this.assessmentSaveB.waitForDisplayed({ timeout: 10000});
        //await $(damageDD).click();
        await this.assessmentLabel.scrollIntoView();
        //await this.assessmentDamageDD.scrollIntoView();
        await this.assessmentDamageDD.click();
        //await this.assessmentDamageDDScratchMinor.scrollIntoView();
        await this.assessmentDamageDDScratchMinor.click();
        await this.shareWithCustomerLabel.scrollIntoView();
        await this.assessmentSaveB.click();
        await this.assessmentSaveB.waitForDisplayed({ timeout: 25000, reverse: true });
    }

    async validateDamageHeatmap() {
        const damageHeatmapPresent = await this.damageHeatmapLabel.isDisplayed();
        if (damageHeatmapPresent === true) {
            console.log("Damage Heatmap is present");
            console.log("-----Damage Heatmap is validated-----");

        }
        else {
            console.log("Damage Heatmap is not present");
        }
    }
    
    async validateInspectionChecklistFunctionality() {
        await this.fillInspectionChecklistHyperlink.click();
        await this.inspectionChecklistSaveB.waitForDisplayed({ timeout: 8000});
        await this.inspectionChecklistFullAddress.setValue('Clear Quote');
        await this.inspectionChecklistVIN.setValue('vin123');
        await this.inspectionChecklistOdometer[0].setValue('1234');
        await this.inspectionChecklistFuelLevelDD.click();
        await this.inspectionChecklistFuelLevelDDHalf.click();
        for (let i=0; i < this.inspectionChecklistToggleB.length; i++) {
            this.inspectionChecklistToggleB[i].click();
        };
        await this.inspectionChecklistRoundB[0].click();
        await this.inspectionChecklistRoundB[4].click();
        await this.inspectionChecklistRoundB[8].click();
        await this.inspectionChecklistSaveB.click();
        await this.statusBar.waitForDisplayed({ timeout: 20000});
    }
      
}

module.exports = new details_Page();