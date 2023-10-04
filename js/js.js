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
  // "#484747"
  
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