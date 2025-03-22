import 'dotenv/config';

const requiredEnvVars = [
  'TWITTER_API_KEY',
  'TWITTER_API_SECRET',
  'TWITTER_ACCESS_TOKEN',
  'TWITTER_ACCESS_TOKEN_SECRET'
];

const missing = [];
const present = [];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    missing.push(envVar);
  } else {
    present.push(`${envVar} (length: ${process.env[envVar].length})`);
  }
}

console.log('\nEnvironment Variables Check:');
console.log('---------------------------');
if (present.length > 0) {
  console.log('\nPresent variables:');
  present.forEach(v => console.log(`✓ ${v}`));
}
if (missing.length > 0) {
  console.log('\nMissing variables:');
  missing.forEach(v => console.log(`✗ ${v}`));
}
