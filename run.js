const client = new tmi.Client({
  channels: ['elliotisacoolguy']
});

let Name = document.getElementById('username');
let tagline = document.getElementById('quote');

client.on("connected", () => console.log('Reading from Twitch! ✅'));
client.connect();
client.on('message', (channel, tags, message, self) => {
  console.log(tags);
  console.log(Name);
  Name.innerText = tags.username;
  tagline.innerText = `"${message}"`;
  if (tags.color){
    document.body.style.backgroundColor = tags.color;
  }
});