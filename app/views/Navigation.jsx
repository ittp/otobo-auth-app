import React, { useEffect } from 'react';

let NavigationItems = [
  'Main',
  'Search',
  'Reports',
  'Tickets',
  'Profile',
  'Settings',
];

let User = {};
let Settings = {};


let isAuthorizedUser = (username) => (username === username ? true : false);

export default function Navigation() {
  return <div>1</div>;
}
