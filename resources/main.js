/*
ZONELOTS cliff notes

Adding posts:
1) Copy the post template file.
2) Write the post content in the file.
3) Add a new object to the "posts" array, containing the post's title (this can include HTML), filename (not including the ".html" extension), and tag list (optional). Sample:
	{
		"title": `{{ POST TITLE }}`,
		"filename": `{{ YYYY-MM-DD-post-title }}`,
		"tags": [`tag 1`, `tag 2`, `tag 3`],
	},

Safe characters to use in tags:
	letters (upper- or lowercase)
	numbers
	? / : @ - . _ ~ ! $ & ' ( ) * + , ; = (question mark, slash, colon, at sign, hyphen-minus, period, underscore, tilde, exclamation mark, dollar, ampersand, apostrophe, left parenthesis, right parenthesis, asterisk, plus, comma, semicolon, equals)
	spaces (will be replaced by hyphens in tag urls)

Adding messages:
Add a new item in the "messages" array, containing the message content (this can include HTML, but should be inline content only)
*/



/* =============
	SETTINGS
============= */

const latestPostsCutoff = 5; // number of blog posts displayed on home page
const messagesOn = false; // whether or not to show a random message in the header

// links listed in header (nav)
const navLinks = [
{	"name": `home`,	"filename": `index.html`,	},
{	"name": `archive`,		"filename": `archive.html`,	},
{	"name": `tags`,			"filename": `tags.html`,		},
{	"name": `rss`,		"filename": `rss.xml`,	},
{	"name": `about`,		"filename": `about.html`,	},
{	"name": `friends`,			"filename": `friends.html`,		},
{	"name": `recs`,			"filename": `recs.html`,		},
];

const hubLinks = [
{	"name": `strange gaming diaries`, "filename": `strange_gaming_diaries.html`},
];

/* ===============
	BLOG POSTS
=============== */

