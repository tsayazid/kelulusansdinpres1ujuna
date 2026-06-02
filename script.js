// Database Siswa Lengkap SD Inpres 1 Ujuna TA 2025/2026
const dataSiswa = [
    // === PRANK LIST (Status awal TIDAK LULUS + Timer 7 Menit) ===
    { nisn: "0137953309", nama: "Syawal Saputra", tempat: "Palu", tanggal: "15 Agustus 2013", prank: true },
    { nisn: "0135769054", nama: "Nazril Zaky Ramadan", tempat: "Palu", tanggal: "14 Juli 2013", prank: true },
    { nisn: "3131803437", nama: "Moh. Noer Qhalby", tempat: "Palu", tanggal: "30 Oktober 2013", prank: true },
    { nisn: "0132789089", nama: "Teezar Narendra Al Ghazali Anwar", tempat: "Palu", tanggal: "16 April 2013", prank: true },
    { nisn: "0138326595", nama: "Dhiyah Dzarah Imsakiyah Ramadani", tempat: "Palu", tanggal: "27 Juli 2013", prank: true },
    { nisn: "3134756413", nama: "Azzahra Diandra Putri", tempat: "Jakarta", tanggal: "29 November 2013", prank: true },
    { nisn: "0134769374", nama: "Siti Madinatul Munawarah", tempat: "Palu", tanggal: "29 Juni 2013", prank: true },
    { nisn: "3145664418", nama: "Moh Farhan", tempat: "Palu", tanggal: "15 Juni 2014", prank: true },
    { nisn: "3105430699", nama: "Filzah Rizqita Putry", tempat: "Palu", tanggal: "17 Oktober 2013", prank: true },
    { nisn: "3139777891", nama: "ALFA ALDIANSYAH SAPUTRA", tempat: "Palu", tanggal: "16 Mei 2013", prank: true },
    { nisn: "0136794266", nama: "UMMU QULTSUUM", tempat: "PALU", tanggal: "30 Agustus 2013", prank: true },

    // === NORMAL LIST (Langsung Lulus 🎉) ===
    // 5 NAMA BARU DARI GAMBAR TAMBAHAN:
    { nisn: "0136662937", nama: "AINUN SHAQIRA SANDRA", tempat: "Makassar", tanggal: "21 September 2013", prank: false },
    { nisn: "3147272049", nama: "ALFARO SIWON ARESTA TUMEWU", tempat: "Palu", tanggal: "17 Februari 2014", prank: false },
    { nisn: "3134660570", nama: "ASYIFA AULIA SUWITO", tempat: "Palu", tanggal: "23 Mei 2013", prank: false },
    { nisn: "0136121772", nama: "MUFIDHA AZ ZAHRA RAMADHANI", tempat: "Palu", tanggal: "18 Juli 2013", prank: false },
    { nisn: "0134928218", nama: "TIARA FARADILA", tempat: "Palu", tanggal: "13 Maret 2013", prank: false },
    { nisn: "0147010968", nama: "ZALFA AYSHILA WESA", tempat: "Palu", tanggal: "21 Maret 2014", prank: false },

    // KELOMPOK SISWA LAMA:
    { nisn: "3146631006", nama: "ABHIDZAR ALGHIFARI", tempat: "PALU", tanggal: "20 Maret 2014", prank: false },
    { nisn: "0131687974", nama: "STEVANI AHLESTI CHLAYRA", tempat: "TUBAN", tanggal: "05 Mei 2013", prank: false },
    { nisn: "0132900799", nama: "ALGI FAHRI", tempat: "PALU", tanggal: "13 Juni 2013", prank: false },
    { nisn: "3131838438", nama: "CEEZAR GANENDRA AL AYYUBI ANWAR", tempat: "PALU", tanggal: "16 April 2013", prank: false },
    { nisn: "3148584734", nama: "MOH. ARYA ZAHY", tempat: "PALU", tanggal: "30 Januari 2014", prank: false },
    { nisn: "3147598143", nama: "MOH. ABIZAR ALFATIH", tempat: "PALU", tanggal: "13 Mei 2014", prank: false },
    { nisn: "3147097798", nama: "MUH RANDHY ABDUL RAZAK", tempat: "PALU", tanggal: "14 Februari 2014", prank: false },
    { nisn: "0139002076", nama: "FAHRY RAMADHAN", tempat: "PALU", tanggal: "02 Agustus 2013", prank: false },
    { nisn: "3142409457", nama: "MOH. AL ZIDANE", tempat: "PALU", tanggal: "19 Mei 2014", prank: false },
    { nisn: "3143621474", nama: "AQILA NATASYA AGITA MAHFUDZ", tempat: "PALU", tanggal: "08 Januari 2014", prank: false },
    { nisn: "3136926966", nama: "MOH. ALWI ABIZAR", tempat: "PALU", tanggal: "22 Oktober 2013", prank: false },
    { nisn: "0142393080", nama: "MHEYSIN ANGGELYNA KAMARU", tempat: "PALU", tanggal: "01 Mei 2014", prank: false },
    
];

