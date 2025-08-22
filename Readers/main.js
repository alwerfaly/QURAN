// Function to format reader names with proper spacing
function formatReaderName(name) {
    if (!name) return name;
    
    // Common patterns to fix spacing in Arabic names
    const patterns = [
        // عبد patterns - more comprehensive with word boundaries
        { regex: /عبدالرحمنالسديس/g, replacement: 'عبد الرحمن السديس' },
        { regex: /عبدالرحمن([ا-ي]+)/g, replacement: 'عبد الرحمن $1' },
        { regex: /عبدالله([ا-ي]+)/g, replacement: 'عبد الله $1' },
        { regex: /عبدالعزيز([ا-ي]+)/g, replacement: 'عبد العزيز $1' },
        { regex: /عبدالباسط([ا-ي]+)/g, replacement: 'عبد الباسط $1' },
        { regex: /عبدالمحسن([ا-ي]+)/g, replacement: 'عبد المحسن $1' },
        { regex: /عبدالودود([ا-ي]+)/g, replacement: 'عبد الودود $1' },
        { regex: /عبدالرشيد([ا-ي]+)/g, replacement: 'عبد الرشيد $1' },
        { regex: /عبدالبارئ([ا-ي]+)/g, replacement: 'عبد البارئ $1' },
        { regex: /عبدالكريم([ا-ي]+)/g, replacement: 'عبد الكريم $1' },
        { regex: /عبدالوهاب([ا-ي]+)/g, replacement: 'عبد الوهاب $1' },
        { regex: /عبدالمجيد([ا-ي]+)/g, replacement: 'عبد المجيد $1' },
        { regex: /عبدالحكيم([ا-ي]+)/g, replacement: 'عبد الحكيم $1' },
        { regex: /عبدالقادر([ا-ي]+)/g, replacement: 'عبد القادر $1' },
        { regex: /عبدالصمد([ا-ي]+)/g, replacement: 'عبد الصمد $1' },
        // Standalone عبد patterns
        { regex: /عبدالله/g, replacement: 'عبد الله' },
        { regex: /عبدالرحمن/g, replacement: 'عبد الرحمن' },
        { regex: /عبدالعزيز/g, replacement: 'عبد العزيز' },
        { regex: /عبدالباسط/g, replacement: 'عبد الباسط' },
        { regex: /عبدالمحسن/g, replacement: 'عبد المحسن' },
        { regex: /عبدالودود/g, replacement: 'عبد الودود' },
        { regex: /عبدالرشيد/g, replacement: 'عبد الرشيد' },
        { regex: /عبدالبارئ/g, replacement: 'عبد البارئ' },
        { regex: /عبدالكريم/g, replacement: 'عبد الكريم' },
        { regex: /عبدالوهاب/g, replacement: 'عبد الوهاب' },
        { regex: /عبدالمجيد/g, replacement: 'عبد المجيد' },
        { regex: /عبدالحكيم/g, replacement: 'عبد الحكيم' },
        { regex: /عبدالقادر/g, replacement: 'عبد القادر' },
        { regex: /عبدالصمد/g, replacement: 'عبد الصمد' },
        
        // أبو patterns
        { regex: /أبوبكر/g, replacement: 'أبو بكر' },
        { regex: /ابوبكر/g, replacement: 'أبو بكر' },
        { regex: /أبو([ا-ي])/g, replacement: 'أبو $1' },
        { regex: /ابو([ا-ي])/g, replacement: 'أبو $1' },
        
        // ابن patterns
        { regex: /ابنعامر/g, replacement: 'ابن عامر' },
        { regex: /ابنمسعود/g, replacement: 'ابن مسعود' },
        { regex: /ابن([ا-ي])/g, replacement: 'ابن $1' },
        { regex: /بن([ا-ي])/g, replacement: 'بن $1' },
        
        // الشيخ patterns
        { regex: /الشيخ([ا-ي])/g, replacement: 'الشيخ $1' },
        
        // محمد patterns
        { regex: /محمدصديق/g, replacement: 'محمد صديق' },
        { regex: /محمدأيوب/g, replacement: 'محمد أيوب' },
        { regex: /محمد([ا-ي])/g, replacement: 'محمد $1' },
        
        // أحمد patterns
        { regex: /أحمدعلي/g, replacement: 'أحمد علي' },
        { regex: /احمدعلي/g, replacement: 'أحمد علي' },
        { regex: /أحمد([ا-ي])/g, replacement: 'أحمد $1' },
        { regex: /احمد([ا-ي])/g, replacement: 'أحمد $1' },
        
        // مصطفى patterns
        { regex: /مصطفى([ا-ي])/g, replacement: 'مصطفى $1' },
        
        // ياسر patterns  
        { regex: /ياسر([ا-ي])/g, replacement: 'ياسر $1' },
        
        // سعد patterns
        { regex: /سعد([ا-ي])/g, replacement: 'سعد $1' },
    ];
    
    let formattedName = name;
    patterns.forEach(pattern => {
        const before = formattedName;
        formattedName = formattedName.replace(pattern.regex, pattern.replacement);
        if (before !== formattedName) {
            console.log(`تنسيق الاسم: ${before} → ${formattedName}`);
        }
    });
    
    return formattedName;
}

