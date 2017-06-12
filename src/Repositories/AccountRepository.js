var databaseSetting = require('./DatabaseSetting');

var getAccountById = function(id) {
  return new Promise(function(resolve, reject) {
    var db = databaseSetting.open();

    db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM account WHERE id = ?', [id],
        function(tx, result) {
          if(result.rows.length == 0)
            reject('null');
          else {
            var res = result.rows.item(0);
            var data = {
              userName: res.userName,
              userEmail: res.userEmail,
              petName: res.petName,
              petBirth: res.petBirth,
              petWeight: res.petWeight,
              imagePath: res.imagePath
            }
            resolve(data);
          }
        },
        function(tx, error) {
          reject(error);
        });
    });
  });
};

var insert = function(data) {
  var userName = data.userName;
  var userEmail = data.userEmail;
  var petName = data.petName;
  var petBirth = data.petBirth;
  var petWeight = data.petWeight;
  var imagePath = data.imagePath;

  return new Promise(function(resolve, reject) {
    var db = databaseSetting.open();

    db.transaction(function(tx) {
      tx.executeSql('INSERT INTO account VALUES (NULL, ?, ?, ?, ?, ?, ?)', 
        [userName, userEmail, petName, petBirth, petWeight, imagePath],
        function(tx, result) {
          resolve(result);
        },
        function(tx, error) {
          reject(error);
        });
    });
  });
};

var edit = function(data) {
  var userName = data.userName;
  var userEmail = data.userEmail;
  var petName = data.petName;
  var petBirth = data.petBirth;
  var petWeight = data.petWeight;
  var imagePath = data.imagePath;

  return new Promise(function(resolve, reject) {
    var db = databaseSetting.open();

    db.transaction(function(tx) {
      tx.executeSql('UPDATE account SET \
                    userName = ?, userEmail = ?, petName = ?, petBirth = ?, petWeight = ?, imagePath = ? WHERE id = 1',
        [userName, userEmail, petName, petBirth, petWeight, imagePath],
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
  getAccountById: getAccountById,
  insert: insert,
  edit: edit
}