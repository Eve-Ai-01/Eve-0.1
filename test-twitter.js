import 'dotenv/config';
import { TwitterApi } from 'twitter-api-v2';

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
  } catch (error) {
    console.error('Twitter API Error:', error);
  }
}

testTwitter();
