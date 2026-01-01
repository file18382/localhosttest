const AllAnimUnlock = {
    anim1: {
        // OriginOS, iOS
        v11: "scale(2) translateX(-105px) translateY(-120px)",
        v12: "scale(2) translateX(-35px) translateY(-120px)",
        v13: "scale(2) translateX(35px) translateY(-120px)",
        v14: "scale(2) translateX(105px) translateY(-120px)", //4

        v21: "scale(2) translateX(-105px) translateY(-40px)",
        v22: "scale(2) translateX(-35px) translateY(-40px)",
        v23: "scale(2) translateX(35px) translateY(-40px)",
        v24: "scale(2) translateX(105px) translateY(-40px)", //8

        v31: "scale(2) translateX(-105px) translateY(40px)",
        v32: "scale(2) translateX(-35px) translateY(40px)",
        v33: "scale(2) translateX(35px) translateY(40px)",
        v34: "scale(2) translateX(105px) translateY(40px)", //12

        v41: "scale(2) translateX(-105px) translateY(120px)",
        v42: "scale(2) translateX(-35px) translateY(120px)",
        v43: "scale(2) translateX(35px) translateY(120px)",
        v44: "scale(2) translateX(105px) translateY(120px)", //16

        v51: "scale(2) translateX(-105px) translateY(200px)",
        v52: "scale(2) translateX(-35px) translateY(200px)",
        v53: "scale(2) translateX(35px) translateY(200px)",
        v54: "scale(2) translateX(105px) translateY(200px)", //20

        v61: "scale(2) translateX(-105px) translateY(280px)",
        v62: "scale(2) translateX(-35px) translateY(280px)",
        v63: "scale(2) translateX(35px) translateY(280px)",
        v64: "scale(2) translateX(105px) translateY(280px)", //20
    },
    anim2: {
        // harmonyos next
        v11: "scale(0.5) translateX(105px) translateY(120px)",
        v12: "scale(0.5) translateX(35px) translateY(120px)",
        v13: "scale(0.5) translateX(-35px) translateY(120px)",
        v14: "scale(0.5) translateX(-105px) translateY(120px)", //4

        v21: "scale(0.5) translateX(105px) translateY(40px)",
        v22: "scale(0.5) translateX(35px) translateY(40px)",
        v23: "scale(0.5) translateX(-35px) translateY(40px)",
        v24: "scale(0.5) translateX(-105px) translateY(40px)", //8

        v31: "scale(0.5) translateX(105px) translateY(-40px)",
        v32: "scale(0.5) translateX(35px) translateY(-40px)",
        v33: "scale(0.5) translateX(-35px) translateY(-40px)",
        v34: "scale(0.5) translateX(-105px) translateY(-40px)", //12

        v41: "scale(0.5) translateX(105px) translateY(-120px)",
        v42: "scale(0.5) translateX(35px) translateY(-120px)",
        v43: "scale(0.5) translateX(-35px) translateY(-120px)",
        v44: "scale(0.5) translateX(-105px) translateY(-120px)", //16

        v51: "scale(0.5) translateX(105px) translateY(-200px)",
        v52: "scale(0.5) translateX(35px) translateY(-200px)",
        v53: "scale(0.5) translateX(-35px) translateY(-200px)",
        v54: "scale(0.5) translateX(-105px) translateY(-200px)", //20

        v61: "scale(0.5) translateX(105px) translateY(-280px)",
        v62: "scale(0.5) translateX(35px) translateY(-280px)",
        v63: "scale(0.5) translateX(-35px) translateY(-280px)",
        v64: "scale(0.5) translateX(-105px) translateY(-280px)", //20
    },
    anim3: {
        // coloros 15
        v11: "scale(1.8) translateX(-105px) translateY(-120px)",
        v12: "scale(2) translateX(-35px) translateY(-120px)",
        v13: "scale(2) translateX(35px) translateY(-120px)",
        v14: "scale(1.8) translateX(105px) translateY(-120px)", //4

        v21: "scale(2) translateX(-105px) translateY(-40px)",
        v22: "scale(2.4) translateX(-35px) translateY(-40px)",
        v23: "scale(2.4) translateX(35px) translateY(-40px)",
        v24: "scale(2) translateX(105px) translateY(-40px)", //8

        v31: "scale(2) translateX(-105px) translateY(40px)",
        v32: "scale(2.4) translateX(-35px) translateY(40px)",
        v33: "scale(2.4) translateX(35px) translateY(40px)",
        v34: "scale(2) translateX(105px) translateY(40px)", //12

        v41: "scale(1.8) translateX(-105px) translateY(120px)",
        v42: "scale(2) translateX(-35px) translateY(120px)",
        v43: "scale(2) translateX(35px) translateY(120px)",
        v44: "scale(1.8) translateX(105px) translateY(120px)", //16

        v51: "scale(1.8) translateX(-105px) translateY(200px)",
        v52: "scale(1.8) translateX(-35px) translateY(200px)",
        v53: "scale(1.8) translateX(35px) translateY(200px)",
        v54: "scale(1.8) translateX(105px) translateY(200px)", //20

        v61: "scale(1.8) translateX(-105px) translateY(280px)",
        v62: "scale(1.8) translateX(-35px) translateY(280px)",
        v63: "scale(1.8) translateX(35px) translateY(280px)",
        v64: "scale(1.8) translateX(105px) translateY(280px)", //20
    },
};
const AllAnimUnlockForFavApp = {
    anim1: {
        // HyperOS, iOS
        favApp: "scale(2) translateY(400px)",
    },
    anim2: {
        // HarmonyOS next
        favApp: "scale(0.5) translateY(-400px)",
    },
    anim3: {
        // ColorOS 15, OriginOS
        favApp: "translateY(200px)",
    },
};

