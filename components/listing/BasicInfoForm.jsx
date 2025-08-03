import React from 'react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Home, DollarSign, Building, Tag } from 'lucide-react'

const BasicInfoForm = ({ formData, handleInputChange, showTitle = false }) => {
    const propertyTypes = [
        { value: 'Apartment', label: '🏢 Apartment', description: 'Multi-unit residential building' },
        { value: 'Bungalow', label: '🏡 Bungalow', description: 'Single-story house' },
        { value: 'Single Family House', label: '🏠 Single Family House', description: 'Detached family home' },
        { value: 'Bedsitter', label: '🏠 Bedsitter', description: 'Studio apartment' },
        { value: 'Hostel', label: '🏢 Hostel', description: 'Shared accommodation' },
        { value: 'Villa', label: '🏰 Villa', description: 'Luxury residential property' },
        { value: 'Penthouse', label: '🏙️ Penthouse', description: 'Top-floor luxury unit' }
    ]

    return (
        <Card className="relative overflow-hidden border-0 shadow-sm bg-background">
            <div className="relative p-6">
                <div className="mb-6 text-center">
                    <div className="relative flex items-center justify-center w-12 h-12 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5" />
                        <Home className="relative w-8 h-8 text-primary" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text">
                        Basic Information
                    </h2>
                    <p className="text-base text-muted-foreground">
                        {showTitle ? 'Core details about your property' : "Let's start with the fundamentals"}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Listing Type */}
                    <div className="space-y-2">
                        <Label className="flex items-center text-xl font-semibold text-foreground">
                            <Tag className="w-5 h-5 mr-2 text-primary" />
                            What would you like to do?
                        </Label>
                        <RadioGroup
                            value={formData.type}
                            onValueChange={(value) => handleInputChange('type', value)}
                            className="grid grid-cols-1 gap-4 md:grid-cols-2"
                        >
                            <div className="relative group">
                                <Label
                                    htmlFor="sell"
                                    className={`relative flex items-center p-6 space-x-4 transition-all duration-300 border-2 cursor-pointer rounded-2xl ${formData.type === 'Sell'
                                            ? 'border-primary bg-primary/10'
                                            : 'border-border hover:border-primary/50 bg-background'
                                        }`}
                                >
                                    <div className={`flex items-center justify-center w-6 h-6 border-2 rounded transition-all duration-200 ${formData.type === 'Sell'
                                            ? 'border-primary bg-primary text-white'
                                            : 'border-gray-300 bg-white'
                                        }`}>
                                        {formData.type === 'Sell' && (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="block text-lg font-semibold text-foreground">
                                            Sell Property
                                        </div>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            List your property for sale
                                        </p>
                                    </div>
                                    <div className="text-2xl">🏠</div>
                                </Label>
                                <RadioGroupItem value="Sell" id="sell" className="sr-only" />
                            </div>

                            <div className="relative group">
                                <Label
                                    htmlFor="rent"
                                    className={`relative flex items-center p-6 space-x-4 transition-all duration-300 border-2 cursor-pointer rounded-2xl ${formData.type === 'Rent'
                                            ? 'border-primary bg-primary/10'
                                            : 'border-border hover:border-primary/50 bg-background'
                                        }`}
                                >
                                    <div className={`flex items-center justify-center w-6 h-6 border-2 rounded transition-all duration-200 ${formData.type === 'Rent'
                                            ? 'border-primary bg-primary text-white'
                                            : 'border-gray-300 bg-white'
                                        }`}>
                                        {formData.type === 'Rent' && (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="block text-lg font-semibold text-foreground">
                                            Rent Property
                                        </div>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            List your property for rent
                                        </p>
                                    </div>
                                    <div className="text-2xl">🏘️</div>
                                </Label>
                                <RadioGroupItem value="Rent" id="rent" className="sr-only" />
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Property Type and Price */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="space-y-2">
                            <Label className="flex items-center text-xl font-semibold text-foreground">
                                <Building className="w-5 h-5 mr-2 text-primary" />
                                Property Type
                            </Label>
                            <div className="relative group">
                                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:opacity-100" />
                                <Select
                                    value={formData.propertyType}
                                    onValueChange={(value) => handleInputChange('propertyType', value)}
                                >
                                    <SelectTrigger className="relative h-16 text-lg transition-all duration-300 border-2 rounded-xl border-border hover:border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10 bg-background/80 backdrop-blur-sm">
                                        <SelectValue placeholder="Choose property type" />
                                    </SelectTrigger>
                                    <SelectContent className="border-2 border-primary/10 bg-background/95 backdrop-blur-sm">
                                        {propertyTypes.map((type) => (
                                            <SelectItem
                                                key={type.value}
                                                value={type.value}
                                                className="py-3 hover:bg-primary/5 focus:bg-primary/10"
                                            >
                                                <div className="flex items-center justify-between w-full">
                                                    <span className="font-medium">{type.label}</span>
                                                    <span className="ml-2 text-xs text-muted-foreground">{type.description}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="flex items-center text-xl font-semibold text-foreground">
                                <DollarSign className="w-5 h-5 mr-2 text-primary" />
                                Price (KSh) {formData.type === 'Rent' ? '(per month)' : ''}
                            </Label>
                            <div className="relative group">
                                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:opacity-100" />
                                <div className="relative">
                                    <Input
                                        type="number"
                                        placeholder="Enter price amount"
                                        className="h-16 pl-16 pr-6 text-lg transition-all duration-300 border-2 rounded-xl border-border hover:border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10 bg-background/80 backdrop-blur-sm"
                                        value={formData.price}
                                        onChange={(e) => handleInputChange('price', e.target.value)}
                                    />
                                    <div className="absolute transform -translate-y-1/2 left-5 top-1/2">
                                        <span className="text-lg font-semibold text-muted-foreground">KSh</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default BasicInfoForm