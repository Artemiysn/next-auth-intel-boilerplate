'use client';
import { useState } from 'react';
import { buttonClass } from '../ui/Button';
import router from 'next/router';
import { useRouter } from "next/navigation";

type Props = {
  loginText: string;
  logoutText: string;
  email: string | undefined;
  isLoggedIn: boolean;
};

export default function AuthButton({ loginText, logoutText, email }: Props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleAuth = async () => {
    const apiPath = isLoggedIn ? '/api/logout' : '/api/login';
    
    const response = await fetch(apiPath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // здесь отправляются какие-то данные пользователя на бек - Артем
      // ....  
    });

    if (response.ok) {
      router.refresh(); 
    } else {
      console.error(`Ошибка логина'}`);
    }
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