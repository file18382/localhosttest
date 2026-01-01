async function loadHTMLInto(divSelector, htmlFile) {
    const container = document.querySelector(divSelector);
    if (!container) {
        console.error("Không tìm thấy element:", divSelector);
        return;
    }

    // Xóa nội dung cũ
    container.innerHTML = "";

    // Tạo iframe
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
        "sandbox",
        "allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-pointer-lock allow-presentation"
    );

    //allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.overFlow = "hidden";

    container.appendChild(iframe);

    try {
        const response = await fetch(htmlFile);
        const html = await response.text();

        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
    } catch (err) {
        console.error("Không load được HTML:", err);
    }

    iframe.onload = async () => {
        try {
            // 1. Đọc nội dung file CSS
            const cssText = await fetch("/root.css").then((r) => r.text());

            // 2. Tạo thẻ <style>
            const styleTag = document.createElement("style");
            styleTag.textContent = cssText;

            // 3. Thêm vào đầu <head>
            const head = iframe.contentDocument.head;
            head.insertBefore(styleTag, head.firstChild);
        } catch (err) {
            console.error("Không tải được CSS:", err);
        }
    };
}

function getIframeByIdApp(idApp) {
    const iframe = document.querySelector(`#${idApp} iframe`);
    if (iframe) return iframe;
}

function runCmd() {
    const input = document.getElementById("cmdInput");
    const code = input.value.trim();
    if (!code) return;

    showPopup2_alert(
        "Do you want to run this command?",
        "Yes",
        "No",
        () => {
            try {
                new Function(code)();
                input.value = ""; // xoá sau khi chạy
            } catch (e) {
                console.error(e);
                alert(e.message);
            }
        },
        () => {}
    );
}

function runCmdFromFile(file) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        try {
            new Function(reader.result)();
        } catch (e) {
            console.error(e);
            alert(e.message);
        }
    };
    reader.readAsText(file);
}