// Function to format surah names with proper spacing
function formatSurahName(name) {
    if (!name) return name;
    
    // Fix spacing between "سورة" and the surah name
    let formattedName = name;
    
    // Add space after سورة if missing
    formattedName = formattedName.replace(/سورة([ا-ي])/g, 'سورة $1');
    
    // Specific fixes for common surahs
    const surahPatterns = [
        { regex: /سورةالفاتحة/g, replacement: 'سورة الفاتحة' },
        { regex: /سورةالبقرة/g, replacement: 'سورة البقرة' },
        { regex: /سورةآل عمران/g, replacement: 'سورة آل عمران' },
        { regex: /سورةالنساء/g, replacement: 'سورة النساء' },
        { regex: /سورةالمائدة/g, replacement: 'سورة المائدة' },
        { regex: /سورةالأنعام/g, replacement: 'سورة الأنعام' },
        { regex: /سورةالأعراف/g, replacement: 'سورة الأعراف' },
        { regex: /سورةالأنفال/g, replacement: 'سورة الأنفال' },
        { regex: /سورةالتوبة/g, replacement: 'سورة التوبة' },
        { regex: /سورةيونس/g, replacement: 'سورة يونس' },
        { regex: /سورةهود/g, replacement: 'سورة هود' },
        { regex: /سورةيوسف/g, replacement: 'سورة يوسف' },
        { regex: /سورةالرعد/g, replacement: 'سورة الرعد' },
        { regex: /سورةإبراهيم/g, replacement: 'سورة إبراهيم' },
        { regex: /سورةالحجر/g, replacement: 'سورة الحجر' },
        { regex: /سورةالنحل/g, replacement: 'سورة النحل' },
        { regex: /سورةالإسراء/g, replacement: 'سورة الإسراء' },
        { regex: /سورةالكهف/g, replacement: 'سورة الكهف' },
        { regex: /سورةمريم/g, replacement: 'سورة مريم' },
        { regex: /سورةطه/g, replacement: 'سورة طه' },
        { regex: /سورةالأنبياء/g, replacement: 'سورة الأنبياء' },
        { regex: /سورةالحج/g, replacement: 'سورة الحج' },
        { regex: /سورةالمؤمنون/g, replacement: 'سورة المؤمنون' },
        { regex: /سورةالنور/g, replacement: 'سورة النور' },
        { regex: /سورةالفرقان/g, replacement: 'سورة الفرقان' },
        { regex: /سورةالشعراء/g, replacement: 'سورة الشعراء' },
        { regex: /سورةالنمل/g, replacement: 'سورة النمل' },
        { regex: /سورةالقصص/g, replacement: 'سورة القصص' },
        { regex: /سورةالعنكبوت/g, replacement: 'سورة العنكبوت' },
        { regex: /سورةالروم/g, replacement: 'سورة الروم' },
        { regex: /سورةلقمان/g, replacement: 'سورة لقمان' },
        { regex: /سورةالسجدة/g, replacement: 'سورة السجدة' },
        { regex: /سورةالأحزاب/g, replacement: 'سورة الأحزاب' },
        { regex: /سورةسبأ/g, replacement: 'سورة سبأ' },
        { regex: /سورةفاطر/g, replacement: 'سورة فاطر' },
        { regex: /سورةيس/g, replacement: 'سورة يس' },
        { regex: /سورةالصافات/g, replacement: 'سورة الصافات' },
        { regex: /سورةص/g, replacement: 'سورة ص' },
        { regex: /سورةالزمر/g, replacement: 'سورة الزمر' },
        { regex: /سورةغافر/g, replacement: 'سورة غافر' },
        { regex: /سورةالناس/g, replacement: 'سورة الناس' },
        { regex: /سورةالفلق/g, replacement: 'سورة الفلق' },
        { regex: /سورةالإخلاص/g, replacement: 'سورة الإخلاص' },
    ];
    
    surahPatterns.forEach(pattern => {
        formattedName = formattedName.replace(pattern.regex, pattern.replacement);
    });
    
    return formattedName;
}

