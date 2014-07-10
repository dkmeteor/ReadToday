var content= document.body.innerHTML;
	
var db = openDatabase("ReadToday", "0.1", "A list of what you read today.", 200000); 
if(!db)  
    console.info("Failed to connect to database."); 
else
 	console.info("connect to database success."); 
if(false)
	{
	db.transaction(function(tx){  
        tx.executeSql("DROP TABLE ReadToday", [], function(tx, results){  
          
            },function(tx,error){  
                alert(error.message);  
            });  
		}); 	
	}
		
	db.transaction( function(tx) { tx.executeSql("SELECT COUNT(*) FROM ReadToday",
	 [], null, function(tx, error) { tx.executeSql("CREATE TABLE ReadToday (id REAL UNIQUE, content TEXT, timestamp REAL)",
	 [], null, function(tx,error){  
                alert(error.message);  
            }); } ); } ); 

	db.transaction( function(tx) { tx.executeSql("INSERT INTO ReadToday (content, timestamp) values(?, ?)",["1234", new Date().getTime()], function(tx, result) { console.info(result);}, function(tx,error){  
                alert(error.message);  
            }); } ); 
	
	console.info("insert content success");
	
	
		db.transaction( function(tx) { tx.executeSql("SELECT * FROM ReadToday", [],function(tx, result) { 
		console.info(result);
		for(var i = 0; i < result.rows.length; i++){ 
		console.info(result.rows.item(i)['content']); } }, function(tx,error){  
                console.error(error.message);  
            }); } ); 
	


