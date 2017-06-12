var databaseSetting = require('./DatabaseSetting');

var getAll = function() {
  return new Promise(function(resolve, reject) {
    var db = databaseSetting.open();

    db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM food', [],
        function(tx, result) {
          var res = result.rows;
          var foods = [];
          for(var i=0 ; i < res.length; i++) {
            var food = {
              id: res.item(i).id,
              name: res.item(i).name,
              cal: res.item(i).cal,
              serving: res.item(i).serving,
              reaction: res.item(i).reaction,
              note: res.item(i).note,
            }
            foods.push(food);
          }
            
          resolve(foods);
        },
        function(tx, error) {
          console.log(error);
          reject(error);
        });
    });
  });
};

var getFoodById = function(id) {
  return new Promise(function(resolve, reject) {
    var db = databaseSetting.open();

    db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM food WHERE id = ?', [id],
        function(tx, result) {
          var res = result.rows.item(0);
          var food = {
            id: res.id,
            name: res.name,
            cal: res.cal,
            serving: res.serving,
            reaction: res.reaction,
            note: res.note,
          }
          resolve(food);
        },
        function(tx, error) {
          reject(error);
        });
    });
  });
};

var insert = function(data) {
  var name = data.name;
  var cal = data.cal;
  var serving = data.serving;
  var reaction = data.reaction;
  var note = data.note;

  return new Promise(function(resolve, reject) {
    var db = databaseSetting.open();

    db.transaction(function(tx) {
      tx.executeSql('INSERT INTO food VALUES (NULL, ?, ?, ?, ?, ?)', 
        [name, cal, serving, reaction, note],
        function(tx, result) {
          resolve(result);
        },
        function(tx, error) {
          reject(error);
        });
    });
  });
};

var deleteFood = function(id) {
  return new Promise(function(resolve, reaction) {
    var db = databaseSetting.open();
    
    db.transaction(function(tx) {
      tx.executeSql('DELETE FROM food WHERE id = ?', [id],
        function(tx, result) {
          resolve(result);
        },
        function(tx, error) {
          reject(error);
        });
    });
  });
};

module.exports = {
  getAll: getAll,
  getFoodById: getFoodById,
  insert: insert,
  deleteFood: deleteFood
}