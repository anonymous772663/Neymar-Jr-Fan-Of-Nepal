

/*
   EDIT ONLY THIS ARRAY WHEN YOU WANT TO CHANGE
   COMMITTEE MEMBERS.

   Images:
   assets/img/committee/member-name.jpg
*/

const committeeMembers = [

    {
        name: "Ramsharan Thapaliya",
        role: "President",
        image: "assets/img/member-1.jpeg",
        description:
            "Leading NJFON with a vision of building a stronger and more connected Neymar Jr fan community in Nepal.",
        leader: true
    },


    {
        name: "Reshma Shahi Thakuri",
        role: "Secretary",
        image: "assets/img/member-2.jpeg",
        description:
            "Helping coordinate NJFON activities, communication and community initiatives.",
        leader: true
    },


    {
        name: "Bijay Adhikari",
        role: "Treasurer",
        image: "assets/img/member-3.jpeg",
        description:
            "Supporting NJFON operations and helping keep community activities organized.",
        leader: true
    },



    {
        name: "Naresh Gurung",
        role: "Executive Member",
        image: "assets/img/member-4.jpeg",
        description:
            "Contributing to NJFON activities, events and community engagement."
    },


    {
        name: "Bishow Bhattarai",
        role: "Executive Member",
      image: "assets/img/member-5.jpeg",
        description:
            "Working with the team to create memorable experiences for NJFON fans."
    },


    {
        name: "Prabesh Garbuja Magar",
        role: "Executive Member",
       image: "assets/img/member-6.jpeg",
        description:
            "Supporting fan activities and helping grow the NJFON community."
    },


    {
        name: "Sweekar Dc",
        role: "Executive Member",
       image: "assets/img/member-7.jpeg",
        description:
            "Helping NJFON organize football and community-focused initiatives."
    },


    {
        name: "Nirjala Shrestha",
        role: "Executive Member",
      image: "assets/img/member-8.jpeg",
        description:
            "Bringing energy, ideas and passion to the NJFON community."
    },


    {
        name: "Bibek Rasaili",
        role: "Executive Member",
       image: "assets/img/member-9.jpeg",
        description:
            "Supporting NJFON's mission to connect Neymar Jr fans across Nepal."
    },
     {
        name: "Anjalina Ghising",
        role: "Executive Member",
       image: "assets/img/member-10.jpeg",
        description:
            "Supporting NJFON's mission to connect Neymar Jr fans across Nepal."
    },


    {
        name: "Madhusudhan Adhikari",
        role: "Executive Member",
     image: "assets/img/member-11.jpeg",
        description:
            "Working alongside the committee to strengthen the NJFON family."
    },

     {
        name: "Deependra Chaulagain",
        role: "Executive Member",
       image: "assets/img/DeependerChaulagain.jpeg",
        description:
            "Helping NJFON organize football and community-focused initiatives."
    },


     {
        name: "Sallu Shrestha",
        role: "Executive Member",
       image: "assets/img/SalluShrestha.jpeg",
        description:
            "Helping NJFON organize football and community-focused initiatives."
    },


     {
        name: "Sujan Mainali",
        role: "Executive Member",
       image: "assets/img/SujanMainali.jpeg",
        description:
            "Helping NJFON organize football and community-focused initiatives."
    },

 {
        name: "Bikram Meche",
        role: "Executive Member",
       image: "assets/img/BikramMeche.jpeg",
        description:
            "Helping NJFON organize football and community-focused initiatives."
    },


     {
        name: "Ds Saitan",
        role: "Executive Member",
       image: "assets/img/DSSaitan.jpeg",
        description:
            "Helping NJFON organize football and community-focused initiatives."
    },

     {
        name: "Shyam Sundas",
        role: "Executive Member",
       image: "assets/img/ShyamSundas.jpeg",
        description:
            "Helping NJFON organize football and community-focused initiatives."
    },
];





/* =========================================================
   SELECT ELEMENTS
========================================================= */

const leadershipGrid =
    document.getElementById(
        "leadershipGrid"
    );


const committeeGrid =
    document.getElementById(
        "committeeGrid"
    );



/* =========================================================
   LEADERSHIP
========================================================= */

