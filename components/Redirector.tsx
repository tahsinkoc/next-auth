'use client';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'

type Props = {}

function Redirector({ }: Props) {

    useEffect(() => {
        redirect("/auth/login")
    }, [])

    return (
        <div></div>
    )
}

export default Redirector