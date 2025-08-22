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

// Enhanced Audio Player Controller
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
        
        this.isPlaying = false;
        this.isRepeating = false;
        this.playbackSpeeds = [0.75, 1, 1.25, 1.5, 2];
        this.currentSpeedIndex = 1;
        
        this.initializePlayer();
        this.setupEventListeners();
    }
    
    initializePlayer() {
        this.audioElement.volume = 0.7;
        this.volumeSlider.value = 70;
    }
    
    setupEventListeners() {
        // Play/Pause button
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        
        // Progress slider
        this.progressSlider.addEventListener('input', () => this.seekAudio());
        
        // Volume controls
        this.volumeSlider.addEventListener('input', () => this.adjustVolume());
        this.volumeBtn.addEventListener('click', () => this.toggleMute());
        
        // Speed control
        this.speedBtn.addEventListener('click', () => this.changeSpeed());
        
        // Repeat button
        this.repeatBtn.addEventListener('click', () => this.toggleRepeat());
        
        // Audio events
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
    
    loadAudio(src, surahName, readerName) {
        this.audioElement.src = src;
        this.currentSurahDisplay.textContent = surahName;
        this.currentReaderDisplay.textContent = readerName;
        this.showPlayer();
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
            this.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            this.isPlaying = false;
        }
    }
    
    onAudioError() {
        console.error('Audio loading error');
        // You can add user notification here
    }
}

// Initialize the audio player
const audioPlayer = new QuranAudioPlayer();

let item_flex = document.querySelector(".item_flex");
let spinner = document.querySelector(".spinner");
spinner.style.display = "flex";
fetch(`https://mp3quran.net/api/v3/reciters`)
  .then((res) => res.json())
  .then((datas) => {
    spinner.style.display = "none";
    let { reciters } = datas;

    // Sort readers alphabetically by formatted Arabic name for stable ordering
    reciters.sort((a, b) => {
      const an = formatReaderName(a.name);
      const bn = formatReaderName(b.name);
      return an.localeCompare(bn, 'ar');
    });

    for (let i = 0; i < reciters.length; i++) {
      const formattedReaderName = formatReaderName(reciters[i].name);
      const displayIndex = i + 1; // sequential numbering 1..N
      let box = `
        <a href="Readers/index.html?${reciters[i].id}" class="item enhanced-reader-card">
            <div class="right">
                <div class="rectangle">
                    <section>
                        ${displayIndex}
                    </section>
                </div>
                <div class="surah_name">
                    <li>${formattedReaderName}</li>
                    <li class="rwaya">${reciters[i].moshaf[0].name}</li>
                </div>
            </div>
            <div class="reader-actions">
                <button class="action-btn preview-btn" onclick="previewReader(${reciters[i].id}, '${formattedReaderName}', event)" title="معاينة">
                    <i class="fas fa-play"></i>
                </button>
            </div>
        </a>
        `;
      item_flex.innerHTML += box;
    }

    let footer_div = document.querySelector(".footer_div");
    let boxer = `<footer class="text-center text-lg-start" style="border-top: 1px solid #464b50; padding: 24px 0; margin-top: 50px;">
        <div class="container">
            <div class="text-center" style="margin-bottom: 12px;">
                <p style="color: #ccc; margin: 0;">
                    <i class="fas fa-code" style="color: #D5BD8A;"></i>
                    تم تطوير الموقع بواسطة منصة وقف الرقمية
                </p>
            </div>

            <div class="text-center" style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                <a href="https://www.facebook.com/dBSolutions" target="_blank" rel="noopener" 
                   style="display: inline-flex; align-items: center; gap: 10px; padding: 10px 16px; 
                          background: rgba(255,255,255,0.10); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); 
                          border-radius: 999px; color: #fff; text-decoration: none;">
                    <i class="fab fa-facebook" style="color: #1877F2;"></i>
                    <span>لتصميم الطلبات المشابهة</span>
                    <span style="opacity: .9; direction: ltr; margin-right: 6px; color: #D5BD8A;">facebook.com/dBSolutions</span>
                </a>

                <a href="http://vakifplatform.gt.tc/" target="_blank" rel="noopener"
                   style="display: inline-flex; align-items: center; gap: 10px; padding: 10px 16px; 
                          background: rgba(255,255,255,0.10); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); 
                          border-radius: 999px; color: #fff; text-decoration: none;">
                    <i class="fas fa-globe" style="color: #D5BD8A;"></i>
                    <span>للوصول إلى موقعنا الأصلي والاطلاع على الخدمات</span>
                    <span style="opacity: .9; direction: ltr; margin-right: 6px; color: #D5BD8A;">vakifplatform.gt.tc</span>
                </a>
            </div>
        </div>
    </footer>`;
    footer_div.innerHTML = boxer;
  });

