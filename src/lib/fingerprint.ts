import { supabase, checkSupabaseAvailable } from './supabaseClient';

export interface DeviceFingerprint {
  ipAddress?: string;
  timezone: string;
  language: string;
  screenResolution: string;
  hardwareConcurrency: number;
  canvasHash: string;
  webglRenderer: string;
  userAgent: string;
  platform: string;
}

// Generate canvas fingerprint
const generateCanvasHash = (): string => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return 'no-canvas';

    canvas.width = 200;
    canvas.height = 50;
    
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText('Browser Fingerprint', 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText('Browser Fingerprint', 4, 17);

    return canvas.toDataURL();
  } catch (e) {
    return 'canvas-error';
  }
};

// Get WebGL renderer info
const getWebGLRenderer = (): string => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) return 'no-webgl';
    
    const debugInfo = (gl as any).getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      return (gl as any).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }
    
    return 'webgl-no-debug';
  } catch (e) {
    return 'webgl-error';
  }
};

// Get public IP address
const getPublicIP = async (): Promise<string | undefined> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (e) {
    console.error('Failed to get IP:', e);
    return undefined;
  }
};

// Generate complete device fingerprint
export const generateFingerprint = async (): Promise<DeviceFingerprint> => {
  const ipAddress = await getPublicIP();
  
  return {
    ipAddress,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
    screenResolution: `${screen.width}x${screen.height}x${screen.colorDepth}`,
    hardwareConcurrency: navigator.hardwareConcurrency || 0,
    canvasHash: generateCanvasHash(),
    webglRenderer: getWebGLRenderer(),
    userAgent: navigator.userAgent,
    platform: navigator.platform,
  };
};

// Create a unique hash from fingerprint data
export const createFingerprintHash = (fingerprint: DeviceFingerprint): string => {
  const data = JSON.stringify(fingerprint);
  let hash = 0;
  
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  return Math.abs(hash).toString(36);
};

// Store fingerprint in localStorage as backup
export const storeLocalFingerprint = (hash: string) => {
  localStorage.setItem('device_fingerprint', hash);
};

// Get stored fingerprint from localStorage
export const getLocalFingerprint = (): string | null => {
  return localStorage.getItem('device_fingerprint');
};

// Identify or create user based on fingerprint
export const identifyUser = async (): Promise<string | null> => {
  if (!checkSupabaseAvailable() || !supabase) {
    console.log('Supabase not ready, fingerprinting disabled');
    return null;
  }

  try {
    const fingerprint = await generateFingerprint();
    const fingerprintHash = createFingerprintHash(fingerprint);
    
    // Store in localStorage as backup
    storeLocalFingerprint(fingerprintHash);
    
    // Call edge function to identify/create user
    const { data, error } = await supabase.functions.invoke('identify-user', {
      body: { fingerprint, fingerprintHash }
    });
    
    if (error) {
      console.error('Error identifying user:', error);
      return null;
    }
    
    return data?.fingerprintId || null;
  } catch (e) {
    console.error('Failed to identify user:', e);
    return null;
  }
};
