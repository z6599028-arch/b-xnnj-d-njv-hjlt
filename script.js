// ===== Настройки сезонов =====
// count: сколько серий в сезоне (на русском)
// countUz: сколько серий на узбекском, если число другое (необязательно)
// titles: названия серий по порядку (пустая строка, если названия пока нет)
// videoTemplate: шаблон имени русского видео, {n} заменяется номером серии
// videos: готовый список русских файлов (вместо шаблона)
// videoTemplateUz: шаблон узбекского видео
// videosUz: готовый список узбекских файлов по порядку серий
//   Пустое место "" значит: узбекского видео нет, откроется русское.
// imageTemplate: имя картинки
const seasonsConfig = {
  1: {
    count: 26,
    titles: [
      // Серии с 12 по 26: впиши названия сюда через запятую
    ],
    videoTemplate:
      "video/Смотреть_Клинок,_рассекающий_демонов_{n}_серия_на_Jut_su.mp4",
    videosUz: [
      "video/0324.mp4",
      "video/0326.mp4",
      "video/0406.mp4",
      "video/0506.mp4",
      "video/0506(2).mp4",
      "video/@AniDonUz.mp4",
      "video/@AniDonUz (1).mp4",
      "video/@AniDonUz (2).mp4",
      "video/@AniDonUz (3).mp4",
      "video/@AniDonUz (4).mp4",
      "video/@AniDonUz (5).mp4",
      "video/@AniDonUz (6).mp4",
      "video/@AniDonUz (7).mp4",
      "video/@AniDonUz (8).mp4",
      "video/@AniDonUz (9).mp4",
      "video/@AniDonUz (10).mp4",
      "video/@AniDonUz (11).mp4",
      "video/@AniDonUz (12).mp4",
      "video/@AniDonUz (13).mp4",
      "video/@AniDonUz (14).mp4",
      "video/@AniDonUz (15).mp4",
      "video/@AniDonUz (16).mp4",
      "video/@AniDonUz (17).mp4",
      "video/@AniDonUz (18).mp4",
      "video/@AniDonUz (19).mp4",
      "video/@AniDonUz (20).mp4",
    ],
    imageTemplate: "foto/Снимок экрана 2026-10-25 в 20.46.38.png",
  },
  2: {
    count: 18,
    // На узбекском во втором сезоне только 11 серий
    countUz: 11,
    titles: [],
    videos: [
      "video/_720_2147419513.mp4",
      "video/_720_2147419566.mp4",
      "video/_720_2147419518.mp4",
      "video/_720_2147439513.mp4",
      "video/_720_2147420078.mp4",
      "video/_720_2147420211.mp4",
      "video/_720_2147420265.mp4",
      "video/_720_2147420349.mp4",
      "video/_720_2147420527.mp4",
      "video/_720_2147420616.mp4",
      "video/_720_2147420671.mp4",
      "video/_720_2147420736.mp4",
      "video/_720_2147420950.mp4",
      "video/anilibria_bot_9406_1.mp4",
      "video/telegram-cloud-document-2-5188690131338400660.mp4",
      "video/telegram-cloud-document-2-5310269750566196477.mp4",
      "video/telegram-cloud-document-2-5332757984579687028.mp4",
      "video/telegram-cloud-document-2-5372997777989046809.mp4",
    ],
    // Узбекские файлы: ровно 11, по порядку серий
    videosUz: [
      "video/1серия.mp4",
      "video/2серия.mp4",
      "video/3серия.mp4",
      "video/4серия.mp4",
      "video/5серия.mp4",
      "video/6серия.mp4",
      "video/7серия.mp4",
      "video/8серия.mp4",
      "video/9серия.mp4",
      "video/10серия.mp4",
      "video/11серия.mp4",
    ],
    imageTemplate: "foto/Снимок экрана 2026-10-25 в 20.47.08.png",
  },
  3: {
    count: 11,
    titles: [],
    videoTemplate: "video/anilibria_bot_9406_{n}.mp4",
    videoTemplateUz: "video/{n}серия.mp4",
    imageTemplate: "foto/Снимок экрана 2026-10-25 в 20.46.30.png",
  },
  4: {
    count: 8,
    titles: [],
    videoTemplate: "video/anilibria_bot_9660_{n}.mp4",
    videoTemplateUz: "",
    imageTemplate: "foto/Снимок экрана 2026-10-25 в 20.45.57.png",
  },
};

