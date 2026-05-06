'use client'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className="text-gray-15 font-medium bg-white 2xl:py-25 2xl:px-28.25 flex flex-col gap-12.5 xl:px-20 xl:pb-10 xl:pt-20 px-7.75 pt-15 pb-7.75 max-xl:text-[16px] text-[20px] shadow-[6px_6px_0px_2px_#1E1E1E] rounded-xl border-2 border-gray-15 transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-orange-90">
            <div className="grid lg:grid-cols-6 gap-20 grid-cols-1">
                <div className='flex flex-col 2xl:gap-12.5 gap-10 lg:col-span-2 '>
                    <div className='flex flex-col 2xl:gap-5 gap-4 max-md:items-center max-md:text-center'>
                        <div className="flex items-center gap-1 ">
                            <Image
                                src="/imges/imgNavBar.png"
                                alt="navLogo"
                                width={40}
                                height={40}
                                className="max-2xl:h-8.5 max-2xl:w-8.5"
                            />
                            <Image
                                src="/imges/textButtonNav.png"
                                alt="navTwxtLogo"
                                width={136}
                                height={16}
                                className="max-2xl:w-28.75 max-2xl:h-3.75"
                            />
                        </div>
                        <p className='text-gray-30'>
                            We believe in the power of play to foster creativity, problem-solving skills, and imagination.
                        </p>
                    </div>
                    <div className='flex flex-col 2xl:gap-6 gap-5'>
                        <a href="mailto:example@mail.com">
                            <button className="flex items-center 2xl:gap-2.5 gap-2 cursor-pointer">
                                <Image
                                    src="/imges/emailIcon.png"
                                    alt="buttonFooter"
                                    width={40}
                                    height={40}
                                    className="p-2 border-gray-15 border bg-orange-97 rounded-md"
                                />
                                hello@littlelearners.com
                            </button>
                        </a>
                        <a href="tel:+91 91813 23 2309">
                            <button className="flex items-center  2xl:gap-2.5 gap-2 cursor-pointer">
                                <Image
                                    src="/imges/phoneIcon.png"
                                    alt="buttonFooter"
                                    width={40}
                                    height={40}
                                    className="p-2 border-gray-15 border bg-orange-97 rounded-md"
                                />
                                +91 91813 23 2309
                            </button>
                        </a>
                        <a href="https://www.google.com/maps/place/syria">
                            <button className="flex items-center  2xl:gap-2.5 gap-2 cursor-pointer">
                                <Image
                                    src="/imges/possitionIcon.png"
                                    alt="buttonFooter"
                                    width={40}
                                    height={40}
                                    className="p-2 border-gray-15 border bg-orange-97 rounded-md"
                                />
                                Somewhere in the World
                            </button>
                        </a>
                    </div>
                </div>
                <div className='lg:col-span-4 grid md:grid-cols-4 grid-cols-2 gap-7.5 '>
                    <div className='flex flex-col gap-6'>
                        <h3><Link href="/" onClick={()=>{window.scrollTo({top:0})}}>Home</Link></h3>
                        <ul className='text-gray-20 flex flex-col gap-3.5'>
                            <li><Link href="/#benfits">Features</Link></li>
                            <li><Link href="/#testimonials">Our Testimonials</Link></li>
                            <li><Link href="/#faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3><Link href="/about" onClick={()=>{window.scrollTo({top:0})}}>About Us</Link></h3>
                        <ul className='text-gray-20 flex flex-col gap-3.5'>
                            <li><Link href="/about#MissionId">Our Mission</Link></li>
                            <li><Link href="/about#MissionId">Our Vission</Link></li>
                            <li><Link href="/about#AwardsID">Awards and Recognitions</Link></li>
                            <li><Link href="/about#HistoryId">History</Link></li>
                            <li><Link href="/about#TeamId">Teachers</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3><Link href="/academic" onClick={()=>{window.scrollTo({top:0})}}>Academics</Link></h3>
                        <ul className='text-gray-20 flex flex-col gap-3.5'>
                            <li><Link href="/academic#FeaturesId">Special Features</Link></li>
                            <li><Link href="/academic#RoomsGalleryId">Gallery</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3><Link href="/contact" onClick={()=>{window.scrollTo({top:0})}}>Contact</Link></h3>
                        <ul className='text-gray-20 flex flex-col gap-3.5'>
                            <li><Link href="/contact#StudentInformationId">Information</Link></li>
                            <li><Link href="/contact">Map & Direction</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-7.5'>
                <div className='w-full border border-gray-15'></div>
                <div className='flex justify-between items-center  gap-5 max-lg:flex-col max-lg:justify-center'>
                    <div className='flex gap-4  max-md:gap-1.5 max-md:text-[14px]'>
                        <p>Terms of Service</p>
                        <div className='h-8 border border-gray-15'></div>
                        <p>Privacy Policy</p>
                        <div className='h-8  border border-gray-15'></div>
                        <p>Cookie Policy</p>
                    </div>
                    <div className='flex gap-3.5'>
                        <a href="https://www.facebook.com">
                            <Image
                                src="/imges/facebook.png"
                                alt='imgFacebook'
                                width={56}
                                height={56}
                                className='p-2 border-gray-15 border bg-orange-90 rounded-md'
                            />
                        </a>
                        <a href="https://www.twitter.com">
                            <Image
                                src="/imges/twiter.png"
                                alt='imgTwiter'
                                width={56}
                                height={56}
                                className='p-2 border-gray-15 border bg-orange-90 rounded-md'
                            />
                        </a>
                        <a href="https://www.linkedin.com">
                            <Image
                                src="/imges/linked.png"
                                alt='imgLinked'
                                width={56}
                                height={56}
                                className='p-2 border-gray-15 border bg-orange-90 rounded-md'
                            />
                        </a>
                    </div>
                </div>
                <div className='w-full border border-gray-15'></div>
                <p className='text-center'>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
