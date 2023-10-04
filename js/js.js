var profileCards = document.querySelectorAll('.profile-card-injection');

// Loop through each profile card element
profileCards.forEach(function(profileCard) {
  var profileName = profileCard.getAttribute("profile-name");
  var imgSrc = profileCard.getAttribute("img-src");
  var linkedin = profileCard.getAttribute("linkedin");
  var twitter = profileCard.getAttribute("twitter");
  var instagram = profileCard.getAttribute("instagram");
  var email = profileCard.getAttribute("email");
  var tiktok = profileCard.getAttribute("tiktok");
  var facebook = profileCard.getAttribute("facebook");
  var tumblr = profileCard.getAttribute("tumblr");
  var discord = profileCard.getAttribute("discord");
  var workEmail = profileCard.getAttribute("workEmail");
  var behance = profileCard.getAttribute("behance");
  var portFolioWebsite = profileCard.getAttribute("portfolio-website");
  var socialMedias = "";

  if (linkedin)
    socialMedias += `<a class="mx-3" href="${linkedin}"><i class="h2 fa-brands fa-linkedin"></i></a>`;
  if (twitter)
    socialMedias += `<a class="mx-3" href="${twitter}"><i class="h2 fa-brands fa-twitter"></i></a>`;
  if (instagram)
    socialMedias += `<a class="mx-3" href="${instagram}"><i class="h2 fa-brands fa-instagram"></i></a>`;
  if (email)
    socialMedias += `<a class="mx-3" href="mailto:${email}"><i class="h2 fa-regular fa-envelope"></i></a>`;
  if (tiktok)
    socialMedias += `<a class="mx-3" href="${tiktok}"><i class="h2 fa-brands fa-tiktok"></i></a>`;
  if(facebook)
    socialMedias += `<a class="mx-3" href="${facebook}"><i class="h2 fa-brands fa-facebook"></i></a>`;
  if(tumblr)
    socialMedias += `<a class="mx-3" href="${tumblr}"><i class="h2 fa-brands fa-square-tumblr"></i></a>`;
  if(discord)
    socialMedias += `<a class="mx-3" href="${discord}"><i class="h2 fa-brands fa-discord"></i></a>`;
  if(behance)
    socialMedias += `<a class="mx-3" href="${behance}"><i class="h2 fa-brands fa-square-behance"></i></a>`;
  if(workEmail)
    socialMedias+=`<a class="mx-3" href="mailto:${workEmail}"><i class="h2 fa-solid fa-briefcase"></i></a>`;
  if(portFolioWebsite)
    socialMedias+=`<a class="mx-3" href="${portFolioWebsite}"><i class="h2 fa-solid fa-house-user"></i></a>`;

  profileCard.innerHTML = `
        <a href="#c${profileName.replace(/\s+/g, '')}" data-bs-toggle="collapse"><img class="profile-photo" src="${imgSrc}"></a>
        <p class="mb-0">${profileName}</p>
        <div id="c${profileName.replace(/\s+/g, '')}" class="collapse text-center" data-bs-parent="#accordion">
            ${socialMedias}
        </div>
  `;
});

var colors = [
  "#146152",
  "#9FC131",
  "#DBF227",
  "#F2EED8",
  // 
  // "#176B87",
  "#F5E8B7",
  "#64CCC5",
  "#CD5C08"

];

var profileCardInjectionList = document.querySelectorAll('.profile-card-injection');
for(var profileCardInjection of profileCardInjectionList){
profileCardInjection.addEventListener('mouseover', function() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  var randomColor = colors[randomIndex];
  this.style.setProperty('background-color', randomColor);
});
profileCardInjection.addEventListener('mouseout', function() {
  this.style.setProperty('background-color', "#FFFFFF");
});
}