// Спешалы и фильмы, заполняются вручную
// title: русское название, titleUz: узбекское
// video: русское видео, videoUz: узбекское (пусто, если пока нет)
const specialsList = [
  {
    title: "Бесконечный поезд",
    titleUz: "Cheksiz poyezd",
    image: "foto/Снимок экрана 2026-10-25 в 20.52.38.png",
    video: "video/anilibria_bot_9406_1.mp4",
    videoUz: "video/ best_poezd0.1.mp4",
  },
  {
    title: "Бесконечный замок",
    titleUz: "Cheksiz qasr",
    image: "foto/Снимок экрана 2026-10-25 в 20.46.10.png",
    video: "video/anilibria_bot_9660_8.mp4",
    videoUz: "video/whatevertheshit.mp4",
  },
];

// ===== Переводы: все слова сайта в одном месте =====
const translations = {
  ru: {
    htmlLang: "ru",
    slogan: "Смотри. Сражайся. Не сдавайся.",
    season1: "Сезон 1",
    season2: "Сезон 2",
    season3: "Сезон 3",
    season4: "Сезон 4",
    specials: "Спешалы",
    episode: "Серия",
    special: "Спешал",
    menu: "Меню",
    language: "Язык",
    prevEpisode: "Прошлая серия",
    nextEpisode: "Следующая серия",
    back15: "Назад на 15 секунд",
    fwd15: "Вперёд на 15 секунд",
    playPause: "Пауза / плей",
    sound: "Звук",
    speed: "Скорость",
    fullscreen: "Полный экран",
    noVideo: "Ваш браузер не поддерживает видео.",
  },
  uz: {
    htmlLang: "uz",
    slogan: "Tomosha qil. Kurash. Taslim bo'lma.",
    season1: "1-fasl",
    season2: "2-fasl",
    season3: "3-fasl",
    season4: "4-fasl",
    specials: "Maxsus qismlar",
    episode: "Qism",
    special: "Maxsus",
    menu: "Menyu",
    language: "Til",
    prevEpisode: "Oldingi qism",
    nextEpisode: "Keyingi qism",
    back15: "15 soniya orqaga",
    fwd15: "15 soniya oldinga",
    playPause: "Pauza / ijro",
    sound: "Ovoz",
    speed: "Tezlik",
    fullscreen: "To'liq ekran",
    noVideo: "Brauzeringiz videoni qo'llab-quvvatlamaydi.",
  },
};

// Флаги рисуются прямо в коде, картинки не нужны
const flags = {
  ru:
    '<svg viewBox="0 0 28 19"><rect width="28" height="19" fill="#fff"/>' +
    '<rect y="6.33" width="28" height="6.34" fill="#1c57a5"/>' +
    '<rect y="12.67" width="28" height="6.33" fill="#d52b1e"/></svg>',
  uz:
    '<svg viewBox="0 0 28 19"><rect width="28" height="19" fill="#fff"/>' +
    '<rect width="28" height="6" fill="#1eb4e6"/>' +
    '<rect y="13" width="28" height="6" fill="#0de335"/>' +
    '<rect y="6" width="28" height="1" fill="#ce1126"/>' +
    '<rect y="12" width="28" height="1" fill="#ce1126"/>' +
    '<circle cx="5" cy="3" r="1.8" fill="#fff"/>' +
    '<circle cx="5.8" cy="3" r="1.6" fill="#1eb4e6"/></svg>',
};

// Текущий язык (запоминается в браузере)
let currentLang = localStorage.getItem("lang") === "uz" ? "uz" : "ru";

function t(key) {
  return translations[currentLang][key];
}

// ===== Сборка списка серий из настроек =====
// Список зависит от языка: на узбекском в сезоне может быть другое
// число серий (countUz). Пересобирается при смене языка.
let episodesData = {};

