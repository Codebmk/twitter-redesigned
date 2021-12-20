import tweetsList from "../data-store/tweets.js";
const tweetsListDiv = document.getElementById("tweets-list");

// display list of tweets
for (let i = 0; i < tweetsList.length; i++) {
    const tweetItemDiv = document.createElement("div");
    tweetItemDiv.className = "tweet-item";
    tweetItemDiv.innerHTML = `
        <div class="profile-img">
            <img src="./images/${tweetsList[i].profile_img}" alt="Profile Image of ${tweetsList[i].author}" />
        </div>
        <div class="tweet-content">
            <div class="tweet-author-label">
                <h3 class="tweet-author-name">${tweetsList[i].author}</h3>
                <div class="dot-separator"></div>
                <h3 class="tweet-author-handle">${tweetsList[i].handle}</h3>
                <div class="dot-separator"></div>
                <h3 class="tweet-time-created">${tweetsList[i].time_created}</h3>
            </div>
            <div class="tweet-message">
                <p>${tweetsList[i].text_message}</p>
                <img src="./images/${tweetsList[i].image}" alt="Profile Image of Kenny Rogers" />
            </div>
            <div class="tweet-social">
                <span class="icon">
                    <i>Reply</i>${tweetsList[i].replies}
                </span>
                <span class="icon">
                    <i>Retweet</i>${tweetsList[i].retweets}
                </span>
                <span class="icon">
                    <i>Like</i>${tweetsList[i].likes}
                </span>
                <span class="icon">
                    <i>Share</i>
                </span>
            </div>
        </div>
    `;
    tweetsListDiv.appendChild(tweetItemDiv);
}
