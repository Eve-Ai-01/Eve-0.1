import 'dotenv/config';

const tokenChecks = {
  'TWITTER_API_KEY': {
    pattern: /^[A-Za-z0-9]{25}$/,
    description: 'Should be 25 characters of letters and numbers'
  },
  'TWITTER_API_SECRET': {
    pattern: /^[A-Za-z0-9]{50}$/,
    description: 'Should be 50 characters of letters and numbers'
  },
  'TWITTER_ACCESS_TOKEN': {
    pattern: /^\d{18,19}-[A-Za-z0-9]{40}$/,
    description: 'Should be in format: [numeric]-[alphanumeric]'
  },
  'TWITTER_ACCESS_TOKEN_SECRET': {
    pattern: /^[A-Za-z0-9]{45}$/,
    description: 'Should be 45 characters of letters and numbers'
  }
};

console.log('\nToken Format Validation:');
console.log('----------------------');

for (const [key, check] of Object.entries(tokenChecks)) {
  const value = process.env[key];
  if (!value) {
    console.log(`\n${key}: Missing`);
    continue;
  }
  
  const isValid = check.pattern.test(value);
  console.log(`\n${key}:`);
  console.log(`Expected format: ${check.description}`);
  console.log(`Format valid: ${isValid ? '✓ Yes' : '✗ No'}`);
  if (!isValid) {
    console.log(`Current length: ${value.length} characters`);
    console.log('Check for:');
    console.log('- Extra spaces at start/end');
    console.log('- Quotes around the value');
    console.log('- Line endings or other hidden characters');
  }
}
