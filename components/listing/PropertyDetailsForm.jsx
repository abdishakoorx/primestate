import React from 'react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Bed, Bath, Square, Calendar, Car, Ruler, Building2, DollarSign } from 'lucide-react'

const PropertyDetailsForm = ({ formData, handleInputChange }) => {
    const fields = [
        {
            key: 'bedroom',
            label: 'Bedrooms',
            icon: Bed,
            placeholder: 'Number of bedrooms',
            type: 'number',
            description: 'Total bedrooms'
        },
        {
            key: 'bathroom',
            label: 'Bathrooms',
            icon: Bath,
            placeholder: 'Number of bathrooms',
            type: 'number',
            description: 'Full & half baths'
        },
        {
            key: 'area',
            label: 'Area (Sq Ft)',
            icon: Square,
            placeholder: 'Property area',
            type: 'number',
            description: 'Interior space'
        },
        {
            key: 'builtIn',
            label: 'Year Built',
            icon: Calendar,
            placeholder: 'e.g., 2020',
            type: 'text',
            description: 'Construction year'
        },
        {
            key: 'parking',
            label: 'Parking Spaces',
            icon: Car,
            placeholder: 'Number of spaces',
            type: 'number',
            description: 'Available parking'
        },
        {
            key: 'lotSize',
            label: 'Lot Size (Sq Ft)',
            icon: Ruler,
            placeholder: 'Total lot size',
            type: 'number',
            description: 'Land area'
        }
    ]

    return (
        <Card className="relative overflow-hidden border-0 shadow-sm bg-background">
            <div className="relative p-6">
                <div className="mb-6 text-center">
                    <div className="relative flex items-center justify-center w-12 h-12 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5" />
                        <Building2 className="relative w-8 h-8 text-primary" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text">
                        Property Details
                    </h2>
                    <p className="text-base text-muted-foreground">
                        Showcase your property's features and specifications
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-6">
                    {/* Main Property Features */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {fields.map((field) => {
                            const Icon = field.icon
                            return (
                                <div key={field.key} className="space-y-4 group">
                                    <Label className="flex items-center text-lg font-semibold transition-colors duration-300 text-foreground group-hover:text-primary">
                                        <Icon className="w-5 h-5 mr-3 text-primary" />
                                        <div>
                                            <span>{field.label}</span>
                                            <p className="text-xs font-normal text-muted-foreground">{field.description}</p>
                                        </div>
                                    </Label>
                                    <div className="relative">
                                        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:opacity-100" />
                                        <Input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="relative px-4 text-lg transition-all duration-300 border-2 h-14 rounded-xl border-border hover:border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10 bg-background/80 backdrop-blur-sm"
                                            value={formData[field.key]}
                                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* HOA Section */}
                    <div className="p-6 space-y-3 border rounded-2xl border-secondary/10">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10">
                                <DollarSign className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <Label className="text-lg font-semibold text-foreground">
                                    HOA Fees (KSh per month)
                                </Label>
                                <p className="text-sm text-muted-foreground">Homeowners Association monthly fees</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:opacity-100" />
                            <div className="relative">
                                <Input
                                    type="number"
                                    placeholder="Enter monthly HOA fees (leave empty if not applicable)"
                                    className="pl-16 pr-6 text-lg transition-all duration-300 border-2 h-14 rounded-xl border-border hover:border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10 bg-background/80 backdrop-blur-sm"
                                    value={formData.hoa}
                                    onChange={(e) => handleInputChange('hoa', e.target.value)}
                                />
                                <div className="absolute transform -translate-y-1/2 left-5 top-1/2">
                                    <span className="text-lg font-semibold text-muted-foreground">KSh</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start p-4 space-x-3 border rounded-xl bg-background/50 border-primary/10">
                            <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                            <div className="text-sm text-muted-foreground">
                                <p className="mb-1 font-medium">What are HOA fees?</p>
                                <p>Monthly charges for shared amenities like security, maintenance, gym, swimming pool, or common area upkeep.</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Tips */}
                    <div className="p-6 space-y-3 border rounded-2xl border-primary/10">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <p className="font-semibold text-foreground">💡 Pro Tips for Better Listings</p>
                        </div>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            <div className="flex items-start space-x-2">
                                <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-secondary" />
                                <p className="text-sm text-muted-foreground">Be accurate with measurements - buyers will verify</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-secondary" />
                                <p className="text-sm text-muted-foreground">Include all permanent fixtures and built-ins</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-secondary" />
                                <p className="text-sm text-muted-foreground">Mention recent renovations or updates</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-secondary" />
                                <p className="text-sm text-muted-foreground">Consider unique features that add value</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PropertyDetailsForm