// Enhanced Audio Player Controller for Readers Page
class QuranAudioPlayer {
    constructor() {
        this.audioElement = document.getElementById('audioElement');
        this.audioPlayer = document.getElementById('audioPlayer');
        this.playPauseBtn = document.getElementById('playPauseBtn');
        this.progressSlider = document.getElementById('progressSlider');
        this.progressFill = document.getElementById('progressFill');
        this.currentTimeDisplay = document.getElementById('currentTime');
        this.totalTimeDisplay = document.getElementById('totalTime');
        this.volumeSlider = document.getElementById('volumeSlider');
        this.volumeBtn = document.getElementById('volumeBtn');
        this.repeatBtn = document.getElementById('repeatBtn');
        this.speedBtn = document.getElementById('speedBtn');
        this.currentSurahDisplay = document.getElementById('currentSurah');
        this.currentReaderDisplay = document.getElementById('currentReader');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        
        this.isPlaying = false;
        this.isRepeating = false;
        this.playbackSpeeds = [0.75, 1, 1.25, 1.5, 2];
        this.currentSpeedIndex = 1;
        this.currentSurahIndex = 0;
        this.availableSurahs = [];
        this.currentReaderData = null;
        
        this.initializePlayer();
        this.setupEventListeners();
    }
    
    initializePlayer() {
        this.audioElement.volume = 0.7;
        this.volumeSlider.value = 70;
    }
    
    setupEventListeners() {
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.progressSlider.addEventListener('input', () => this.seekAudio());
        this.volumeSlider.addEventListener('input', () => this.adjustVolume());
        this.volumeBtn.addEventListener('click', () => this.toggleMute());
        this.speedBtn.addEventListener('click', () => this.changeSpeed());
        this.repeatBtn.addEventListener('click', () => this.toggleRepeat());
        this.prevBtn.addEventListener('click', () => this.previousSurah());
        this.nextBtn.addEventListener('click', () => this.nextSurah());
        
        this.audioElement.addEventListener('loadstart', () => this.showPlayer());
        this.audioElement.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
        this.audioElement.addEventListener('ended', () => this.onAudioEnded());
        this.audioElement.addEventListener('error', () => this.onAudioError());
    }
    
    showPlayer() {
        this.audioPlayer.style.display = 'block';
        document.body.style.paddingBottom = '120px';
    }
    
    hidePlayer() {
        this.audioPlayer.style.display = 'none';
        document.body.style.paddingBottom = '0';
    }
    
    loadAudio(src, surahName, readerName, surahIndex = 0) {
        this.audioElement.src = src;
        this.currentSurahDisplay.textContent = surahName;
        this.currentReaderDisplay.textContent = readerName;
        this.currentSurahIndex = surahIndex;
        this.showPlayer();
    }
    
