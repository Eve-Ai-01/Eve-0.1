import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';

dotenv.config();

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

async function testTwitter() {
  try {
    const me = await client.v2.me();
    console.log('Twitter credentials working! Logged in as:', me.data);
    
    // Test posting capability
    try {
      const tweet = await client.v2.tweet('Test tweet from Eliza bot - ' + new Date().toISOString());
      console.log('Successfully posted tweet:', tweet.data);
    } catch (tweetError) {
      console.error('Error posting tweet:', tweetError);
    }
  } catch (error) {
    console.error('Twitter API Error:', error);
  }
}

testTwitter();
