import LoginForm from '@/components/LoginForm';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Giriş Yap',
    description: 'Hesabınıza giriş yapın',
};

type Props = {}

function page({ }: Props) {
    return (
        <div className=''>
            <LoginForm />
        </div>
    )
}

export default page