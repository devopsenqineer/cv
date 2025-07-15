'use client';

import { useEffect, useState } from 'react';
import { Avatar } from '@heroui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';

const AuthAvatar = () => {
  const { data: session } = useSession();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  useEffect(() => {
    if (session?.user?.image) {
      setIsSignedIn(true);
      setAvatarUrl(session.user.image); // Set avatar URL from session
    } else {
      setIsSignedIn(false);
      setAvatarUrl(''); // Fallback to empty string
    }
  }, [session]);

  // UI entfernt
  return null;
}
export default AuthAvatar;