const posts = [
{
	"title": `Strange Gaming Diaries: Luna's Wandering Stars, by Serenity Forge`,
	"filename": `2025-02-26-StrangeGaming_LunasWanderingStars.html`,
	"tags": [`sgd`],
},
{
	"title": `Strange Gaming Diaries: I Contemplated the Sun of Limbo, by Titouan Millet`,
	"filename": `2025-01-19-StrangeGaming_IContemplatedTheSunOfLimbo`,
	"tags": [`sgd`],
},
{
	"title": `Strange Gaming Diaries: Furi, by The Game Bakers`,
	"filename": `2025-01-15-StrangeGaming_Furi`,
	"tags": [`sgd`],
},
{
	"title": `review: CURSE/KISS/CUTE Episode 0, by Valerie Halla`,
	"filename": `2024-12-30-CurseKissCuteEp0`,
	"tags": [`review`],
},
{
	"title": `Strange Gaming Diaries: Slay the Princess, by Black Tabby Games`,
	"filename": `2024-12-27-StrangeGaming_SlayThePrincess`,
	"tags": [`sgd`, `visual novel`, `horror`],
},
	{
	"title": `I don't think most video essays are actually essays`,
	"filename": `2024-11-26-IDontThinkMostVideoEssaysAreActuallyEssays`,
	"tags": [`ponderings`],
},
{
	"title": `Strange Gaming Diaries: In Stars and Time, by insertdisc5`,
	"filename": `2024-11-12-StrangeGaming_InStarsAndTime`,
	"tags": [`sgd`, `rpg maker`, `insertdisc5`],
},
{
	"title": `site update! (11/7/2024)`,
	"filename": `2024-11-07-SiteUpdate`,
	"tags": [`housekeeping`],
},
{
	"title": `Strange Gaming Diaries: DARK FOREST VIRTUAL CHATROOM by Heather Flowers & Remember Places? by Bryce Bucher`,
	"filename": `2024-11-03-StrangeGaming_DarkForestVirtualChatroom&RememberPlaces`,
	"tags": [`sgd`],
},
{
	"title": `Strange Gaming Diaries: Outer Wilds, by Mobius Digital`,
	"filename": `2024-10-30-StrangeGaming_OuterWilds`,
	"tags": [`sgd`],
},
{
	"title": `Strange Gaming Diaries: Frogsong, by Frogteam Games`,
	"filename": `2024-10-11-StrangeGaming_Frogsong`,
	"tags": [`sgd`, `made by a friend`],
},
{
	"title": `Strange Gaming Diaries: Anodyne 2: Return to Dust, by Analgesic Productions`,
	"filename": `2024-09-18-StrangeGaming_Anodyne2`,
	"tags": [`sgd`, `metanarratives`],
},
{
	"title": `Strange Gaming Diaries: A NIGHTMARE'S TRIP, by SKY HOUR WORKS`,
	"filename": `2024-09-01-StrangeGaming_ANightmaresTrip`,
	"tags": [`sgd`, `visual novel`],
},
{
	"title": `Strange Gaming Diaries: Far from Noise, by George Batchelor`,
	"filename": `2024-08-24-StrangeGaming_FarFromNoise`,
	"tags": [`sgd`, `visual novel`],
},
{
	"title": `Strange Gaming Diaries: OneShot, by Future Cat`,
	"filename": `2024-07-02-StrangeGaming_OneShot`,
	"tags": [`sgd`, `rpg maker`, `metanarratives`],
},
{
	"title": `Strange Gaming Diaries: The Magic Circle, by Question`,
	"filename": `2024-06-15-StrangeGaming_TheMagicCircle`,
	"tags": [`sgd`, `metanarratives`],
},
{
	"title": `Strange Gaming Diaries: Bastion, by Supergiant Games`,
	"filename": `2024-06-04-StrangeGaming_Bastion`,
	"tags": [`sgd`],
},
{
	"title": `Strange Gaming Diaries: Smile for Me, by LimboLane`,
	"filename": `2024-05-27-StrangeGaming_SmileForMe`,
	"tags": [`sgd`],
},
{
	"title": `some thoughts on criticizing good games`,
	"filename": `2024-05-24-OnCriticizingGoodGames`,
	"tags": [`ponderings`],
},
{
	"title": `Strange Gaming Diaries: Dreaming Sarah (& Wishing Sarah), by Asteristic Game Studio`,
	"filename": `2024-05-22-StrangeGaming_DreamingSarah`,
	"tags": [`sgd`],
},
{
	"title": `Strange Gaming Diaries: 2000:1: A Space Felony, by National Insecurities`,
	"filename": `2024-05-16-StrangeGaming_2000to1`,
	"tags": [`sgd`, `visual novel`],
},
{
	"title": `Strange Gaming Diaries: OMORI, by OMOCAT`,
	"filename": `2024-05-09-StrangeGaming_OMORI`,
	"tags": [`sgd`, `rpg maker`, `horror`],
},
{
	"title": `Strange Gaming Diaries: Boa Retina, by Jennifer Raye`,
	"filename": `2024-05-07-StrangeGaming_BoaRetina`,
	"tags": [`sgd`],
},
{
	"title": `Heartbeats, Stolen in the Night`,
	"filename": `2024-05-04-HeartbeatsStolenInTheNight`,
	"tags": [`short story`],
},
{
	"title": `Strange Gaming Diaries: Serre, by insertdisc5`,
	"filename": `2024-04-25-StrangeGaming_Serre`,
	"tags": [`sgd`, `visual novel`, `insertdisc5`],
},
{
	"title": `Strange Gaming Diaries: THE ENIGMA MACHINE, by ENIGMA STUDIO`,
	"filename": `2023-07-06-StrangeGaming_TheEnigmaMachine`,
	"tags": [`sgd`, `horror`],
},
{
	"title": `Strange Gaming Diaries: The Hex, by Daniel Mullins Games`,
	"filename": `2023-05-06-StrangeGaming_TheHex`,
	"tags": [`sgd`, `metanarratives`],
},

];



/* =============
	MESSAGES
============= */

const messages = [
	`test message 1`,
	`test message b`,
	`this message includes <em>inline <abbr>HTML</abbr></em>`,
	`this message includes <a href="https://zombo.com/" rel="external">a link</a>`,
];

const footerMessage = `<p>background art by <a href="https://odthecryptid.carrd.co/">O.D. the Cryptid!</a><p>`;
document.querySelector(`footer`).innerHTML += footerMessage;

/* ======================
	PAGE CONSTRUCTION
====================== */

