import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup, IconName } from '@fortawesome/pro-solid-svg-icons';
import { NavLink, useRouteMatch } from 'react-router-dom';
import '~/components/transitions';

export const BottomNavigation = () => (
  <div className="z-10 bg-gray-100 flex items-center justify-center w-full border-t-2 border-purple-500 pin-b">
    <div className="flex items-center justify-center flex-shrink w-full">
      <NavButton to="/" iconName="home" text="Feed" />
      <button>
        <Icon icon={{ prefix: 'far', iconName: 'plus-circle' }} />
      </button>
      <NavButton to="/profile" iconName="user" text="Profile" />
    </div>
  </div>
);

type NavButtonProps = {
  iconName: IconName;
  text: string;
  to: string;
};

const NavButton = ({ iconName, text, to }: NavButtonProps) => {
  const match = useRouteMatch(to);
  return (
    <NavLink exact={to === '/'} to={to}>
      <Icon
        icon={{ prefix: match?.isExact ? 'fas' : 'far', iconName: iconName }}
      />
    </NavLink>
  );
};

const Icon = ({ icon }: { icon: IconLookup }) => (
  <div className="flex text-purple-500 h-12 px-4 items-center justify-center rounded-full">
    <FontAwesomeIcon className="pb-1" role="button" size="2x" icon={icon} />
  </div>
);
