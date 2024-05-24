'use client';

import { useState } from 'react';
import validate from '@/lib/data';
import Image from 'next/image';
import loginImg from '../../../../public/assets/images/login.jpeg';
import logoImg from '../../../../public/assets/images/logo.png';
import additionalImg1 from '../../../../public/assets/images/monlau-fp.png';
import additionalImg2 from '../../../../public/assets/images/monlau-eso.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const user = await validate(email, password);
            window.location.href = '/dashboard';
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 h-screen w-full relative'>
            <aside className="hidden lg:block relative w-full h-full">
                <Image src={loginImg} alt="Login" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className='object-cover' />
            </aside>
            <main className='flex flex-col justify-center gap-10 bg-gray-800 px-5 md:px-0 -mt-20'>
                <div className='flex justify-center'>
                    <Image src={logoImg} alt="Logo NexusEstudiantil" className='w-[14rem] sm:w-[18rem]' />
                </div>
                <section className="flex flex-col gap-8 max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-5 sm:p-10 shadow">
                    <h2 className='text-2xl sm:text-3xl text-white font-bold text-center'>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                        <div className='flex flex-col text-gray-400'>
                            <label htmlFor="email" className="block font-medium text-teal-600">Correo electrónico</label>
                            <input type="email" id="email" autoComplete="email" placeholder="nexus@monlau.com" required
                                className="rounded-lg bg-gray-700 text-white mt-2 p-2 focus:bg-gray-800 focus:outline-none" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col text-gray-400'>
                            <label htmlFor="password" className="block font-medium text-teal-600">Contraseña</label>
                            <input type="password" id="password" autoComplete="current-password" placeholder="*********" required
                                className="rounded-lg bg-gray-700 text-white mt-2 p-2 focus:bg-gray-800 focus:outline-none" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='flex justify-between text-gray-400 flex-col sm:flex-row gap-3'>
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="cursor-pointer h-4 w-4 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="cursor-pointer ml-2 block text-sm text-gray-400 hover:text-gray-300 transition-all ease-in-out duration-300"> Recordarme </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-teal-600 hover:text-teal-500 transition-all ease-in-out duration-300">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-2 flex justify-center text-sm sm:text-md bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all ease-in-out duration-300">
                            ENTRAR
                        </button>
                        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    </form>
                </section>
            </main>
            <footer className="absolute bottom-0 right-0 flex gap-5 p-8">
                <Image src={additionalImg1} alt="Logo Monlau FP" className="w-28 sm:w-36" />
                <Image src={additionalImg2} alt="Logo Monlau ESO" className="w-28 sm:w-36" />
            </footer>
        </div>
    );
}