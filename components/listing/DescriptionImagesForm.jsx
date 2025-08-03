import React from 'react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    Camera,
    FileText,
    Eye,
    Save,
    CheckCircle,
    Loader,
    Sparkles,
    Image as ImageIcon
} from 'lucide-react'
import FileUpload from '@/components/listing/FileUpload'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button'

const DescriptionImagesForm = ({
    formData,
    handleInputChange,
    setImages,
    imageList = [],
    loading,
    onSave,
    onPublish,
    onPreview,
    showActions = true
}) => {
    const descriptionLength = formData.description?.length || 0
    const isGoodLength = descriptionLength > 100
    const characterProgress = Math.min((descriptionLength / 500) * 100, 100)

    return (
        <div className="space-y-4">
            <Card className="relative overflow-hidden border-0 shadow-sm bg-background">
                <div className="relative p-6">
                    <div className="mb-6 text-center">
                        <div className="relative flex items-center justify-center w-12 h-12 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5" />
                            <Sparkles className="relative w-8 h-8 text-primary" />
                        </div>
                        <h2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text">
                            Final Touches
                        </h2>
                        <p className="text-base text-muted-foreground">
                            Add compelling description and stunning photos to complete your listing
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-10">
                        {/* Description Section */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <Label className="text-xl font-semibold text-foreground">Property Description</Label>
                                    <p className="text-sm text-muted-foreground">Tell the story of your property</p>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:opacity-100" />
                                <Textarea
                                    placeholder="Describe your property's unique features, neighborhood highlights, nearby amenities, and what makes it special. Paint a picture that helps potential buyers or tenants imagine themselves living there..."
                                    className="relative p-6 text-lg transition-all duration-300 border-2 resize-none min-h-48 rounded-xl border-border hover:border-primary/50 focus:border-primary focus:ring-4 focus:ring-primary/10 bg-background/80 backdrop-blur-sm"
                                    value={formData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                />
                            </div>

                            {/* Character Count and Progress */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${isGoodLength ? 'bg-green-500' : descriptionLength > 50 ? 'bg-yellow-500' : 'bg-red-500'
                                            }`} />
                                        <span className="text-sm font-medium text-foreground">
                                            {isGoodLength ? 'Excellent length!' : descriptionLength > 50 ? 'Good start, add more details' : 'Add more description'}
                                        </span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {descriptionLength}/1000 characters
                                    </span>
                                </div>
                                <div className="w-full h-2 overflow-hidden rounded-full bg-muted">
                                    <div
                                        className={`h-full transition-all duration-300 rounded-full ${isGoodLength ? 'bg-green-500' : 'bg-primary'
                                            }`}
                                        style={{ width: `${characterProgress}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Images Section */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10">
                                    <Camera className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <Label className="text-xl font-semibold text-foreground">Property Images</Label>
                                    <p className="text-sm text-muted-foreground">High-quality photos attract more interest</p>
                                </div>
                            </div>

                            <div className="p-6 space-y-4 border rounded-xl border-primary/10">
                                <div className="flex items-center space-x-2">
                                    <p className="font-semibold text-foreground">Photo Guidelines</p>
                                </div>
                                <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2 text-muted-foreground">
                                    <div className="flex items-start space-x-2">
                                        <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary" />
                                        <span>Upload 5-10 high-resolution photos</span>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary" />
                                        <span>Include exterior and interior shots</span>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary" />
                                        <span>Use natural lighting when possible</span>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary" />
                                        <span>Showcase key features and amenities</span>
                                    </div>
                                </div>
                            </div>

                            <FileUpload
                                setImages={setImages}
                                imageList={imageList}
                            />
                        </div>
                    </div>
                </div>
            </Card>

            {/* Enhanced Action Buttons */}
            {showActions && (
                <Card className="bg-transparent border-0 shadow-none">
                    <div className="p-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                {/* Preview Button */}
                                {onPreview && (
                                    <Button
                                        onClick={onPreview}
                                        variant="secondary"
                                        className="relative h-16 text-lg font-semibold transition-all duration-300 rounded-xl hover:scale-105 active:scale-95 group"
                                    >
                                        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-r from-secondary/10 to-primary/10 group-hover:opacity-100" />
                                        <div className="relative flex items-center space-x-3">
                                            <Eye className="w-5 h-5" />
                                            <span>Preview</span>
                                        </div>
                                    </Button>
                                )}

                                {/* Save Draft Button */}
                                <Button
                                    onClick={onSave}
                                    disabled={loading}
                                    variant="outline"
                                    className="relative h-16 text-lg font-semibold transition-all duration-300 border-2 rounded-xl border-border hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95 group"
                                >
                                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:opacity-100" />
                                    <div className="relative flex items-center space-x-3">
                                        {loading ? (
                                            <Loader className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <Save className="w-5 h-5" />
                                        )}
                                        <span>Save Draft</span>
                                    </div>
                                </Button>

                                {/* Publish Button */}
                                {onPublish && (
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button
                                                disabled={loading}
                                                className="relative h-16 text-lg font-semibold transition-all duration-300 shadow-lg rounded-xl hover:scale-105 active:scale-95 hover:shadow-xl group"
                                            >
                                                <div className="relative flex items-center space-x-3">
                                                    {loading ? (
                                                        <Loader className="w-5 h-5 animate-spin" />
                                                    ) : (
                                                        <CheckCircle className="w-5 h-5" />
                                                    )}
                                                    <span>Publish Listing</span>
                                                </div>
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent className="border-2 border-primary/10 bg-background/95 backdrop-blur-sm">
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className="flex items-center text-xl">
                                                    <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                                                    Publish Your Listing
                                                </AlertDialogTitle>
                                                <AlertDialogDescription className="text-base leading-relaxed">
                                                    Your property will be visible to all users and potential {formData.type === 'Rent' ? 'tenants' : 'buyers'}
                                                    can contact you directly once published.
                                                    <br /><br />
                                                    <strong>Please ensure all information is accurate before publishing.</strong>
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="rounded-xl">
                                                    Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={onPublish}
                                                    className="rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                                                >
                                                    {loading ? (
                                                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                                                    ) : (
                                                        'Publish Now'
                                                    )}
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                )}
                            </div>
                        </div>
                    </div>
                </Card>
            )}
        </div>
    )
}

export default DescriptionImagesForm