    setAvailableSurahs(surahs, readerData) {
        this.availableSurahs = surahs;
        this.currentReaderData = readerData;
    }
    
    togglePlayPause() {
        if (this.isPlaying) {
            this.audioElement.pause();
            this.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            this.isPlaying = false;
        } else {
            this.audioElement.play();
            this.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            this.isPlaying = true;
        }
    }
    
    previousSurah() {
        if (this.availableSurahs.length > 0 && this.currentSurahIndex > 0) {
            this.currentSurahIndex--;
            this.loadSurahByIndex(this.currentSurahIndex);
        }
    }
    
    nextSurah() {
        if (this.availableSurahs.length > 0 && this.currentSurahIndex < this.availableSurahs.length - 1) {
            this.currentSurahIndex++;
            this.loadSurahByIndex(this.currentSurahIndex);
        }
    }
    
    loadSurahByIndex(index) {
        const surahId = this.availableSurahs[index];
        // Get surah name from API
        fetch(`https://api.quran.com/api/v4/chapters/${surahId}?language=ar`)
            .then(res => res.json())
            .then(data => {
                const surahName = this.formatSurahName(data.chapter.name_arabic, surahId);
                const audioSrc = this.buildAudioUrl(surahId);
                this.loadAudio(audioSrc, surahName, this.currentReaderData.name, index);
            });
    }
    
    formatSurahName(arabicName, surahId) {
        // Use our local surah names with proper spacing
        const localName = surahNames[surahId];
        if (localName) {
            return `سورة ${localName}`;
        } else {
            // If not in our list, try to format the API name
            return `سورة ${arabicName}`;
        }
    }
    
    buildAudioUrl(surahId) {
        const server = this.currentReaderData.server;
        if (surahId > 0 && surahId < 10) {
            return server + "00" + surahId + ".mp3";
        } else if (surahId >= 10 && surahId < 100) {
            return server + "0" + surahId + ".mp3";
        } else if (surahId >= 100 && surahId <= 114) {
            return server + surahId + ".mp3";
        }
    }
    
    seekAudio() {
        const seekTime = (this.progressSlider.value / 100) * this.audioElement.duration;
        this.audioElement.currentTime = seekTime;
    }
    
    adjustVolume() {
        this.audioElement.volume = this.volumeSlider.value / 100;
        this.updateVolumeIcon();
    }
    