// Preview Reader Function
function previewReader(readerId, readerName, event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Load Al-Fatiha (Surah 1) as preview
    const previewSurahId = 1;
    const audioSrc = `https://server8.mp3quran.net/ahmad_nu3man/00${previewSurahId}.mp3`;
    
    // Ensure proper formatting
    const formattedReaderName = formatReaderName(readerName);
    audioPlayer.loadAudio(audioSrc, 'سورة الفاتحة', formattedReaderName);
}

// Enhanced Search with better UI feedback and Riwaya support
let search_div_inpt = document.getElementById("search_div_inpt");
let riwaya_select = document.getElementById("riwaya_select");
let searchTimeout;
let originalReciters = []; // Store original data
let resultsCountEl = null; // badge removed
let clearSearchBtn = document.getElementById('clearSearchBtn');

// Store original reciters data when first loaded and populate riwaya options
fetch(`https://mp3quran.net/api/v3/reciters`)
  .then((res) => res.json())
  .then((datas) => {
    originalReciters = datas.reciters;
    // Keep the same ordering logic for searches
    originalReciters.sort((a, b) => {
      const an = formatReaderName(a.name);
      const bn = formatReaderName(b.name);
      return an.localeCompare(bn, 'ar');
    });
    
    // Extract unique riwayas from the actual data
    const uniqueRiwayas = [...new Set(datas.reciters.map(reciter => reciter.moshaf[0].name))];
    
    // Update the riwaya select options
    const riwayaSelect = document.getElementById("riwaya_select");
    if (riwayaSelect) {
      // Clear existing options and show loading
      riwayaSelect.innerHTML = '<option value="">جاري تحميل الروايات...</option>';
      
      // Add actual riwayas from API
      setTimeout(() => {
        riwayaSelect.innerHTML = '<option value="">جميع الروايات</option>';
        uniqueRiwayas.sort().forEach(riwaya => {
          // Count reciters for this riwaya
          const reciterCount = originalReciters.filter(reciter => reciter.moshaf[0].name === riwaya).length;
          
          const option = document.createElement('option');
          option.value = riwaya;
          option.textContent = `${riwaya} (${reciterCount} قارئ)`;
          riwayaSelect.appendChild(option);
        });
        
        // Add count of riwayas
        const firstOption = riwayaSelect.options[0];
        firstOption.textContent = `جميع الروايات (${uniqueRiwayas.length} رواية)`;
      }, 500);
    }
    
    console.log(`تم تحميل ${uniqueRiwayas.length} رواية مختلفة من قاعدة البيانات`);
    console.log('الروايات المتوفرة:', uniqueRiwayas);
  })
  .catch(error => {
    console.error('خطأ في تحميل الروايات:', error);
    const riwayaSelect = document.getElementById("riwaya_select");
    if (riwayaSelect) {
      riwayaSelect.innerHTML = '<option value="">خطأ في تحميل الروايات</option>';
    }
  });

search_div_inpt.addEventListener("keyup", performSearch);
riwaya_select.addEventListener("change", performSearch);

// Clear button logic
if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', function(){
    search_div_inpt.value = '';
    performSearch();
    search_div_inpt.focus();
  });
}

// Chips removed

search_div_inpt.addEventListener("focus", function() {
    this.parentElement.style.transform = "scale(1.02)";
});
search_div_inpt.addEventListener("blur", function() {
    this.parentElement.style.transform = "scale(1)";
});

riwaya_select.addEventListener("focus", function() {
    this.parentElement.style.transform = "scale(1.02)";
});
riwaya_select.addEventListener("blur", function() {
    this.parentElement.style.transform = "scale(1)";
});

