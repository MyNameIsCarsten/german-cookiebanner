const createBanner = () => {
    /* Create cookie banner that will be injected on all pages */
    let div = document.createElement('div');
    div.setAttribute('id', 'cookie-wrapper');
    div.innerHTML = 
        `
        <div id="cookies-container" class="">
            <div id="cookies-container2">
                <div id="cookies-container3">
                    <div class="cookies-eu-banner">
                        <img id="cookies-img" src="./cookie.svg" alt="Cookie">
                    </div>
                    <div id="cookies-content">
                        <h1>Zuckersüß</h1>
                        <p>Mit unseren Cookies möchten wir Ihnen ein zuckersüßes Einkaufserlebnis mit allem was dazugehört bieten. 
                            Dazu zählen zum Beispiel passende Angebote und das Merken von Einstellungen. 
                            Wenn das für Sie okay ist, stimmen Sie der Nutzung von Cookies für Präferenzen, Statistiken und Marketing einfach durch einen Klick auf „Geht klar“ zu (<a href="#Link">alle anzeigen</a>).</p>
                            <div>
                                
                            </div>
                            <div id="button-container">
                                <button class="acceptBtn cookieBtn">
                                    <img src="./check-solid.svg" alt="Check">
                                    <span>Geht Klar</span>
                                </button>
                                <button class="cookieBtn" id="declineBtn">Cookies ablehnen</button>
                                <button class="cookieBtn" id="infoBtn">Weiter Infos</button>
                            </div>
                        <div id="cookie-links">
                            <a href="">Impressum</a>
                            <a href="">Datenschutzhinweise</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div id="consent-container" class="hidden">
            <div id="consent-container2">
                <div id="consent-container3">
                    <div id="cookies-content">
                        <h1>Alle Einstellungen für Cookies im Überblick</h1>
                        <p>Hier haben Sie die genaue Kontrolle über Ihre Privatsphäre und können entscheiden welche Cookies Thomann verwenden darf und welche nicht. Sie können mit dem Klick auf "Alle aktivieren" der Nutzung von allen unten genannten Cookies zustimmen.</p>
                            <div id="button-container">
                                <button class="acceptBtn cookieBtn">Alle aktivieren</button>
                            </div>
                            <br>
                        
                            <section id="details-section">
                                <details class="cookieDetails">
                                <summary class="cookieSummary">
                                    <span>Notwendig</span>
                                    
                                    <span>
                                        <p class="green">Pflichtfeld</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18">
                                            <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p>Notwendige Cookies helfen dabei, eine Webseite nutzbar zu machen, indem sie Grundfunktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Webseite ermöglichen. Die Webseite kann ohne diese Cookies nicht richtig funktionieren.</p>
                                </details>
                                <details class="cookieDetails">
                                    <summary class="cookieSummary">
                                        <span>Statistik</span>
                                        
                                        <span>
                                            <form action="#">
                                            <div class="cookieSwitch">
                                                <input id="cookieSwitch-1" name="statistics" type="checkbox" class="cookieSwitch-input" />
                                                <label for="cookieSwitch-1" class="cookieSwitch-label">cookieSwitch</label>
                                            </div>
                                            </form>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18">
                                                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p>Die technische Speicherung oder der Zugriff, der ausschließlich zu statistischen Zwecken erfolgt.</p>
                                </details>
                                <details class="cookieDetails">
                                    <summary class="cookieSummary">
                                        <span>Marketing</span>
                                        <span>
                                            <form action="#">
                                            <div class="cookieSwitch">
                                                <input id="cookieSwitch-2" name="marketing" type="checkbox" class="cookieSwitch-input" />
                                                <label for="cookieSwitch-2" class="cookieSwitch-label">cookieSwitch</label>
                                            </div>
                                            </form>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18">
                                                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p>Die technische Speicherung oder der Zugriff ist erforderlich, um Nutzerprofile zu erstellen, um Werbung zu versenden oder um den Nutzer auf einer Website oder über mehrere Websites hinweg zu ähnlichen Marketingzwecken zu verfolgen.</p>
                                </details>
                                
                            </section>
                        <br>
                        <div id="button-container">
                            <button class="acceptBtn cookieBtn">Alle aktivieren</button>
                            <button class="cookieBtn" id="selectedBtn">Gewählte Cookies erlauben</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        `
        ;
    document.getElementsByTagName('body')[0].appendChild(div);
}




/* Define getCookie function */
const getCookie = (name) => {
    // Store cookies in variable
    const value = " " + document.cookie;
    // Log value to console
    console.log("value", `==${value}==`);
  
    // Split Cookie String
    const parts = value.split(" " + name + "=");
    // Return undefined if length < 2 else parts…
    return parts.length < 2 ? undefined : parts.pop().split(";").shift();
  };
  
