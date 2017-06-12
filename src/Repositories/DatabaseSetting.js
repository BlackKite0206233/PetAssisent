const dbInfo = {
  name: 'App',
  version: '1.0',
  desc: 'App DB',
  size: 2 * 1024 * 1024
}

var open = function() {
  return openDatabase(dbInfo.name, dbInfo.version, dbInfo.desc, dbInfo.size);
}

var databaseInit = function () {
  return new Promise(function (resolve, reject) {
    var db = open();
    db.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS account (id INTEGER PRIMARY KEY, \
                                                         userName TEXT, \
                                                         userEmail TEXT, \
                                                         petName TEXT, \
                                                         petBirth DATE, \
                                                         petWeight TEXT, \
                                                         imagePath TEXT)');

      tx.executeSql('CREATE TABLE IF NOT EXISTS food (id INTEGER PRIMARY KEY, \
                                                      name TEXT, \
                                                      cal INTEGER, \
                                                      serving TEXT, \
                                                      reaction INTEGER, \
                                                      note TEXT)');

      tx.executeSql('CREATE TABLE IF NOT EXISTS timer (id INTEGER PRIMARY KEY, \
                                                       sun BOOL, mon BOOL, tue BOOL, wed BOOL,\
                                                       thu BOOL, fri BOOL, sat BOOL, \
                                                       hr INTEGER, \
                                                       min INTEGER, \
                                                       isOn BOOL)');

    }, function(error) {
      console.log(error);
      reject(error);
    }, function(success) {
      resolve();
    });
  });
};

module.exports = {
  open: open,
  databaseInit: databaseInit
}