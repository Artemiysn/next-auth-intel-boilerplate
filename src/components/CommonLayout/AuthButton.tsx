'use client';
import { useState } from 'react';
import { buttonClass } from '../ui/Button';

type Props = {
  loginText: string;
  logoutText: string;
  email: string;
};

export default function AuthButton({ loginText, logoutText, email }: Props) {
  // Имитация состояния авторизации
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <div className="flex items-center gap-4">

      {isLoggedIn && (
        <span className="text-sm text-gray-600 truncate max-w-[150px]">
          {email}
        </span>
      )}
      <button 
        onClick={handleAuth}
        className={buttonClass}
      >
        {isLoggedIn ? logoutText : loginText}
      </button>

    </div>
  );
}