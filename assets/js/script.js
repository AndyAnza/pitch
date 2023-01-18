/*const client_id = 'c801eb67890c4a1cac34bab0ba5b35a7'
const client_secret = '335e1cd70e934030bdbf3628bfffc08c'
const redirect_uri = 'https://andyanza.github.io/pitch/'*/

//const authorizationUrl = 'https://accounts.spotify.com/authorize?client_id=c801eb67890c4a1cac34bab0ba5b35a7&response_type=code&redirect_uri=https://andyanza.github.io/pitch/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

document.getElementById('log-in-button').onclick = function() {
        location.href='https://accounts.spotify.com/authorize?client_id=c801eb67890c4a1cac34bab0ba5b35a7&response_type=code&redirect_uri=https://andyanza.github.io/pitch/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'
    }