function renderLeadership(){

    const leaders =
        committeeMembers.filter(
            member => member.leader
        );


    leadershipGrid.innerHTML =
        leaders.map(
            (member,index)=>`

                <article class="leader-card reveal">

                    <div class="leader-image">

                        <img
                            src="${member.image}"
                            alt="${member.name}"
                            loading="lazy"
                        >

                    </div>


                    <div class="leader-number">

                        ${String(index + 1).padStart(2,"0")}

                    </div>


                    <div class="leader-info">

                        <span class="leader-role">

                            ${member.role}

                        </span>


                        <h3>

                            ${member.name}

                        </h3>


                        <p>

                            ${member.description}

                        </p>

                    </div>

                </article>

            `
        ).join("");

}



/* =========================================================
   COMMITTEE MEMBERS
========================================================= */

function renderCommittee(){

    const members =
        committeeMembers.filter(
            member => !member.leader
        );


    committeeGrid.innerHTML =
        members.map(
            (member,index)=>`

                <article class="member-card reveal">

                    <div class="member-photo">

                        <img
                            src="${member.image}"
                            alt="${member.name}"
                            loading="lazy"
                        >


                        <div class="member-index">

                            ${String(index + 4).padStart(2,"0")}

                        </div>

                    </div>


                    <div class="member-info">

                        <h3>

                            ${member.name}

                        </h3>


                        <span>

                            ${member.role}

                        </span>


                        <p>

                            ${member.description}

                        </p>

                    </div>

                </article>

            `
        ).join("");

}


renderLeadership();

renderCommittee();



/* =========================================================
   THEME SYSTEM
========================================================= */

const themeButton =
    document.getElementById(
        "themeButton"
    );


const themePanel =
    document.getElementById(
        "themePanel"
    );


const themes = [

    "blend",
    "emerald",
    "royal",
    "golden",
    "neon",
    "violet"

];


function applyTheme(theme){

    themes.forEach(
        name => {

            document.body.classList.remove(
                "theme-" + name
            );

        }
    );


    document.body.classList.add(
        "theme-" + theme
    );


    localStorage.setItem(
        "njfn-theme",
        theme
    );

}


applyTheme(

    localStorage.getItem(
        "njfn-theme"
    ) || "blend"

);



/* =========================================================
   THEME PANEL
========================================================= */

if(themeButton && themePanel){

    themeButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            themePanel.classList.toggle(
                "open"
            );

        }
    );


    document
        .querySelectorAll(".theme-option")
        .forEach(option => {

            option.addEventListener(
                "click",
                () => {

                    applyTheme(
                        option.dataset.theme
                    );


                    themePanel.classList.remove(
                        "open"
                    );

                }
            );

        });


    document.addEventListener(
        "click",
        event => {

            if(
                !event.target.closest(
                    ".theme-panel"
                ) &&
                !event.target.closest(
                    "#themeButton"
                )
            ){

                themePanel.classList.remove(
                    "open"
                );

            }

        }
    );

}



/* =========================================================
   LIGHT / DARK MODE
========================================================= */

const modeButton =
    document.getElementById(
        "modeButton"
    );


function updateModeIcon(){

    if(!modeButton) return;


    const light =
        document.body.classList.contains(
            "light"
        );


    if(light){

        modeButton.innerHTML = `

            <svg viewBox="0 0 24 24">

                <circle
                    cx="12"
                    cy="12"
                    r="4"
                />

                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>

            </svg>

        `;

    }else{

        modeButton.innerHTML = `

            <svg viewBox="0 0 24 24">

                <path
                    d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z"
                />

            </svg>

        `;

    }

}


if(
    localStorage.getItem(
        "njfn-mode"
    ) === "light"
){

    document.body.classList.add(
        "light"
    );

}


updateModeIcon();


if(modeButton){

    modeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light"
            );


            localStorage.setItem(
                "njfn-mode",

                document.body.classList.contains(
                    "light"
                )
                ? "light"
                : "dark"

            );


            updateModeIcon();

        }
    );

}



/* =========================================================
   MOBILE NAV
========================================================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const navLinks =
    document.getElementById(
        "navLinks"
    );


if(menuButton && navLinks){

    menuButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "open"
            );

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                }
            );

        });

}



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


navItems.forEach(
    link => {

        if(
            link.getAttribute("href")
            === "committee.html"
        ){

            link.classList.add(
                "active"
            );

        }

    }
);



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if(
                        entry.isIntersecting
                    ){

                        entry.target.classList.add(
                            "show"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================================
   IMAGE FALLBACK
========================================================= */

/*
   If a member photo doesn't exist,
   automatically show a gradient placeholder.
*/

document.addEventListener(
    "error",
    event => {

        if(
            event.target.tagName
            === "IMG"
        ){

            event.target.style.display =
                "none";

        }

    },
    true
);
