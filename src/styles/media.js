const size = {
  tablet: '1024px',
  bigPhone: '840px',
  phone: '767px',
  smallPhone: '480px',
};

const media = {
  primary: `(max-width: ${size.tablet})`,
  bigPhone: `(max-width: ${size.bigPhone})`,
  secondary: `(max-width: ${size.phone})`,
  smallPhone: `(max-width: ${size.smallPhone})`,
};

export default media;

// Media Query Manifest

// Primary Mobile
// @media ${media.primary} {}

// Big Phone
// @media ${media.bigPhone} {}

// Secondary Mobile
// @media ${media.secondary} {}

// Small Phone
// @media ${media.smallPhone} {}