let transformUnlockAnim = AllAnimUnlock.anim3;
let transformUnlockAnimForFavApp = AllAnimUnlockForFavApp.anim3;
let durationForUnlockAnim = 700 * speed;
let easingForUnlockAnim = "cubic-bezier(0.4, 1.35, 0.3, 1)";
let delayForUnlockAnim = 20 * speed;

function changeUnlockAnimStyle(style) {
    if (style === "ColorOS") {
        transformUnlockAnim = AllAnimUnlock.anim3;
        transformUnlockAnimForFavApp = AllAnimUnlockForFavApp.anim3;
        durationForUnlockAnim = 640 * speed;
        easingForUnlockAnim = "cubic-bezier(.26,1.25,.45,1)";
        delayForUnlockAnim = 17 * speed;
    }
    if (style === "HyperOS") {
        transformUnlockAnim = AllAnimUnlock.anim1;
        transformUnlockAnimForFavApp = AllAnimUnlockForFavApp.anim1;
        durationForUnlockAnim = 700 * speed;
        easingForUnlockAnim = "cubic-bezier(.4,1.3,.29,1)";
        delayForUnlockAnim = 25 * speed;
    }
    if (style === "OriginOS") {
        transformUnlockAnim = AllAnimUnlock.anim1;
        transformUnlockAnimForFavApp = AllAnimUnlockForFavApp.anim3;
        durationForUnlockAnim = 600 * speed;
        easingForUnlockAnim = "cubic-bezier(.35,1.29,.33,1)";
        delayForUnlockAnim = 25 * speed;
    }
    if (style === "HarmonyOS") {
        transformUnlockAnim = AllAnimUnlock.anim2;
        transformUnlockAnimForFavApp = AllAnimUnlockForFavApp.anim2;
        durationForUnlockAnim = 600 * speed;
        easingForUnlockAnim = "cubic-bezier(0.4, 1.2, 0.3, 1)";
        delayForUnlockAnim = 35 * speed;
    }
}

changeUnlockAnimStyle("OriginOS");

