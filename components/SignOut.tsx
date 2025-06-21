'use client'
import React from 'react'
import { signOut } from 'next-auth/react'


type Props = {}

function SignOut({ }: Props) {
    return (
        <button onClick={() => signOut({ callbackUrl: '/auth/login' })} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Logout
        </button>
    )
}

export default SignOut