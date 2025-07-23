import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Home() {
    return (
        <div>

            <section className='py-10'>
                <div className='max-w-[1320px] mx-auto py-10'>
                    <h1 className='text-3xl font-bold'>Home Page</h1>

                    <p className='text-[20px] mt-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cum eum soluta nihil eveniet eos, dolorum esse non ipsum commodi similique cupiditate itaque facilis dignissimos, praesentium dolore sint corrupti numquam?
                    </p>
                    <p className='text-[20px] mt-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cum eum soluta nihil eveniet eos, dolorum esse non ipsum commodi similique cupiditate itaque facilis dignissimos, praesentium dolore sint corrupti numquam?
                    </p>
                    <p className='text-[20px] mt-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cum eum soluta nihil eveniet eos, dolorum esse non ipsum commodi similique cupiditate itaque facilis dignissimos, praesentium dolore sint corrupti numquam?
                    </p>
                </div>
            </section>


            <div className="max-w-[1320px] mx-auto lg:p-0 p-5 grid gap-[40px] lg:grid-cols-[60%_auto] grid-cols-1  items-center">
                <div>
                    <h1 className='lg:text-[60px] text-[30px] font-bold'>The experience makes all the difference.
                    </h1>
                    <p className='text-xl mt-4'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.

                    </p>
                </div>
                <div>
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" />
                </div>
            </div>

        </div>
    )
}