const groupUnlockAnim = [
    {ids: ["v22", "v23", "v32", "v33"]},
    {ids: ["v21", "v24", "v31", "v34"]},
    {ids: ["v12", "v13", "v42", "v43"]},
    {ids: ["v11", "v14", "v41", "v44"]},
    {ids: ["v52", "v53"]},
    {ids: ["v51", "v54"]},
    {ids: ["v62", "v63"]},
    {ids: ["v61", "v64"]},
];

function lockAnim() {
    currentAppScreen.querySelectorAll(".iconApp").forEach((icon) => {
        const [row, col] = icon.style.gridArea.split("/").map((v) => parseInt(v));
        icon.style.transition = "all 0s";
        icon.style.transform = transformUnlockAnim[`v${row}${col}`];
        icon.style.opacity = "1";
        icon.style.zIndex = "0";
    });
    favApp.style.transition = "all 0s";
    favApp.style.transform = "scale(0.5) translateY(-400px)";
    favApp.style.opacity = "1";
    favApp.style.zIndex = "0";
}

function hiddenAllAppAndIcon() {
    document.querySelectorAll(".iconApp").forEach((icon) => {
        icon.style.transition = "all 0s";
        icon.style.opacity = "0";
    });
    favApp.style.transition = "all 0s";
    favApp.style.opacity = "0";
}

function showAllAppAndIcon() {
    document.querySelectorAll(".iconApp").forEach((icon) => {
        icon.style.transition = "";
        icon.style.opacity = "1";
    });
    favApp.style.transition = "";
    favApp.style.opacity = "1";
}

let timeOutHiddenAppForUnlockAnim = null;
let lastUnlockAnim = null;

async function unlockAnimWA(currentAppScreenTmp = currentAppScreen) {
    const wallpaperLockStyle = getComputedStyle(wallpaperLock);
    wallpaperHome.animate(
        [
            {
                background: "var(--bg-wallpaperLock) no-repeat center/cover",
                translate: wallpaperLockStyle.translate,
                borderRadius: wallpaperLockStyle.borderRadius,
                width: wallpaperLockStyle.width,
                height: wallpaperLockStyle.height,
                bottom: wallpaperLockStyle.bottom,
            },
            {
                background: "var(--bg-wallpaperHome) no-repeat center/cover",
                translate: "",
                borderRadius: "var(--bg-borderRadiusPhone)",
                width: "",
                height: "",
                bottom: "",
            },
        ],
        {
            duration: 300 * speed,
            easing: "ease",
        }
    );

    if (currentOpeningElApp) {
        allAppScreen
        .animate([{scale: 0.9}, {scale: 1}], {
            duration: 400 * speed,
            easing: "ease",
            composite: "replace",
        })
        .effect.updateTiming({fill: "backwards"});
        return;
    }

    groupUnlockAnim.forEach((group, groupIndex) => {
        const delay = groupIndex * delayForUnlockAnim;

        group.ids.forEach((id) => {
            const numericPart = id.slice(1);
            const [row, col] = numericPart.split("");
            const icon = currentAppScreenTmp.querySelector(`[style*="grid-area: ${row} / ${col}"]`);
            if (!icon) return;

            icon.style.pointerEvents = "none";
            icon.animate(
                [
                    {
                        opacity: 0,
                        transform: transformUnlockAnim[`v${row}${col}`],
                        zIndex: 0,
                    },
                    {opacity: 1},
                    {transform: "none", zIndex: 1},
                ],
                {
                    duration: durationForUnlockAnim,
                    delay,
                    easing: easingForUnlockAnim,
                    composite: "replace",
                }
            ).effect.updateTiming({fill: "backwards"});
        });
    });

    // favApp
    const delay = (groupUnlockAnim.length - 1) * delayForUnlockAnim;

    Object.entries(transformUnlockAnimForFavApp).forEach(([key, value]) => {
        const el = document.getElementById(key);
        if (!el) return;

        el.animate([{opacity: 0, transform: value, zIndex: 0}, {opacity: 1}, {transform: "none", zIndex: 1}], {
            duration: durationForUnlockAnim,
            delay,
            easing: easingForUnlockAnim,
            composite: "replace",
        }).effect.updateTiming({fill: "backwards"});
    });

    lastUnlockAnim = document.getElementById("favApp").getAnimations()[
        document.getElementById("favApp").getAnimations().length - 1
    ];
    if (lastUnlockAnim) {
        await lastUnlockAnim.finished;

        if (lastUnlockAnim && lastUnlockAnim.playState !== "finished") {
            return;
        }

        updateAppPosNoRemove();
        document.querySelectorAll(".iconApp").forEach((icon) => {
            icon.style.pointerEvents = "";
        });
    }
}

