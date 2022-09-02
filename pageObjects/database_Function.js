const {MongoClient} = require('mongodb');
//const uri = "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";    
//const client = new MongoClient(uri);

class database_Function{
    //get uri(){ return "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";}
    //get client(){ return new MongoClient(this.uri);}
    //const uri = "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";    
    //const client = new MongoClient(uri);
    async dbCOnnect(){
        const uri = "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";    
        const client = new MongoClient(uri);
        try {
            await client.connect();
            //const finalquotesCount = functionName; 
            //return finalquotesCount;
            return client;        
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }

    async dbClose(){
        const uri = "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";    
        const client = new MongoClient(uri);
        await client.close();
    }
    
    async quotesCount(){
        const uri = "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";    
        const client = new MongoClient(uri);
        await client.connect();
        var todayDate = new Date();
        todayDate.setHours(6,0,0,0);
        const todayQuoteCount = await client.db("clearquote").collection("quotes").find({
            createdOn: {
                "$gte": todayDate
            }
        })
        .count();
        await client.close();
        return todayQuoteCount;
    } 
    
    async quotesByRegNoLast7Day(regNo){
        const uri = "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";    
        const client = new MongoClient(uri);
        await client.connect();
        var todayDate = new Date();
        console.log("today's date", todayDate);
        todayDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 7);
        console.log("last week date", todayDate);
        todayDate.setHours(6,0,0,0);
        console.log("last week date", todayDate);
        const quoteCount = await client.db("clearquote").collection("quotes").countDocuments({ 
            $and: [ { 
                "customerRcnumber": regNo 
            }, 
            { 
                "createdOn": { 
                    "$gte": todayDate 
                } 
            } ] 
        });
        await client.close();
        return quoteCount;
    }

    async quotesByDate(){
        const uri = "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";    
        const client = new MongoClient(uri);
        await client.connect();
        const quoteCount = await client.db("clearquote").collection("quotes").countDocuments({ 
            $and: [ { 
                "createdOn": { 
                    "$gte": new Date("2022-08-17T00:00:00.000Z") 
                }
            }, 
            { 
                "createdOn": { 
                    "$lte": new Date("2022-08-18T23:59:00.000Z") 
                } 
            } ] 
        });
        await client.close();
        return quoteCount;
    }

    async quotesByDateDealerUser(){
        const uri = "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";    
        const client = new MongoClient(uri);
        await client.connect();
        const quoteCount = await client.db("clearquote").collection("quotes").countDocuments({ 
            $and: [ { 
                "createdOn": { 
                    "$gte": new Date("2022-08-17T00:00:00.000Z") 
                }
            }, 
            { 
                "createdOn": { 
                    "$lte": new Date("2022-08-20T23:59:00.000Z") 
                } 
            }, 
            { 
                "dealerCode": "OTLUAT" 
            }, 
            { 
                "createdBy.name": "Siddhi"
            } ] 
        });
        await client.close();
        return quoteCount;
    }

    async quotesByDealer(){
        const uri = "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";    
        const client = new MongoClient(uri);
        await client.connect();
        var todayDate = new Date();
        todayDate.setHours(6,0,0,0);
        const quoteCount = await client.db("clearquote").collection("quotes").countDocuments({ 
            $and: [ { 
                "createdOn": { 
                    "$gte": todayDate 
                }
            }, 
            { 
                "dealerCode": "OTLUAT" 
            } ]
        }); 
        await client.close();
        return quoteCount;
    }

    async quotesByUser(){
        const uri = "mongodb://CQDBuser:84H0etGaLizJS0hT@52.0.170.55:27017/clearquote?readPreference=primary";    
        const client = new MongoClient(uri);
        await client.connect();
        var todayDate = new Date();
        todayDate.setHours(6,0,0,0);
        const quoteCount = await client.db("clearquote").collection("quotes").countDocuments({ 
            $and: [ { 
                "createdOn": { 
                    "$gte": todayDate 
                }
            }, 
            { 
                "createdBy.name": "Siddhi" 
            } ]
        }); 
        await client.close();
        return quoteCount;
    }
}


module.exports = new database_Function();