function buildEpisodes() {
  episodesData = {};

  Object.keys(seasonsConfig).forEach(function (season) {
    const cfg = seasonsConfig[season];
    const total =
      currentLang === "uz" && cfg.countUz ? cfg.countUz : cfg.count;
    episodesData[season] = [];

    for (let n = 1; n <= total; n++) {
      // русское видео
      const video = cfg.videos
        ? cfg.videos[n - 1]
        : cfg.videoTemplate.replace("{n}", n);

      // узбекское видео: из списка, из шаблона или пусто
      let videoUz = "";
      if (cfg.videosUz) {
        videoUz = cfg.videosUz[n - 1] || "";
      } else if (cfg.videoTemplateUz) {
        videoUz = cfg.videoTemplateUz.replace("{n}", n);
      }

      episodesData[season].push({
        title: cfg.titles[n - 1] || "",
        image: cfg.imageTemplate.replace("{n}", n),
        video: video,
        videoUz: videoUz,
      });
    }
  });

  episodesData["specials"] = specialsList;
}

buildEpisodes();

// ===== Элементы страницы =====
const seasonsBar = document.getElementById("seasonsBar");
const seasonTabs = document.querySelectorAll(".season-tab");
const episodesGrid = document.getElementById("episodesGrid");
const watchPage = document.getElementById("watchPage");
const player = document.getElementById("player");
const nowPlaying = document.getElementById("nowPlaying");
const episodesSidebar = document.getElementById("episodesSidebar");
const menuButton = document.getElementById("menuButton");
const logo = document.querySelector(".logo");
const langButton = document.getElementById("langButton");
const langFlagRu = document.getElementById("langFlagRu");
const langFlagUz = document.getElementById("langFlagUz");

// флаги переключателя рисуются один раз
langFlagRu.innerHTML = flags.ru;
langFlagUz.innerHTML = flags.uz;

// Текущий выбранный сезон и открытая серия
let currentSeason = "1";
let openedSeason = null;
let openedIndex = null;

// ===== Подпись «Серия N» =====
function episodeLabel(season, index) {
  if (season === "specials") {
    return t("special");
  }
  return t("episode") + " " + (index + 1);
}

// Название серии на нужном языке
function episodeTitle(episode) {
  if (currentLang === "uz" && episode.titleUz) return episode.titleUz;
  return episode.title;
}

// Какое видео открыть: узбекское, если язык узбекский и файл указан,
// иначе русское
function videoSource(episode) {
  if (currentLang === "uz" && episode.videoUz) return episode.videoUz;
  return episode.video;
}

// ===== Создание одной карточки =====
// Сверху номер серии, ниже отдельной строкой название
function createCard(episode, season, index, isCurrent) {
  const card = document.createElement("article");
  card.className = "episode-card";
  if (isCurrent) {
    card.classList.add("current");
  }

  const title = episodeTitle(episode);
  const titleHtml = title ? '<h3 class="episode-title">' + title + "</h3>" : "";

  card.innerHTML =
    '<img src="' +
    episode.image +
    '" alt="' +
    episodeLabel(season, index) +
    '">' +
    '<div class="episode-info">' +
    '<span class="episode-number">' +
    episodeLabel(season, index) +
    "</span>" +
    titleHtml +
    "</div>";

  card.addEventListener("click", function () {
    openEpisode(season, index);
  });

  return card;
}

// ===== Показ сетки серий выбранного сезона =====
function showSeason(season) {
  currentSeason = season;
  openedSeason = null;
  openedIndex = null;

  seasonTabs.forEach(function (tab) {
    tab.classList.toggle("active", tab.dataset.season === season);
  });

  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  watchPage.classList.add("hidden");
  episodesGrid.classList.remove("hidden");
  player.pause();

  episodesGrid.innerHTML = "";
  episodesData[season].forEach(function (episode, index) {
    episodesGrid.appendChild(createCard(episode, season, index, false));
  });
}

