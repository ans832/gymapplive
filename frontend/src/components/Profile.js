

import React from 'react';


const Reviews = () => {
    return (
        <section className="pb-12 mx-auto md:pb-20 max-w-8xl mt-8 bg-gray-900">
            <div className="py-4 text-center md:py-8">
                <h4 className="text-base font-bold tracking-wide text-center uppercase text-teal-100">
                    Reviews
                </h4>
                <p className="mt-2 tracking-tight text-yellow-900 text-xl md:text-3xl">
                    We have some fans.
                </p>
            </div>

            <div className="gap-8 space-y-8 md:columns-2 lg:columns-3">
                {[
                    {
                        name: "Rajan verma",
                        role: "regular gym member",
                        img: "https://randomuser.me/api/portraits/men/12.jpg",
                        review:
                            "The quality of these seat covers is outstanding. They fit perfectly and add a touch of luxury to my car's interior. Highly recommend!",
                        social: {
                            platform: "twitter",
                            url: "https://twitter.com/ravikumar/status/1234567890",
                        },
                    },
                    {
                        name: "Anjali Sharma",
                        role: "regular gym member",
                        img: "https://randomuser.me/api/portraits/women/14.jpg",
                        review:
                            "I love the customizable designs! I was able to choose the perfect color to match my car's interior. The material feels very durable.",
                        social: {
                            platform: "instagram",
                            url: "https://www.instagram.com/p/1234567890",
                        },
                    },
                    {
                        name: "Vijay Singh",
                        role: "regular gym member",
                        img: "https://randomuser.me/api/portraits/men/18.jpg",
                        review:
                            "These seat covers are a game-changer for long drives. The added padding and ergonomic design make a huge difference in comfort.",
                        social: {
                            platform: "facebook",
                            url: "https://www.facebook.com/vijaysingh/posts/1234567890",
                        },
                    },
                    {
                        name: "Priya Patel",
                        role: "regular gym member",
                        img: "https://randomuser.me/api/portraits/women/2.jpg",
                        review:
                            "The installation was super easy, and the instructions were clear. My car looks and feels much more upscale now.",
                        social: {
                            platform: "twitter",
                            url: "https://twitter.com/priyapatel/status/1234567890",
                        },
                    },
                    {
                        name: "Arjun Mehta",
                        role: "regular gym member",
                        img: "https://randomuser.me/api/portraits/men/62.jpg",
                        review:
                            "Great value for money. The seat covers have a premium feel and have significantly improved the look of my car's interior.",
                        social: {
                            platform: "instagram",
                            url: "https://www.instagram.com/p/1234567890",
                        },
                    },
                    {
                        name: "Sneha Rao",
                        role: "regular gym member",
                        img: "https://randomuser.me/api/portraits/women/19.jpg",
                        review:
                            "Absolutely love these seat covers. They're stylish, comfortable, and were really easy to install. My car interior looks brand new!",
                        social: {
                            platform: "facebook",
                            url: "https://www.facebook.com/sneharao/posts/1234567890",
                        },
                    },
                ].map(({ name, role, img, review, social }, index) => (
                    <div
                        key={index}
                        className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
                    >
                        <div className="flex gap-4 items-start">
                            <img
                                className="w-12 h-12 rounded-full"
                                src={img}
                                alt={`${name} avatar`}
                                loading="lazy"
                            />
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">{name}</h6>
                                    <p className="text-sm text-gray-500">{role}</p>
                                </div>
                                <a
                                    href={social.url}
                                    className="text-blue-500 hover:text-blue-600 ml-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`fab fa-${social.platform}`}></i>
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">{review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
