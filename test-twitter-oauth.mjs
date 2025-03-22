import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';

dotenv.config();

// Create client with OAuth 2.0 credentials
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
}).readWrite;

async function testTwitter() {
  try {
    // Verify credentials
    const me = await client.v2.me();
    console.log('Successfully authenticated! User ID:', me.data.id);
    console.log('Username:', me.data.username);
    
    // Test posting a tweet
    const tweet = await client.v2.tweet({
      text: `Test tweet from Eliza bot - ${new Date().toISOString()}`
    });
    console.log('Successfully posted tweet:', tweet.data);
    
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      data: error.data,
      rateLimitInfo: error.rateLimit,
      requestError: error.request
    });
  }
}

testTwitter();