// lock

document.getElementById("powerBtn").addEventListener("click", powerBtnEvent);

let isOn = true;
let isLock = false;

function powerBtnEvent() {
    if (!isOn) {
        powerOn();
    } else {
        powerOff();
        if (!isLock) showLockScreen();
    }
    hideAllAlerts();
    closeControlsCenter();
}

const fingerBtn = document.getElementById("fingerBtn");
const phoneFrame = document.getElementById("frame");

const wallpaperLockPre = document.querySelector(".imageForWallpaperLock.preview");
const wallpaperLockColorPre = wallpaperLockPre.closest(".wallpaper");

const wallpaperLockColor = document.getElementById("wallpaperLock");
const wallpaperLock = document.getElementById("imageForWallpaperLock");
const bottomBtn = document.querySelector(".bottomBtn");
const statusBar = document.getElementById("statusBar");
const lockContent = document.querySelector("#lockContent");
const lockContentDiv = document.querySelector("#lockContent div");

let originColorWallpaperLock = "#54126eff",
    darkerColorWallpaperLock = "#925252ff";

let allWallpaperOffStyle = {
    0: {
        wallpaperLock: `
        width: calc(0.4px * var(--bg-widthPhone));
        height: calc(0.4px * var(--bg-widthPhone));
        translate: 0 calc((1px * var(--bg-widthPhone) - 0.4px * var(--bg-widthPhone)) / 2);
        border-radius: 0px;
        bottom: calc(100% - calc(0.4px * var(--bg-widthPhone)));
        `,
        bottomBtn: `opacity: 0;`,
        statusBar: `opacity: 0;`,
        lockContent: `translate: 0 calc((1px * var(--bg-widthPhone) - 0.5px * var(--bg-widthPhone))); transform: scale(0.9);`,
    },
    1: {
        wallpaperLock: `
        height: calc(100% - 300px);
        width: calc(100% - 50px);
        translate: 0  00%;
        border-radius: calc(0.06px * var(--bg-widthPhone));
        scale: 0.95;
        bottom: 50px
        `,
        bottomBtn: ``,
        statusBar: ``,
        lockContent: ``,
    },
    2: {
        wallpaperLock: `bottom: 0px; scale: 1.1; opacity: 0.8;`,
        bottomBtn: ``,
        statusBar: ``,
        lockContent: ``,
    },
};

let currentWallpaperOffStyle = allWallpaperOffStyle[1];

function wallpaperOffStyle() {
    wallpaperLock.style.cssText = currentWallpaperOffStyle[`wallpaperLock`];
    wallpaperLockColor.style.cssText = `background: linear-gradient( #000000ff);`;
    bottomBtn.style.cssText = currentWallpaperOffStyle[`bottomBtn`];
    statusBar.style.cssText = currentWallpaperOffStyle[`statusBar`];
    lockContent.style.cssText = currentWallpaperOffStyle[`lockContent`];
}
let allWallpaperOnStyle = {
    1: {
        wallpaperLock: `
        height: calc(100% - 300px);
        width: calc(100% - 50px);
        translate: 0  00%;
        border-radius: calc(0.06px * var(--bg-widthPhone));
        bottom: 50px
        `,
        bottomBtn: ``,
        statusBar: ``,
        lockContent: ``,
    },
    2: {
        wallpaperLock: `bottom: 0px`,
        bottomBtn: ``,
        statusBar: ``,
        lockContent: ``,
    },
};

