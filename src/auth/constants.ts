export const passwordConstants = {
  iterations: 10,
  keyLength: 64,
  saltLength: 32,
  hashAlgorithm: 'sha512',
};

export const jwtConstants = {
  secret: 'supersecret',
  expiresIn: '2h',
};
