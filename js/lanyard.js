lanyard({
    userId: "1051592920882487406",
}).then((response) => {
    document.getElementsByClassName("lanyard-profile-picture")[0].src = `https://cdn.discordapp.com/avatars/${response.discord_user.id}/${response.discord_user.avatar}.gif`;
    document.getElementsByClassName("lanyard-username")[0].innerHTML = `${response.discord_user.username}#${response.discord_user.discriminator}`;
    document.getElementsByClassName("lanyard-activity")[0].innerHTML = `Playing ${response.activities[0].name} - ${response.activities[0].details}`;
});