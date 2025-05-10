import React from 'react';
import { UserAddIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserIcon() {
  const navigate = useNavigate();
  const { username } = useSelector(state => state.user);

  const handleClick = () => {
    if (username) {
     
    } else {
      navigate('login');
    }
  };

  return (
    <div 
      className="flex items-center group hover:text-yellow-400 cursor-pointer"
      onClick={handleClick}
    >
      <UserAddIcon className="h-8 w-8 text-white group-hover:text-yellow-400" />
      <span className="text-white ml-2 text-base font-thin group-hover:text-yellow-400">
        {username || 'Login'}
      </span>
    </div>
  );
}

export default UserIcon; 