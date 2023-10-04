var profileName = $('.profile-card').getAttribute("profile-name");
var socialMedia = $('.profile-card').getAttribute("social-media");
var socialMediaLink = $('.profile-card').getAttribute("social-media-link");
var imgSrc = $('.profile-card').getAttribute("img-src");
var linkedin = $('.profile-card').getAttribute("linkedin");
var twitter = $('.profile-card').getAttribute("twitter");
var instagram = $('.profile-card').getAttribute("instagram");
var email = $('.profile-card').getAttribute("email");
var tiktok = $('.profile-card').getAttribute("tiktok");
var socialMedias="";
if(linkedin)
    socialMedias += `<a href="${linkedin}"><i class="h2 fa-brands fa-linkedin"></i></a>`;
if(twitter)
    socialMedias += `<a href="${twitter}"><i class="h2 fa-brands fa-twitter"></i></a>`;
if(instagram)
    socialMedias += `<a href="${instagram}"><i class="h2 fa-brands fa-instagram"></i></a>`;
if(email)
    socialMedias += `<a href="mailto:${email}"><i class="h2 fa-regular fa-envelope"></i></a>`;
if(tiktok)
    socialMedias += `<a href="${tiktok}"><i class="h2 fa-brands fa-tiktok"></i></a>`;

$('#profile-card').innerHTML = `
      <div class="profile-card container col-md-3">
        <a href="#cShaluk" data-bs-toggle="collapse"><img class="profile-photo" src="${imgSrc}"></a>
        <p class="mb-0">${profileName}</p>
        <div id="cShaluk" class="collapse text-center" data-bs-parent="#accordion">`+
        socialMedias
        +`
        </div>
      </div>
    `;
