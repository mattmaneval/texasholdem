const size = {
  tablet: '1024px',
  bigPhone: '840px',
  phone: '767px',
  smallPhone: '480px'
}

const media = {
  primary: `(max-width: ${size.tablet})`,
  bigPhone: `(max-width: ${size.bigPhone})`,
  secondary: `(max-width: ${size.phone})`,
  smallPhone: `(max-width: ${size.smallPhone})`,
};

export default media;

// Media Query Manifest

// Primary Mobile
// @media ${media.primary} {} // End Primary Mobile

// Big Phone
// @media ${media.bigPhone} {} // End Big Phone

// Secondary Mobile
// @media ${media.secondary} {} // End Secondary Mobile

// Small Phone
// @media ${media.smallPhone} {} // End Small Phone
