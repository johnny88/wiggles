import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup } from '@fortawesome/pro-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import '~/components/transitions';

export const BottomNavigation = () => (
  <div className="z-10 bg-gray-100 flex items-center justify-center w-full py-3 border-t-2 border-purple-600 pin-b px-12">
    <div className="flex items-center justify-around flex-shrink w-full max-w-lg">
      <NavButton
        to="/"
        icon={{ prefix: 'far', iconName: 'home' }}
        text="Feed"
      />
      <UploadButton />
      <NavButton
        to="/profile"
        icon={{ prefix: 'far', iconName: 'user' }}
        text="Profile"
      />
    </div>
  </div>
);

type NavButtonProps = {
  icon: IconLookup;
  text: string;
  to: string;
};

const NavButton = ({ icon, text, to }: NavButtonProps) => (
  <NavLink
    exact={to === '/'}
    to={to}
    activeClassName="text-purple-400"
    className="flex flex-col items-center px-4 text-gray-400 no-underline color-transition outline-none"
  >
    <FontAwesomeIcon
      className="pb-1 h-12"
      role="button"
      size="3x"
      icon={icon}
    />
  </NavLink>
);

const UploadButton = () => {
  return (
    <div className="text-purple-800 border-4 p-2 border-purple-800 h-12 w-12 flex items-center justify-center rounded-full">
      <div className="pt-1">
        <FontAwesomeIcon className="pb-1" role="button" size="2x" icon="plus" />
      </div>
    </div>
  );
};
