'use client'
import React, { useState } from 'react'
import { Tour } from '@/server/Trips'
import { Session } from 'next-auth'
import SignOut from './SignOut'
import Modal from './Modal'

type Props = {
    tours: Tour[],
    session: Session | null,
}

function DashboardComponent({ tours, session }: Props) {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 p-4 md:p-8">
            <Modal isOpen={isOpen} onClose={setIsOpen} />
            <div className="fixed top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            <div className="fixed bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="fixed top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg"></div>
            <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Hoş Geldiniz
                        </h1>
                        <div className='flex items-center gap-4 justify-center'>
                            <div className="inline-flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 rounded-full border border-indigo-100">
                                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                                <span className="text-gray-700 font-medium">{session?.user.name}</span>
                            </div>
                            <div>
                                <SignOut />
                            </div>
                        </div>
                    </div>
                    <div className="my-8">
                        <hr className="border-t-2 border-indigo-200" />
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className='w-full text-center text-blue-600 cursor-pointer animate-bounce'>
                        Proje detaylarını ve yapılanları adım adım görüntülemek için tıklayınız.
                    </button>
                </div>


                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full mr-4"></div>
                        Seyahatler
                    </h2>

                    <div className="overflow-hidden rounded-2xl border border-gray-100">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                            Lokasyon
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                            Başlangıç
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                            Bitiş
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                            Gezi Adı
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    {tours.map((trip, index) => (
                                        <tr
                                            key={trip.id}
                                            className="hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-all duration-200"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-sm mr-4">
                                                        {trip.location.charAt(0)}
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-900">
                                                        {trip.location}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">
                                                {new Date(trip.start_date).toLocaleDateString('tr-TR')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">
                                                {new Date(trip.end_date).toLocaleDateString('tr-TR')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold`}>
                                                    {trip.name}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {tours.length === 0 && (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">✈️</span>
                            </div>
                            <p className="text-gray-500 text-lg">Henüz seyahat kaydınız bulunmuyor.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent