'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'


type Props = {}

function SignOut({ }: Props) {
    return (
        <button onClick={() => signOut({ callbackUrl: '/auth/login' })} className="px-4 py-2 bg-gradient-to-r from-purple-700 to-pink-500 text-white rounded-3xl hover:bg-gradient-to-l transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer">
            <LogOut />
        </button>
    )
}

export default SignOut