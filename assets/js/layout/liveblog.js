var postsLoaded = false,
    pinsLoaded = false,
    descLoaded = false;

//Data Update
dataUpdate.orderByChild('ID');
dataUpdate.once('value').then(function (snapshot) {
    postsLoaded = true;
    if (postsLoaded && pinsLoaded && descLoaded) {
        showLoadedContent()
    }
});

dataUpdate.on('child_added', function (childSnapshot) {
    p = childSnapshot.val();
    el = document.createElement('div')
    el.className = "card post-card";
    el.id = p.ID;
    dte = new Date(parseInt(p.ID));
    el.innerHTML =
        `
            <div class="overview">
                <div class="post">
                    <span class="post-author">
                        <span class="author-name">` + p.Author + `</span>
                        <span class="time">` + ('0' + dte.getMonth()).slice(-2) + '.' + ('0' + dte.getDay()).slice(-2) + '.' + ('0' + dte.getYear()).slice(-2) + ' ' + ('0' + dte.getHours()).slice(-2) + ':' + ('0' + dte.getMinutes()).slice(-2) + ':' + ('0' + dte.getSeconds()).slice(-2) + `</span>
                        ` + ((p.Pinned) ? '<a title="Back to Highlights" href="#highlights"><i class="fa fa-thumb-tack"></i></span></a>' : "") + `
                    </span><br>
                    <p class="post-content">
                        ` + p.Post + `
                    </p>
                </div>
            </div>
        `;
    el.appendAfter(document.querySelector('#p1'))
    window.instgrm.Embeds.process();
    twttr.widgets.load()
});

dataUpdate.on('child_changed', function (childSnapshot) {
    p = childSnapshot.val();
    el = document.getElementById(p.ID);
    dte = new Date(parseInt(p.ID));
    el.innerHTML =
        `
        <div class="overview">
            <div class="post">
                <span class="post-author">
                    <span class="author-name">` + p.Author + `</span>
                    <span class="time">` + ('0' + dte.getMonth()).slice(-2) + '.' + ('0' + dte.getDay()).slice(-2) + '.' + ('0' + dte.getYear()).slice(-2) + ' ' + ('0' + dte.getHours()).slice(-2) + ':' + ('0' + dte.getMinutes()).slice(-2) + ':' + ('0' + dte.getSeconds()).slice(-2) + `</span>
                    ` + ((p.Pinned) ? '<a title="Back to Highlights" href="#highlights"><i class="fa fa-thumb-tack"></i></span></a>' : "") + `
                </span><br>
                <p class="post-content">
                    ` + p.Post + `
                </p>
            </div>
        </div>
        `;
    window.instgrm.Embeds.process();
    twttr.widgets.load()
});

dataUpdate.on('child_removed', function (childSnapshot) {
    p = childSnapshot.val();
    el = document.getElementById(p.ID);
    el.remove();
});


//Metadata Update
metaUpdate.on('value', function (snapshot) {
    meta = snapshot.val()

    el = document.querySelector(".live");
    if (meta.Live) {
        el.className += " active";
        el.innerHTML = "Live";
    } else {
        el.className = "live";
        el.innerHTML = "Offline";
    }
    el.style.display = "block";

    el = document.querySelector(".background-img");
    el.src = meta.Background

    el = document.querySelector("#location");
    el.innerHTML = meta.Location;

    el = document.querySelector("#description");
    el.innerHTML += meta.Details;
    descLoaded = true;

    el = document.querySelector(".flagship");
    el.innerHTML = meta.Flagship;

    if (postsLoaded && pinsLoaded && descLoaded) {
        showLoadedContent()
    }
});

//Pinned posts Update
pinUpdate.on('value', function (snapshot) {
    pins = snapshot.val();
    el = document.querySelector("#pins");
    pinList = Object.keys(pins);
    el.innerHTML = "";
    for (pin in pinList) {
        el.innerHTML +=
            `
            <div class="pin"><a href="#` + pinList[pin] + `"><p>` + pins[pinList[pin]] + `</p></a></div>
            `;
    }
    pinsLoaded = true;
    if (postsLoaded && pinsLoaded && descLoaded) {
        showLoadedContent()
    }
});

function showLoadedContent() {
    loader = document.querySelector(".spinner");
    loader.remove()

    el = document.querySelector("#main-col");
    el.style.display = "block";
    el = document.querySelector("#sidebar-col");
    el.style.display = "block";
    el = document.querySelector("#event-desc");
    el.style.display = "block";
}


function populateTBAScores(response) {

    formatTeamNum = (Snum) => {
        num = Snum.slice(3, 6);
        return (num == "334") ? "<b> " + num + " </b>" : " " + num + " "
    }

    isMatchWon = (match) => {
        if (match.winning_alliance == "blue") return "blue-won"
        else if (match.winning_alliance == "red") return "red-won"
    }

    response = JSON.parse(response);
    for (match in response) {
        match = response[match];
        el = document.createElement("div");
        el.className = "match";
        switch (match.comp_level) {
            case "qm":
                comp_level = "Qualifying";
                break;
            case "qf":
                comp_level = "Quaterfinal";
                break;
            case "sf":
                comp_level = "Semifinal";
                break;
            case "f":
                comp_level = "Final";
                break;
            default:
                comp_level = "Special";
                break;
        }
        document.querySelector('.all-matches').innerHTML +=
            `<div class="match ` + isMatchWon(match) + `">
            ` + comp_level + ` Match #` + match.match_number + `<br>
            <div class="match-content">
                <div class="red team">
                    <span class="teams">` + formatTeamNum(match.alliances.red.team_keys[0]) + formatTeamNum(match.alliances.red.team_keys[1]) + formatTeamNum(match.alliances.red.team_keys[2]) + `</span><br>
                    <span class="score">` + ((match.alliances.red.score != -1) ? match.alliances.red.score : "NA") + `</span>
                </div>VS.
                <div class="blue team">
                    <span class="teams">` + formatTeamNum(match.alliances.blue.team_keys[0]) + formatTeamNum(match.alliances.blue.team_keys[1]) + formatTeamNum(match.alliances.blue.team_keys[2]) + `</span><br>
                    <span class="score">` + ((match.alliances.blue.score != -1) ? match.alliances.blue.score : "NA") + `</span>
                </div>
            </div>
        </div>`;
    }
}

Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
},false;
