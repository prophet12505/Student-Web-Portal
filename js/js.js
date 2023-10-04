// var profileName = $('.profile-card-injection').getAttribute("profile-name");
// var socialMedia = $('.profile-card-injection').getAttribute("social-media");
// var socialMediaLink = $('.profile-card-injection').getAttribute("social-media-link");
// var imgSrc = $('.profile-card-injection').getAttribute("img-src");
// var linkedin = $('.profile-card-injection').getAttribute("linkedin");
// var twitter = $('.profile-card-injection').getAttribute("twitter");
// var instagram = $('.profile-card-injection').getAttribute("instagram");
// var email = $('.profile-card-injection').getAttribute("email");
// var tiktok = $('.profile-card-injection').getAttribute("tiktok");
// var socialMedias="";
// if(linkedin)
//     socialMedias += `<a href="${linkedin}"><i class="h2 fa-brands fa-linkedin"></i></a>`;
// if(twitter)
//     socialMedias += `<a href="${twitter}"><i class="h2 fa-brands fa-twitter"></i></a>`;
// if(instagram)
//     socialMedias += `<a href="${instagram}"><i class="h2 fa-brands fa-instagram"></i></a>`;
// if(email)
//     socialMedias += `<a href="mailto:${email}"><i class="h2 fa-regular fa-envelope"></i></a>`;
// if(tiktok)
//     socialMedias += `<a href="${tiktok}"><i class="h2 fa-brands fa-tiktok"></i></a>`;

// $('#profile-card-injection').innerHTML = `
//       <div class="profile-card-injection container col-md-3">
//         <a href="#cShaluk" data-bs-toggle="collapse"><img class="profile-photo" src="${imgSrc}"></a>
//         <p class="mb-0">${profileName}</p>
//         <div id="cShaluk" class="collapse text-center" data-bs-parent="#accordion">`+
//         socialMedias
//         +`
//         </div>
//       </div>
//     `;
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
  var socialMedias = "";

  if (linkedin)
    socialMedias += `<a href="${linkedin}"><i class="h2 fa-brands fa-linkedin"></i></a>`;
  if (twitter)
    socialMedias += `<a href="${twitter}"><i class="h2 fa-brands fa-twitter"></i></a>`;
  if (instagram)
    socialMedias += `<a href="${instagram}"><i class="h2 fa-brands fa-instagram"></i></a>`;
  if (email)
    socialMedias += `<a href="mailto:${email}"><i class="h2 fa-regular fa-envelope"></i></a>`;
  if (tiktok)
    socialMedias += `<a href="${tiktok}"><i class="h2 fa-brands fa-tiktok"></i></a>`;
  if(facebook)
    socialMedias += `<a href="${facebook}"><i class="h2 fa-brands fa-facebook"></i></a>`;
  
  profileCard.innerHTML = `
        <a href="#c${profileName.replace(/\s+/g, '')}" data-bs-toggle="collapse"><img class="profile-photo" src="${imgSrc}"></a>
        <p class="mb-0">${profileName}</p>
        <div id="c${profileName.replace(/\s+/g, '')}" class="collapse text-center" data-bs-parent="#accordion">
            ${socialMedias}
        </div>
 
  `;
});