    updateVolumeIcon() {
        const volume = this.audioElement.volume;
        const icon = this.volumeBtn.querySelector('i');
        
        if (volume === 0) {
            icon.className = 'fas fa-volume-mute';
        } else if (volume < 0.5) {
            icon.className = 'fas fa-volume-down';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    }
    
    toggleMute() {
        if (this.audioElement.volume > 0) {
            this.audioElement.volume = 0;
            this.volumeSlider.value = 0;
        } else {
            this.audioElement.volume = 0.7;
            this.volumeSlider.value = 70;
        }
        this.updateVolumeIcon();
    }
    
    changeSpeed() {
        this.currentSpeedIndex = (this.currentSpeedIndex + 1) % this.playbackSpeeds.length;
        const speed = this.playbackSpeeds[this.currentSpeedIndex];
        this.audioElement.playbackRate = speed;
        this.speedBtn.querySelector('.speed-text').textContent = speed + 'x';
    }
    
    toggleRepeat() {
        this.isRepeating = !this.isRepeating;
        this.repeatBtn.classList.toggle('active', this.isRepeating);
        this.audioElement.loop = this.isRepeating;
    }
    
    updateProgress() {
        const progress = (this.audioElement.currentTime / this.audioElement.duration) * 100;
        this.progressFill.style.width = progress + '%';
        this.progressSlider.value = progress;
        
        this.currentTimeDisplay.textContent = this.formatTime(this.audioElement.currentTime);
    }
    
    updateDuration() {
        this.totalTimeDisplay.textContent = this.formatTime(this.audioElement.duration);
    }
    
    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    
    onAudioEnded() {
        if (!this.isRepeating) {
            // Auto-play next surah
            this.nextSurah();
        }
    }
    
    onAudioError() {
        console.error('Audio loading error');
    }
}

// Initialize the audio player
const audioPlayer = new QuranAudioPlayer();

// Surah names in Arabic with proper spacing
const surahNames = {
    1: "الفاتحة", 2: "البقرة", 3: "آل عمران", 4: "النساء", 5: "المائدة",
    6: "الأنعام", 7: "الأعراف", 8: "الأنفال", 9: "التوبة", 10: "يونس",
    11: "هود", 12: "يوسف", 13: "الرعد", 14: "إبراهيم", 15: "الحجر",
    16: "النحل", 17: "الإسراء", 18: "الكهف", 19: "مريم", 20: "طه",
    21: "الأنبياء", 22: "الحج", 23: "المؤمنون", 24: "النور", 25: "الفرقان",
    26: "الشعراء", 27: "النمل", 28: "القصص", 29: "العنكبوت", 30: "الروم",
    31: "لقمان", 32: "السجدة", 33: "الأحزاب", 34: "سبأ", 35: "فاطر",
    36: "يس", 37: "الصافات", 38: "ص", 39: "الزمر", 40: "غافر",
    41: "فصلت", 42: "الشورى", 43: "الزخرف", 44: "الدخان", 45: "الجاثية",
    46: "الأحقاف", 47: "محمد", 48: "الفتح", 49: "الحجرات", 50: "ق",
    51: "الذاريات", 52: "الطور", 53: "النجم", 54: "القمر", 55: "الرحمن",
    56: "الواقعة", 57: "الحديد", 58: "المجادلة", 59: "الحشر", 60: "الممتحنة",
    61: "الصف", 62: "الجمعة", 63: "المنافقون", 64: "التغابن", 65: "الطلاق",
    66: "التحريم", 67: "الملك", 68: "القلم", 69: "الحاقة", 70: "المعارج",
    71: "نوح", 72: "الجن", 73: "المزمل", 74: "المدثر", 75: "القيامة",
    76: "الإنسان", 77: "المرسلات", 78: "النبأ", 79: "النازعات", 80: "عبس",
    81: "التكوير", 82: "الانفطار", 83: "المطففين", 84: "الانشقاق", 85: "البروج",
    86: "الطارق", 87: "الأعلى", 88: "الغاشية", 89: "الفجر", 90: "البلد",
    91: "الشمس", 92: "الليل", 93: "الضحى", 94: "الشرح", 95: "التين",
    96: "العلق", 97: "القدر", 98: "البينة", 99: "الزلزلة", 100: "العاديات",
    101: "القارعة", 102: "التكاثر", 103: "العصر", 104: "الهمزة", 105: "الفيل",
    106: "قريش", 107: "الماعون", 108: "الكوثر", 109: "الكافرون", 110: "النصر",
    111: "المسد", 112: "الإخلاص", 113: "الفلق", 114: "الناس"
};

let surah_flex = document.querySelector(".surah_flex");
let spinner = document.querySelector(".spinner");
let readerInfo = document.getElementById("readerInfo");
let readerName = document.getElementById("readerName");
let readerRiwaya = document.getElementById("readerRiwaya");
let surahCount = document.getElementById("surahCount");

let url = window.location.href;
let search = url.lastIndexOf("?") + 1;
let part = url.slice(search);
let modifyUrl = +part.replace("#", "");

if (search > 0) {
    spinner.style.display = "flex";

    fetch(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${modifyUrl}`)
        .then((ress) => ress.json())
        .then((data2) => {
            console.log(data2);
            const readerData = data2.reciters[0];
            const { surah_list, server } = readerData.moshaf[0];
            const arr = surah_list.split(",");
            
            // Show reader info with formatted name
            readerInfo.style.display = "block";
            readerName.textContent = formatReaderName(readerData.name);
            readerRiwaya.textContent = readerData.moshaf[0].name;
            surahCount.textContent = arr.length;
            
            // Set available surahs for player navigation
            audioPlayer.setAvailableSurahs(arr.map(Number), {
                name: formatReaderName(readerData.name),
                server: server
            });
            
            // Load surahs
            arr.forEach((surahId, index) => {
                fetch(`https://api.quran.com/api/v4/chapters/${surahId}?language=ar`)
                    .then((ress3) => ress3.json())
                    .then((data3) => {
                        // Use our properly spaced surah names
                        const surahName = surahNames[data3.chapter.id] || data3.chapter.name_arabic;
                        const formattedReaderName = formatReaderName(readerData.name);
                        // Format surah name with proper spacing
                        const displaySurahName = surahName.includes('سورة') ? surahName : `سورة ${surahName}`;
                        const finalSurahName = formatSurahName(displaySurahName);
                        
                        let box = `
                            <div class="surah_item" onclick="addAudio(${data3.chapter.id}, '${surahName}', '${formattedReaderName}', ${index})">
                                <div class="surah_item_right">
                                    <div class="icons">
                                        <i class="fa-solid fa-play-circle"></i>
                                    </div>
                                    <div class="surah_item_name">
                                        <h3>${finalSurahName}</h3>
                                        <p>${data3.chapter.verses_count} آية</p>
                                    </div>
                                </div>
                                <div class="surah_item_left">
                                    <a onclick="mySource(${data3.chapter.id}, event)" download title="تحميل">
                                        <i class="fa-solid fa-download"></i>
                                    </a>
                                </div>
                            </div>
                        `;
                        surah_flex.innerHTML += box;
                    });
            });
            
