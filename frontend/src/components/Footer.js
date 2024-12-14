import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1A1D2B]">
            <div className="container mx-auto p-0 md:p-8 xl:px-0">
                <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-4">
                            <div>
                                <a href="/">
                                    <div className="flex items-center space-x-2 text-2xl font-medium">
                                        <span>
                                            <img 
                                                src="https://www.svgrepo.com/show/452102/slack.svg" 
                                                alt="AI Logo" 
                                                width="64" 
                                                height="64" 
                                                className="w-16"
                                            />
                                        </span>
                                        <span className="text-white">UFG</span>
                                    </div>
                                </a>
                            </div>
                            <div className="max-w-md pr-16 text-md text-gray-200">
                                WE provide the best service and timings also equipment and a good treiner also so join us!
                               </div>
                            <div className="flex space-x-2">
                                <a href="https://www.linkedin.com/in/ansh-gupta-703105288/" className="text-gray-200 hover:text-gray-200">
                                    <span className="sr-only">Linkedin</span>
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                    </svg>
                                </a>
                               
                            </div>
                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-md font-semibold leading-6 text-white">Our Solutions</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li><a href="/aiplatform" className="text-md leading-6 text-gray-300 hover:text-gray-50">Best place</a></li>
                                        <li><a href="/aialgorithms" className="text-md leading-6 text-gray-300 hover:text-gray-50">Best machine</a></li>
                                        <li><a href="/industryapplications" className="text-md leading-6 text-gray-300 hover:text-gray-50">Best trainer</a></li>
                                    </ul>
                                </div>
                                <div className="mt-10 md:mt-0">
                                    <h3 className="text-md font-semibold leading-6 text-white">Use Cases</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li><a href="/predictiveanalysis" className="text-md leading-6 text-gray-300 hover:text-gray-50">Predictiveness</a></li>
                                        <li><a href="/customerexperience" className="text-md leading-6 text-gray-300 hover:text-gray-50">Customer Experience</a></li>
                                        <li><a href="/automation" className="text-md leading-6 text-gray-300 hover:text-gray-50">Automation</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li><a href="/pricing" className="text-md leading-6 text-gray-300 hover:text-gray-50">multi machine</a></li>
                                        <li><a href="/blog" className="text-md leading-6 text-gray-300 hover:text-gray-50">Dumble</a></li>
                                        <li><a href="/casestudies" className="text-md leading-6 text-gray-300 hover:text-gray-50">rood</a></li>
                                        <li><a href="/terms" className="text-md leading-6 text-gray-300 hover:text-gray-50">dumble curl</a></li>
                                        <li><a href="/privacy" className="text-md leading-6 text-gray-300 hover:text-gray-50">lat pull down</a></li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                        <div className="text-md text-center text-white">
                            Copyright © 2024 . Crafted with <span className="text-gray-50">♥</span> Ansh gupta <a rel="noopener" href="/">Devloper</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
