angular.module('gramlist.services', ['ngCordova'])

.factory('Chapters', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chapters = [{
    id: 1,
    title: '1 动词(Verben)',
    img: 'img/ben.png',
    content: 'json/lectures.json',
    exercise: 'Open soon...',
    note:"My Notes1,2,3...",
    searchText:"Verben"
  }, {
    id: 2,
    title: '2 名词(Nomen)',
    img: 'img/ben.png',
    content: 'chapters/2.html',
    exercise: 'Open soon...',
    note:"My Notes1,2,3...",
    searchText:""

  }, {
    id: 3,
    title: '3 形容词(Adjektive)',
    img: 'img/ben.png',
    content: 'chapters/c3.html',
    exercise: 'Open soon...'
  }, {
    id: 4,
    title: '4 Pronomen',
    img: 'img/ben.png',
    content: 'chapters/c4.html',
    exercise: 'Open soon...'
  }, {
    id: 5,
    title: '5 Präpositionen',
    img: 'img/ben.png',
    content: 'chapters/c5.html',
    exercise: 'Open soon...'
  }, {
    id: 6,
    title: '6 Sätze',
    img: 'img/ben.png',
    content: 'chapters/c6.html',
    exercise: 'Open soon...'
  }, {
    id: 7,
    title: '7 Partikeln',
    img: 'img/ben.png',
    content: 'chapters/c7.html',
    exercise: 'Open soon...'
  }, {
    id: 8,
    title: '8 Liste der unregelmäßigen Verben',
    img: 'img/ben.png',
    content: 'chapters/c8.html',
    exercise: 'Open soon...'
  }, {
    id: 9,
    title: '9 Liste der Verben mit Präposition',
    img: 'img/ben.png',
    content: 'chapters/c9.html',
    exercise: 'Open soon...'
  }, {
    id: 10,
    title: '10 Übersicht über die Formen A1 und A2',
    img: 'img/ben.png',
    content: 'chapters/c10.html',
    exercise: 'Open soon...'

  }];

  return {
    all: function() {
      return chapters;
    },
    remove: function(chapter) {
      chapters.splice(chapters.indexOf(chapter), 1);
    },
    get: function(chapterId) {
      for (var i = 0; i < chapters.length; i++) {
        if (chapters[i].id === parseInt(chapterId)) {
          return chapters[i];
        }
      }
      return null;
    }
  };
})

/*

    .factory('Readjson', function($cordovaFile){
      //create notes.json if not exist
      //alert("[Dir]: ");


       //initialization notes.json for empty notes.json
       var jsondata="";
      jsondata = [{
        id: 1,
        notes: "note1"

      }, {
        id: 2,
        notes: "note2"
      }];

      $cordovaFile.readAsText(cordova.file.dataDirectory,'mynotes.json').then( function(result) {
       //alert("Read mynotes.json: "+result);
       if(result!=null) {
       jsondata = result;
       //alert("set jsondata: "+jsondata);

       }
       });
       alert("current jsondata is: "+jsondata);
       if(jsondata=="") {
       jsondata = [{
       id: 1,
       notes: "note1"

       }, {
       id: 2,
       notes: "note2"
       }];

       alert("After initialization: "+JSON.stringify(jsondata));
       $cordovaFile.writeFile(cordova.file.dataDirectory, 'mynotes.json', JSON.stringify(jsondata), true).then(function (result) {
       alert("write jsondata into file"+JSON.stringify(jsondata));
       $scope.mynotes=jsondata;
       //$log.debug("Write new text: " +result.length);
       });
*/
/*
         function readFromFile(fileName, cb) {
           var pathToFile = cordova.file.dataDirectory + fileName;
           window.resolveLocalFileSystemURL(pathToFile, function (fileEntry) {
             fileEntry.file(function (file) {
               var reader = new FileReader();

               reader.onloadend = function (e) {
                 cb(JSON.parse(this.result));
               };

               reader.readAsText(file);
             }, fail);
           }, fail);
         }
      function fail(evt) {

      }










      return {
        getAllNotes: function() {
/*
          readFromFile('mynotes.json', function (data) {
            alert("mynotes: "+data);
            jsondata = data;
          });

          $cordovaFile.readAsText(cordova.file.dataDirectory,'mynotes.json').then( function(result) {
            alert("Read mynotes.json: "+result);
            jsondata = result;

          },function(err){alert("failed");});

          return jsondata;
        }
      };

    })
*/
    .factory('Lecutres',function(){
        return {
            all: function($http) {
                $http.get("json/lectures.json").success(function (lectureall) {
                    alert("Total lectures: "+lectureall.length);
                    return lectureall;
                });
            },get: function(findId,$http) {
                $http.get("json/lectures.json").success(function (lectureall) {
                    for (var i = 0; i < lectureall.length; i++) {
                        if (parseInt(lectureall[i].id) === parseInt(findId)) {
                            return lectureall[i];
                        }
                    }
                });
            }
        };


})
.factory('Bildworter', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bildworterlst = [{
    id: 1,
    title: '1 动词(Verben)',
    img: 'img/ben.png',

  }, {

    id: 10,
    title: '10 Übersicht über die Formen A1 und A2',
    img: 'img/ben.png',
    content: 'chapters/c10.html',
    exercise: 'Open soon...'

  }];

  return {
    all: function() {
      return bildworterlst;
    },


    get: function(bildworterId) {
      for (var i = 0; i < bildworterlst.length; i++) {
        if (bildworterlst[i].id === parseInt(bildworterId)) {
          return bildworterlst[i];
        }
      }
      return null;
    }
  };
});


