class input_Page{
    get regNo() { return $("//input[@role='combobox']");}
    get inspectionListDateHeader() { return $("//nb-card-header[@class='section_header']");}
    get regNoDDOption() { return $("//div[@role='option']");}
    get startDate() { return $("//input[@placeholder='Start Date']");}
    get endDate() { return $("//input[@placeholder='End Date']");}
    get includeDateBetweenCB() { return $("//nb-checkbox/label/span[@class='custom-checkbox']");} //nb-checkbox/label/span[1]
    get searchB() { return $("//button[.='Search']");}
    get clearB() { return $("//button[.='Clear']");}

    get inspectionCardLeft() { return $("//nb-card/nb-card-body[@class='ng-star-inserted']");}
    get dateOfInspections() { return $$("//label[@class='heading-text']/span[@class='ng-star-inserted']");}
    get noOfInspectionsOnDate() { return $$("//div[@class='vehicle-details']/div[2]/label/span[@class='ng-star-inserted']");}
    //get noOfInspections() { return $("//div[@class='vehicle-details']/div[2]/label/span[@class='ng-star-inserted']");}
    //get noOfInspections() { return $("//div[@class='vehicle-details']/div[2]/label/span[@class='ng-star-inserted']");}
    //get noOfInspections() { return $("//div[@class='vehicle-details']/div[2]/label/span[@class='ng-star-inserted']");}

    async validateVehicleHistoryPage() {
        const detail = ['19 Nov 2021','23 Dec 2021',2,['23 Dec 2021','19 Nov 2021'],[1,3]]
        //detail=[startdate,enddate,totalinspections,inspectiondates,totalinspectionofasingledate]
        await browser.url('https://cq-uat.web.app/#/pages/vehicle-history');
        await this.regNo.setValue('autotest19112021generic');
        await this.regNoDDOption.waitForDisplayed({ timeout: 25000});
        await this.regNoDDOption.click();
        await this.inspectionListDateHeader.waitForDisplayed({ timeout: 60000});
        await this.startDate.clearValue();
        await this.startDate.setValue('Dec 10 2021');
        await this.includeDateBetweenCB.click();
        await this.searchB.click();
        await this.inspectionCardLeft.waitForDisplayed({ timeout: 50000});
        await this.inspectionCardLeft.click();
        await this.inspectionListDateHeader.waitForDisplayed({ timeout: 60000});

        const totalInspections = await $$("//nb-card/nb-card-body[@class='ng-star-inserted']").length;
        if (totalInspections == detail[2]) {
            console.log("Total Number of Inspection is Correct.", '-->','Total Inspections found:',totalInspections, ',','Expected:',detail[2]);
        }
        else {
            console.log("Total Number of Inspection is incorrect.", '-->','Total Inspections found:',totalInspections, ',','Expected:',detail[2]);
        }
        var i = 0;
        await this.noOfInspectionsOnDate.forEach(async (elem) => {            
            var eachDate = await elem.getText();
            eachDate = eachDate.split(":");
            if (eachDate[1] == detail[4][i]) {
                console.log("Date of Inspection ",i+1,' is correct.', 'found:',eachDate, 'expected:', detail[4][i]);
            }
            else {
                console.log("Date of Inspection ",i+1,' is incorrect.', 'found:',eachDate, 'expected:', detail[4][i]);
            }
            i=i+1;
        });
        i=0;
        await this.dateOfInspections.forEach(async (elem) => {
            var eachDateInspections = await elem.getText();
            if (eachDateInspections === detail[3][i]) {
                console.log("Total Inspections done on is correct.", 'found:',eachDateInspections, 'expected:', detail[3][i]);
            }
            else {
                console.log("Total Inspections done on is incorrect.", 'found:',eachDateInspections, 'expected:', detail[3][i]);
            }
            i=i+1;
        });

    }

    
}


module.exports = new input_Page();