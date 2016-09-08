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
    .factory('InitNotes', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        notes = [{
            id: 1,
            notes: "note1"

        }, {
            id: 2,
            notes: "note2"
        }, {
            id: 3,
            notes: "note2"
        }, {
            id: 4,
            notes: "note2"
        }, {
            id: 5,
            notes: "note2"
        }, {
            id: 6,
            notes: "note2"
        }, {
            id: 7,
            notes: "note2"
        }, {
            id: 8,
            notes: "note2"
        }, {
            id: 9,
            notes: "note2"
        }, {
            id: 10,
            notes: "note2"
        }, {
            id: 11,
            notes: "note2"
        }, {
            id: 12,
            notes: "note2"
        }, {
            id: 13,
            notes: "note2"
        }, {
            id: 14,
            notes: "note2"
        }, {
            id: 15,
            notes: "note2"
        }, {
            id: 16,
            notes: "note2"
        }, {
            id: 17,
            notes: "note2"
        }, {
            id: 18,
            notes: "note2"
        }];

        return {
            all: function() {
                return notes;
            }
        };
    })
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