/* Define setCookie function */
const setCookie = function (name, value, expiryDays, domain, path, secure) {
    // Create date variable
    const exdate = new Date();
    exdate.setHours(
        exdate.getHours() +
        (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
    );
    // Set new cookie by concatenation 
    document.cookie =
        name +
        "=" +
        value +
        ";expires=" +
        exdate.toUTCString() +
        ";path=" +
        (path || "/") +
        (domain ? ";domain=" + domain : "") +
        (secure ? ";secure" : "");
};


// Set cookieName
const cookieBanner = "cookieBanner";
// Call getCookie function with cookieName
const hasCookie = getCookie(cookieBanner);

// if hasCookie is false
if (!hasCookie) {
    // remove hidden class
    //cookiesBanner.classList.remove("hidden");
    createBanner();

}

// Select Banner
const cookiesWrapper= document.querySelector("#cookie-wrapper");
const cookiesBanner = document.querySelector("#cookies-container");
const consentBanner = document.querySelector("#consent-container");
// Select Banner Buttons
const cookiesBannerAcceptButton = document.querySelectorAll('.acceptBtn')
const cookiesBannerDeclineButton = document.querySelector("#declineBtn");
const cookiesBannerSelectedButton = document.querySelector("#selectedBtn");
const cookiesBannerInfoButton = document.querySelector("#infoBtn");

// Check if a dataLayer exists:
if (!window.dataLayer){
    // If there is no dataLayer (which is typically created by the Google Tag Manager)
    window.dataLayer = window.dataLayer || []; // Create new dataLayer
}


/* Accept event*/
// Add event listener to button
cookiesBannerAcceptButton.forEach(item => {
    item.addEventListener('click', event => {
        // Set cookieName
        let cookieName = "cookiesConsentAll";
        // Call setCookie function 
        setCookie(cookieName, "true");
        setCookie(cookieBanner, "true");

        // For Google Tag Manager
        const dataLayerObject = {
            'event': 'cookieAccepted',
        };
        dataLayerObject[cookieName] = true;
        dataLayerObject[cookieBanner] = true;
        window.dataLayer.push(dataLayerObject);

        // Remove banner
        cookiesWrapper.remove();
    })
  })

/* Decline event */
// Add event listener to button
cookiesBannerDeclineButton.addEventListener("click", () => {
    // Set cookieName
    let cookieName = "cookiesConsentAll";
    // Call setCookie function 
    setCookie(cookieName, "false");
    setCookie(cookieBanner, "true");

    // For Google Tag Manager
    const dataLayerObject = {
        'event': 'cookieAccepted',
    };
    dataLayerObject[cookieName] = false;
    dataLayerObject[cookieBanner] = false;
    window.dataLayer.push(dataLayerObject);

    // Remove banner
    cookiesWrapper.remove();
});

/* Click 'Weitere Infos' event */
// Add event listener to button
cookiesBannerInfoButton.addEventListener("click", () => {
    // Remove cookie banner
    cookiesBanner.remove();

    // Show consent banner
    consentBanner.classList.remove("hidden");
});

/* Individual Selection event */
// Add event listener to button
cookiesBannerSelectedButton.addEventListener("click", () => {
    // Store all available options in an array
    const selectedCookies = document.querySelector("#cookies-content").querySelectorAll('input');


    // For Google Tag Manager
    const dataLayerObject = {
        'event': 'cookieAccepted', //
    };

    // Iterate through array
    selectedCookies.forEach(item => {
        // If the specific cookie is checked
        if(item.checked) {
            // Set specificCookieName
            let cookieSuffix = item.name;
            cookieSuffix = cookieSuffix.charAt(0).toUpperCase() + cookieSuffix.slice(1);
            
            // Create Cookie name
            const specificCookieName = "cookiesConsent" + cookieSuffix;
            
            // Call setCookie function 
            setCookie(specificCookieName, "true");

            // For Google Tag Manager
            dataLayerObject[specificCookieName] = true;
        }
    })
        
    // User has selected a choice and won't see banner again
    setCookie(cookieBanner, "true");

    // For Google Tag Manager
    dataLayerObject[cookieBanner] = true;
    window.dataLayer.push(dataLayerObject);

    // Mandatory Cookies are accepted
    const mandatoryCookies = "cookiesConsentMandatory";
    setCookie(mandatoryCookies, "true");
    // Remove banner
    cookiesWrapper.remove();
});
