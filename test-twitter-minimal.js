import 'dotenv/config';
import { createAgent } from './src/index.ts';
import { character } from './src/character.ts';

async function testTwitter() {
  try {
    console.log('Environment variables loaded:');
    [
      'TWITTER_COOKIES_AUTH_TOKEN',
      'TWITTER_COOKIES_CT0',
      'TWITTER_API_KEY',
      'TWITTER_API_SECRET',
      'TWITTER_ACCESS_TOKEN',
      'TWITTER_ACCESS_TOKEN_SECRET'
    ].forEach(key => {
      const value = process.env[key];
      if (value) {
        console.log(`${key}: ${value.substring(0, 4)}...${value.substring(value.length - 4)}`);
      } else {
        console.log(`${key}: missing`);
      }
    });

    console.log('\nInitializing agent...');
    const agent = createAgent(
      character,
      null, // db
      null, // cache
      'dummy-token' // token
    );

    console.log('Agent created successfully');
    console.log('Initializing...');
    await agent.initialize();
    console.log('Initialization complete');

  } catch (error) {
    console.error('Error:', error);
    console.error('Stack:', error.stack);
  }
}

testTwitter();
