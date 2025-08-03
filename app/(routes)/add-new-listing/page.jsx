"use client"
import React, { useState } from 'react'
import { supabase } from '@/Utils/supabase/client'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { ArrowLeft, Plus, Sparkles, CheckCircle } from 'lucide-react'

import ProgressSteps from '@/components/listing/ProgressSteps'
import BasicInfoForm from '@/components/listing/BasicInfoForm'
import PropertyDetailsForm from '@/components/listing/PropertyDetailsForm'
import LocationForm from '@/components/listing/LocationForm'
import DescriptionImagesForm from '@/components/listing/DescriptionImagesForm'
import NavigationButtons from '@/components/listing/NavigationButtons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

function AddNewListing() {
  const { user } = useUser()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [images, setImages] = useState([])

  const [formData, setFormData] = useState({
    type: 'Sell',
    propertyType: '',
    price: '',
    description: '',
    bedroom: '',
    bathroom: '',
    builtIn: '',
    parking: '',
    lotSize: '',
    area: '',
    hoa: '',
    address: '',
    profileImage: user?.imageUrl || '',
    username: user?.fullName || '',
    createdby: user?.primaryEmailAddress?.emailAddress || ''
  })

  const stepLabels = [
    'Basic Information',
    'Property Details',
    'Location',
    'Description & Photos'
  ]

  const stepDescriptions = [
    'Tell us what type of property you have and set your price',
    'Add details about bedrooms, bathrooms, and property features',
    'Help buyers find your property with accurate location details',
    'Create compelling description and add stunning photos'
  ]

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.type && formData.propertyType && formData.price
      case 2:
        return formData.bedroom && formData.bathroom && formData.area
      case 3:
        return formData.address
      case 4:
        return formData.description
      default:
        return true
    }
  }

  const handleSubmit = async () => {
    setLoading(true)

    try {
      const { data: listingData, error: listingError } = await supabase
        .from('listing')
        .insert([formData])
        .select()

      if (listingError) throw listingError

      const listingId = listingData[0].id

      if (images.length > 0) {
        for (const image of images) {
          const fileName = Date.now().toString() + Math.random().toString(36).substring(7)

          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('listingImages')
            .upload(`${fileName}`, image, {
              contentType: `image/${image.name.split('.').pop()}`,
              upsert: false
            })

          if (!uploadError) {
            const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL + fileName
            await supabase
              .from('listingImages')
              .insert([{ url: imageUrl, listing_id: listingId }])
          }
        }
      }

      toast.success('New listing created successfully!')
      router.push('/edit-listing/' + listingId)

    } catch (error) {
      console.error('Error creating listing:', error)
      toast.error('Error creating listing. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleBack = () => {
    router.back()
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )
      case 2:
        return (
          <PropertyDetailsForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )
      case 3:
        return (
          <LocationForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )
      case 4:
        return (
          <DescriptionImagesForm
            formData={formData}
            handleInputChange={handleInputChange}
            setImages={setImages}
            imageList={[]}
            showActions={false}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Enhanced Header */}
      <div className="top-0 z-10 bg-background/80">
        <div className="max-w-6xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-3xl font-bold text-primary">
                  Create New Listing
                </h1>
                <p className="text-muted-foreground">
                  {stepDescriptions[currentStep - 1]}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center px-4 py-2 space-x-2 border rounded-xl border-primary/10">
                <Plus className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">New Listing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Enhanced Progress Steps */}
          {/* <ProgressSteps
            currentStep={currentStep}
            totalSteps={4}
            stepLabels={stepLabels}
          /> */}

          {/* Current Step Indicator */}
          <Card className="p-6 border-2 shadow-none bg-background/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Step {currentStep}: {stepLabels[currentStep - 1]}
                  </h2>
                  <p className="text-muted-foreground">
                    {stepDescriptions[currentStep - 1]}
                  </p>
                </div>
              </div>

              {validateStep() && (
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Step Complete</span>
                </div>
              )}
            </div>
          </Card>

          {/* Step Content */}
          <div className="space-y-8">
            {renderStep()}
          </div>

          {/* Enhanced Navigation */}
          <NavigationButtons
            currentStep={currentStep}
            totalSteps={4}
            loading={loading}
            canProceed={validateStep()}
            onPrevious={prevStep}
            onNext={nextStep}
            onSubmit={handleSubmit}
            submitLabel="Create Listing"
          />
        </div>
      </div>

      {/* Fixed Bottom Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-10 p-4 border-t bg-background/95 backdrop-blur-sm border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Creating your listing...
            </span>
            <span className="text-sm font-medium text-primary">
              Step {currentStep} of 4
            </span>
          </div>
          <div className="w-full h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full transition-all duration-700 ease-out rounded-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Floating Help Button */}
      <div className="fixed z-20 bottom-20 right-6">
        <Button
          className="transition-all duration-300 rounded-full shadow-2xl h-14 w-14 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:scale-110"
          onClick={() => toast.info(`You're on step ${currentStep} of 4. ${stepDescriptions[currentStep - 1]}`)}
        >
          <span className="text-xl">💡</span>
        </Button>
      </div>
    </div>
  )
}

export default AddNewListing