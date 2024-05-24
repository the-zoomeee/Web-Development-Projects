// public/app.js
angular.module('chatApp', [])
    .controller('ChatController', function ($scope, SocketService) {
        $scope.messages = [];
        $scope.newMessage = '';
        $scope.username = prompt('Please enter your name:');

        SocketService.emit('setUsername', $scope.username);

        SocketService.on('chat message', function (msg) {
            $scope.messages.push(msg);
            $scope.$apply(); // Notify AngularJS to update the view
            scrollToBottom(); // Scroll to the bottom of the chat window
        });

        $scope.sendMessage = function () {
            if ($scope.newMessage.trim() !== '') {
                SocketService.emit('chat message', $scope.newMessage);
                $scope.newMessage = '';
            }
        };

        function scrollToBottom() {
            var chatWindow = document.getElementById('chat-window');
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    })
    .factory('SocketService', function () {
        const socket = io();

        return {
            on: function (eventName, callback) {
                socket.on(eventName, callback);
            },
            emit: function (eventName, data) {
                socket.emit(eventName, data);
            }
        };
    });
