const security = {
  csp: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:", "blob:"],
    fontSrc: ["'self'"],
    connectSrc: ["'self'"],
    frameAncestors: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"],
  },
  headers: {
    strictTransportSecurity: "max-age=63072000; includeSubDomains; preload",
    xContentTypeOptions: "nosniff",
    xFrameOptions: "SAMEORIGIN",
    xXSSProtection: "1; mode=block",
    referrerPolicy: "strict-origin-when-cross-origin",
    permissionsPolicy: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  allowedImageDomains: ["github.com", "avatars.githubusercontent.com"],
};

export default security;