let activeTimers = {}; 
let currentNisn = "";

function cariSiswa() {
    document.activeElement.blur(); 

    const inputNisn = document.getElementById('nisnInput').value.trim();
    const resultCard = document.getElementById('resultCard');
    const errorMessage = document.getElementById('errorMessage');
    const statusBadge = document.getElementById('statusBadge');
    const timerSection = document.getElementById('timerSection');

    if (inputNisn === "") {
        alert("Mohon ketik nomor NISN siswa!");
        return;
    }

    const siswa = dataSiswa.find(s => s.nisn === inputNisn);
    currentNisn = inputNisn;

    if (siswa) {
        errorMessage.style.display = 'none';
        resultCard.style.display = 'block';

        document.getElementById('resNisn').innerText = siswa.nisn;
        document.getElementById('resNama').innerText = siswa.nama;
        document.getElementById('resTempat').innerText = siswa.tempat;
        document.getElementById('resTanggal').innerText = siswa.tanggal;

        if (siswa.prank) {
            if (!activeTimers[inputNisn] || activeTimers[inputNisn].timeLeft > 0) {
                statusBadge.innerText = "TIDAK LULUS";
                statusBadge.className = "status-badge status-tidak";
                timerSection.style.display = 'block';
                
                if (!activeTimers[inputNisn]) {
                    startPrankTimer(inputNisn);
                } else {
                    updateTimerDisplay(activeTimers[inputNisn].timeLeft);
                }
            } else {
                tampilkanLulus();
            }
        } else {
            tampilkanLulus();
        }
    } else {
        resultCard.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}

function startPrankTimer(nisn) {
    let duration = 420; // 7 menit (Silakan ganti angka detik ini jika ingin mengubah waktunya)

    activeTimers[nisn] = {
        timeLeft: duration,
        interval: null
    };

    updateTimerDisplay(duration);

    activeTimers[nisn].interval = setInterval(() => {
        activeTimers[nisn].timeLeft--;
        
        if (currentNisn === nisn) {
            updateTimerDisplay(activeTimers[nisn].timeLeft);
        }

        if (activeTimers[nisn].timeLeft <= 0) {
            clearInterval(activeTimers[nisn].interval);
            if (currentNisn === nisn) {
                const retryBtn = document.getElementById('retryBtn');
                retryBtn.removeAttribute('disabled');
                retryBtn.className = "btn-retry active";
            }
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const countdownDisplay = document.getElementById('countdownDisplay');
    const retryBtn = document.getElementById('retryBtn');

    if (seconds <= 0) {
        countdownDisplay.innerText = "00:00";
        retryBtn.removeAttribute('disabled');
        retryBtn.className = "btn-retry active";
        return;
    }

    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;
    
    countdownDisplay.innerText = `${mins}:${secs}`;
    retryBtn.setAttribute('disabled', 'true');
    retryBtn.className = "btn-retry";
}

function prosesUlangKelulusan() {
    const retryBtn = document.getElementById('retryBtn');
    retryBtn.innerText = "Menghubungkan Server Dapodik...";
    
    setTimeout(() => {
        tampilkanLulus();
        const siswaIdx = dataSiswa.findIndex(s => s.nisn === currentNisn);
        if(siswaIdx !== -1) dataSiswa[siswaIdx].prank = false;
    }, 2500);
}

function tampilkanLulus() {
    const statusBadge = document.getElementById('statusBadge');
    const timerSection = document.getElementById('timerSection');
    
    statusBadge.innerText = "LULUS 🎉";
    statusBadge.className = "status-badge status-lulus";
    timerSection.style.display = 'none';
    
    document.getElementById('retryBtn').innerText = "Coba Kembali";
}

document.getElementById('nisnInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        cariSiswa();
    }
});