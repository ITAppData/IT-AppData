
/* =========================================
   ITCS LINK HUB - MAIN LINK DATABASE
========================================= */

const links = [

    // WORK

    {
        name: "Consumables ITCS Tracking Report",
        category: "Work",
        icon: "📊",
        description: "Access the ITCS consumables tracking Excel report.",
        url: "https://isbhydmoh-my.sharepoint.com/:x:/r/personal/ajaya_kumar_isb_edu/_layouts/15/Doc.aspx?sourcedoc=%7B6E1C728E-93B5-4956-960F-6DBF27D4E5E7%7D&file=Consumables%20ITCS%20Tracking%20Report.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1&web=1"
    },

    {
        name: "STATA 19",
        category: "Work",
        icon: "📁",
        description: "Access the ITCS shared OneDrive folder.",
        url: "https://isbhydmoh-my.sharepoint.com/:f:/g/personal/itcs_isb_edu/IgAv6pnOlglBQ7l3zwMrFu9JAbZBUWIs5_8D1zlr-Zuy2mk?e=gdoREY"
    },


    // Applications

    {
	name: "7-Zip",
        category: "Applications",
        icon: "",
        description: "Access The 7-Zip",
        url: "https://www.7-zip.org/download.html"
    },

    {
	name: "AnyDesk",
        category: "Applications",
        icon: "",
        description: "Access The AnyDesk",
        url: "https://anydesk.com/en/all-platforms"
    },

    {
	name: "Adobe Reader",
        category: "Applications",
        icon: "",
        description: "Access The Adobe Reader",
        url: "https://get.adobe.com/reader/enterprise/"
    },

    {
	name: "Google Chrome",
        category: "Applications",
        icon: "",
        description: "Access The Chrome",
        url: "https://www.google.com/chrome/index.html"
    },

    {
	name: "Firefox",
        category: "Applications",
        icon: "",
        description: "Access The Firefox",
        url: "https://www.firefox.com/en-US/landing/get/?gclsrc=aw.ds&gad_source=1&gad_campaignid=23719327387&gbraid=0AAAAAD-k1Gq2WDLNTfDW3mWingvAASBSh&gclid=CjwKCAjwo5bXBhAEEiwAkgpgXI6kSURzX-rE2ARjj73qXvACWoie2Z24lQ7XcEd9VScrcBOBgsJQ8hoCTe8QAvD_BwE"
    },


    {
	name: "Office 365",
        category: "Applications",
        icon: "Ⓜ️",
        description: "Access The Microsoft 365 for Windows and macOS",
        url: "https://www.microsoft.com/en-in/microsoft-365/download-office"
    },

    {
	name: "VLC",
        category: "Applications",
        icon: "",
        description: "Access The VLC Player",
        url: "https://www.videolan.org/vlc/index.html"
    },

   {
    name: "Zoom Download",
    category: "Applications",
    icon: "📹",
    description: "Download Zoom Workplace application.",
    url: "https://zoom.us/download"
   },


    // IT TOOLS

    

    // EDUCATION

    {
        name: "ISB LMS",
        category: "Education",
        icon: "🎓",
        description: "Access the ISB learning portal.",
        url: "https://elearn.isb.edu"
    },

   

    // PERSONAL

    {
        name: "YouTube",
        category: "Personal",
        icon: "▶️",
        description: "Watch videos and tutorials.",
        url: "https://www.youtube.com"
    },

    {
        name: "Google Drive",
        category: "Personal",
        icon: "📂",
        description: "Personal cloud storage.",
        url: "https://drive.google.com"
    },


    // OTHER

    {
        name: "Google",
        category: "Other",
        icon: "🌐",
        description: "Google search engine.",
        url: "https://www.google.com"
    },

    {
        name: "Speed Test",
        category: "Other",
        icon: "⚡",
        description: "Check your internet speed.",
        url: "https://www.speedtest.net"
    }

];


/* =========================================
   CATEGORY SETTINGS
========================================= */

const categories = [

    { name: "All Links", icon: "🏠", value: "All" },
    { name: "Work", icon: "💼", value: "Work" },
    { name: "Applications", icon: "🖥️", value: "Applications" },
    { name: "IT Tools", icon: "🛠️", value: "IT Tools" },
    { name: "Education", icon: "🎓", value: "Education" },
    { name: "Personal", icon: "👤", value: "Personal" },
    { name: "Other", icon: "🌐", value: "Other" }

];


