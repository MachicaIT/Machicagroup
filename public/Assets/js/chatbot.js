document.addEventListener("DOMContentLoaded", function () {

    const chatButton =
        document.getElementById("machicaChatButton");

    const chatWindow =
        document.getElementById("machicaChatWindow");

    const chatClose =
        document.getElementById("machicaChatClose");

    const chatForm =
        document.getElementById("machicaChatForm");

    const chatInput =
        document.getElementById("machicaChatInput");

    const chatMessages =
        document.getElementById("machicaChatMessages");

    const typing =
        document.getElementById("machicaTyping");


    /* =====================================================
       CHECK ELEMENTS
    ===================================================== */

    if (
        !chatButton ||
        !chatWindow ||
        !chatClose ||
        !chatForm ||
        !chatInput ||
        !chatMessages
    ) {

        console.error(
            "Machica AI: Chatbot elements not found."
        );

        return;
    }


    /* =====================================================
       OPEN CHAT
    ===================================================== */

    chatButton.addEventListener("click", function (e) {

        e.preventDefault();

        e.stopPropagation();

        chatWindow.classList.toggle("active");


        if (
            chatWindow.classList.contains("active")
        ) {

            setTimeout(function () {

                chatInput.focus();

            }, 200);

        }

    });


    /* =====================================================
       CLOSE CHAT
    ===================================================== */

    chatClose.addEventListener("click", function (e) {

        e.preventDefault();

        e.stopPropagation();

        chatWindow.classList.remove("active");

    });


    /* =====================================================
       PREVENT CHAT CLICK PROPAGATION
    ===================================================== */

    chatWindow.addEventListener(
        "click",
        function (e) {

            e.stopPropagation();

        }
    );


    /* =====================================================
       SCAN CURRENT PAGE
    ===================================================== */

    function scanPage() {

        const clone =
            document.body.cloneNode(true);


        /* Remove unnecessary elements */

        const removeElements =
            clone.querySelectorAll(`

                script,
                style,
                noscript,
                header,
                footer,
                nav,
                form,
                button,
                input,
                textarea,

                .machica-chat,

                #page-loader,

                .page-loader,

                .menu-btn

            `);


        removeElements.forEach(
            function (element) {

                element.remove();

            }
        );


        let text =
            clone.innerText || "";


        /* Clean whitespace */

        text = text

            .replace(/\r/g, "")

            .replace(/[ \t]+/g, " ")

            .replace(/\n{3,}/g, "\n\n")

            .trim();


        /* Limit content */

        if (text.length > 12000) {

            text =
                text.substring(
                    0,
                    12000
                );

            text +=
                "\n\n[Remaining website content omitted.]";

        }


        return text;

    }


    /* =====================================================
       ADD MESSAGE
    ===================================================== */

    function addMessage(
        text,
        type
    ) {

        const message =
            document.createElement("div");


        message.className =
            "machica-message " +
            (
                type === "user"
                    ? "machica-user"
                    : "machica-bot"
            );


        /* Bot icon */

        if (type === "bot") {

            const icon =
                document.createElement("div");


            icon.className =
                "machica-message-icon";


            icon.innerHTML =
                '<i class="fa-solid fa-robot"></i>';


            message.appendChild(icon);

        }


        /* Message content */

        const content =
            document.createElement("div");


        content.className =
            "machica-message-content";


        const lines =
            text.split(/\n+/);


        lines.forEach(
            function (line) {

                line =
                    line.trim();


                if (!line) {

                    return;

                }


                const p =
                    document.createElement("p");


                p.textContent =
                    line;


                content.appendChild(p);

            }
        );


        message.appendChild(content);

        chatMessages.appendChild(message);


        /* Scroll */

        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }


    /* =====================================================
       TYPING
    ===================================================== */

    function showTyping() {

        if (typing) {

            typing.classList.add(
                "active"
            );

        }

    }


    function hideTyping() {

        if (typing) {

            typing.classList.remove(
                "active"
            );

        }

    }


    /* =====================================================
       SEND QUESTION
    ===================================================== */

    chatForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();


            const question =
                chatInput.value.trim();


            if (!question) {

                return;

            }


            /* Show question */

            addMessage(
                question,
                "user"
            );


            /* Clear input */

            chatInput.value = "";

            chatInput.disabled = true;


            showTyping();


            /* Scan website */

            const pageContent =
                scanPage();


            /* Current page */

            const currentPage =
                window.location.href;


            try {

                /*
                 * IMPORTANT
                 *
                 * Your XAMPP project is:
                 *
                 * /machicagroup/
                 *
                 */

                const apiUrl =
                    "api/chat.php";


                console.log(
                    "Machica AI API:",
                    apiUrl
                );


                console.log(
                    "Page content length:",
                    pageContent.length
                );


                /* Send request */

               const response = await fetch(
    "api/chat.php",
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },

        body: JSON.stringify({
            question: question,
            pageContent: pageContent,
            currentPage: currentPage
        })
    }
);


                /* Get raw response */

                const responseText =
                    await response.text();


                console.log(
                    "Machica AI Response:",
                    responseText
                );


                let data;


                try {

                    data =
                        JSON.parse(
                            responseText
                        );

                }
                catch (jsonError) {

                    console.error(
                        "Invalid JSON:",
                        responseText
                    );


                    throw new Error(
                        "PHP did not return valid JSON."
                    );

                }


                hideTyping();


                /* API error */

                if (!response.ok) {

                    throw new Error(
                        data.error ||
                        "Server returned HTTP " +
                        response.status
                    );

                }


                /* Successful response */

                if (data.success) {

                    addMessage(
                        data.answer,
                        "bot"
                    );

                }
                else {

                    addMessage(

                        data.error ||
                        "Sorry, I couldn't answer that.",

                        "bot"

                    );

                }

            }
            catch (error) {

                console.error(
                    "Machica AI Error:",
                    error
                );


                hideTyping();


                /*
                 * Show the actual error while testing.
                 */

                addMessage(

                    "Machica AI error: " +
                    error.message,

                    "bot"

                );

            }
            finally {

                chatInput.disabled =
                    false;


                chatInput.focus();

            }

        }
    );

});