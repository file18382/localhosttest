const viewportScrollYSettingsMain = document.getElementById("viewportScrollYSettingsMain");
const contentScrollYSettingsMain = document.getElementById("contentScrollYSettingsMain");

const functionNameForApp_settings = {
    inputRangeBrightness: function (e) {
        e.preventDefault();
        const val = e.currentTarget.value;

        if (val < 20) val = 20;
        if (val > 100) val = 100;

        const percent = ((val - 20) / (100 - 20)) * 100;
        console.log(percent);

        phone.style.filter = `brightness(${val / 100})`;
        brightnessSlider.style.height = `${percent}%`;
    },
};

const functionWhenOpenAppInApp_settings = {
    app_SettingsAppDisplayAndBrightness: function () {
        const toggleDarkMode = document.getElementById("toggleDarkMode");
        toggleDarkMode._removeHandler = function (e) {
            this.classList.toggle("active");
            if (this.classList.contains("active")) {
                document.documentElement.style.setProperty("--bg-itemBackground", "#171717");
                document.documentElement.style.setProperty("--bg-appbackground", "#000");
                document.documentElement.style.setProperty("--bg-color", "white");
                localStorage.setItem("darkMode", "1");
            } else {
                document.documentElement.style.setProperty("--bg-itemBackground", "#fff");
                document.documentElement.style.setProperty("--bg-appbackground", "#eaeaea");
                document.documentElement.style.setProperty("--bg-color", "#000");
                localStorage.setItem("darkMode", "0");
            }
        };
        toggleDarkMode.addEventListener("click", toggleDarkMode._removeHandler);

        // fullscreen mode toggle
        const toggleFullScreenMode = document.getElementById("toggleFullScreenMode");
        toggleFullScreenMode._fullScreenHandler = function (e) {
            this.classList.toggle("active");
            document.getElementById("controlCenterID15ControlsCenter").classList.toggle("activeControlsCenter");
            if (this.classList.contains("active")) {
                window._addHandler = function () {
                    const width = window.innerWidth;
                    const height = window.innerHeight;

                    document.documentElement.style.setProperty("--bg-widthPhone", `${width}`);
                    document.documentElement.style.setProperty("--bg-heightPhone", `${height}`);
                    document.documentElement.style.setProperty("--bg-borderRadiusPhone", `41px`);
                };
                window.addEventListener("resize", window._addHandler);
                const width = window.innerWidth;
                const height = window.innerHeight;
                document.documentElement.style.setProperty("--bg-widthPhone", `${width}`);
                document.documentElement.style.setProperty("--bg-heightPhone", `${height}`);
                document.documentElement.style.setProperty(
                    "--bg-borderRadiusPhone",
                    `calc(41px * (min(${width} / 330, ${height} / 717)))`
                );

                if (currentOpeningElApp)
                    closeAppToCenterWithScript(() => {
                        updateAppPosNoRemove();
                        phoneRect = phone.getBoundingClientRect();
                    });

                document.getElementById("allBtnForDebug").style.display = document.getElementById(
                    "frame"
                ).style.display = "none";
                document.body.style.backgroundColor = "black";
                document.documentElement.requestFullscreen();
            } else {
                window.removeEventListener("resize", window._addHandler);
                delete window._addHandler;
                document.documentElement.style.setProperty("--bg-widthPhone", `280`);
                document.documentElement.style.setProperty("--bg-heightPhone", `617`);
                document.documentElement.style.setProperty("--bg-borderRadiusPhone", `41px`);
                if (currentOpeningElApp)
                    closeAppToCenterWithScript(() => {
                        updateAppPosNoRemove();
                        phoneRect = phone.getBoundingClientRect();
                    });

                document.exitFullscreen();

                document.getElementById("allBtnForDebug").style.display = document.getElementById(
                    "frame"
                ).style.display = "";
                document.body.style.backgroundColor = "";
            }
        };
        toggleFullScreenMode.addEventListener("click", toggleFullScreenMode._fullScreenHandler);
    },
    app_SettingsAppWallpaper: function () {
        const allWallpapers = document.querySelectorAll("#app_SettingsAppWallpaper .itemChild");
        allWallpapers.forEach((wallpaper) => {
            wallpaper.addEventListener("click", wallpaperSetOptions);
        });
    },
    app_SettingsAppLockEditor: function () {
        const container = document.getElementById("app_SettingsAppLockEditor");
        container.querySelectorAll("[data-classToAdd][data-idNeedAdd]").forEach((el) => {
            const handler = () => {
                document
                .getElementById(el.getAttribute("data-idNeedAdd"))
                .classList.add(...el.getAttribute("data-classToAdd").trim().split(/\s+/));
            };
            el._addHandler = handler;
            el.addEventListener("click", handler);
        });

        container.querySelectorAll("[data-classToRemove][data-idNeedRemove]").forEach((el) => {
            const handler = () => {
                document
                .getElementById(el.getAttribute("data-idNeedRemove"))
                .classList.remove(...el.getAttribute("data-classToRemove").trim().split(/\s+/));
            };
            el._removeHandler = handler;
            el.addEventListener("click", handler);
        });

        // move clock position based on saved setting
        const el = document.querySelector(".lockContent.preview");
        el._pointerHandlers = {};
        el._pointerHandlers.down = (e) => {
            el._isDragging = true;
            el._startX = e.clientX - (el._currentX || 0);
            el._startY = e.clientY - (el._currentY || 0);
            el.setPointerCapture(e.pointerId);
        };
        el._pointerHandlers.move = (e) => {
            if (!el._isDragging) return;

            el._currentX = e.clientX - el._startX;
            el._currentY = e.clientY - el._startY;

            el.style.transition = "0s";
            if (Math.abs(el._currentX) <= 8) el._currentX = 0;
            if (Math.abs(el._currentY) <= 8) el._currentY = 0;

            el.style.translate = `${el._currentX}px ${el._currentY}px`;
        };
        el._pointerHandlers.up = (e) => {
            el.style.transition = "";
            el._isDragging = false;
            el.releasePointerCapture(e.pointerId);

            document.documentElement.style.setProperty(
                "--bg-lockClockTranslate",
                `${el._currentX}px ${el._currentY}px`
            );
            localStorage.setItem("lockClockPosition", `${el._currentX}px ${el._currentY}px`);
        };
        el.addEventListener("pointerdown", el._pointerHandlers.down);
        el.addEventListener("pointermove", el._pointerHandlers.move);
        el.addEventListener("pointerup", el._pointerHandlers.up);

        // {
        //     const el = document.querySelector(".lockContent.preview");
        //     anime.createDraggable(el, {
        //         container: "#app_SettingsAppLockEditor .phonePreview",
        //         velocityMultiplier: 0,
        //         containerFriction: 1,
        //     });
        // }

        // scale lock clock content
        const scaleLockClockSlider = document.getElementById("scaleLockClockSlider");
        const scaleLockClockValue = document.getElementById("scaleLockClockValue");
        scaleLockClockSlider._scaleHandler = (e) => {
            const scale = parseFloat(e.target.value);
            document.documentElement.style.setProperty("--bg-scaleLockContent", scale);
            scaleLockClockValue.textContent = scale.toFixed(2);
            localStorage.setItem("scaleLockContent", scale);
        };
        scaleLockClockSlider.addEventListener("input", scaleLockClockSlider._scaleHandler);

        // font weight for lock clock
        const fontClockWeightSlider = document.getElementById("fontClockWeightSlider");
        const fontClockWeightValue = document.getElementById("fontClockWeightValue");
        fontClockWeightSlider._weightHandler = (e) => {
            const weight = parseInt(e.target.value);
            document.documentElement.style.setProperty("--bg-fontWeightLockClock", weight);
            fontClockWeightValue.textContent = weight;
            localStorage.setItem("fontWeightLockClock", weight);
        };
        fontClockWeightSlider.addEventListener("input", fontClockWeightSlider._weightHandler);

        // color picker for lock clock
        const allColorCircles = document.querySelectorAll("#app_SettingsAppLockEditor .colorCircle");
        allColorCircles.forEach((colorCircle) => {
            colorCircle._colorHandler = (e) => {
                const color = e.currentTarget.style.backgroundColor;
                document.documentElement.style.setProperty("--bg-colorLockClock", color);
                localStorage.setItem("colorLockClock", color);
                document.querySelectorAll("#app_SettingsAppLockEditor .colorCircle.active").forEach((activeCircle) => {
                    activeCircle.classList.remove("active");
                });
                e.currentTarget.classList.add("active");
            };
            colorCircle.addEventListener("click", colorCircle._colorHandler);
        });

        // font picker for lock clock
        const allFontCircle = document.querySelectorAll("#app_SettingsAppLockEditor .fontCircle");
        allFontCircle.forEach((fontCircle) => {
            fontCircle._fontHandler = (e) => {
                const font = e.currentTarget.style.fontFamily;
                document.documentElement.style.setProperty("--bg-fontLockClock", font);
                localStorage.setItem("fontLockClock", font);
                e.currentTarget.classList.add("active");
                const activeFontCircles = document.querySelectorAll("#app_SettingsAppLockEditor .fontCircle.active");
                activeFontCircles.forEach((activeCircle) => {
                    if (activeCircle !== e.currentTarget) {
                        activeCircle.classList.remove("active");
                    }
                });
            };
            fontCircle.addEventListener("click", fontCircle._fontHandler);
        });

        // opacity picker for lock clock
        const opacityLockClockSlider = document.getElementById("opacityLockClockSlider");
        const opacityLockClockValue = document.getElementById("opacityLockClockValue");
        opacityLockClockSlider._opacityHandler = (e) => {
            const opacityPercent = parseInt(e.target.value);
            document.documentElement.style.setProperty("--bg-opacityLockClock", `${opacityPercent}%`);
            opacityLockClockValue.textContent = `${opacityPercent}%`;
            localStorage.setItem("opacityLockClock", `${opacityPercent}%`);
        };
        opacityLockClockSlider.addEventListener("input", opacityLockClockSlider._opacityHandler);
    },
    app_SettingsAppHomeLockSettings: function () {
        const el = document.getElementById("toggle_doubleTapOnOff");
        const toggle_doubleTapOnOff = (e) => {
            const element = e.target;
            element.classList.toggle("active");
            doubleTapOnOff = element.classList.contains("active") ? 1 : 0;
            localStorage.setItem("doubleTapOnOff", element.classList.contains("active") ? "1" : "0");
        };
        el._removeHandler = toggle_doubleTapOnOff;
        el.addEventListener("click", toggle_doubleTapOnOff);
    },
    app_SettingsAppIcon: function () {
        const el = document.getElementById("toggle_hideIconText");
        const toggle_hideIconText = (e) => {
            const element = e.target;
            element.classList.toggle("active");
            phone.classList.toggle("hideIconText");
            localStorage.setItem("hideIconText", element.classList.contains("active") ? 1 : 0);
        };
        el._removeHandler = toggle_hideIconText;
        el.addEventListener("click", toggle_hideIconText);
    },
    app_SettingsAppLiquidGlass: function () {
        {
            const elSlider = document.getElementById("inputRangeLiquidOpacity");
            elSlider._inpurtHandler = (e) => {
                const opacityPercent = parseInt(e.target.value);
                document.documentElement.style.setProperty("--bg-liquidOpacity", `${opacityPercent}%`);
                localStorage.setItem("liquidOpacity", `${opacityPercent}%`);
            };
            elSlider.addEventListener("input", elSlider._inpurtHandler);
        }
        {
            const el = document.getElementById("toggle_turnLiquidOff");
            el._inpurtHandler = function (e) {
                const element = e.target;
                element.classList.toggle("active");
                phone.classList.toggle("noLiquid");
                localStorage.setItem("turnLiquidOff", element.classList.contains("active") ? "0" : "1");

                if (phone.classList.contains("noLiquid"))
                    document.querySelector(".settingsItem[notWorkBy='toggle_turnLiquidOff']").classList.add("notWork");
                else
                    document
                    .querySelector(".settingsItem[notWorkBy='toggle_turnLiquidOff']")
                    .classList.remove("notWork");
            };
            el.addEventListener("click", el._inpurtHandler);
        }
    },
    app_SettingsAppActionBtn: function () {
        document.getElementById("app_SettingsAppActionBtn").classList.add("animate");
        cameraBtn.classList.add("animate");
        const elAllBtnCamera = document.querySelectorAll("#app_SettingsAppActionBtn .horizontalScroll .itemChild");
        elAllBtnCamera._handler = function (e) {
            document.querySelectorAll("#app_SettingsAppActionBtn .horizontalScroll .itemChild.active").forEach((el) => {
                el.classList.remove("active");
            });
            e.target.classList.add("active");

            cameraBtn.dataset.appcamerabtn = e.target.dataset.appforcamerabtn;

            localStorage.setItem("appcamerabtn", cameraBtn.dataset.appcamerabtn);

            document
            .querySelector("#app_SettingsAppActionBtn .box .borderPhonePre .buttonPreview svg path")
            .setAttribute("d", e.target.dataset.path);
        };

        elAllBtnCamera.forEach((el) => {
            el.addEventListener("click", elAllBtnCamera._handler);
        });
    },
    app_SettingsAppPhoneColor: function () {
        {
            const scrollItems = document.querySelectorAll("#app_SettingsAppPhoneColor .horizontalScroll .itemChild");
            scrollItems.handler = function (e) {
                document
                .querySelectorAll("#app_SettingsAppPhoneColor .horizontalScroll .itemChild.active")
                .forEach((el) => {
                    el.classList.remove("active");
                });
                e.target.classList.add("active");

                document.documentElement.style.setProperty("--bg-phoneColor", e.target.dataset.colorphone);

                localStorage.setItem("colorPhone", e.target.dataset.colorphone);

                document.querySelector("#app_SettingsAppPhoneColor iframe").src = e.target.dataset.iframe;
            };
            scrollItems.forEach((el) => {
                el.addEventListener("click", scrollItems.handler);
            });
            const activeItem = document.querySelector(
                `[data-colorphone='${
                    localStorage.getItem("colorPhone") ? localStorage.getItem("colorPhone") : "rgb(221, 221, 221)"
                }']`
            );
            document.querySelector("#app_SettingsAppPhoneColor iframe").src = activeItem.dataset.iframe;
        }
        {
            const el = document.getElementById("togglePhoneShadow");
            el.handler = function (e) {
                const element = e.target;
                element.classList.toggle("active");
                phone.classList.toggle("phoneShadow");
                localStorage.setItem("togglePhoneShadow", element.classList.contains("active") ? "1" : "0");
            };

            el.addEventListener("click", el.handler);
        }
    },
    app_SettingsAppAnimation: function () {
        {
            const el = document.getElementById("toggle_turnBlurOff");
            el._removeHandler = (e) => {
                const element = e.target;
                element.classList.toggle("active");
                document.getElementById("blurAllApp").classList.toggle("displayN");
                localStorage.setItem("turnBlurOff", element.classList.contains("active") ? "0" : "1");
            };

            el.addEventListener("click", el._removeHandler);
        }
        {
            // unlock animation select
            const selectUnlockAnimation = document.querySelector(
                "#app_SettingsAppAnimation .select[name='unlockAnimation']"
            );

            const selectBoxs = selectUnlockAnimation.querySelector(".selectBoxs");
            selectUnlockAnimation.handler = (e) => {
                if (e.target.matches(".selectTrigger")) selectBoxs.classList.toggle("open");
            };
            selectUnlockAnimation.addEventListener("click", selectUnlockAnimation.handler);

            const currentValue = selectUnlockAnimation.querySelector(".currentValue");

            selectBoxs.handler = (e) => {
                const value = e.currentTarget.getAttribute("data-value");
                changeUnlockAnimStyle(value);
                localStorage.setItem("unlockAnimation", value);

                currentValue.textContent = e.target.textContent;

                selectBoxs.querySelectorAll(".itemChild").forEach((i) => i.classList.remove("active"));
                e.target.classList.add("active");

                setTimeout(() => {
                    selectBoxs.classList.remove("open");
                }, 200);
            };
            selectBoxs.querySelectorAll(".itemChild").forEach((item) => {
                item.addEventListener("click", selectBoxs.handler);
            });
        }
    },
    app_SettingsAppAOD: function () {
        {
            const allAODStyle = document.querySelectorAll("#app_SettingsAppAOD .itemChild");
            allAODStyle.handler = (e) => {
                document.querySelectorAll("#app_SettingsAppAOD .itemChild.active").forEach((activeEl) => {
                    activeEl.classList.remove("active");
                });
                e.currentTarget.classList.add("active");
                const style = e.currentTarget.getAttribute("data-style");
                currentWallpaperOffStyle = allWallpaperOffStyle[style];
                localStorage.setItem("aodStyle", style);
            };
            allAODStyle.forEach((el) => {
                el.addEventListener("click", allAODStyle.handler);
            });
        }

        {
            // toggle AOD on/off
            const el = document.getElementById("toggle_turnAodOff");
            el.Handler = function (e) {
                const element = e.target;
                element.classList.toggle("active");
                phone.classList.toggle("aodOff");
                localStorage.setItem("turnAodOff", element.classList.contains("active") ? "0" : "1");

                if (phone.classList.contains("aodOff")) {
                    if (currentWallpaperOnStyle === allWallpaperOnStyle[1]) {
                        currentWallpaperOffStyle = allWallpaperOffStyle[1];
                    } else {
                        currentWallpaperOffStyle = allWallpaperOffStyle[2];
                    }

                    document.querySelector("#app_SettingsAppAOD .horizontalScroll").classList.add("notWork");
                } else {
                    const aodStyle = localStorage.getItem("aodStyle");
                    if (aodStyle) {
                        const activeItem = document.querySelector(`[data-style='${aodStyle}']`);
                        if (activeItem) activeItem.classList.add("active");
                        currentWallpaperOffStyle = allWallpaperOffStyle[aodStyle];
                    }
                    document.querySelector("#app_SettingsAppAOD .horizontalScroll").classList.remove("notWork");
                }
            };
            el.addEventListener("click", el.Handler);
        }
    },
    app_SettingsAppPasswordAndSecurity: function () {
        {
            const toggle_fingerprint = document.getElementById("toggle_fingerprint");
            toggle_fingerprint.handler = function (e) {
                const element = e.target;
                element.classList.toggle("active");
                localStorage.setItem("fingerprint", element.classList.contains("active") ? "1" : "0");
                fingerBtn.classList.toggle("displayN");
                document.getElementById("fingerBtn2").classList.toggle("displayN");
                document.getElementById("ani_fingerprint").classList.toggle("displayN");
            };
            toggle_fingerprint.addEventListener("click", toggle_fingerprint.handler);
        }
    },
};
const functionWhenCloseAppInApp_settings = {
    app_SettingsAppDisplayAndBrightness: function () {
        const toggleDarkMode = document.getElementById("toggleDarkMode");
        toggleDarkMode.removeEventListener("click", toggleDarkMode._removeHandler);
        delete toggleDarkMode._removeHandler;

        // fullscreen mode toggle
        const toggleFullScreenMode = document.getElementById("toggleFullScreenMode");
        toggleFullScreenMode.removeEventListener("click", toggleFullScreenMode._fullScreenHandler);
        delete toggleFullScreenMode._fullScreenHandler;
    },
    app_SettingsAppWallpaper: function () {
        const allWallpapers = document.querySelectorAll("#app_SettingsAppWallpaper .itemChild");
        allWallpapers.forEach((wallpaper) => {
            wallpaper.removeEventListener("click", wallpaperSetOptions);
        });
    },
    app_SettingsAppLockEditor: function () {
        const container = document.getElementById("app_SettingsAppLockEditor");
        container.querySelectorAll("[data-classToAdd][data-idNeedAdd]").forEach((el) => {
            if (el._addHandler) {
                el.removeEventListener("click", el._addHandler);
                delete el._addHandler;
            }
        });
        container.querySelectorAll("[data-classToRemove][data-idNeedRemove]").forEach((el) => {
            if (el._removeHandler) {
                el.removeEventListener("click", el._removeHandler);
                delete el._removeHandler;
            }
        });
        const el = document.querySelector(".lockContent.preview");

        el.removeEventListener("pointerdown", el._pointerHandlers.down);
        el.removeEventListener("pointermove", el._pointerHandlers.move);
        el.removeEventListener("pointerup", el._pointerHandlers.up);
        delete el._pointerHandlers;
        delete el._isDragging;
        delete el._currentX;
        delete el._currentY;
        delete el._startX;
        delete el._startY;

        // scale lock clock content
        const scaleLockClockSlider = document.getElementById("scaleLockClockSlider");
        scaleLockClockSlider.removeEventListener("input", scaleLockClockSlider._scaleHandler);
        delete scaleLockClockSlider._scaleHandler;

        // font weight for lock clock
        const fontClockWeightSlider = document.getElementById("fontClockWeightSlider");
        fontClockWeightSlider.removeEventListener("input", fontClockWeightSlider._weightHandler);
        delete fontClockWeightSlider._weightHandler;

        // color picker for lock clock
        const allColorCircles = document.querySelectorAll("#app_SettingsAppLockEditor .colorCircle");
        allColorCircles.forEach((colorCircle) => {
            colorCircle.removeEventListener("click", colorCircle._colorHandler);
            delete colorCircle._colorHandler;
        });

        // font picker for lock clock
        const allFontCircle = document.querySelectorAll("#app_SettingsAppLockEditor .fontCircle");
        allFontCircle.forEach((fontCircle) => {
            fontCircle.removeEventListener("click", fontCircle._fontHandler);
            delete fontCircle._fontHandler;
        });

        // opacity picker for lock clock
        const opacityLockClockSlider = document.getElementById("opacityLockClockSlider");
        opacityLockClockSlider.removeEventListener("input", opacityLockClockSlider._opacityHandler);
        delete opacityLockClockSlider._opacityHandler;
    },
    app_SettingsAppHomeLockSettings: function () {
        const el = document.getElementById("toggle_doubleTapOnOff");
        el.removeEventListener("click", el._removeHandler);
        delete el._removeHandler;
    },
    app_SettingsAppIcon: function () {
        const el = document.getElementById("toggle_hideIconText");
        el.removeEventListener("click", el._removeHandler);
        delete el._removeHandler;
    },
    app_SettingsAppLiquidGlass: function () {
        {
            const elSlider = document.getElementById("inputRangeLiquidOpacity");
            elSlider.removeEventListener("input", elSlider._inpurtHandler);
            delete elSlider._inpurtHandler;
        }
        {
            const el = document.getElementById("toggle_turnLiquidOff");
            el.removeEventListener("click", el._inpurtHandler);
            delete el._inpurtHandler;
        }
    },
    app_SettingsAppActionBtn: function () {
        document.getElementById("app_SettingsAppActionBtn").classList.remove("animate");
        cameraBtn.classList.remove("animate");
        const elAllBtnCamera = document.querySelectorAll("#app_SettingsAppActionBtn .horizontalScroll .itemChild");

        elAllBtnCamera.forEach((el) => {
            el.removeEventListener("click", elAllBtnCamera._handler);
        });
        delete elAllBtnCamera._handler;
    },
    app_SettingsAppPhoneColor: function () {
        {
            const scrollItems = document.querySelectorAll("#app_SettingsAppPhoneColor .horizontalScroll .itemChild");
            scrollItems.forEach((el) => {
                el.removeEventListener("click", scrollItems.handler);
            });
            delete scrollItems.handler;
            document.querySelector("#app_SettingsAppPhoneColor iframe").src = "";
        }

        {
            const el = document.getElementById("togglePhoneShadow");
            el.removeEventListener("click", el.handler);
            delete el.handler;
        }
    },
    app_SettingsAppAnimation: function () {
        {
            const el = document.getElementById("toggle_turnBlurOff");
            el.removeEventListener("click", el._removeHandler);
            delete el._removeHandler;
        }
        {
            // unlock animation select
            const selectUnlockAnimation = document.querySelector(
                "#app_SettingsAppAnimation .select[name='unlockAnimation']"
            );
            const selectBoxs = selectUnlockAnimation.querySelector(".selectBoxs");

            if (selectBoxs.classList.contains("open")) selectBoxs.classList.remove("open");

            selectUnlockAnimation.removeEventListener("click", selectUnlockAnimation.handler);
            delete selectUnlockAnimation.handler;
            selectBoxs.querySelectorAll(".selectItem").forEach((item) => {
                item.removeEventListener("click", selectBoxs.handler);
            });
            delete selectBoxs.handler;
        }
    },
    app_SettingsAppAOD: function () {
        {
            const allAODStyle = document.querySelectorAll("#app_SettingsAppAOD .itemChild");
            allAODStyle.forEach((el) => {
                el.removeEventListener("click", allAODStyle.handler);
            });
            delete allAODStyle.handler;
        }
        {
            // toggle AOD on/off
            const el = document.getElementById("toggle_turnAodOff");
            el.removeEventListener("click", el.Handler);
            delete el.Handler;
        }
    },
};

