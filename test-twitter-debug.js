import { TwitterApi } from 'twitter-api-v2';

const credentials = {
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
};

console.log('Credentials being used:');
for (const [key, value] of Object.entries(credentials)) {
  console.log(`${key}: ${value ? value.substring(0, 4) + '...' + value.substring(value.length - 4) : 'undefined'}`);
}

async function testTwitter() {
  try {
    console.log('\nInitializing Twitter client...');
    const client = new TwitterApi(credentials);
    
    console.log('Making API request...');
    const me = await client.v2.me();
    console.log('Success! Logged in as:', me.data);
  } catch (error) {
    console.error('\nError details:');
    console.error('Name:', error.name);
    console.error('Message:', error.message);
    if (error.data) {
      console.error('API Error Data:', JSON.stringify(error.data, null, 2));
    }
    if (error.stack) {
      console.error('\nStack trace:', error.stack);
    }
  }
}

testTwitter();
