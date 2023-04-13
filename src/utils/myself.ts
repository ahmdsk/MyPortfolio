interface IMySelf {
    nick: string;
    name: string;
    job: string;
    profile_pict: string;
    description: string;
    social: {
        github: string;
        linkedin: string;
        instagram: string;
    }
}

export const myself: IMySelf = {
    nick: "Ahmd.",
    name: 'Ahmad Shaleh Kurniawan',
    job: "Fullstack Web Developer",
    profile_pict: "https://avatars.githubusercontent.com/u/85729997?v=4",
    description: "👋 Software Developer based in Bandar Lampung, Indonesia. Write code for fun and jobs. Passionate about PHP, Javascript, And Learn Kotlin.",
    social: {
        github: "https://github.com/ahmdsk",
        linkedin: "https://linkedin.com/in/ahmdsk/",
        instagram: "https://instagram.com/ahmdsk._"
    }
}