function performSearch() {
  clearTimeout(searchTimeout);
  
  const searchValue = search_div_inpt.value.trim();
  const riwayaValue = riwaya_select.value.trim();
  if (clearSearchBtn) clearSearchBtn.style.display = searchValue ? 'inline' : 'none';
  
  if (searchValue !== "" || riwayaValue !== "") {
    // Add loading state to search
    document.querySelector('.search_icon i').className = 'fas fa-spinner fa-spin';
    
    searchTimeout = setTimeout(() => {
      item_flex.innerHTML = "";
      let foundResults = 0;
      
      // Filter through original reciters data
      for (let i = 0; i < originalReciters.length; i++) {
        const reciter = originalReciters[i];
        const formattedName = formatReaderName(reciter.name);
        const nameMatch = searchValue === "" || reciter.name.includes(searchValue) || formattedName.includes(searchValue);
        const riwayaMatch = riwayaValue === "" || reciter.moshaf[0].name.includes(riwayaValue);
        
        if (nameMatch && riwayaMatch) {
          foundResults++;
          const formattedReaderName = formatReaderName(reciter.name);
          const displayIndex = foundResults; // sequential numbering in search results
          let box = `
            <a href=\"Readers/index.html?${reciter.id}\" class=\"item enhanced-reader-card\">
                <div class=\"right\">
                    <div class=\"rectangle\">
                        <section>
                            ${displayIndex}
                        </section>
                    </div>
                    <div class=\"surah_name\">
                        <li>${formattedReaderName}</li>
                        <li class=\"rwaya\">${reciter.moshaf[0].name}</li>
                    </div>
                </div>
                <div class=\"reader-actions\">
                    <button class=\"action-btn preview-btn\" onclick=\"previewReader(${reciter.id}, '${formattedReaderName}', event)\" title=\"معاينة\">
                        <i class=\"fas fa-play\"></i>
                    </button>
                </div>
            </a>
          `;
          item_flex.innerHTML += box;
        }
      }
      
      document.querySelector('.search_icon i').className = 'fas fa-magnifying-glass';
      
      // Show no results message if needed
      if (foundResults === 0) {
        item_flex.innerHTML = `
          <div class="no-results">
            <i class="fas fa-search" style="font-size: 3rem; color: #666; margin-bottom: 20px;"></i>
            <h3 style="color: #ccc; margin-bottom: 10px;">لم يتم العثور على نتائج</h3>
            <p style="color: #999;">جرب البحث بكلمات أخرى أو اختر رواية مختلفة</p>
          </div>
        `;
      }

      if (resultsCountEl) resultsCountEl.textContent = foundResults;
    }, 300); // Reduced debounce time for better UX
  } else {
    // Reset to original content when both searches are empty
    // Re-render all readers with current ordering
    item_flex.innerHTML = '';
    let count = 0;
    for (let i = 0; i < originalReciters.length; i++) {
      const reciter = originalReciters[i];
      const formattedReaderName = formatReaderName(reciter.name);
      count++;
      let box = `
        <a href="Readers/index.html?${reciter.id}" class="item enhanced-reader-card">
            <div class="right">
                <div class="rectangle">
                    <section>
                        ${count}
                    </section>
                </div>
                <div class="surah_name">
                    <li>${formattedReaderName}</li>
                    <li class="rwaya">${reciter.moshaf[0].name}</li>
                </div>
            </div>
            <div class="reader-actions">
                <button class="action-btn preview-btn" onclick="previewReader(${reciter.id}, '${formattedReaderName}', event)" title="معاينة">
                    <i class="fas fa-play"></i>
                </button>
            </div>
        </a>
      `;
      item_flex.innerHTML += box;
    }
    if (resultsCountEl) resultsCountEl.textContent = count;
  }
}

// =================== Startup Modal Logic ===================
(function initStartupModal(){
  const backdrop = document.getElementById('startupBackdrop');
  const closeBtn = document.getElementById('startupCloseBtn');

  if(!backdrop || !closeBtn) return;

  function showModal(){
    backdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    backdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Show immediately on load
  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    setTimeout(showModal, 0);
  } else {
    document.addEventListener('DOMContentLoaded', showModal, { once: true });
  }

  // Close only via explicit button click
  closeBtn.addEventListener('click', closeModal);

  // Prevent closing with Escape or click outside
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      e.preventDefault();
      e.stopPropagation();
    }
  });
  backdrop.addEventListener('click', function(e){
    if(e.target === backdrop){
      e.stopPropagation();
    }
  });
})();