            spinner.style.display = "none";
        });

    // Enhanced addAudio function
    function addAudio(id, surahName, readerName, surahIndex) {
        spinner.style.display = "flex";
        
        fetch(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${modifyUrl}`)
            .then((ress) => ress.json())
            .then((data2) => {
                spinner.style.display = "none";
                const audioSource = data2.reciters[0].moshaf[0].server;
                let audioUrl;
                
                if (id > 0 && id < 10) {
                    audioUrl = audioSource + "00" + id + ".mp3";
                } else if (id >= 10 && id < 100) {
                    audioUrl = audioSource + "0" + id + ".mp3";
                } else if (id >= 100 && id <= 114) {
                    audioUrl = audioSource + id + ".mp3";
                }
                
                // Format the surah name properly
                const displayName = surahName.startsWith('سورة') ? surahName : `سورة ${surahName}`;
                const formattedSurahName = formatSurahName(displayName);
                audioPlayer.loadAudio(audioUrl, formattedSurahName, readerName, surahIndex);
            })
            .catch(error => {
                console.error('Error loading audio:', error);
                spinner.style.display = "none";
            });
    }

    // Enhanced download function
    function mySource(id, e) {
        e.preventDefault();
        e.stopPropagation();
        
        spinner.style.display = "flex";
        fetch(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${modifyUrl}&sura=${id}`)
            .then((res6) => res6.json())
            .then((data6) => {
                const server = data6.reciters[0].moshaf[0].server;
                let downloadUrl;
                
                if (id > 0 && id < 10) {
                    downloadUrl = server + "00" + id + ".mp3";
                } else if (id >= 10 && id < 100) {
                    downloadUrl = server + "0" + id + ".mp3";
                } else if (id >= 100 && id <= 114) {
                    downloadUrl = server + id + ".mp3";
                }
                
                // Create temporary download link
                const downloadLink = document.createElement('a');
                downloadLink.href = downloadUrl;
                downloadLink.download = `surah_${id}.mp3`;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
                spinner.style.display = "none";
            })
            .catch(error => {
                console.error('Error downloading audio:', error);
                spinner.style.display = "none";
            });
    }

    // Make functions globally available
    window.addAudio = addAudio;
    window.mySource = mySource;
}