let currentWallpaperOnStyle = allWallpaperOnStyle[1];

wallpaperLockPre.style.cssText = currentWallpaperOnStyle[`wallpaperLock`];

function wallpaperOnStyle() {
    wallpaperLock.style.cssText = currentWallpaperOnStyle[`wallpaperLock`];
    wallpaperLockColor.style.cssText = `background: linear-gradient( ${darkerColorWallpaperLock}, ${originColorWallpaperLock});`;
    bottomBtn.style.cssText = currentWallpaperOnStyle[`bottomBtn`];
    statusBar.style.cssText = currentWallpaperOnStyle[`statusBar`];
    lockContent.style.cssText = currentWallpaperOnStyle[`lockContent`];
}

let doubleTapOnOff = 1;
function powerOff() {
    isOn = false;
    phone.classList.add("off");

    wallpaperOffStyle();

    hidePasswordScreen();

    // event listener
    if (doubleTapOnOff) lockScreen.addEventListener("click", powerOn2TapLockScreen);
    lockScreen.removeEventListener("click", powerOff2TapLockScreen);

    // notif
    //removeScroll(document.querySelector(".stackWrapper"), document.querySelector(".stackContainer"));
    //stackWrapper.style.display = "none";
    //notifBtn.toggleClick = 1;
    //notifBtn.classList.remove("hidden");
}

function powerOn() {
    isOn = true;
    phone.classList.remove("off");

    wallpaperOnStyle();

    // event listener
    if (doubleTapOnOff) lockScreen.addEventListener("click", powerOff2TapLockScreen);
    lockScreen.removeEventListener("click", powerOn2TapLockScreen);
}

const lockScreen = document.getElementById("lockScreen");
const statusClock = document.getElementById("statusClock");
const networkName = document.getElementById("networkName");

function fingerBtnPointerDown(e) {
    hiddenLockScreen();
    run_fingerprint_animation();
    fingerBtnAnim.style.opacity = 1;
    e.preventDefault();
}
function fingerBtnPointerUp() {
    fingerBtnAnim.style.opacity = 0;
}

function showLockScreen() {
    fingerBtn.addEventListener("pointerdown", fingerBtnPointerDown);

    allAppScreen.classList.add("hidden");
    lockScreen.style.display = "flex";
    allAppScreen.style.pointerEvents = "none";

    statusClock.style.display = "none";
    networkName.style.display = "flex";

    isLock = true;

    //containerNotif.innerHTML = "";

    // event listener
    lockScreen.addEventListener("pointerdown", pointerdown_scrollLockScreenToUnlock);
    window.addEventListener("pointermove", pointermove_scrollLockScreenToUnlock);
    window.addEventListener("pointerup", pointerup_scrollLockScreenToUnlock);
    run_fadein_animation();

    containerNotif.style.display = "none";

    islands.classList.add("Ihidden");
}

function hiddenLockScreen() {
    fingerBtn.removeEventListener("pointerdown", hiddenLockScreen);

    allAppScreen.classList.remove("hidden");
    allAppScreen.style.pointerEvents = lockScreen.style.display = "";
    unlockAnimWA();

    statusClock.style.display = networkName.style.display = "";

    isLock = false;
    if (!isOn) {
        powerOn();
        isOn = true;
    }

    hidePasswordScreen();
    //removeScroll(document.querySelector(".stackWrapper"), document.querySelector(".stackContainer"));

    // event listener
    lockScreen.removeEventListener("pointerdown", pointerdown_scrollLockScreenToUnlock);
    window.removeEventListener("pointermove", pointermove_scrollLockScreenToUnlock);
    window.removeEventListener("pointerup", pointerup_scrollLockScreenToUnlock);

    containerNotif.style.display = "";

    islands.classList.remove("Ihidden");
}

