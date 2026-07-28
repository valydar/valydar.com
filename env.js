// Auto-detect API environment based on hostname
window.VALYDAR_API_BASE = window.location.hostname.includes('dev')
  ? 'https://api.dev.valydar.com'
  : 'https://api.valydar.com';
