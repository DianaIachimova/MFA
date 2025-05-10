const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

const generateSecret = (username) => {
  const secret = speakeasy.generateSecret({
    name: `AndysApp:${username}`,
    issuer: 'AndysApp'
  });
  return secret;
};

const generateQRCode = async (otpauthUrl) => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(otpauthUrl);
    return qrCodeDataUrl;
  } catch (error) {
    throw new Error('Failed to generate QR code');
  }
};

const verifyToken = (token, secret) => {
  return speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: token,
    window: 1 
  });
};

module.exports = {
  generateSecret,
  generateQRCode,
  verifyToken
}; 