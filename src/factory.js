app.provider('DbDriver', function() {

  var dbType = "";

  return {

    setDbType: function(db) {
      dbType = db;
    },

    $get: function() {
      function localStorage = {};
      function cookieStorage = {};

      function getAccessPoint() {
        switch(dbType){
          case 'localStorage': return localStorage;
          case 'cookie': return cookieStorage;
        }
      }

      return {
        getAccessPoint: getAccessPoint
      };
    }

  };

});

app.config(function(fooProvider) {
  fooProvider.setDbType('localStorage');
});