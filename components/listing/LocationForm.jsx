import React from 'react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { MapPin, Navigation } from 'lucide-react'

const LocationForm = ({ formData, handleInputChange }) => {
    const popularAreas = ['Westlands', 'Karen', 'Kilimani', 'Lavington', 'Kileleshwa', 'Runda']

    const handleAreaClick = (area) => {
        const currentAddress = formData.address || ''
        if (!currentAddress.includes(area)) {
            handleInputChange('address', currentAddress ? `${currentAddress}, ${area}` : area)
        }
    }

    return (
        <Card className="relative overflow-hidden border-0 shadow-sm bg-background">
            <div className="relative p-6">
                <div className="mb-6 text-center">
                    <div className="relative flex items-center justify-center w-12 h-12 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5" />
                        <MapPin className="relative w-8 h-8 text-primary" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-primary">
                        Property Location
                    </h2>
                    <p className="text-base text-muted-foreground">
                        Help buyers find your property easily
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-2">
                    <div className="space-y-2">
                        <Label className="flex items-center text-xl font-semibold text-foreground">
                            Complete Address
                        </Label>

                        <div className="relative group">
                            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:opacity-100" />
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Enter complete address (e.g., 123 Main Street, Westlands, Nairobi)"
                                    className="h-16 pl-16 pr-6 text-lg transition-all duration-300 border-2 rounded-xl border-border hover:border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10 bg-background/80 backdrop-blur-sm"
                                    value={formData.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quick location suggestions */}
                    <div className="p-6 space-y-2 border rounded-xl">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <p className="font-semibold text-foreground">Quick Location Select</p>
                        </div>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Click on popular areas to add them to your address
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {popularAreas.map((area) => (
                                <button
                                    key={area}
                                    type="button"
                                    onClick={() => handleAreaClick(area)}
                                    className="group relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full bg-background border border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg active:scale-95"
                                >
                                    <span className="relative z-10">{area}</span>
                                    <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-primary to-secondary group-hover:opacity-10" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Location tips */}
                    <div className="p-6 space-y-2 border rounded-xl">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <p className="font-medium text-foreground">Location Best Practices</p>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-1 h-1 mt-2 mr-2 rounded-full bg-secondary" />
                                        Include street number, street name, and area
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-1 h-1 mt-2 mr-2 rounded-full bg-secondary" />
                                        Mention nearby landmarks or notable places
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-1 h-1 mt-2 mr-2 rounded-full bg-secondary" />
                                        Specify the city and postal code if available
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default LocationForm