// get current filepath and the relative paths to the posts folder and the index folder
const path = location.pathname.split("/");
const inPost = path.at(-2) === `posts`;
const pathToPosts = inPost ? `./` : `./posts/`;
const pathToInfo = inPost ? `../` : `./`;

// take a post in posts array and return a formatted link to that post
function formatPostLink(post) {
	return `<li><time>${post.filename.slice(0, 10)}</time>: <a href="${pathToPosts}${post.filename}.html">${post.title}</a></li>`;
}

// convert tag to HTML id/link hash
function formatTagHash(tag) {
	return `--${tag.replaceAll(/\s+/g, `-`)}`;
}

/* ------------------
	HEADER/FOOTER
------------------ */

// write in main-nav and footer content
function generateHubLinks() {
	return `<li class="dropdown"><a href="javascript:void(0)" class="dropbtn">hubs</a><div class="dropdown-content">${hubLinks.map(link => `<a href="${pathToInfo}${link.filename}">${link.name}</a>`).join(``)}</li>`;
};

document.getElementById(`header`).innerHTML = `
<nav id="main-nav"><ul class="flex-list">${navLinks.map(link => `<li><a href="${pathToInfo}${link.filename}">${link.name}</a></li>`).join(``)}${generateHubLinks()}</ul></nav>
${messagesOn && messages.length > 0
? `<div id="header-message">${messages[Math.floor(Math.random() * messages.length)]}</div>`
: ``}
`;

/* ----------
	LISTS
---------- */

// build list of latest X blog posts for the home page
const latestPosts = document.getElementById(`latest-posts`);
if (latestPosts) latestPosts.innerHTML = posts.slice(0, latestPostsCutoff).map(formatPostLink).join(``);

// build list of all blog posts for the main blog page
const allPosts = document.getElementById(`all-posts`);
if (allPosts) allPosts.innerHTML = posts.map(formatPostLink).join(``);

// build tag list and list posts by tag on tags page
const tagsList = document.getElementById(`tag-index`);
if (tagsList) {
	const postsByTag = {};

	// for each tag, make a set of indices of posts with that tag
	posts.forEach((post, i) => post.tags.forEach(tag => {
		postsByTag[tag] ??= new Set();
		postsByTag[tag].add(i);
	}));

	tagsList.innerHTML = Object.entries(postsByTag).map(([tag, postIndices]) => `
	<li id="${formatTagHash(tag)}">
		<details>
			<summary>${tag}</summary>
			<ol class="post-list" reversed>${[...postIndices].map(i => formatPostLink(posts[i])).join(``)}</ol>
		</details>
	</li>
	`).join(``);

	// if URL includes hash with tag name, open its post list
	if (location.hash.length > 0) {
		const selectedTag = document.getElementById(location.hash.slice(1));
		if (selectedTag) selectedTag.querySelector(`details`).open = true;
	}
}

/* --------------
	BLOG POST
-------------- */

if (inPost) {
	// get index of post matching path (cut off file extension so if webhost cuts off extension the script still works)
	const i = posts.findIndex(post => post.filename === path.at(-1).split(`.html`)[0]);

	const postDate = document.getElementById(`post-date`);
	const pathDate = posts[i].filename.substring(0, 10);
	postDate.dateTime = pathDate;
	postDate.innerHTML = new Date(pathDate).toLocaleDateString();

	if (posts[i].tags) document.getElementById(`post-tags`).innerHTML = posts[i].tags.map(tag => `<li><a href="${pathToInfo}tags.html#${formatTagHash(tag)}">${tag}</a></li>`).join(``);

	// link to previous and next posts (if this post is first/latest, link to index instead of previous/next post)
	let postNav = ``;

	postNav += `<li>${i < posts.length - 1
	? `<a href="${pathToPosts}${posts[i + 1].filename}.html" rel="prev">${posts[i + 1].title}</a>`
	: `<a href="${pathToInfo}index.html" rel="index">Back to index</a>`}</li>`;
	postNav += `<li>${i > 0
	? `<a href="${pathToPosts}${posts[i - 1].filename}.html" rel="next">${posts[i - 1].title}</a>`
	: `<a href="${pathToInfo}index.html" rel="index">Back to index</a>`}</li>`;

	document.getElementById(`post-nav`).innerHTML = `<ul>${postNav}</ul>`;
}
