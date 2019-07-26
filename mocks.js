const casual = require('casual');

const NUMBER_OF_USERS = 5;
const NUMBER_OF_CHATROOMS = 5;
const NUMBER_OF_MESSAGES = 10;

// Create an object for config file
const users = [], chatrooms = [], messages = [];

const db = {users: [], chatrooms: [], messages: []};

for (let i = 1; i <= NUMBER_OF_USERS; i++) {
	var user = {};
	user.id = i;

	user.name = casual.name;
	user.isAdmin = casual.boolean;
	users.push(user);

	db.users = users;
}

for (let i = 1; i <= NUMBER_OF_CHATROOMS; i++) {
	const chatroom = {};
	chatroom.id = i;

	chatroom.name = casual.title;

	chatrooms.push(chatroom);
	db.chatrooms = chatrooms;
}

for (let i = 1; i <= NUMBER_OF_MESSAGES; i++) {
	const message = {};
	message.id = i;
	message.user = users[Math.floor((Math.random() * NUMBER_OF_USERS))];
	message.chatroom = users[Math.floor((Math.random() * NUMBER_OF_CHATROOMS))];
	message.content = casual.description;

	messages.push(message);
	db.messages = messages;
}

console.log(JSON.stringify(db));
