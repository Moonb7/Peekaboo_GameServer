/**
 * Vivox 토큰 생성
 * @param {string} userId - 로그인한 유저 ID
 * @returns {string} Vivox Access Token
 */
export function generateVivoxToken(userId) {
  const payload = {
    iss: ISSUER,
    vxa: userId, // Vivox 계정 ID 게임에서 사용할 유저의 고유한 ID
    exp: Math.floor(Date.now() / 1000) + EXPIRATION_TIME,
  };

  return jwt.sign(payload, VIVOX_SECRET_KEY, { algorithm: 'HS256' });
}
