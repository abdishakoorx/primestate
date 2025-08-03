import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Save, Loader, CheckCircle } from 'lucide-react'

const NavigationButtons = ({
    currentStep,
    totalSteps,
    loading,
    canProceed = true,
    onPrevious,
    onNext,
    onSubmit,
    submitLabel = "Create Listing",
    showPreview = false,
    onPreview
}) => {
    const isFirstStep = currentStep === 1
    const isLastStep = currentStep === totalSteps

    return (
        <div className="flex flex-col items-center justify-between gap-4 p-6 mt-8 border sm:flex-row bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl">
            {/* Previous Button */}
            <Button
                type="button"
                variant="outline"
                onClick={onPrevious}
                disabled={isFirstStep || loading}
                className={`px-6 py-3 h-auto transition-all duration-300 ${isFirstStep
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-muted hover:scale-105 hover:shadow-md'
                    }`}
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
            </Button>

            {/* Progress Info */}
            <div className="flex flex-col items-center text-center">
                <div className="mb-1 text-sm font-medium text-muted-foreground">
                    Step {currentStep} of {totalSteps}
                </div>
                <div className="text-xs text-muted-foreground">
                    {isLastStep ? 'Ready to submit' : `${totalSteps - currentStep} steps remaining`}
                </div>
            </div>

            {/* Next/Submit Buttons */}
            <div className="flex gap-3">
                {showPreview && isLastStep && (
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onPreview}
                        disabled={loading}
                        className="h-auto px-6 py-3 transition-all duration-300 hover:bg-accent hover:scale-105"
                    >
                        👁️ Preview
                    </Button>
                )}

                {isLastStep ? (
                    <Button
                        type="button"
                        onClick={onSubmit}
                        disabled={loading || !canProceed}
                        className={`px-6 py-3 h-auto font-semibold transition-all duration-300 ${loading
                                ? 'opacity-70'
                                : 'hover:scale-105 hover:shadow-lg bg-gradient-to-r from-primary to-primary/80'
                            }`}
                    >
                        {loading ? (
                            <>
                                <Loader className="w-4 h-4 mr-2 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <CheckCircle className="w-4 h-4 mr-2" />
                                {submitLabel}
                            </>
                        )}
                    </Button>
                ) : (
                    <Button
                        type="button"
                        onClick={onNext}
                        disabled={!canProceed || loading}
                        className={`px-6 py-3 h-auto font-semibold transition-all duration-300 ${canProceed
                                ? 'hover:scale-105 hover:shadow-lg bg-gradient-to-r from-primary to-primary/80'
                                : 'opacity-50 cursor-not-allowed'
                            }`}
                    >
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default NavigationButtons