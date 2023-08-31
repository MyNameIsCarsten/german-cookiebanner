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


// Select Banner
const cookiesBanner = document.querySelector("#cookies-container");
const consentBanner = document.querySelector("#consent-container");
// Select Banner Buttons
const cookiesBannerAcceptButton = document.querySelectorAll('.acceptBtn')
const cookiesBannerDeclineButton = document.querySelector("#declineBtn");
const cookiesBannerSelectedButton = document.querySelector("#selectedBtn");
const cookiesBannerInfoButton = document.querySelector("#infoBtn");
// Set cookieName
const cookieBanner = "cookieBanner";
// Call getCookie function with cookieName
const hasCookie = getCookie(cookieBanner);

// if hasCookie is false
if (!hasCookie) {
// remove hidden class
cookiesBanner.classList.remove("hidden");
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
        // Remove banner
        cookiesBanner.remove();
        consentBanner.remove();
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
    // Remove banner
    cookiesBanner.remove();
    consentBanner.remove();
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
        }
    })
        
    // User has selected a choice and won't see banner again
    setCookie(cookieBanner, "true");

    // Mandatory Cookies are accepted
    const mandatoryCookies = "cookiesConsentMandatory";
    setCookie(mandatoryCookies, "true");
    // Remove banner
    consentBanner.remove();
});