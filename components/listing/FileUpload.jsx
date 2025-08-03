import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Upload, X, Camera, Plus } from 'lucide-react'

function FileUpload({ setImages, imageList }) {
    const [imagePreview, setImagePreview] = useState([])
    const [dragActive, setDragActive] = useState(false)

    const handleFileUpload = (event) => {
        const files = event.target.files
        if (files) {
            setImages(Array.from(files))
            const previews = Array.from(files).map((file) => URL.createObjectURL(file))
            setImagePreview(previews)
        }
    }

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const files = Array.from(e.dataTransfer.files)
            setImages(files)
            const previews = files.map((file) => URL.createObjectURL(file))
            setImagePreview(previews)
        }
    }

    const removePreviewImage = (indexToRemove) => {
        setImagePreview(prev => prev.filter((_, index) => index !== indexToRemove))
        // Note: You might want to also update the actual files array here
    }

    return (
        <div className="space-y-6">
            {/* Upload Area */}
            <Card
                className={`relative border-2 border-dashed transition-all duration-200 ${dragActive
                    ? 'border-primary bg-primary/5'
                    : 'border-muted-foreground/25 hover:border-primary/50'
                    }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <div className="p-8 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                        <Upload className={`w-8 h-8 transition-colors ${dragActive ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>

                    <h3 className="mb-2 text-lg font-semibold">
                        {dragActive ? 'Drop images here' : 'Upload Property Photos'}
                    </h3>

                    <p className="mb-6 text-muted-foreground">
                        Drag and drop your images here, or click to browse
                    </p>

                    <div className="mb-6 space-y-2 text-sm text-muted-foreground">
                        <p>• Supported formats: JPG, PNG, GIF</p>
                        <p>• Maximum file size: 5MB per image</p>
                        <p>• Recommended: Add 5-10 high-quality photos</p>
                    </div>

                    <input
                        id="file-upload"
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileUpload}
                        accept="image/png, image/jpeg, image/jpg, image/gif"
                    />

                    <label htmlFor="file-upload">
                        <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto"
                            asChild
                        >
                            <span className="cursor-pointer">
                                <Camera className="w-4 h-4 mr-2" />
                                Choose Images
                            </span>
                        </Button>
                    </label>
                </div>
            </Card>

            {/* Existing Images */}
            {imageList && imageList.length > 0 && (
                <div>
                    <h4 className="flex items-center mb-4 text-lg font-semibold">
                        <Camera className="w-5 h-5 mr-2" />
                        Current Images ({imageList.length})
                    </h4>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                        {imageList.map((image, index) => (
                            <Card key={index} className="relative overflow-hidden group">
                                <div className="relative aspect-square">
                                    <Image
                                        src={image?.url}
                                        width={150}
                                        height={150}
                                        alt={`Property image ${index + 1}`}
                                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/20 group-hover:opacity-100">
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="sm"
                                            className="w-8 h-8 p-0"
                                            onClick={() => {
                                                // Handle removing existing image
                                                console.log('Remove existing image:', index)
                                            }}
                                        >
                                            <X className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* New Image Previews */}
            {imagePreview.length > 0 && (
                <div>
                    <h4 className="flex items-center mb-4 text-lg font-semibold">
                        <Plus className="w-5 h-5 mr-2" />
                        New Images ({imagePreview.length})
                    </h4>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                        {imagePreview.map((image, index) => (
                            <Card key={index} className="relative overflow-hidden group">
                                <div className="relative aspect-square">
                                    <Image
                                        src={image}
                                        width={150}
                                        height={150}
                                        alt={`Preview ${index + 1}`}
                                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/20 group-hover:opacity-100">
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="sm"
                                            className="w-8 h-8 p-0"
                                            onClick={() => removePreviewImage(index)}
                                        >
                                            <X className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    {/* New image indicator */}
                                    <div className="absolute px-2 py-1 text-xs text-white bg-green-500 rounded-full top-2 left-2">
                                        New
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* Upload Tips */}
            {(imageList?.length || 0) + imagePreview.length === 0 && (
                <Card className="p-6 border-blue-200 bg-blue-50">
                    <h4 className="mb-2 font-semibold text-blue-800">📸 Photo Tips</h4>
                    <ul className="space-y-1 text-sm text-blue-700">
                        <li>• Take photos during good lighting (natural daylight is best)</li>
                        <li>• Include exterior, interior, kitchen, bedrooms, and bathrooms</li>
                        <li>• Show unique features like gardens, balconies, or views</li>
                        <li>• Ensure images are clear, well-composed, and represent the property accurately</li>
                    </ul>
                </Card>
            )}
        </div>
    )
}

export default FileUpload