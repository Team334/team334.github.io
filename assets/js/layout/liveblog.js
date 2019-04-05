var postsLoaded = false,
    pinsLoaded = false,
    descLoaded = false;


var connectedRef = firebase.database().ref(".info/connected");
badge = document.querySelector('.badge');
connectedRef.on("value", function (snap) {
    if (snap.val() === true) {
        badge.innerHTML = "Live updates enabled"
        badge.className = 'badge online';
        setTimeout(() => {
            badge.className = 'badge';
            badge.display = 'none'
        }, 2500)
    } else {
        badge.innerHTML = "We can't seem to connect to team servers at this time. You will not receive live updates. Check your internet connection."
        badge.className += ' offline';
    }
});

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
    dte = (p.Edited) ? new Date(parseInt(p.Edited)) : new Date(parseInt(p.ID));
    classes = p.type;
    el.innerHTML =
        `
            <div class="overview ` + classes + `">
                <div class="post">
                    <span class="post-author">
                        <span class="author-name">` + p.Author + `</span>
                        <span class="time">` + String(dte).slice(0,24)+String(dte).slice(33) + ((false) ? " (Edited)" : "") + `</span>
                        ` + ((p.Pinned) ? '<a title="Back to Highlights" href="#highlights"><i class="fa fa-thumb-tack"></i></span></a>' : "") + `
                    </span><br>
                    <p class="post-content">
                        ` + p.Post + `
                    </p>
                </div>
            </div>
        `;
    el.appendAfter(document.querySelector('#p1'))
    setTimeout(() => {
        try {
            window.instgrm.Embeds.process();
            twttr.widgets.load()
        }
        catch(e) {
            
        }
    }, 1000);
});

dataUpdate.on('child_changed', function (childSnapshot) {
    p = childSnapshot.val();
    el = document.getElementById(p.ID);
    dte = (p.Edited) ? new Date(parseInt(p.Edited)) : new Date(parseInt(p.ID));
    el.innerHTML =
        `
        <div class="overview">
            <div class="post">
                <span class="post-author">
                    <span class="author-name">` + p.Author + `</span>
                    <span class="time">` + String(dte).slice(0,24)+String(dte).slice(33) + ((false) ? " (Edited)" : "") + `</span>
                    ` + ((p.Pinned) ? '<a title="Back to Highlights" href="#highlights"><i class="fa fa-thumb-tack"></i></span></a>' : "") + `
                </span><br>
                <p class="post-content">
                    ` + p.Post + `
                </p>
            </div>
        </div>
        `;
    setTimeout(() => {
        try {
            window.instgrm.Embeds.process();
            twttr.widgets.load()
        }
        catch(e) {

        }
    }, 1000);
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
    if (meta.Live == 1) {
        el.className += " active";
        el.innerHTML = "Live";
    } else if (meta.Live == -1) {
        el.className = "live";
        el.innerHTML = "Event has ended";
    }
     else {
        el.className = "live";
        el.innerHTML = "Offline";
    }
    el.style.display = "block";

    el = document.querySelector(".background-img");
    if (el.innerHTML != meta.Background || !descLoaded) el.src = meta.Background

    el = document.querySelector("#location");
    if (el.innerHTML != meta.Location || !descLoaded) el.innerHTML = meta.Location;

    el = document.querySelector(".flagship");
    if (el.innerHTML != meta.Flagship || !descLoaded) el.innerHTML = meta.Flagship;

    el = document.querySelector("#description");
    if (el.innerHTML != meta.Details || !descLoaded) el.innerHTML = `<div class="flagship"><div class="ratio">`+meta.Flagship+`</div></div>` + meta.Details;
    descLoaded = true;


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
    pinList.sort((a, b) => a - b);
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
    if (loader) loader.remove();

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
    console.log(response);
    var byTime = response.slice(0);
    byTime.sort(function(a,b) {
        return a.predicted_time - b.predicted_time;
    });
    console.log(byTime);
    for (match in byTime) {
        match = byTime[match];
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
}, false;