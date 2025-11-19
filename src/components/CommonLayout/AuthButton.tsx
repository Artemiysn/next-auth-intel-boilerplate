'use client';
import { useState } from 'react';
import { buttonClass } from '../ui/Button';
import { useRouter } from "next/navigation";

type Props = {
  loginText: string;
  logoutText: string;
  email: string | undefined;
  isLoggedIn: boolean;
  loadingText: string;
};

export default function AuthButton({isLoggedIn, loginText, logoutText, email, loadingText }: Props) {

  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const router = useRouter();

  const handleAuth = async () => {
    const apiPath = isLoggedIn ? '/api/logout' : '/api/login';
    setIsAuthLoading(true);
    const response = await fetch(apiPath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // здесь отправляются какие-то данные пользователя на бек - Артем
      // ....  
    });
    setIsAuthLoading(false);
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
        className={`${buttonClass} min-w-[120px]`}
      >
        {isAuthLoading ? loadingText : isLoggedIn ? logoutText : loginText}
      </button>

    </div>
  );
}