
// Tarih ve Saat
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: false
    };
    document.getElementById("datetime").innerText = now.toLocaleDateString("tr-TR", options);
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Notlar
const notes = document.getElementById("notes");
notes.value = localStorage.getItem("userNotes") || "";
notes.addEventListener("input", () => {
    localStorage.setItem("userNotes", notes.value);
});

// Geçici haber verileri (yerine RSS verisi entegre edilecek)
document.getElementById("global-news").innerHTML = `
    <li>Ukrayna barış görüşmelerinde yeni aşama: Aposto & BBC</li>
    <li>Çin-ABD ticaret diyaloğu hızlandı</li>
`;
document.getElementById("turkey-news").innerHTML = `
    <li>NTV: Yeni kabine değişikliği gündemde</li>
    <li>NTV: Asgari ücret toplantısı Haziran sonunda</li>
`;
