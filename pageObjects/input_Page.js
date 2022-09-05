class input_Page{
    get resetB() { return $("//button[.='Reset']");}
    get createQuoteB() { return $(".appearance-filled.button.nb-transition.shape-rectangle.size-medium.status-primary > .ng-star-inserted");}
    get tickI() { return $(".computer_layout.ng-star-inserted > .col-lg-12.col-md-12.col-xxxl-12 > nb-card > nb-card-body .appearance-outline.nb-transition.shape-rectangle.size-medium.status-basic  nb-icon[icon='chevron-down-outline'] > svg rect");}
    get ddB1() { return $(".computer_layout.ng-star-inserted > .col-lg-12.col-md-12.col-xxxl-12 > nb-card > nb-card-body .appearance-outline.nb-transition.shape-rectangle.size-medium.status-basic > .placeholder.select-button");}
    get name() { return $("div:nth-of-type(5) > div:nth-of-type(1) > .form-group > .form-control.ng-pristine.ng-untouched.ng-valid");}
    get email() { return $("div:nth-of-type(5) > div:nth-of-type(2) > .form-group > .form-control.ng-pristine.ng-untouched.ng-valid");}
    get phone() { return $(".computer_layout.ng-star-inserted > .col-lg-12.col-md-12.col-xxxl-12 > nb-card > nb-card-body .col-9 > .form-group > .form-control.ng-pristine.ng-untouched.ng-valid");}
    get dealerComparisonForAll() { return $("//nb-option[.=' Automation Testing Comparison For All']");}
    get dealerFleetBA() { return $("//nb-option[.=' Automation Testing Fleet B/A']");}
    get dealerDemoDealer() { return $("//nb-option[.=' Automation Testing Demo Dealer']");}
    //get dealerDemoDealer4Estimation() { return $("//nb-option[.=' Demo Dealer 4 Estimation']")};
    //get dealerDemoDealer6Claim() { return $("//nb-option[.=' Demo Dealer 6 Claim']");}
    ////div[@class='ng-dropdown-panel-items scroll-host']/div/div/span[.='Any Make Any Model']
    get modelCitroenJumpy() { return $("div:nth-of-type(2) > .ng-option-label.ng-star-inserted");}
    get modelCitroenJumper() { return $("div:nth-of-type(3) > .ng-option-label.ng-star-inserted");}
    get regNo1() { return $(".computer_layout.ng-star-inserted > .col-lg-12.col-md-12.col-xxxl-12 > nb-card > nb-card-body > div:nth-of-type(2) > div:nth-of-type(2) > .form-group > .form-control.ng-pristine.ng-star-inserted.ng-untouched.ng-valid");} //for otl uat
    get regNo2() { return $("div[role='document'] .row .form-control.ng-pristine.ng-untouched.ng-valid");} //for otl uat
    get mileage1() { return $("//input[@placeholder='Mileage']");} //for otl uat
    get mileage2() { return $("div[role='document'] .row .form-control.ng-pristine.ng-untouched.ng-valid");} //for otl uat
    get confirm() { return $(".modal-body .appearance-filled");} //for otl uat
    
    get fileUpload() { return $(".ng-star-inserted");}
    get imageStatus1() { return $("div:nth-of-type(2) > .centered");}
    get imageStatus2() { return $("div:nth-of-type(3) > .centered");}

    get makeModelDD() { return $(".computer_layout.ng-star-inserted > .col-lg-12.col-md-12.col-xxxl-12 > nb-card > nb-card-body ng-select[role='listbox'] input[role='combobox']");}
    get makeModelDDAnyMakeAnyModel() { return $("//div[@class='ng-dropdown-panel-items scroll-host']/div/div/span[.='Any Make Any Model']");}
    get makeModelDDVanAnyModel() { return $("//div[@class='ng-dropdown-panel-items scroll-host']/div/div/span[.='Van Any Model']");}
    get makeModelDDPickupAnyModel() { return $("//div[@class='ng-dropdown-panel-items scroll-host']/div/div/span[.='Pickup Any Model']");}
    
    //locators specific to Demo Dealer 2 Fleet B/A
    get regNoD2() { return $("/html//ngx-app/ngx-pages[@class='ng-star-inserted']/ngx-one-column-layout/nb-layout[@class='main_layout window-mode with-scroll']/div[@class='scrollable-container']//nb-layout-column/create-quote[@class='ng-star-inserted']/div[@class='computer_layout ng-star-inserted']/div/nb-card/nb-card-body/div[2]/div[4]/div[@class='form-group']/input[@type='text']");}

    get radioButtonBefore() { return $(".col-12.col-md-12 > div:nth-of-type(2) > nb-radio-group:nth-of-type(1) > nb-radio[value='before']  .inner-circle");} //for Demo Dealer 2 Fleet B/A
    get radioButtonAfter() { return $("nb-radio-group:nth-of-type(2) > nb-radio[value='after']  .inner-circle");} //for Demo Dealer 2 Fleet B/A

    //locators specifc to Demo Dealer UAT
    get paintDD() { return $("button.select-button.placeholder");}
    get paintDDSolid() { return $("ul > nb-option:nth-of-type(1)");}
    get paintDDMetallic() { return $("ul > nb-option:nth-of-type(2)");}
    get paintDDPearl() { return $("ul > nb-option:nth-of-type(3)");}
    get regNoD1() { return $("//input[@placeholder='Registration Number*']");} //used for D4 too

    //locators specific to Demo Dealer 4 Estimation
    //get makeModelDDAnyMakeAnyModelD4() { return $("span.ng-option-label.ng-star-inserted")}; use common one
    //get makeModelDDVanAnyModelD4() { return $("div:nth-of-type(14) > .ng-option-label.ng-star-inserted")}; use common one
    //get makeModelDDPickupAnyModelD4() { return $("div:nth-of-type(10) > .ng-option-label.ng-star-inserted")}; use common one

    get licensePlateNo() { return $("//input[@placeholder='Licence Plate No*']");} //for OTL UAT
    get regNo() { return $("//input[@placeholder='Registration Number*']");} //for OTL UAT

    //locators specifc to Assessment Flow
    get nextB() { return $("//button[.=' Next ']");}
    get nameIt() { return $("");}
    
}


module.exports = new input_Page();