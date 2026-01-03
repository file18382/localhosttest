//===============================
// Animation 1: FINGERPRINT 0 → 59
//===============================
const animationFP_time = {
    coloros_1: 20,
    coloros_2: 20,
    begonia: 10,
    fountain: 30,
    fusion: 30,
    gala: 30,
    phantom: 30,
    round: 30,
    smog: 30,
};
let ani_fingerprint_type = "coloros_2";
let ani_fadein_fingerprint_type = "coloros_2"; //"enter11/normal" "enter11/normal_reverse" "enter12/normal" "enter12/normal_reverse" "coloros_1" "coloros_2"
let ani_fadeout_fingerprint_type = "coloros_2";
const fingerBtnAnim = document.getElementById("ani_fingerprint");

// preload tất cả ảnh vào RAM trước khi chạy animation
let KGD_CACHE = {
    fingerprint: [],
    fadein: [],
    fadeout: [],
};

// preload
(function () {
    function preload(path, prefix, last, cacheArray) {
        for (let i = 0; i <= last; i++) {
            const img = new Image();
            img.src = `${path}/${prefix}_${i}.png`;
            cacheArray.push(img); // lưu reference
        }
    }

    preload(
        `/originData/animationFingerprint/${ani_fingerprint_type}`,
        "kgd_fingerprint_element",
        60,
        KGD_CACHE.fingerprint
    );
    preload(
        `/originData/animationFingerprint/${ani_fadein_fingerprint_type}`,
        "kgd_osfingerprint_fadein",
        24,
        KGD_CACHE.fadein
    );
    preload(
        `/originData/animationFingerprint/${ani_fadeout_fingerprint_type}`,
        "kgd_osfingerprint_fadeout",
        23,
        KGD_CACHE.fadeout
    );
})();
function unloadAllPreload() {
    KGD_CACHE.fingerprint.length = 0;
    KGD_CACHE.fadein.length = 0;
    KGD_CACHE.fadeout.length = 0;
    console.log("All preloaded images are now released for garbage collection.");
}

function run_fingerprint_animation() {
    let frame = 0;
    const last = 60;

    if (fingerBtnAnim._timer) clearTimeout(fingerBtnAnim._timer);

    function next() {
        fingerBtnAnim.style.backgroundImage = `url("https://quandz24-ui.github.io/OriginWEB/originData/animationFingerprint/${ani_fingerprint_type}/kgd_fingerprint_element_${frame}.png")`;
        if (frame < last) {
            frame++;
            fingerBtnAnim._timer = setTimeout(next, animationFP_time[ani_fingerprint_type]);
        }
    }
    clearTimeout(fingerBtnAnim._timer);
    next();
}
//===============================
// Animation 2: FADE-IN 0 → 24
//===============================
function run_fadein_animation() {
    const el = document.getElementById("fingerBtn2");
    const el2 = document.getElementById("fingerBtn");
    let frame = 0;
    const last = 24;

    if (el._timer) clearTimeout(el._timer);

    function next() {
        el.style.backgroundImage =
            el2.style.backgroundImage = `url("https://quandz24-ui.github.io/OriginWEB/originData/animationFingerprint/${ani_fadein_fingerprint_type}/kgd_osfingerprint_fadein_${frame}.png")`;

        if (frame < last) {
            frame++;
            el._timer = setTimeout(next, 30);
        }
    }

    clearTimeout(el._timer);
    next();
}

//===============================
// Animation 3: FADE-OUT 0 → 23
//===============================
function run_fadeout_animation() {
    const el = document.getElementById("fingerBtn2");
    const el2 = document.getElementById("fingerBtn");
    let frame = 0;
    const last = 23;

    if (el._timer) clearTimeout(el._timer);

    function next() {
        el.style.backgroundImage =
            el2.style.backgroundImage = `url("https://quandz24-ui.github.io/OriginWEB/originData/animationFingerprint/${ani_fadeout_fingerprint_type}/kgd_osfingerprint_fadeout_${frame}.png")`;

        if (frame < last) {
            frame++;
            el._timer = setTimeout(next, 30);
        }
    }

    clearTimeout(el._timer);
    next();
}
