import Image from "next/image"

function HeroSectionHome() {
    return (
        <div className="flex justify-between 2xl:gap-15 gap-7.5 max-lg:flex-col max-lg:items-center">
            <Image
                src="/imges/imageHero.png"
                alt="imageHero"
                width={765}
                height={785}
                className="2xl:w-191.25 2xl:h-196.25 xl:w-153.75 xl:h-165.5 w-89.5 h-102.5 transform transition duration-300 hover:scale-105 hover:shadow-[2px_2px_2px_2px_#FFBE99] hover:rounded-xl hover:-translate-2.5"
            />
            <div className="flex  justify-center flex-col 2xl:gap-15 xl:gap-12.5 gap-10 items-center transform transition duration-300 hover:bg-orange-95 hover:rounded-xl ">
                <div className="text-center">
                    <div>
                        <p className="2xl:text-[22px] text-[18px] text-gray-15 border-b-2 border-gray-15 w-fit m-auto">Welcome to Little Learners Academy</p>
                        <h2 className="2xl:text-[54px] xl:text-[40px] text-[30px] font-extrabold">
                            Where Young Minds Blossom and
                            <span className="text-orange-65"> Dreams Take Flight.</span>
                        </h2>
                    </div>
                    <p className="2xl:mt-7.5 xl:mt-5 mt-4 2xl:text-[20px] text-[16px] text-gray-20 ">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                </div>
                <div className="flex  2xl:gap-3.25 sm:gap-2.5 gap-5 bg-orange-95 shadow-[8px_8px_0px_1px_#FFBE99] 2xl:py-8 2xl:px-12.25 sm:py-5 sm:px-10 p-10 rounded-xl sm:w-fit w-full max-sm:flex-col max-sm:text-center">
                    <div>
                        <p className="2xl:text-[44px] text-[34px] font-extrabold text-gray-15">+7000</p>
                        <p className="2xl:text-[18px] text-[16px]  text-gray-15">Students Passed Out</p>
                    </div>
                    <div className="max-sm:flex hidden border-2 border-gray-15 "></div>
                    <div>
                        <p className="2xl:text-[44px] text-[34px] font-extrabold text-gray-15">+37</p>
                        <p className="2xl:text-[18px] text-[16px] text-gray-15">Awards & Recognitions</p>
                    </div>
                    <div className="max-sm:flex hidden border-2 border-gray-15 "></div>
                    <div>
                        <p className="2xl:text-[44px] text-[34px] font-extrabold text-gray-15">+15</p>
                        <p className="2xl:text-[18px] text-[16px] text-gray-15">Experience Educators</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionHome
