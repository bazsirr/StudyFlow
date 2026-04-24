let sessions = JSON.parse(localStorage.getItem("sessions") || "[]");

function addSession() {
    const subject = document.getElementById("subject").value;
    const minutes = parseInt(document.getElementById("minutes").value);
    const note = document.getElementById("note").value;

    sessions.push({ subject, minutes, note });
    localStorage.setItem("sessions", JSON.stringify(sessions));

    render();
}

function render() {
    document.getElementById("session-list").innerHTML =
        sessions.map(s => `<p>${s.subject} - ${s.minutes} min (${s.note})</p>`).join("");

    document.getElementById("total-time").innerText =
        sessions.reduce((a,b)=>a+b.minutes,0) + " min";

    document.getElementById("session-count").innerText = sessions.length;
}

function showTab(tab) {
    document.querySelectorAll(".tab").forEach(t => t.style.display="none");
    document.getElementById(tab).style.display="block";
}

function toggleTheme(){
    document.body.classList.toggle("light");
}

function loadDemo(){
    sessions = [
        {subject:"Math",minutes:120,note:"Algebra"},
        {subject:"Programming",minutes:90,note:"F# practice"}
    ];
    localStorage.setItem("sessions", JSON.stringify(sessions));
    render();
}

render();
showTab("dashboard");
