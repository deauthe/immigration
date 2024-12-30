"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
type Props = {}

const LoginPage = (props: Props) => {
  const [password, setPassword] = React.useState<string>("");
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_DASHBOARD_PASSWD) {
      {
        document.cookie = `route-password=${password}`;
        router.push("/dashboard/users");
      }
    }
    else {
      toast({
        title: "Invalid Password",
      })
    }
  }
  return (
    <form onSubmit={handleLogin} className='mt-32 text-white flex flex-col gap-2 '>
      <div className='flex flex-col gap-2 mx-auto'>
        <p className='du-label'>enter dashbaord password</p>
        <input
          className="du-input bg-white/50"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>

      </div>
    </form>
  )
}

export default LoginPage;

