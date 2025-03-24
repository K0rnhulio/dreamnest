import { auth } from '@/app/api/auth/[...nextauth]/auth-options';
import { SignInButton } from '@/components/navbar/sign-in-button';
import { UserDropdown } from '@/components/navbar/user-dropdown';
import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';
import { Heart } from 'lucide-react';

export const Navbar = async () => {
  const session = await auth();

  return (
    <header className="w-full border-b border-pink-100/30 dark:border-pink-900/20 relative overflow-hidden" style={{ transform: 'translate3d(0, 0, 0)' }}>
      {/* Subtle decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-100/10 to-purple-100/5 dark:from-pink-900/10 dark:to-purple-900/5 rounded-full blur-xl -z-10"></div>
      
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-x-2 group">
          <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
            <Heart className="h-8 w-8 text-pink-400" fill="rgba(236, 72, 153, 0.3)" strokeWidth={1.5} />
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            {m.app_name()}
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {session ? <UserDropdown session={session} /> : <SignInButton />}
        </div>
      </div>
    </header>
  );
};
