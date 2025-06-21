
import { X } from 'lucide-react';
import React from 'react'

type Props = {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ isOpen, onClose }: Props) {

    return (
        <div className={`w-full h-screen overflow-y-scroll fixed top-0 left-0 z-[99999999] py-10 bg-white/30 backdrop-blur-lg ${isOpen ? 'block' : 'hidden'}`}>
            <div className='max-w-[60rem] mx-auto bg-white rounded-2xl p-4 shadow-2xl overflow-x-auto bounce-modal'>
                <div className='w-full flex items-end justify-end'>
                    <button onClick={() => onClose(!isOpen)} className='bg-white rounded-2xl p-3 shadow-md cursor-pointer border border-slate-300/30 group'>
                        <X className='text-slate-600 group-hover:scale-125 transition-all duration-300 ease-in-out group-hover:text-red-500' />
                    </button>
                </div>
                <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mt-4">
                    <table className="min-w-full bg-white text-sm text-left text-gray-700">
                        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-3">Başlık</th>
                                <th className="px-6 py-3">Açıklama</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 font-medium">✅ OAuth Entegrasyonu</td>
                                <td className="px-6 py-4">Auth0 ile login/redirect başarıyla çalışmakta.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">✅ JWT Oturum Yapısı</td>
                                <td className="px-6 py-4"><code>strategy: "jwt"</code> ile stateless oturumlar kullanıldı.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">✅ NextAuth Entegrasyonu</td>
                                <td className="px-6 py-4">Auth0 provider üzerinden NextAuth.js yapılandırıldı.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">✅ Korumalı Sayfalar</td>
                                <td className="px-6 py-4"><code>/dashboard</code> gibi sayfalar middleware ile korunmakta.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">✅ Middleware</td>
                                <td className="px-6 py-4"><code>middleware.ts</code> giriş yapılmamış kullanıcıları <code>/auth/login</code>'e atıyor.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">✅ Tailwind Login UI</td>
                                <td className="px-6 py-4">Login sayfası kodlandı ancak gerek olmadığı için input alanları kaldırıldı.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">✅ .env Yapılandırması</td>
                                <td className="px-6 py-4">Tüm entegrasyon bilgileri <code>.env</code> dosyasında saklanmakta.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">✅ 12-Factor App Uyumu</td>
                                <td className="px-6 py-4">Config, bağımlılıklar ve loglama sade yapıda, 12-Factor'a uygun.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">✅ Test Edilebilirlik</td>
                                <td className="px-6 py-4">Her akış (login, redirect, middleware) manuel olarak test edildi.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Modal