const socket = io(); //access to web socket api

//username, message input fields

let chatUserName = document.querySelector('#chat-username')
let chatMessage = document.querySelector('#chat-message')
let chatForm = document.querySelector('form')
let chatDisplay = document.querySelector('.chat-display')


//listen for new incoming messages
socket.on('updateMessage', (data) => {
    //data {username, message}

    let newMessage = document.createElement('p');

    newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`

    if (chatUserName.value === data.username) {
        newMessage.className = "bg-success text-white chat-text"
    }
    else {
        newMessage.className = "bg-primary text-white chat-text"
    }

    //<p>sldjsldfjls<p>

    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild)

})

//send message to server 

chatForm.addEventListener('submit', e => {
    e.preventDefault()

    socket.emit('postMessage', {
        username: chatUserName.value,
        message: chatMessage.value
    })
})