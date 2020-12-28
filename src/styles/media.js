const size = {
  tablet: '1024px',
  bigphone: '840px',
  phone: '767px',
  smallphone: '480px'
}

const media = {
  primary: `(max-width: ${size.tablet})`,
  bigphone: `(max-width: ${size.bigphone})`,
  secondary: `(max-width: ${size.phone})`,
  smallphone: `(max-width: ${size.smallphone})`,
};

export default media;
