var databaseSetting = require('./DatabaseSetting');

var getAll = function() {
  return new Promise(function(resolve, reject) {
    var db = databaseSetting.open();

    db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM timer', [],
        function(tx, result) {
          var res = result.rows;
          var timers = [];
          for(var i=0 ; i < res.length; i++) {
            var timer = {
              id: res.id,
              date: [res.sun, res.mon, res.tue, res.wed, res.thu, res.fri, res.sat],
              hr: res.hr,
              min: res.min,
              isOn: res.isOn,
            }
            timers.push(timer);
          }
            
          resolve(timers);
        },
        function(tx, error) {
          reject(error);
        });
    });
  });
};

var getTimerById = function(id) {
  return new Promise(function(resolve, reject) {
    var res = result.rows.item(0);
    var timer = {
      id: res.id,
      date: [res.sun, res.mon, res.tue, res.wed, res.thu, res.fri, res.sat],
      hr: res.hr,
      min: res.min,
      isOn: res.isOn,
    }
    resolve(timer);
  });
};

var insert = function(data) {
  var date = data.date;
  var hr = data.hr;
  var min = data.min;
  var isOn = data.isOn;

  return new Promise(function(resolve, reject) {
    tx.executeSql('INSERT INTO food VALUES (NULL, ?, ?, ?, ?)', 
      [date, hr, min, isOn],
      function(tx, result) {
        resolve(result);
      },
      function(tx, error) {
        reject(error);
      });
  });
};

var edit = function(data) {
  var date = data.date;
  var hr = data.hr;
  var min = data.min;
  var isOn = data.isOn;

  return new Promise(function(resolve, reject) {
    tx.executeSql('UPDATE timer SET \
                  date = ?, hr = ?, min = ?, isOn = ? WHERE id = 1',
      [date, hr, min, isOn],
      function(tx, result) {
        resolve(result);
      },
      function(tx, error) {
        reject(error);
      });
  });
};

var deleteTimer = function(id) {
  return new Promise(function(resolve, reaction) {
    db.transaction(function(tx) {
      tx.executeSql('DELETE FROM timer WHERE id = ?', [id],
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
  getTimerById: getTimerById,
  insert: insert,
  edit: edit,
  deleteTimer: deleteTimer
}