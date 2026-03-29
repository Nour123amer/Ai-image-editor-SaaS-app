import React from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'

export default function billing() {
    return (
        <>
            <div className='flex flex-col gap-6 w-3/4 mx-auto rounded-2xl'>
                <h2>Billing Settings</h2>
                {/* payment method */}
                <Card className='bg-gray-50 p-6'>
                    <div className='flex justify-between items-center'>
                        <h3>Payment Methods</h3>
                        <Button className='bg-black p-3 text-white rounded-full'>Add Payment Method</Button>
                    </div>
                    <p>Methods used for subscriptions & one-time purchases</p>
                </Card>


                {/* payment method */}
                <Card className='bg-gray-50 p-6'>
                    <h3>Billing Details</h3>
                    <p>Update your billing details</p>
                    <hr />
                    <form>
                        <label className='mb-2 ' htmlFor="email">Email</label> <br />
                        <Input id="email" placeholder='nour@gmail.com' className='bg-white' /><br />

                        <label className='mb-2 ' htmlFor="billing">Billing Name</label> <br />
                        <Input id="billing" placeholder='nour' className='bg-white' /><br />

                        <label className='mb-3 ' htmlFor="email">Billing address</label> <br />
                        <Input placeholder='Line1' className='bg-white mb-3' /> <br />
                        <Input placeholder='Line2' className='bg-white mb-3' /> <br />

                        <div className='flex gap-3'>
                            <Input placeholder='Postal code' className='bg-white ' />
                            <Input placeholder='City' className='bg-white mb-3 ' />
                        </div>
                        <label className='mb-2 ' htmlFor="tax">Tax ID</label> <br />
                        <Input id="tax" className='bg-white' /><br />

                       <Button className='bg-gray-400 p-3 my-3 text-white rounded-full'>Update Billing Details</Button>

                    </form>
                </Card>



                {/* privacy */}
                <Card className='bg-gray-50 p-6'>
                    <div className='flex justify-between items-center'>
                        <h3>Privacy</h3>
                        <Button className='bg-white p-3 text-gray-600 rounded-full'>Export Data</Button>
                    </div>
                    <p>Download a copy of all your personal data</p>
                </Card>
            </div>
        </>
    )
}
