import consumer from "channels/consumer"

const appRoom = consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to RoomChannel");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("Disconnected from RoomChannel");
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log("Received data:", data);
    const messages = document.getElementById('messages');
    messages.insertAdjacentHTML('beforeend', data['message']);
  },

  speak: function(message) {
    return this.perform('speak', {message: message});
  }
});

window.document.onkeydown = function(event) {
  if(event.key == 'Enter') {
    console.log("entered")
    appRoom.speak(event.target.value);
    event.target.value = '';
    event.preventDefault();
  }
}
