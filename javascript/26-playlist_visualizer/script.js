document.querySelector('#getPlaylists').addEventListener('click', loadPlaylists);
document.querySelector('#getPlaylistsfromFile').addEventListener('click', loadPlaylistsfromFile);
var a;

async function readText(event) {
    const file = event.target.files.item(0)
    const text = await file.text();
    a = text;
}

function loadSample() {
    return (document.getElementById("getSample").value);
}

function loadPlaylists() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", loadSample(), true);

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText)
            let html = "";
            for (let i in data.playlists) {
                html +=
                    `<tr id="row-click" onclick="loadTracks(this)"> 
                <td>${data.playlists[i].pid}</td>
                <td>${data.playlists[i].name}</td>
                <td>${data.playlists[i].num_tracks}</td>
                </tr>`;
            }

            document.querySelector('#playlists').innerHTML = html;
        }
    }


    xhr.send();
}
function loadTracks(x) {
    let rowindex = x.rowIndex - 2
    console.log(rowindex)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", loadSample(), true);

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText)
            let html = "";
            for (let i in data.playlists[rowindex].tracks) {
                html +=
                    `<tr> 
                <td>${data.playlists[rowindex].tracks[i].pos}</td>
                <td>${data.playlists[rowindex].tracks[i].track_name}</td>
                <td>${data.playlists[rowindex].tracks[i].artist_name}</td>
                <td>${data.playlists[rowindex].tracks[i].album_name}</td>
                </tr>`;
            }

            document.querySelector('#tracks').innerHTML = html;
        }
    }
    xhr.send();
}

function loadPlaylistsfromFile() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "", true);
    xhr.onload = function () {
        let data = JSON.parse(a)
        let html = "";
        for (let i in data.playlists) {
            html +=
                `<tr id="row-click" onclick="loadTracks(this)"> 
                <td>${data.playlists[i].pid}</td>
                <td>${data.playlists[i].name}</td>
                <td>${data.playlists[i].num_tracks}</td>
                </tr>`;
        }
        document.querySelector('#playlists').innerHTML = html;
    }
    xhr.send();
}