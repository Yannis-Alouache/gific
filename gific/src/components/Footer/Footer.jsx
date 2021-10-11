import React from 'react'
import logo from '../../assets/image/logo.png'

const Footer = () => {
    return (
        <>
            <footer class="text-gray-600 body-font bg-primary">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
                        <img src={logo} class="w-40 h-40 text-white p-2"/>
                    </a>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                        <li>
                        <a class="text-white hover:text-red-300" href="#">First Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Second Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Third Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Fourth Link</a>
                        </li>
                    </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                        <li>
                        <a class="text-white hover:text-red-300" href="#">First Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Second Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Third Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Fourth Link</a>
                        </li>
                    </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                        <li>
                        <a class="text-white hover:text-red-300" href="#">First Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Second Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Third Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Fourth Link</a>
                        </li>
                    </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                        <li>
                        <a class="text-white hover:text-red-300" href="#">First Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Second Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Third Link</a>
                        </li>
                        <li>
                        <a class="text-white hover:text-red-300" href="#">Fourth Link</a>
                        </li>
                    </nav>
                    </div>
                </div>
                </div>
                <div class="bg-gray-900">
                <div class="container border-t-4 border-secondary mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-white text-sm text-center sm:text-left">Made with &#128151; by
                    <a href="https://github.com/Yannis-Alouache" rel="noopener noreferrer" class="text-gray-400 ml-1" target="_blank">Yannis Alouache</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a class="ml-3 text-gray-200" href="https://www.linkedin.com/in/yannis-alouache/" target="_blank">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                    </span>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