// nhấn đúp -> sáng/tắt màn
let powerOn2TapLockScreenClickTime = 0;
function powerOn2TapLockScreen() {
    const currentTime = Date.now();
    const tapInterval = currentTime - powerOn2TapLockScreenClickTime;

    if (tapInterval < 400 && tapInterval > 0) {
        powerOn();
    }

    powerOn2TapLockScreenClickTime = currentTime;
}
let powerOff2TapLockScreenClickTime = 0;
function powerOff2TapLockScreen(e) {
    if (passwordScreen.classList.contains("open") || e.target.closest(".stackContainer")) return;
    const currentTime = Date.now();
    const tapInterval = currentTime - powerOff2TapLockScreenClickTime;

    if (tapInterval < 400 && tapInterval > 0) {
        powerOff();
    }

    powerOff2TapLockScreenClickTime = currentTime;
}

// scroll lockScreen on  up to hiddenLockScreen()
const scaleForOff = document.getElementById("scaleForOff");

let startY_lock = 0;
let currentY_lock = 0;
let lastY_lock = 0;
let lastTime_lock = 0;
let velocity_lock = 0;
let isDragging_lock = false;

function pointerdown_scrollLockScreenToUnlock(e) {
    if (!isOn || isOpened_pw || e.target.closest(".stackContainer")) return;
    startY_lock = e.clientY;
    currentY_lock = startY_lock;
    lastY_lock = startY_lock;
    lastTime_lock = Date.now();
    velocity_lock = 0;
    isDragging_lock = true;
    scaleForOff.style.transition = "transform 0.1s";
    e.preventDefault();
}

function pointermove_scrollLockScreenToUnlock(e) {
    if (!isDragging_lock) return;

    currentY_lock = e.clientY;
    let now = Date.now();

    // Tính vận tốc tại 100ms cuối
    let dt = now - lastTime_lock;
    if (dt > 0) {
        velocity_lock = (currentY_lock - lastY_lock) / dt; // px/ms
        lastY_lock = currentY_lock;
        lastTime_lock = now;
    }

    // Giới hạn chỉ vuốt lên (deltaY âm)
    let deltaY = currentY_lock - startY_lock;
    if (deltaY > 0) deltaY = 0;

    let scaleValue = 1 + deltaY / 2000;
    if (scaleValue < 0.9) scaleValue = 0.9;

    scaleForOff.style.transform = `scale(${scaleValue})`;
    e.preventDefault();
}

function pointerup_scrollLockScreenToUnlock(e) {
    if (!isDragging_lock) return;
    isDragging_lock = false;
    scaleForOff.style.transition = "";

    let deltaY = currentY_lock - startY_lock;

    // velocity_lock âm nghĩa là vuốt lên, ta lấy trị tuyệt đối để so sánh tốc độ
    let speed = Math.abs(velocity_lock);

    // Điều kiện: đủ cao (vuốt lên > 80px) và đủ nhanh (trên 0.5 px/ms)
    if (deltaY < -80 && speed > 0.5) {
        scaleForOff.style.transform = "";
        showPasswordScreen(hiddenLockScreen);
    } else {
        scaleForOff.style.transform = "";
    }
}

// ==== notif btn ====
//const notifBtn = document.querySelector(".notifBtn");
//notifBtn.toggleClick = 0;
//notifBtn.clickEvent = function (e) {
//    if (notifBtn.toggleClick) {
//        addScrollScript(document.querySelector(".stackWrapper"), document.querySelector(".stackContainer"), (y) => {
//            updateStack(containerLockNotif);
//            if (y < -60) lockContentDiv.style.transform = `translate(0px, ${y + 60}px)`;
//        });
//        stackWrapper.style.display = "";
//        runFor(500, () => {
//            updateStack(containerLockNotif);
//        });
//        e.target.classList.add("hidden");
//    } else {
//        removeScroll(document.querySelector(".stackWrapper"), document.querySelector(".stackContainer"));
//        stackWrapper.style.display = "none";
//        e.target.classList.remove("hidden");
//    }
//    notifBtn.toggleClick = !notifBtn.toggleClick;
//};
//notifBtn.addEventListener("click", notifBtn.clickEvent);
