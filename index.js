const posts = [
	{
		name: "Vincent van Gogh",
		username: "vincey1853",
		location: "Zundert, Netherlands",
		avatar: "images/avatar-vangogh.jpg",
		alt: "vangogh",
		post: "images/post-vangogh.jpg",
		comment: "just took a few mushrooms lol",
		likes: 21,
		class: "heart1",
		countclass: "count1",
		postclass: "img1",
	},
	{
		name: "Gustave Courbet",
		username: "gus1819",
		location: "Ornans, France",
		avatar: "images/avatar-courbet.jpg",
		alt: "courbet",
		post: "images/post-courbet.jpg",
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
		class: "heart2",
		countclass: "count2",
		postclass: "img2",
	},
	{
		name: "Joseph Ducreux",
		username: "jd1735",
		location: "Paris, France",
		avatar: "images/avatar-ducreux.jpg",
		alt: "ducreux",
		post: "images/post-ducreux.jpg",
		comment:
			"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
		likes: 152,
		class: "heart3",
		countclass: "count3",
		postclass: "img3",
	},
];

const main = document.querySelector("main");

function renderPosts() {
	let innerHtmlContent = "";
	for (let i = 0; i < posts.length; i++) {
		innerHtmlContent += `<section>
		<div class="user-info">
					<img
						class="post-avatar"
						src=${posts[i].avatar}
						alt=${posts[i].alt} />
					<div>
						<p class="user-full-name">${posts[i].name}</p>
						<p class="location-text">${posts[i].location}</p>
					</div>
				</div>

				<img
					class="post-img ${posts[i].postclass}"
					src="${posts[i].post}"
					alt="${posts[i].alt}" />

				<div class="body-container">
					<div class="icons-container">
						<img
							class="icons ${posts[i].class}"
							src="images/icon-heart.png"
							alt="like icon" />
						<img
							class="icons"
							src="images/icon-comment.png"
							alt="comment icon" />
						<img class="icons" src="images/icon-dm.png" alt="dm icon" />
					</div>
					<p class="like-count ${posts[i].countclass}">${posts[i].likes} likes</p>
					<p class="username-caption">
						<span>${posts[i].username}</span> ${posts[i].comment}
					</p>
				</div>
				</section>`;
	}
	return innerHtmlContent;
}
main.innerHTML = renderPosts();

function addOneLike() {
	for (let i = 0; i < posts.length; i++) {
		const heartEl = document.querySelector(`.${posts[i].class}`);
		const likesEl = document.querySelector(`.${posts[i].countclass}`);
		function singleClickHeart() {
			heartEl.addEventListener("click", function () {
				posts[i].likes++;
				likesEl.textContent = posts[i].likes + " likes";
			});
		}
		singleClickHeart();
		const postImg = document.querySelector(`.${posts[i].postclass}`);
		postImg.addEventListener("dblclick", function () {
			posts[i].likes++;
			likesEl.textContent = posts[i].likes + " likes";
		});
	}
}
addOneLike();
