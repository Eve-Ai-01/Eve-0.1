import 'dotenv/config';

const cookieCheck = {
  'TWITTER_COOKIES_AUTH_TOKEN': {
    required: true,
    minLength: 40,
    description: 'Twitter auth_token cookie'
  },
  'TWITTER_COOKIES_CT0': {
    required: true,
    minLength: 30,
    description: 'Twitter ct0 cookie (csrf token)'
  }
};

console.log('\nTwitter Cookie Check:');
console.log('-------------------');

let hasErrors = false;

for (const [key, check] of Object.entries(cookieCheck)) {
  const value = process.env[key];
  console.log(`\n${check.description} (${key}):`);
  
  if (!value) {
    console.log('❌ Missing');
    hasErrors = true;
    continue;
  }

  console.log(`Length: ${value.length} characters`);
  
  if (check.minLength && value.length < check.minLength) {
    console.log(`❌ Too short (should be at least ${check.minLength} characters)`);
    hasErrors = true;
  }

  // Check for common issues
  if (value.includes(' ')) {
    console.log('❌ Contains spaces');
    hasErrors = true;
  }
  
  if (value.includes('"') || value.includes("'")) {
    console.log('❌ Contains quotes');
    hasErrors = true;
  }
  
  if (value.includes('\n') || value.includes('\r')) {
    console.log('❌ Contains newlines');
    hasErrors = true;
  }
}

if (hasErrors) {
  console.log('\n❌ Some issues were found with your cookies. Please update them with fresh values.');
} else {
  console.log('\n✅ Cookie format looks good! Try running the app now.');
}
