var pg=require('pg').native;
var database = "postgress://minajosh:password@depot:5432/minajosh";

pg.connect(database, function(err,client,done){
  if(err){
    console.error('Could not connect to the database');
    console.error(err);
    return;
  }
  console.log('Connected to database');
  client.query("SELECT * FROM Users;", function(error,result){
    done();
    if(error){
      console.error('Failed to execute query');
      console.error(error);
      return;
    }
    console.log(result);
  });
});