function wallpaperSetOptions(e) {
    const bgImg = e.currentTarget.style.backgroundImage;

    const overlay = document.querySelector(".overlayFullScreen");
    const optionBox = document.getElementById("optionSelectWallpaper");

    overlay.classList.add("openForWallpaper");

    optionBox.querySelector('[data-buttonWallpaper="setForLockScreen"]').onclick = () => {
        overlay.classList.remove("openForWallpaper");
        document.documentElement.style.setProperty("--bg-wallpaperLock", bgImg);
        localStorage.setItem("wallpaperLock", bgImg);

        {
            // load color button medium wallpaper
            const urlImg = getComputedStyle(document.documentElement)
            .getPropertyValue("--bg-wallpaperLock")
            .trim()
            .replace(/url\(["']?(.*?)["']?\)/, "$1");

            colorMediumImg(urlImg).then((color) => {
                const finalColor = darkerOrBrighterColor(color, 0.5);
                document.getElementById("colorMediumWallpaperButton").style.backgroundColor = color;

                originColorWallpaperLock = color;
                darkerColorWallpaperLock = finalColor;

                document.documentElement.style.setProperty("--bg-colorLockClock", color);
                document.querySelectorAll("#app_SettingsAppLockEditor .colorCircle.active").forEach((activeCircle) => {
                    activeCircle.classList.remove("active");
                });
                document.getElementById("colorMediumWallpaperButton").classList.add("active");
                wallpaperLockColorPre.style.cssText = `background: linear-gradient( ${darkerColorWallpaperLock}, ${originColorWallpaperLock});`;
            });
        }
    };
    optionBox.querySelector('[data-buttonWallpaper="setForHomeScreen"]').onclick = () => {
        overlay.classList.remove("openForWallpaper");
        document.documentElement.style.setProperty("--bg-wallpaperHome", bgImg);
        localStorage.setItem("wallpaperHome", bgImg);
    };
    optionBox.querySelector('[data-buttonWallpaper="setForBothScreen"]').onclick = () => {
        overlay.classList.remove("openForWallpaper");
        document.documentElement.style.setProperty("--bg-wallpaperLock", bgImg);
        document.documentElement.style.setProperty("--bg-wallpaperHome", bgImg);
        localStorage.setItem("wallpaperLock", bgImg);
        localStorage.setItem("wallpaperHome", bgImg);

        {
            // load color button medium wallpaper
            const urlImg = getComputedStyle(document.documentElement)
            .getPropertyValue("--bg-wallpaperLock")
            .trim()
            .replace(/url\(["']?(.*?)["']?\)/, "$1");

            colorMediumImg(urlImg).then((color) => {
                const finalColor = darkerOrBrighterColor(color, 0.5);
                document.getElementById("colorMediumWallpaperButton").style.backgroundColor = color;

                originColorWallpaperLock = color;
                darkerColorWallpaperLock = finalColor;

                document.documentElement.style.setProperty("--bg-colorLockClock", color);
                document.querySelectorAll("#app_SettingsAppLockEditor .colorCircle.active").forEach((activeCircle) => {
                    activeCircle.classList.remove("active");
                });
                document.getElementById("colorMediumWallpaperButton").classList.add("active");
                wallpaperLockColorPre.style.cssText = `background: linear-gradient( ${darkerColorWallpaperLock}, ${originColorWallpaperLock});`;
            });
        }
    };
    optionBox.querySelector('[data-buttonWallpaper="cancelSetWallpaper"]').onclick = () => {
        overlay.classList.remove("openForWallpaper");
    };
}