// ===== Заголовок «Серия N: название» над списком =====
function updateNowPlaying() {
  if (openedSeason === null) return;
  const episode = episodesData[openedSeason][openedIndex];
  const label = episodeLabel(openedSeason, openedIndex);
  const title = episodeTitle(episode);
  nowPlaying.textContent = title ? label + ": " + title : label;
}

// ===== Боковой список серий =====
function renderSidebar() {
  if (openedSeason === null) return;
  episodesSidebar.innerHTML = "";
  episodesData[openedSeason].forEach(function (ep, i) {
    episodesSidebar.appendChild(
      createCard(ep, openedSeason, i, i === openedIndex),
    );
  });
}

// ===== Загрузка видео в плеер =====
// keepPosition = true: после смены файла вернуться на ту же секунду
// и продолжить так же, как было (играло или стояло на паузе)
function loadVideo(src, keepPosition) {
  const time = keepPosition ? player.currentTime : 0;
  const wasPlaying = keepPosition ? !player.paused : true;

  player.dataset.src = src;
  player.src = src;
  player.load();

  if (time > 0) {
    player.addEventListener(
      "loadedmetadata",
      function () {
        player.currentTime = time;
      },
      { once: true },
    );
  }

  if (wasPlaying) {
    const p = player.play();
    if (p && p.catch) p.catch(function () {});
  }
}

// ===== Открытие серии в плеере =====
function openEpisode(season, index) {
  const episode = episodesData[season][index];
  openedSeason = season;
  openedIndex = index;

  episodesGrid.classList.add("hidden");
  watchPage.classList.remove("hidden");

  loadVideo(videoSource(episode), false);

  updateNowPlaying();
  renderSidebar();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== Нажатия =====
seasonTabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    showSeason(tab.dataset.season);
  });
});

menuButton.addEventListener("click", function () {
  seasonsBar.classList.toggle("hidden");
});

logo.addEventListener("click", function () {
  showSeason(currentSeason);
});

// ===== Смена языка =====
function applyLanguage() {
  document.documentElement.lang = t("htmlLang");

  // все элементы с data-i18n
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t(el.dataset.i18n);
  });

  // подписи кнопок
  menuButton.setAttribute("aria-label", t("menu"));
  langButton.setAttribute("aria-label", t("language"));

  // переключатель языка: ползунок стоит под текущим языком
  langButton.dataset.lang = currentLang;
  langButton.setAttribute(
    "aria-checked",
    currentLang === "uz" ? "true" : "false",
  );

  // карточки серий и заголовок
  if (openedSeason === null) {
    showSeasonCardsOnly();
  } else {
    updateNowPlaying();
    renderSidebar();

    // если для нового языка видео другое, подменяем его
    // и возвращаемся на ту же секунду
    const episode = episodesData[openedSeason][openedIndex];
    const newSrc = videoSource(episode);
    if (player.dataset.src !== newSrc) {
      loadVideo(newSrc, true);
    }
  }

  // подсказки панели плеера
  if (window.updatePlayerLanguage) window.updatePlayerLanguage();
}

// перерисовать только карточки главной, не трогая плеер
function showSeasonCardsOnly() {
  episodesGrid.innerHTML = "";
  episodesData[currentSeason].forEach(function (episode, index) {
    episodesGrid.appendChild(createCard(episode, currentSeason, index, false));
  });
}

langButton.addEventListener("click", function () {
  currentLang = currentLang === "ru" ? "uz" : "ru";
  localStorage.setItem("lang", currentLang);

  // у нового языка список серий может быть другим
  buildEpisodes();

  // если открытой серии на этом языке нет, возвращаемся к списку сезона
  if (openedSeason !== null && !episodesData[openedSeason][openedIndex]) {
    showSeason(openedSeason);
  }

  applyLanguage();
});

