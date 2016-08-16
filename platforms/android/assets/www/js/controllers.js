angular.module('gramlist.controllers', ['ngCordova'])
    .controller('DashCtrl', function($scope) {})
    .controller('IndexCtrl', function($scope,Chapters,$cordovaFile) {
        var jsondata="";
        $scope.chapters = Chapters.all();
        $scope.remove = function(chapter) {
            Chapters.remove(chapter);
        };

        $scope.mynotes = function() {
            document.addEventListener('deviceready', function () {
                alert("Dir: " + cordova.file.dataDirectory);
                // read mynotes if exist
                $cordovaFile.readAsText(cordova.file.dataDirectory, 'mynotes.json').then(function (success) {
                    alert("mynotes exist and the content is: " + JSON.stringify(success));
                    jsondata = success;
                    return jsondata;
                }, function (error) {
                    alert("read mynotes failed with error code as: " + error);
                    if (jsondata === "") {
                        jsondata = [{
                            id: 1,
                            notes: "note1"

                        }, {
                            id: 2,
                            notes: "note2"
                        }];
                        alert("Set mynotes as: " + JSON.stringify(jsondata));
                        $cordovaFile.createFile(cordova.file.dataDirectory, 'mynotes.json', false).then(function (result) {
                            alert("Create Note Json: " + JSON.stringify(result));
                        });
                        $cordovaFile.writeFile(cordova.file.dataDirectory, 'mynotes.json', JSON.stringify(jsondata), true).then(function (result) {
                            alert("Initialize Note Json: " + JSON.stringify(jsondata));
                        });
                        return JSON.stringify(jsondata);
                    }
                });
            });
        };
        //$scope.mynotes = $scope.getNotes();
})
    .controller('ChapterDetailCtrl', function($scope, $stateParams,Chapters,$http,$log,$ionicPopup,$cordovaFile) {
        $scope.chapter = Chapters.get($stateParams.chapterId);
        $scope.mynote ="Please enter your note here";


        $cordovaFile.readAsText(cordova.file.dataDirectory,'mynotes.json').then( function(result) {
            if(result!=null) {
                var dispnotes = JSON.parse(result);
                for (var i = 0; i < dispnotes.length; i++) {
                    if(dispnotes[i].id==$stateParams.chapterId){
                        $scope.mynote=dispnotes[i].notes;
                    }
                }

            }
        });


        $scope.showPopup = function(findId) {
            $scope.data = {};
            var jsondata="";
            $ionicPopup.show({
                template: '<input name="newText" type="username">',
                title: 'Enter Username',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            document.addEventListener('deviceready', function () {
                            $cordovaFile.readAsText(cordova.file.dataDirectory,'mynotes.json').then( function(result) {
                                alert("Read mynotes.json: "+result);
                                jsondata = JSON.parse(result);
                                //update notes.json
                                for (var i = 0; i < jsondata.length; i++) {
                                    //$log.debug("jsondata.length: " + jsondata.length);
                                    alert("upate note id : "+findId);
                                    alert("old note of id("+jsondata[i].id+"): "+jsondata[i].notes);
                                    if (jsondata[i].id == findId) {

                                        jsondata[i].notes = "newText"+jsondata[i].id;
                                        $cordovaFile.writeFile(cordova.file.dataDirectory, 'mynotes.json', JSON.stringify(jsondata), true).then(function (result) {
                                            alert("new note of id("+jsondata[i].id+"): "+jsondata[i].notes);
                                            $scope.mynote=jsondata[i].notes
                                            //$log.debug("Write new text: " +result.length);
                                        });
                                        $cordovaFile.readAsText(cordova.file.dataDirectory,'mynotes.json').then( function(result) {
                                            alert("mynotes:"+result);
                                        });
                                        break;
                                    }

                                }

                            });
                            });
                    }
                    }
                ]
            });
        }



        $http.get("json/lectures.json").success(function(lectureall) {
            $log.debug(lectureall.length);
            $scope.lectures = lectureall;

            for (var i = 0; i < lectureall.length; i++) {
                if (lectureall[i].id === parseInt($stateParams.chapterId)) {
                    $scope.lecture = lectureall[i];
                }
            }

        });




        //$scope.lecture = Lectures.get($stateParams.chapterId);
        //$scope.lectures = Lectures.all();



    })

    .filter('highlight', function($sce) {
        return function(text, phrase) {
            if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
                '<span class="highlighted">$1</span>')

            return $sce.trustAsHtml(text)
        }
    })
    .controller('BildWorterCtrl', function($scope,Bildworter) {
        $scope.bildworterlst = Bildworter.all();

    })
    .controller('BildWorterDetailCtrl', function($scope, $stateParams, Bildworter) {
        $scope.bildworter = Bildworter.get($stateParams.bildworterId);
    })
    .controller('testpdfCtrl', [
        '$scope',
        'pdfDelegate',
        '$timeout',
        function($scope, pdfDelegate, $timeout) {
            $scope.pdfUrl = 'pdf/material-design.pdf';

            $scope.loadNewFile = function(url) {
                pdfDelegate
                    .$getByHandle('my-pdf-container')
                    .load(url);
            };
        }])



    .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });

