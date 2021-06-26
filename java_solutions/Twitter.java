import java.util.*;

public class Twitter {

  class Tweet {
    int tweetId, userId, time;

    Tweet(int tweetId, int userId, int time) {
      this.tweetId = tweetId;
      this.userId = userId;
      this.time = time;
    }
  }

  class TweetComparator implements Comparator<Tweet> {

    @Override
    public int compare(Twitter.Tweet o1, Twitter.Tweet o2) {
      return o2.time - o1.time;
    }

  }

  Map<Integer, List<Integer>> userFollowers;
  Map<Integer, PriorityQueue<Tweet>> userTweets;
  int time;

  /** Initialize your data structure here. */
  public Twitter() {
    this.userFollowers = new HashMap<Integer, List<Integer>>();
    this.userTweets = new HashMap<Integer, PriorityQueue<Tweet>>();
    this.time = 0;
  }

  private void addTweetToFeed(int userId, Tweet tweet) {
    PriorityQueue<Tweet> feed = this.userNewsFeed.getOrDefault(tweet.userId,
        new PriorityQueue<Tweet>(new TweetComparator()));
    if (feed.size() == 10) {
      feed.poll();
    }
    feed.add(tweet);
    this.userNewsFeed.put(userId, feed);
  }

  private void addNewTweet(Tweet tweet) {
    // add this tweet to own news feed
    this.addTweetToFeed(tweet.userId, tweet);

    // add this tweet to followers of tweet user
    if (userFollowedBy.containsKey(tweet.userId)) {
      List<Integer> followedBy = userFollowedBy.get(tweet.userId);
      for (Integer userId : followedBy) {
        this.addTweetToFeed(userId, tweet);
      }
    }
  }

  private void addFolowerTweets(int userId, int followeeId) {
    if (this.userTweets.containsKey(followeeId)) {
      // check if this user's tweet has any recent value that can be added to users
      // feed
      PriorityQueue<Tweet> followeeTweets = this.userTweets.get(followeeId);
      PriorityQueue<Tweet> feed = this.userNewsFeed.getOrDefault(userId,
      new PriorityQueue<Tweet>(new TweetComparator()));;
      while(followeeTweetsfeed.size()<10 .peek().time > )
    }
  }

  /** Compose a new tweet. */
  public void postTweet(int userId, int tweetId) {
    PriorityQueue<Tweet> tweets = userTweets.getOrDefault(userId, new PriorityQueue<Tweet>(new TweetComparator()));
    Tweet tweet = new Tweet(tweetId, userId, ++this.time);
    tweets.add(tweet);
    userTweets.put(userId, tweets);

    this.addNewTweet(tweet);
  }

  /**
   * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in
   * the news feed must be posted by users who the user followed or by the user
   * herself. Tweets must be ordered from most recent to least recent.
   */
  public List<Integer> getNewsFeed(int userId) {

  }

  /**
   * Follower follows a followee. If the operation is invalid, it should be a
   * no-op.
   */
  public void follow(int followerId, int followeeId) {
    List<Integer> followers = this.userFollowers.getOrDefault(followerId, new ArrayList<Integer>());
    followers.add(followeeId);
  }

  /**
   * Follower unfollows a followee. If the operation is invalid, it should be a
   * no-op.
   */
  public void unfollow(int followerId, int followeeId) {

  }
}

/**
 * Your Twitter object will be instantiated and called as such: Twitter obj =
 * new Twitter(); obj.postTweet(userId,tweetId); List<Integer> param_2 =
 * obj.getNewsFeed(userId); obj.follow(followerId,followeeId);
 * obj.unfollow(followerId,followeeId);
 */