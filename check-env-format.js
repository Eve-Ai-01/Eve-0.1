import 'dotenv/config';

const keys = [
  'TWITTER_API_KEY',
  'TWITTER_API_SECRET',
  'TWITTER_ACCESS_TOKEN',
  'TWITTER_ACCESS_TOKEN_SECRET'
];

console.log('Environment Variables Format Check:');
console.log('--------------------------------');

for (const key of keys) {
  const value = process.env[key];
  if (!value) continue;

  console.log(`\n${key}:`);
  console.log('Raw value length:', value.length);
  console.log('Trimmed value length:', value.trim().length);
  console.log('Contains spaces at start/end:', value.length !== value.trim().length);
  console.log('Contains quotes:', value.includes('"') || value.includes("'"));
  console.log('Contains newline:', value.includes('\n') || value.includes('\r'));
  console.log('Contains hyphen:', value.includes('-'));
  
  // Show character codes to detect hidden characters
  console.log('Character codes:');
  const codes = [...value].map(c => c.charCodeAt(0));
  console.log(codes.join(' '));
  
  // Highlight any suspicious character codes
  const suspicious = codes.filter(code => code < 32 || code > 126);
  if (suspicious.length > 0) {
    console.log('WARNING: Found suspicious characters with codes:', suspicious);
  }
}
