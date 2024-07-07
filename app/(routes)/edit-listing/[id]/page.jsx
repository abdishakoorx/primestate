"use client"
import React, { useEffect, useState } from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Formik } from 'formik'
import {  useRouter } from 'next/navigation'
import { supabase } from '@/Utils/supabase/client'
import { toast } from 'sonner'
import { useUser } from '@clerk/nextjs'
import FileUpload from '../_components/FileUpload'
import { Loader, Loader2 } from 'lucide-react'



function EditListing({params}) {
    const {user} = useUser()
    const router = useRouter()
    const [listing, setListing] = useState([])
    const [images, setImages] = useState([])
    const [loading,setloading] = useState(false)

    useEffect(() => {
        user&&verifyUserRecord();
    },[user])

    const verifyUserRecord =async () =>{
        const { data, error } = await supabase
        .from('listing')
        .select('*')
        .eq('createdby', user?.primaryEmailAddress.emailAddress)
        .eq('id', params.id)

        if (data){
            setListing(data[0]);
        }

        if (data?.length<=0){
            router.replace('/')
        }
    }

    const onSubmitHandler = async (formValue)=>{
        setloading(true)
        const { data, error } = await supabase
        .from('listing')
        .update(formValue)
        .eq('id', params.id)
        .select();

        if (data){
            toast('Listing Updated and Published')
        }

        for (const image of images){
            const file = image;
            const fileName = Date.now().toString();
            const fileExtract = fileName.split('.').pop();

            const { data, error } = await supabase.storage
            .from('listingImages')
            .upload(`${fileName}`,file,{
                contentType:`image/${fileExtract}`,
                upsert:false
            })

            if (error){
                setloading(false)
                toast('Error uploading images')
            }
            else{
                const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL+fileName;
                const {data,error} = await supabase
                .from('listingImages')
                .insert([
                    {url:imageUrl, listing_id:params?.id}
                ])
                .select()

                if(error){
                    setloading(false)
                }
            }
            setloading(false)
        }
    }
    
    return (
        <div className='px-10 my-10 md:px-36'>
            <h2 className='text-xl font-bold'>Enter more details about your Listing</h2>
            <Formik initialValues={{
                type: 'Sell',
                propertyType: '',
                profileImage: user?.imageUrl,
                username: user?.fullName
            }}  
            onSubmit={(values)=>{
                onSubmitHandler(values);
            }}>
            {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                <div className='p-8 mt-10 rounded-lg shadow-md shadow-quantenary'>
                    <div className='flex flex-col gap-8'>
                        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                            <div>
                                <h2 className='mb-3 text-lg font-semibold text-slate-400'>Sell or Rent</h2>
                                <RadioGroup defaultValue={listing?.type} className="space-y-2"
                                onValueChange={(v)=>values.type=v}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Sell" id="Sell" />
                                        <Label htmlFor="Sell" className='text-lg'>Sell</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Rent" id="Rent" />
                                        <Label htmlFor="Rent" className='text-lg'>Rent</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div>
                                <h2 className='mb-3 text-lg font-semibold text-slate-400'>Property Type</h2>
                                <Select onValueChange={(e)=>values.propertyType=e} name='propertyType'
                                defaultValue={listing?.propertyType}>
                                    <SelectTrigger className="w-full p-5 transition duration-150 ease-in-out border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                        <SelectValue placeholder={listing?.propertyType?listing?.propertyType:"Select Property"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Apartment">Apartment</SelectItem>
                                        <SelectItem value="Bungalow">Bungalow</SelectItem>
                                        <SelectItem value="Single Family House">Single Family House</SelectItem>
                                        <SelectItem value="Bedsitter">Bedsitter</SelectItem>
                                        <SelectItem value="Hostel">Hostel</SelectItem>
                                        <SelectItem value="Villa">Villa</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="Bedroom" className="text-sm font-medium text-slate-400">Bedroom</Label>
                                <Input
                                    type="number"
                                    name="bedroom"
                                    onChange={handleChange}
                                    defaultValue={listing?.bedroom}
                                    placeholder="Ex. 2"
                                    className="w-full p-5 transition duration-150 ease-in-out border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="Bathroom" className="text-sm font-medium text-slate-400">Bathroom</Label>
                                <Input
                                    type="number"
                                    name="bathroom"
                                    onChange={handleChange}
                                    defaultValue={listing?.bathroom}
                                    placeholder="Ex. 2"
                                    className="w-full p-5 transition duration-150 ease-in-out border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="Built In" className="text-sm font-medium text-slate-400">Built In</Label>
                                <Input
                                    type="text"
                                    name="builtIn"
                                    placeholder="Ex. 2017"
                                    onChange={handleChange}
                                    defaultValue={listing?.builtIn}
                                    className="w-full p-5 transition duration-150 ease-in-out border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="Parking" className="text-sm font-medium text-slate-400">Parking Space</Label>
                                <Input
                                    type="number"
                                    name="parking"
                                    onChange={handleChange}
                                    defaultValue={listing?.parking}
                                    placeholder="Ex. 1"
                                    className="w-full p-5 transition duration-150 ease-in-out border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="Lot Size" className="text-sm font-medium text-slate-400">Lot Size (Sqr Ft)</Label>
                                <Input
                                    type="number"
                                    name="lotSize"
                                    onChange={handleChange}
                                    defaultValue={listing?.lotSize}
                                    placeholder="Ex. 1000"
                                    className="w-full p-5 transition duration-150 ease-in-out border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="Area" className="text-sm font-medium text-slate-400">Area (Sqt Ft)</Label>
                                <Input
                                    type="number"
                                    name="area"
                                    onChange={handleChange}
                                    defaultValue={listing?.area}
                                    placeholder="Ex. 1000"
                                    className="w-full p-5 transition duration-150 ease-in-out border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="Price" className="text-sm font-medium text-slate-400">Price (Ksh)</Label>
                                <Input
                                    type="number"
                                    name="price"
                                    onChange={handleChange}
                                    defaultValue={listing?.price}
                                    placeholder="10000"
                                    className="w-full p-5 transition duration-150 ease-in-out border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="HOA" className="text-sm font-medium text-slate-400">HOA (Ksh Per Month)</Label>
                                <Input
                                    type="number"
                                    name="hoa"
                                    onChange={handleChange}
                                    defaultValue={listing?.hoa}
                                    placeholder="1000"
                                    className="w-full p-5 transition duration-150 ease-in-out border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 gap-10 mt-10'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='mb-3 text-lg font-semibold text-slate-400'>Description</h2>
                                <Textarea placeholder='' name="description" onChange={handleChange} 
                                defaultValue={listing?.description}/>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 mt-10'>
                            <h2 className='mb-3 text-lg font-semibold text-slate-400'>Upload Property Images</h2>
                            <FileUpload setImages={(value)=>setImages(value)}/>
                        </div>

                        <div className='flex justify-end gap-4'>
                            {/* <Button variant="outline" className='mt-10  border-tertiary border-4 font-bold h-[45px] text-black bg-primary hover:bg-primary rounded-xl'>Save</Button> */}
                            <Button disabled={loading} type="submit" className='mt-10 font-bold text-black rounded-xl h-[45px] bg-tertiary hover:bg-tertiary'>{loading?<Loader className='animate-spin'/>:'Save & Publish'}</Button>
                        </div>
                    </div>
                </div>
                </form>)}
            </Formik>
        </div>
    )
}

export default EditListing