// ===== Своя панель управления плеером =====
(function () {
  const video = player;

  // убираем стандартную панель браузера
  video.removeAttribute("controls");
  video.controls = false;

  // иконки в виде SVG
  const icons = {
    play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
    pause:
      '<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',
    prev: '<svg viewBox="0 0 24 24"><path d="M6 5h2v14H6zM9 12l10 7V5z"/></svg>',
    next: '<svg viewBox="0 0 24 24"><path d="M16 5h2v14h-2zM5 5v14l10-7z"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z"/></svg>',
    fwd: '<svg viewBox="0 0 24 24"><path d="M12 5V1l5 5-5 5V7a6 6 0 1 0 6 6h2a8 8 0 1 1-8-8z"/></svg>',
    volume:
      '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9zM16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14" /></svg>',
    muted:
      '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9zM16 9l5 6M21 9l-5 6" /></svg>',
    full: '<svg viewBox="0 0 24 24"><path d="M4 4h6v2H6v4H4zM14 4h6v6h-2V6h-4zM4 14h2v4h4v2H4zM18 14h2v6h-6v-2h4z"/></svg>',
  };

  // строим панель
  const controls = document.createElement("div");
  controls.className = "kc";
  controls.innerHTML =
    '<div class="kc-progress-row">' +
    '<span class="kc-time kc-current">0:00</span>' +
    '<div class="kc-bar"><div class="kc-buffer"></div><div class="kc-fill"></div><div class="kc-knob"></div></div>' +
    '<span class="kc-time kc-total">0:00</span>' +
    "</div>" +
    '<div class="kc-buttons">' +
    '<div class="kc-left">' +
    '<button class="kc-btn" data-act="prev">' + icons.prev + "</button>" +
    '<button class="kc-btn" data-act="back">' + icons.back + "<i>15</i></button>" +
    '<button class="kc-btn kc-main" data-act="toggle">' + icons.play + "</button>" +
    '<button class="kc-btn" data-act="fwd">' + icons.fwd + "<i>15</i></button>" +
    '<button class="kc-btn" data-act="next">' + icons.next + "</button>" +
    '<div class="kc-volume">' +
    '<button class="kc-btn" data-act="mute">' + icons.volume + "</button>" +
    '<input class="kc-volume-range" type="range" min="0" max="1" step="0.02" value="1">' +
    "</div>" +
    "</div>" +
    '<div class="kc-right">' +
    '<div class="kc-speed-wrap">' +
    '<button class="kc-btn kc-speed" data-act="speed">1x</button>' +
    '<div class="kc-speed-menu">' +
    '<button data-rate="0.5">0.5x</button>' +
    '<button data-rate="0.75">0.75x</button>' +
    '<button data-rate="1" class="on">1x</button>' +
    '<button data-rate="1.25">1.25x</button>' +
    '<button data-rate="1.5">1.5x</button>' +
    '<button data-rate="2">2x</button>' +
    "</div>" +
    "</div>" +
    '<button class="kc-btn" data-act="full">' + icons.full + "</button>" +
    "</div>" +
    "</div>";

  // подсказка по центру (громкость, перемотка)
  const toast = document.createElement("div");
  toast.className = "kc-toast";

  // оборачиваем видео, чтобы панель лежала поверх него;
  // именно эта обёртка открывается на весь экран, поэтому панель остаётся
  const wrap = document.createElement("div");
  wrap.className = "kc-wrap";
  video.parentNode.insertBefore(wrap, video);
  wrap.appendChild(video);
  wrap.appendChild(toast);
  wrap.appendChild(controls);

  const bar = controls.querySelector(".kc-bar");
  const fill = controls.querySelector(".kc-fill");
  const buffer = controls.querySelector(".kc-buffer");
  const knob = controls.querySelector(".kc-knob");
  const curEl = controls.querySelector(".kc-current");
  const totEl = controls.querySelector(".kc-total");
  const toggleBtn = controls.querySelector('[data-act="toggle"]');
  const muteBtn = controls.querySelector('[data-act="mute"]');
  const volRange = controls.querySelector(".kc-volume-range");
  const speedBtn = controls.querySelector(".kc-speed");
  const speedMenu = controls.querySelector(".kc-speed-menu");

  // подсказки к кнопкам на текущем языке
  window.updatePlayerLanguage = function () {
    const tips = {
      prev: t("prevEpisode") + " (F7)",
      back: t("back15") + " (J)",
      toggle: t("playPause") + " (Space, K, F8)",
      fwd: t("fwd15") + " (L)",
      next: t("nextEpisode") + " (F9)",
      mute: t("sound") + " (M)",
      speed: t("speed"),
      full: t("fullscreen") + " (F)",
    };
    Object.keys(tips).forEach(function (act) {
      const b = controls.querySelector('[data-act="' + act + '"]');
      if (b) b.title = tips[act];
    });
    video.textContent = t("noVideo");
  };

  // время в виде 12:05 или 1:02:05
  function fmt(s) {
    if (!isFinite(s)) return "0:00";
    s = Math.floor(s);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = String(s % 60).padStart(2, "0");
    return h > 0
      ? h + ":" + String(m).padStart(2, "0") + ":" + sec
      : m + ":" + sec;
  }

  // короткая подсказка по центру экрана
  let toastTimer;
  function showToast(text) {
    toast.textContent = text;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 900);
  }

  // перейти на соседнюю серию: нажимаем на карточку в правом списке
  function goEpisode(step) {
    const cards = Array.from(
      document.querySelectorAll("#episodesSidebar .episode-card"),
    );
    const i = cards.findIndex(function (c) {
      return c.classList.contains("current");
    });
    const target = cards[i + step];
    if (target) target.click();
  }

  function togglePlay() {
    if (video.paused) video.play();
    else video.pause();
  }

  // полный экран для обёртки: видео и панель вместе
  // на iPhone обёртка на весь экран не открывается, там только само видео
  function toggleFull() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    } else if (wrap.requestFullscreen) {
      wrap.requestFullscreen();
    } else if (wrap.webkitRequestFullscreen) {
      wrap.webkitRequestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }
  }

  function skip(sec) {
    video.currentTime = Math.max(
      0,
      Math.min(video.duration || 0, video.currentTime + sec),
    );
  }

  function changeVolume(delta) {
    video.muted = false;
    video.volume = Math.max(0, Math.min(1, video.volume + delta));
    showToast("🔊 " + Math.round(video.volume * 100) + "%");
  }

  // обновление полосы и времени
  function update() {
    const d = video.duration || 0;
    const p = d ? (video.currentTime / d) * 100 : 0;
    fill.style.width = p + "%";
    knob.style.left = p + "%";
    curEl.textContent = fmt(video.currentTime);
    totEl.textContent = fmt(d);
    if (d && video.buffered.length) {
      buffer.style.width =
        (video.buffered.end(video.buffered.length - 1) / d) * 100 + "%";
    }
  }

  function updateIcons() {
    toggleBtn.innerHTML = video.paused ? icons.play : icons.pause;
    muteBtn.innerHTML =
      video.muted || video.volume === 0 ? icons.muted : icons.volume;
  }

  video.addEventListener("timeupdate", update);
  video.addEventListener("loadedmetadata", update);
  video.addEventListener("progress", update);
  video.addEventListener("play", updateIcons);
  video.addEventListener("pause", updateIcons);
  video.addEventListener("volumechange", function () {
    volRange.value = video.muted ? 0 : video.volume;
    updateIcons();
  });

  // перемотка по полосе мышью или пальцем (и перетаскиванием)
  let dragging = false;
  function seekFromEvent(e) {
    const r = bar.getBoundingClientRect();
    const x = Math.max(0, Math.min(r.width, e.clientX - r.left));
    video.currentTime = (x / r.width) * (video.duration || 0);
  }
  bar.addEventListener("pointerdown", function (e) {
    dragging = true;
    if (bar.setPointerCapture) bar.setPointerCapture(e.pointerId);
    seekFromEvent(e);
  });
  bar.addEventListener("pointermove", function (e) {
    if (dragging) seekFromEvent(e);
  });
  function stopDrag() {
    dragging = false;
  }
  bar.addEventListener("pointerup", stopDrag);
  bar.addEventListener("pointercancel", stopDrag);

  // громкость ползунком
  volRange.addEventListener("input", function () {
    video.muted = false;
    video.volume = parseFloat(volRange.value);
  });

  // кнопки панели
  controls.addEventListener("click", function (e) {
    const rateBtn = e.target.closest("[data-rate]");
    if (rateBtn) {
      const rate = parseFloat(rateBtn.dataset.rate);
      // defaultPlaybackRate нужен, чтобы скорость не сбрасывалась
      // при смене серии или языка
      video.defaultPlaybackRate = rate;
      video.playbackRate = rate;
      speedBtn.textContent = rateBtn.textContent;
      speedMenu.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("on", b === rateBtn);
      });
      speedMenu.classList.remove("open");
      return;
    }
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const act = btn.dataset.act;
    if (act === "toggle") togglePlay();
    if (act === "back") skip(-15);
    if (act === "fwd") skip(15);
    if (act === "prev") goEpisode(-1);
    if (act === "next") goEpisode(1);
    if (act === "mute") video.muted = !video.muted;
    if (act === "full") toggleFull();
    if (act === "speed") speedMenu.classList.toggle("open");
  });

  // клик по видео = пауза и плей, двойной клик = полный экран
  video.addEventListener("click", togglePlay);
  video.addEventListener("dblclick", toggleFull);

  // панель прячется, когда мышь или палец долго не двигаются
  let hideTimer;
  function showControls() {
    wrap.classList.add("kc-active");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      if (!video.paused) {
        wrap.classList.remove("kc-active");
        speedMenu.classList.remove("open");
      }
    }, 2500);
  }
  wrap.addEventListener("mousemove", showControls);
  wrap.addEventListener("touchstart", showControls, { passive: true });
  wrap.addEventListener("mouseleave", function () {
    if (!video.paused) wrap.classList.remove("kc-active");
  });
  video.addEventListener("pause", function () {
    wrap.classList.add("kc-active");
  });

  // ===== Клавиши =====
  // F полный экран, пробел, K и F8 пауза и плей, J и L перемотка 10 секунд,
  // стрелки влево и вправо перемотка 10 секунд,
  // стрелки вверх и вниз громкость, F7 и F9 соседние серии, M звук
  document.addEventListener("keydown", function (e) {
    // не мешаем, если человек печатает в поле ввода
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" && e.target.type !== "range") return;
    if (tag === "textarea" || tag === "select") return;
    // не трогаем сочетания вроде Cmd+F
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    // работают только на странице просмотра
    if (watchPage.classList.contains("hidden")) return;

    // сбрасываем фокус с ползунка громкости, чтобы стрелки не двигали его сами
    if (tag === "input") e.target.blur();
    // после клика по кнопке пробел не должен нажимать её второй раз
    if (e.code === "Space" && tag === "button") e.target.blur();

    // e.code не зависит от раскладки: работает и на русской
    switch (e.code) {
      case "KeyF":
        e.preventDefault();
        toggleFull();
        break;
      case "Space":
      case "KeyK":
      case "F8":
      case "MediaPlayPause":
        e.preventDefault();
        togglePlay();
        break;
      case "KeyJ":
      case "ArrowLeft":
        e.preventDefault();
        skip(-10);
        showToast("⏪ 10");
        break;
      case "KeyL":
      case "ArrowRight":
        e.preventDefault();
        skip(10);
        showToast("10 ⏩");
        break;
      case "ArrowUp":
        e.preventDefault();
        changeVolume(0.05);
        break;
      case "ArrowDown":
        e.preventDefault();
        changeVolume(-0.05);
        break;
      case "KeyM":
        e.preventDefault();
        video.muted = !video.muted;
        showToast(
          video.muted ? "🔇" : "🔊 " + Math.round(video.volume * 100) + "%",
        );
        break;
      case "F7":
      case "MediaTrackPrevious":
        e.preventDefault();
        goEpisode(-1);
        break;
      case "F9":
      case "MediaTrackNext":
        e.preventDefault();
        goEpisode(1);
        break;
    }
  });

  // системные медиаклавиши, если браузер их отдаёт
  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("previoustrack", function () {
      goEpisode(-1);
    });
    navigator.mediaSession.setActionHandler("nexttrack", function () {
      goEpisode(1);
    });
  }

  updateIcons();
  update();
  wrap.classList.add("kc-active");
})();

// ===== Запуск =====
showSeason("1");
applyLanguage();