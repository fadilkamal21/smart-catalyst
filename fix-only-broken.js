// fix-only-broken.js
const fs = require('fs');

console.log('🔧 Fixing only the broken function...');

try {
    const script = fs.readFileSync('script-prod.js', 'utf8');
    
    // Hapus hanya function yang rusak
    const fixedScript = script.replace(
        /function\s*\{[^}]*setInterval\([^}]*\}[^}]*\}[^}]*\}/g, 
        '// Cache monitoring disabled in production'
    );
    
    fs.writeFileSync('script-prod.js', fixedScript);
    console.log('✅ Fixed! Only removed the broken function.');
    
} catch (error) {
    console.error('❌ Fix failed:', error);
}