'use client';
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, Chrome } from 'lucide-react';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState('');

    const handleSubmit = async () => {
        setIsLoading(true);

        signIn('auth0', {
            email: formData.email,
            password: formData.password,
        }
        )
    };

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-500 via-purple-200 to-gray-400 flex items-center justify-center p-4">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(148_163_184_/_0.1)_1px,_transparent_0)] bg-[size:20px_20px] opacity-30"></div>

            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        {isLogin ? 'Tekrar Hoş Geldiniz' : 'Hesap Oluşturun'}
                    </h1>
                    <p className="text-gray-500 text-sm">
                        {isLogin ? 'Hesabınıza giriş yapın' : 'Yeni hesabınızı oluşturun'}
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl shadow-gray-200/20">
                    <div className="space-y-5">

                        <button
                            onClick={() => signIn('auth0', { callbackUrl: '/dashboard' })}
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 text-white py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/50 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 group"
                        >
                            <div className="flex items-center justify-center space-x-2">
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>{isLogin ? 'OAuth İle Giriş Yap' : 'Hesap Oluştur'}</span>
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </div>
                        </button>

                        {/* Divider */}
                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500"></span>
                            </div>
                        </div>

                        {/* Social Login */}
                        {/* <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center cursor-pointer justify-center px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="text-sm font-medium">Google</span>
                            </button>
                            <button className="flex items-center cursor-pointer justify-center px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm">
                                <svg className="w-5 h-5 mr-2" fill="#1DA1F2" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                                <span className="text-sm font-medium">Twitter</span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}