import React from 'react';

const CircleMinus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={props.collapsed ? 'collapsed' : 'expanded'}>
    <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

export default CircleMinus;