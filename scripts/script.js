const githubReleasesURL = 'https://api.github.com/repos/AlexandreRouma/SDRPlusPlus/releases';
const githubNightlyURL = 'https://api.github.com/repos/AlexandreRouma/SDRPlusPlus/actions/runs?status=success&actor=AlexandreRouma&branch=master';

function gotoLatestRelease() {
    let http = new XMLHttpRequest();
    
    http.open("GET", githubReleasesURL);
    http.send();

    http.onreadystatechange = (e) => {
        if (http.readyState != 4 || http.status != 200) { return; }
        let obj = JSON.parse(http.responseText);
        document.location = obj[0].html_url;
    }
}

function gotoNightlyBuild() {
    let http = new XMLHttpRequest();
    
    http.open("GET", githubNightlyURL);
    http.send();

    http.onreadystatechange = (e) => {
        if (http.readyState != 4 || http.status != 200) { return; }
        let obj = JSON.parse(http.responseText);
        document.location = obj.workflow_runs[0].html_url;
    }
}