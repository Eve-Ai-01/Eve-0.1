import 'dotenv/config';
import client from '@elizaos/client-twitter';

async function debugTwitterClient() {
  try {
    console.log('Environment variables:');
    const envVars = [
      'TWITTER_COOKIES_AUTH_TOKEN',
      'TWITTER_COOKIES_CT0',
      'TWITTER_COOKIES_GUEST_ID'
    ];
    
    for (const key of envVars) {
      const value = process.env[key];
      console.log(`${key}: ${value ? `${value.substring(0, 4)}...${value.substring(value.length - 4)}` : 'undefined'}`);
    }

    console.log('\nInitializing Twitter client...');
    const twitterClient = client({
      settings: {
        secrets: {}
      }
    });

    console.log('\nTwitter client initialized successfully!');
    
    // Try a simple operation
    console.log('\nTesting connection...');
    await twitterClient.connect();
    console.log('Connection successful!');

  } catch (error) {
    console.error('\nError occurred:');
    console.error('Name:', error.name);
    console.error('Message:', error.message);
    if (error.stack) {
      console.error('\nStack trace:', error.stack);
    }
  }
}

debugTwitterClient();