/* =========================================
   HTML ELEMENTS
========================================= */

const categoryMenu =
    document.getElementById("categoryMenu");

const linksContainer =
    document.getElementById("linksContainer");

const searchInput =
    document.getElementById("searchInput");

const sectionTitle =
    document.getElementById("sectionTitle");

const sectionDescription =
    document.getElementById("sectionDescription");

const totalLinks =
    document.getElementById("totalLinks");

const emptyState =
    document.getElementById("emptyState");

const themeToggle =
    document.getElementById("themeToggle");

let activeCategory = "All";


/* =========================================
   DISPLAY CATEGORIES
========================================= */

function displayCategories() {

    categoryMenu.innerHTML = "";

    categories.forEach(category => {

        const count = category.value === "All"
            ? links.length
            : links.filter(link =>
                link.category === category.value
            ).length;

        const button = document.createElement("button");

        button.className = "category-btn";

        button.classList.toggle(
            "active",
            activeCategory === category.value
        );

        const label = document.createElement("span");
        label.textContent =
            `${category.icon} ${category.name}`;

        const countLabel = document.createElement("span");
        countLabel.className = "category-count";
        countLabel.textContent = count;

        button.append(label, countLabel);

        button.addEventListener("click", () => {

            activeCategory = category.value;

            searchInput.value = "";

            displayCategories();
            displayLinks();

        });

        categoryMenu.appendChild(button);

    });

}


/* =========================================
   DISPLAY LINKS
========================================= */

function displayLinks() {

    linksContainer.innerHTML = "";

    const searchText =
        searchInput.value.trim().toLowerCase();

    const filteredLinks = links.filter(link => {

        const matchesCategory =
            activeCategory === "All" ||
            link.category === activeCategory;

        const matchesSearch =
            link.name.toLowerCase().includes(searchText) ||
            link.category.toLowerCase().includes(searchText) ||
            link.description.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;

    });


    sectionTitle.textContent =
        activeCategory === "All"
            ? "All Links"
            : activeCategory;

    sectionDescription.textContent =
        `${filteredLinks.length} website(s) available`;

    emptyState.hidden =
        filteredLinks.length !== 0;


    filteredLinks.forEach(link => {

        const card = document.createElement("div");
        card.className = "link-card";

        const top = document.createElement("div");
        top.className = "card-top";

        const icon = document.createElement("div");
        icon.className = "link-icon";
        icon.textContent = link.icon;

        const tag = document.createElement("span");
        tag.className = "category-tag";
        tag.textContent = link.category;

        top.append(icon, tag);

        const title = document.createElement("h3");
        title.textContent = link.name;

        const description = document.createElement("p");
        description.textContent = link.description;

        const anchor = document.createElement("a");

        anchor.className = "open-link";
        anchor.textContent = "Open Website ↗";
        anchor.href = link.url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";

        card.append(
            top,
            title,
            description,
            anchor
        );

        linksContainer.appendChild(card);

    });

}


/* =========================================
   SEARCH FUNCTION
========================================= */

searchInput.addEventListener("input", () => {

    displayLinks();

});


/* =========================================
   DARK MODE
========================================= */

function updateThemeButton() {

    const isDark =
        document.body.classList.contains("dark-mode");

    themeToggle.textContent =
        isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

}


function loadTheme() {

    const savedTheme =
        localStorage.getItem("websiteTheme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }

    updateThemeButton();

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const currentTheme =
        document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";

    localStorage.setItem(
        "websiteTheme",
        currentTheme
    );

    updateThemeButton();

});


/* =========================================
   DASHBOARD STATISTICS
========================================= */

function updateStatistics() {

    totalLinks.textContent = links.length;

    document.getElementById(
        "totalCategories"
    ).textContent = categories.filter(
        category => category.value !== "All"
    ).length;

}


/* =========================================
   INITIALIZE WEBSITE
========================================= */

function initializeWebsite() {

    loadTheme();

    updateStatistics();

    displayCategories();

    displayLinks();

}

initializeWebsite();
